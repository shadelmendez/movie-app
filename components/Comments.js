import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/colors";
import useDeviceType from "../hooks/useDeciveType";
import { useGetReviews } from "../api/ConnectToTMDB";
import { useContext, useState } from "react";
import { MoviesContext } from "../context/GetMoviesContext";

export default function Comments() {
  const { isTablet } = useDeviceType();
  const [expanded, setExpanded] = useState(false);

  const { detailsMovie } = useContext(MoviesContext);
  const { data: reviews = [] } = useGetReviews(detailsMovie.id);

  return (
    <View style={[styles.wrapper, { width: "100%" }]}>
      {reviews.length > 0 ? (
        reviews.map((r, index) => (
          <View key={index}>
            <View>
              <Text style={{ color: "#fff", fontFamily: "Poppins_700Bold" }}>
                {r.author}
              </Text>
            </View>
            <View>
              <Text style={{ color: "#fff" }}>
                {expanded ? r.content : r.content.slice(0, 200) + "..."}
              </Text>
              <Pressable onPress={() => setExpanded(!expanded)}>
                <Text style={{ color: Colors.dark.accent }}>
                  {expanded ? "Ver menos" : "Leer más"}
                </Text>
              </Pressable>
            </View>
          </View>
        ))
      ) : (
        <View>
          <Text style={{ color: "#fff" }}>No hay comentarios disponibles</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.dark.highlight,
    borderRadius: 12,
    padding: 14,
  },
});

import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import useDeviceType from "../hooks/useDeciveType";
// import Carousel from "react-native-reanimated-carousel";
import Colors from "../constants/colors";
import MovieCard from "./MovieCard";
import ShowMovies from "./ShowMovies";

export default function NowPlaying() {
  const { height, width } = useDeviceType();

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.text, { fontFamily: "Poppins_700Bold" }]}>
        Reproduciendose ahora
      </Text>
      <ShowMovies />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 40,
  },
  imageWrapper: {
    // flex: 1,
    marginHorizontal: 10,
    elevation: 4,
    backgroundColor: "#000",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: Colors.dark.border,
  },

  text: {
    fontSize: 20,
    color: Colors.dark.accent,
    textTransform: "capitalize",
    marginBottom: 10,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  movieCardWrapper: { paddingHorizontal: 8 },
});

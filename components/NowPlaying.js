import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import useDeviceType from "../hooks/useDeciveType";
// import Carousel from "react-native-reanimated-carousel";
import Colors from "../constants/colors";
import MovieCard from "./MovieCard";

export default function NowPlaying() {
  const { height, width } = useDeviceType();

  const movies = [
    { id: 1, image: require("../assets/home.jpg") },
    { id: 2, image: require("../assets/home.jpg") },
    { id: 3, image: require("../assets/home.jpg") },
    { id: 4, image: require("../assets/home.jpg") },
    { id: 5, image: require("../assets/home.jpg") },
  ];
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.text, { fontFamily: "Poppins_700Bold" }]}>
        Reproduciendose ahora
      </Text>
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={[styles.cardWrapper, { width: width / 3.2 }]}>
            <MovieCard imageUrl={item.image} />
          </View>
        )}
      />
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

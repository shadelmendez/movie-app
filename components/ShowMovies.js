import { StyleSheet, View, FlatList } from "react-native";
import MovieCard from "./MovieCard";
import useDeviceType from "../hooks/useDeciveType";

export default function ShowMovies() {
  const movies = [
    { id: 1, image: require("../assets/home.jpg") },
    { id: 2, image: require("../assets/home.jpg") },
    { id: 3, image: require("../assets/home.jpg") },
    { id: 4, image: require("../assets/home.jpg") },
    { id: 5, image: require("../assets/home.jpg") },
  ];
  const { height, width } = useDeviceType();
  return (
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
  );
}

const styles = StyleSheet.create({
  movieCardWrapper: { paddingHorizontal: 8 },
});

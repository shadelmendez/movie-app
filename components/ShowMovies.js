import { StyleSheet, View, FlatList } from "react-native";
import MovieCard from "./MovieCard";
import useDeviceType from "../hooks/useDeciveType";
import { useGetMovies, useGetSimilarMovies } from "../api/ConnectToTMDB";
import { useContext } from "react";
import { MoviesContext } from "../context/GetMoviesContext";

export default function ShowMovies({ isSimilarView = false }) {
  const { height, width, isTablet } = useDeviceType();
  const { detailsMovie } = useContext(MoviesContext);

  const { data: movies = [] } = useGetMovies();

  const { data: similar = [] } = useGetSimilarMovies(detailsMovie?.id, {
    enabled: !!detailsMovie?.id,
  });

  const sortedMovies = [...movies].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const sortedSimilar = [...similar].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  if (isSimilarView && !detailsMovie?.id) {
    return (
      <View style={styles.messageWrapper}>
        <Text style={styles.message}>
          Selecciona una película para ver títulos similares
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      horizontal
      data={isSimilarView ? sortedSimilar : sortedMovies}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View
          style={[
            styles.cardWrapper,
            { width: isTablet ? width / 3.2 : width / 2 },
          ]}
        >
          <MovieCard moviesData={item} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    paddingHorizontal: 8,
  },
  messageWrapper: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    color: "#fff",
    fontSize: 16,
    fontStyle: "italic",
  },
});

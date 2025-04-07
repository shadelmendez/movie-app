import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Colors from "../constants/colors";
import CustomHeader from "../components/CustomHeader";
import useDeviceType from "../hooks/useDeciveType";
import MovieInfo from "../components/MovieInfo";
import { useContext } from "react";
import { MoviesContext } from "../context/GetMoviesContext";

export default function MovieDetailsScreen() {
  const { isTablet, height, width } = useDeviceType();
  const { detailsMovie } = useContext(MoviesContext);
  return (
    <SafeAreaView style={styles.wrapper}>
      <CustomHeader />
      <ScrollView>
        <ImageBackground
          style={[
            styles.moviePoster,
            { height: isTablet ? height * 0.4 : height * 0.5 },
          ]}
          source={{
            uri: `https://image.tmdb.org/t/p/w780${detailsMovie.backdrop_path}`,
          }}
        ></ImageBackground>
        <MovieInfo />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 20,
    backgroundColor: Colors.dark.background,
  },
});

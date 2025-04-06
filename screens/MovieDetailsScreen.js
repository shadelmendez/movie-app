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

export default function MovieDetailsScreen() {
  const { isTablet, height, width } = useDeviceType();
  return (
    <SafeAreaView style={styles.wrapper}>
      {/* <CustomHeader /> */}
      <CustomHeader />
      <ScrollView>
        <ImageBackground
          style={[
            styles.moviePoster,
            { height: isTablet ? height * 0.4 : height * 0.5 },
          ]}
          source={require("../assets/home.jpg")}
        >
          <Text>details</Text>
        </ImageBackground>
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
  moviePoster: {},
});

import { useContext } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import useDeviceType from "../hooks/useDeciveType";
import Colors from "../constants/colors";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { MoviesContext } from "../context/GetMoviesContext";

export default function MovieCard({ moviesData }) {
  const { width, height, isTablet } = useDeviceType();
  const navigation = useNavigation();
  const { setdetailsMovie } = useContext(MoviesContext);

  const handleSelectedMovie = () => {
    setdetailsMovie(moviesData);
    navigation.navigate("Details");
  };
  return (
    <View
      style={[
        styles.wrapper,
        { width: isTablet ? width * 0.3 : width * 0.43, height: height * 0.35 },
      ]}
    >
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w780${moviesData.backdrop_path}`,
        }}
        style={styles.image}
      >
        <View style={styles.ratings}>
          <AntDesign
            name="star"
            size={isTablet ? 20 : 12}
            color={Colors.dark.accent}
          />
          <Text
            style={{
              color: Colors.dark.accent,
              fontFamily: "Poppins_700Bold",
              fontSize: 10,
            }}
          >
            {moviesData.vote_average.toFixed(1)}
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.details}>
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            fontSize: isTablet ? 18 : 16,
          }}
        >
          {moviesData.title}
        </Text>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Entypo name="calendar" size={12} color={Colors.dark.highlight} />
          <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 10 }}>
            {moviesData.release_date}
          </Text>
        </View>
      </View>
      <View style={styles.buttonsDetails}>
        <Pressable
          style={[
            styles.button,
            {
              width: isTablet ? width * 0.12 : width * 0.15,
              height: isTablet ? height * 0.03 : height * 0.04,
              backgroundColor: Colors.dark.highlight,
            },
          ]}
          onPress={handleSelectedMovie}
        >
          <Text
            style={{
              fontSize: 10,
              fontFamily: "Poppins_700Bold",
              color: "#fff",
            }}
          >
            Ver Más
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            {
              width: isTablet ? width * 0.12 : width * 0.17,
              height: isTablet ? height * 0.03 : height * 0.04,
              backgroundColor: "#F8F8FF",
            },
          ]}
          onPress={handleSelectedMovie}
        >
          <AntDesign
            name="staro"
            size={isTablet ? 18 : 14}
            color={Colors.dark.highlight}
          />
          <Text
            style={{
              fontSize: 10,
              fontFamily: "Poppins_700Bold",
            }}
          >
            Calificar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  ratings: {
    backgroundColor: Colors.dark.border,
    padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  details: {
    alignItems: "center",
    flex: 0.8,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: "100%",
  },
  buttonsDetails: {
    flexDirection: "row",
    paddingBottom: 20,
    gap: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    gap: 4,
  },
});

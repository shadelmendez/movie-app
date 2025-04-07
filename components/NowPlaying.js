import { View, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";
import ShowMovies from "./ShowMovies";

export default function NowPlaying() {
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.text, { fontFamily: "Poppins_700Bold" }]}>
        Reproduciéndose ahora
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

  text: {
    fontSize: 20,
    color: Colors.dark.accent,
    textTransform: "capitalize",
    marginBottom: 10,
  },
});

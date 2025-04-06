import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import useDeviceType from "../hooks/useDeciveType";
export default function Comments() {
  const { isTablet } = useDeviceType();
  const numCols = isTablet ? 2 : 2;
  const commentWidth = `${100 / numCols - 1}%`;

  return (
    <View style={[styles.wrapper, { width: commentWidth }]}>
      <View>
        <Text style={{ color: "#fff", fontFamily: "Poppins_700Bold" }}>
          Rocio Perez
        </Text>
      </View>
      <View>
        <Text style={{ color: "#fff" }}>
          TMDB offers a powerful API service that is free for personal use.
          Please ensure you attribute TMDB for any images or data you use.
        </Text>
      </View>
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

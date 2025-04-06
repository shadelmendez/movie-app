import { View, StyleSheet, Image, Text } from "react-native";
import useDeviceType from "../hooks/useDeciveType";
import Colors from "../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CustomHeader() {
  const { height, width } = useDeviceType();
  const avatarUrl = "https://api.dicebear.com/7.x/bottts/png?seed=shadel";
  return (
    <View
      style={[
        styles.wrapper,
        { height: height * 0.07, marginBottom: height * 0.02 },
      ]}
    >
      <View style={[styles.user, { width: width * 0.3 }]}>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        <View>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              color: Colors.dark.text,
              fontSize: 8,
            }}
          >
            Hola de nuevo
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",

              color: Colors.dark.accent,
            }}
          >
            Shadel Mendez
          </Text>
        </View>
      </View>
      <Ionicons
        name="notifications-sharp"
        size={24}
        color={Colors.dark.accent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.dark.background,
    width: "100%",
    color: Colors.dark.text,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  user: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 16,
  },
});

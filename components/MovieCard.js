import React from "react";
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

export default function MovieCard({ imageUrl }) {
  const { width, height, isTablet } = useDeviceType();
  const navigation = useNavigation();
  return (
    <View
      style={[styles.wrapper, { width: width * 0.3, height: height * 0.35 }]}
    >
      <ImageBackground
        source={imageUrl}
        style={styles.image}
        resizeMode="stretch"
      >
        <View style={styles.ratings}>
          <AntDesign name="star" size={20} color={Colors.dark.accent} />
          <Text
            style={{
              color: Colors.dark.accent,
              fontFamily: "Poppins_700Bold",
              fontSize: 10,
            }}
          >
            8.0
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.details}>
        <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 18 }}>
          Coco
        </Text>
        <Text style={{ fontSize: 12 }}>Porducida por: Disney</Text>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Entypo name="calendar" size={12} color={Colors.dark.highlight} />
          <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 10 }}>
            4/5/2025
          </Text>
        </View>
      </View>
      <View style={styles.buttonsDetails}>
        <Pressable
          style={[
            styles.button,
            {
              width: isTablet ? width * 0.12 : width * 0.05,
              height: isTablet ? height * 0.03 : height * 0.05,
              backgroundColor: Colors.dark.highlight,
            },
          ]}
          onPress={() => navigation.navigate("Details")}
        >
          <Text
            style={{
              fontSize: isTablet ? 10 : 8,
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
              width: isTablet ? width * 0.12 : width * 0.05,
              height: isTablet ? height * 0.03 : height * 0.05,
              backgroundColor: "#F8F8FF",
            },
          ]}
          onPress={() => navigation.navigate("Details")}
        >
          <AntDesign name="staro" size={18} color={Colors.dark.highlight} />
          <Text
            style={{
              fontSize: isTablet ? 10 : 8,
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

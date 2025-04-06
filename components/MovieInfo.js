import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import useDeviceType from "../hooks/useDeciveType";
import { Rating } from "react-native-ratings";
import ShowMovies from "./ShowMovies";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "../constants/colors";
import Comments from "./Comments";

export default function MovieInfo() {
  const { isTablet, width, height } = useDeviceType();
  return (
    <View style={[styles.wrapper, { padding: isTablet ? 22 : 18 }]}>
      <View>
        <Text
          style={{
            fontSize: isTablet ? 32 : 28,
            color: "#fff",
            textTransform: "uppercase",
            fontFamily: "Poppins_700Bold",
          }}
        >
          Coco
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: isTablet ? 14 : 18,
            color: "#fff",
          }}
        >
          Cine, Drama, Thriller
        </Text>
        <Entypo name="dot-single" size={24} color="#fff" />
        <Text
          style={{
            fontSize: isTablet ? 14 : 18,
            color: "#fff",
          }}
        >
          2025
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 14,
          marginTop: 4,
        }}
      >
        <View style={styles.badge}>
          <Text style={{ color: "#fff", fontSize: 12 }}>Genero</Text>
        </View>
        <View style={styles.badge}>
          <AntDesign name="star" size={20} color={Colors.dark.accent} />
          <Text style={{ color: "#fff", fontSize: 12 }}>5.0</Text>
        </View>
      </View>
      {/*actors */}
      <Text style={[styles.titles, { marginVertical: 20 }]}>Reparto</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          flex: 1,
          width: "100%",
          marginVertical: 14,
        }}
      >
        <View>
          <Image
            source={require("../assets/actor.jpg")}
            style={[
              styles.actorsImg,
              {
                width: isTablet ? width * 0.2 : 0.1,
                height: isTablet ? height * 0.1 : height * 0.05,
              },
            ]}
          />
          <Text
            style={{
              textTransform: "capitalize",
              color: Colors.dark.accent,
            }}
          >
            Kim taehyung,
          </Text>
          <Text style={{ textTransform: "capitalize", color: "#fff" }}>
            King
          </Text>
        </View>

        <View>
          <Image
            source={require("../assets/actor.jpg")}
            style={[
              styles.actorsImg,
              {
                width: isTablet ? width * 0.2 : 0.1,
                height: isTablet ? height * 0.1 : height * 0.05,
              },
            ]}
          />
          <Text
            style={{
              textTransform: "capitalize",
              color: Colors.dark.accent,
            }}
          >
            Kim taehyung,
          </Text>
          <Text style={{ textTransform: "capitalize", color: "#fff" }}>
            King
          </Text>
        </View>
        <View>
          <Image
            source={require("../assets/actor.jpg")}
            style={[
              styles.actorsImg,
              {
                width: isTablet ? width * 0.2 : 0.1,
                height: isTablet ? height * 0.1 : height * 0.05,
              },
            ]}
          />
          <Text
            style={{
              textTransform: "capitalize",
              color: Colors.dark.accent,
            }}
          >
            Kim taehyung,
          </Text>
          <Text style={{ textTransform: "capitalize", color: "#fff" }}>
            King
          </Text>
        </View>
        <View>
          <Image
            source={require("../assets/actor.jpg")}
            style={[
              styles.actorsImg,
              {
                width: isTablet ? width * 0.2 : 0.1,
                height: isTablet ? height * 0.1 : height * 0.05,
              },
            ]}
          />
          <Text
            style={{ textTransform: "capitalize", color: Colors.dark.accent }}
          >
            Kim taehyung,
          </Text>
          <Text style={{ textTransform: "capitalize", color: "#fff" }}>
            King
          </Text>
        </View>
      </View>
      {/*descripcion */}
      <View style={{ marginVertical: 20 }}>
        <Text style={{ color: "#fff" }}>
          A React component for displaying different types of images, including
          network images, static resources, temporary local images, and images
          from local disk, such as the camera roll.
        </Text>
      </View>
      {/*rating */}
      <View
        style={{
          // backgroundColor: "red",
          width: "100%",
          marginVertical: 20,
        }}
      >
        <Text style={styles.titles}>Califique la película</Text>
        <View style={{ alignSelf: "flex-start", marginVertical: 20 }}>
          <View style={styles.commentsGrid}>
            <Comments />
            <Comments />
            <Comments />
            <Comments />
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          width: "100%",
          marginVertical: 22,
        }}
      >
        <Rating
          count={5}
          reviews={false}
          size={24}
          tintColor={Colors.dark.background}
          //   onFinishRating={(value) => console.log("Rating is: " + value)}
        />
        <Pressable
          style={[
            styles.button,
            {
              width: isTablet ? width * 0.3 : width * 0.05,
              height: isTablet ? height * 0.05 : height * 0.05,
            },
          ]}
        >
          <Text style={{ color: "#fff", fontSize: isTablet ? 18 : 12 }}>
            Calificar
          </Text>
        </Pressable>
      </View>
      {/*peliculas similares */}
      <View style={{ marginVertical: 20 }}>
        <Text style={styles.titles}>Titulos Similares</Text>
        <ShowMovies />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
  },
  actorsImg: {
    borderRadius: 8,
    marginVertical: 12,
  },
  badge: {
    backgroundColor: "hsla(0, 0.80%, 52.50%, 0.51)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexDirection: "row",
    gap: 4,
    borderRadius: 12,
  },
  titles: { alignSelf: "flex-start", fontSize: 18, color: "#fff" },

  commentsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
    columnGap: 10,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: Colors.dark.highlight,
    marginVertical: 12,
  },
});

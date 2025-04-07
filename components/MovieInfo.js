import { View, Text, Image, StyleSheet, Pressable, Alert } from "react-native";
import useDeviceType from "../hooks/useDeciveType";
import { Rating } from "react-native-ratings";
import ShowMovies from "./ShowMovies";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "../constants/colors";
import Comments from "./Comments";
import { useContext } from "react";
import { MoviesContext } from "../context/GetMoviesContext";
import GENRES from "../constants/genres";
import { useGetCast, usePostRating } from "../api/ConnectToTMDB";

export default function MovieInfo() {
  const { isTablet, width, height } = useDeviceType();
  const { detailsMovie, setRating, rating } = useContext(MoviesContext);
  const { data: cast = [] } = useGetCast(detailsMovie.id);
  const starValue = (detailsMovie.vote_average / 10) * 5;
  const { mutate: postRating } = usePostRating();

  const handleRating = (value) => {
    if (!value)
      Alert.alert("Error", "Por favor coloque una calificación válida.", [
        { text: "OK", style: "destructive" },
      ]);
    postRating({ movie_id: detailsMovie.id, value: value });
  };
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
          {detailsMovie.title}
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
          {detailsMovie.genre_ids.map((id) => GENRES[id]).join(", ")}
        </Text>
        <Entypo name="dot-single" size={24} color="#fff" />
        <Text
          style={{
            fontSize: isTablet ? 14 : 18,
            color: "#fff",
          }}
        >
          {new Date(detailsMovie.release_date).getFullYear()}{" "}
          {/*debe haber una mejor forma para manejar la fecha peroe sto servira atm */}
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
          <Text style={{ color: "#fff", fontSize: 12 }}>
            {detailsMovie.genre_ids.map((id) => GENRES[id])[0]}
          </Text>
        </View>
        <View style={styles.badge}>
          <AntDesign name="star" size={20} color={Colors.dark.accent} />
          <Text style={{ color: "#fff", fontSize: 12 }}>
            {detailsMovie.vote_average.toFixed(1)}
          </Text>
        </View>
      </View>
      {/*actors */}
      <Text style={[styles.titles, { marginVertical: 20 }]}>Reparto</Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "100%",
          marginVertical: 14,
        }}
      >
        {cast?.slice(0, 4).map((c, index) => (
          <View
            key={index}
            style={{
              width: isTablet ? "22%" : "48%",
              marginBottom: 16,
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w780${c.profile_path}`,
              }}
              style={[
                styles.actorsImg,
                {
                  width: isTablet ? width * 0.2 : width * 0.4,
                  height: isTablet ? height * 0.1 : height * 0.2,
                },
              ]}
            />
            <Text
              style={{
                textTransform: "capitalize",
                color: Colors.dark.accent,
                textAlign: "center",
              }}
            >
              {c.name}
            </Text>
            <Text
              style={{
                textTransform: "capitalize",
                color: "#fff",
                textAlign: "center",
              }}
            >
              {c.character}
            </Text>
          </View>
        ))}
      </View>

      {/*description */}
      <View style={{ marginVertical: 20 }}>
        <Text style={{ color: "#fff" }}>{detailsMovie.overview}</Text>
      </View>
      {/*rating */}
      <View
        style={{
          width: "100%",
          marginVertical: 20,
        }}
      >
        {/*TODO: Seria bueno agregar la opcion de dejar un comentario */}
        <Text style={styles.titles}>Califique la película</Text>
        <View style={{ alignSelf: "flex-start", marginVertical: 20 }}>
          <View style={styles.commentsGrid}>
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
          startingValue={starValue}
          onFinishRating={(value) => setRating(value)}
        />
        <Pressable
          style={[
            styles.button,
            {
              width: isTablet ? width * 0.3 : width * 0.5,
              height: isTablet ? height * 0.05 : height * 0.05,
            },
          ]}
          onPress={() => handleRating(rating)}
        >
          <Text style={{ color: "#fff", fontSize: isTablet ? 18 : 16 }}>
            Calificar
          </Text>
        </Pressable>
      </View>
      {/*peliculas similares */}
      <View style={{ marginVertical: 20 }}>
        <Text style={[styles.titles, { marginVertical: 20 }]}>
          Titulos Similares
        </Text>
        <ShowMovies isSimilarView={true} />
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
    marginVertical: 10,
    gap: 4,
    borderRadius: 12,
  },
  titles: { alignSelf: "flex-start", fontSize: 18, color: "#fff" },

  commentsGrid: {
    flexDirection: "row",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: Colors.dark.highlight,
    marginVertical: 12,
  },
});

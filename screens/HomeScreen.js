import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import useDeviceType from "../hooks/useDeciveType";
import CustomHeader from "../components/CustomHeader";
import Carousel from "react-native-reanimated-carousel";
import Colors from "../constants/colors";
import NowPlaying from "../components/NowPlaying";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

import { useGetMovies } from "../api/ConnectToTMDB";

export default function HomeScreen() {
  const { isTablet, width, height } = useDeviceType();
  const { data: movies = [] } = useGetMovies();

  return (
    <SafeAreaView style={styles.wrapper}>
      <CustomHeader />
      <ScrollView
        contentContainerStyle={[styles.scroll, { padding: isTablet ? 30 : 10 }]}
      >
        <View style={[styles.hero, { height: height * 0.35 }]}>
          <Carousel
            width={width * 0.95}
            height={height * 0.35}
            data={movies}
            loop
            autoPlay={true}
            autoPlayInterval={5000}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => {
              const imageUrl = item?.backdrop_path
                ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}`
                : null;

              return (
                <View style={styles.imageWrapper}>
                  {imageUrl ? (
                    <ImageBackground
                      source={{ uri: imageUrl }}
                      style={styles.image}
                      resizeMode="cover"
                    >
                      <BlurView
                        intensity={50}
                        tint="dark"
                        style={styles.blurContainer}
                      >
                        <Text style={styles.title}>{item.title}</Text>
                      </BlurView>
                    </ImageBackground>
                  ) : (
                    <Text style={{ color: "#fff" }}>No image</Text>
                  )}
                </View>
              );
            }}
          />
        </View>
        <View>
          <NowPlaying />
        </View>
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

  scroll: {
    flexGrow: 1,
    width: "100%",
  },

  hero: {
    width: "100%",
    paddingTop: 2,
  },

  text: {
    color: "#fff",
    fontSize: 18,
  },

  imageWrapper: {
    flex: 1,
    marginHorizontal: 10,
    elevation: 4,
    backgroundColor: "#000",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: Colors.dark.border,
  },

  image: {
    width: "100%",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },

  blurContainer: {
    width: "100%",
    padding: 12,
    alignItems: "center",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },
});

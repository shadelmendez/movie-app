import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import useDeviceType from "../hooks/useDeciveType";
import CustomHeader from "../components/CustomHeader";
import Carousel from "react-native-reanimated-carousel";
import Colors from "../constants/colors";
import NowPlaying from "../components/NowPlaying";
const images = [
  require("../assets/home.jpg"),
  require("../assets/home.jpg"),
  require("../assets/home.jpg"),
  require("../assets/home.jpg"),
  require("../assets/home.jpg"),
];

export default function HomeScreen() {
  const { isTablet, width, height } = useDeviceType();

  return (
    <SafeAreaView style={styles.wrapper}>
      <CustomHeader />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={[styles.hero, { height: height * 0.35 }]}>
          <Carousel
            width={width * 0.95}
            height={height * 0.35}
            data={images}
            loop
            autoPlay={true}
            autoPlayInterval={5000}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
              <View style={styles.imageWrapper}>
                <Image source={item} style={styles.image} />
              </View>
            )}
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
    padding: 30,
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
    resizeMode: "cover",
  },
});

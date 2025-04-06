import { Text } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./navigation/AppNavigator";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Support for defaultProps will be removed from function components",
]);

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (Text.defaultProps == null) Text.defaultProps = {};
  Text.defaultProps.style = { fontFamily: "Poppins_400Regular" };

  if (!fontsLoaded) return null;
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

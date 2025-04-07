import { Text } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./navigation/AppNavigator";
import { LogBox } from "react-native";
import { QueryClientProvider, QueryClient } from "react-query";
import { MoviesProvider } from "./context/GetMoviesContext";

// Para la libreria de ratings sale un warning por defaultProps, no impide que la app funcione pero es molesto de ver.
LogBox.ignoreLogs([
  "Support for defaultProps will be removed from function components",
]);

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const client = new QueryClient();

  if (!fontsLoaded) return null;

  if (Text.defaultProps == null) Text.defaultProps = {};
  Text.defaultProps.style = { fontFamily: "Poppins_400Regular" };

  return (
    <QueryClientProvider client={client}>
      <MoviesProvider>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </MoviesProvider>
    </QueryClientProvider>
  );
}

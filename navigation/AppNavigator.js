import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";

// crear el objeto para la navegacion
const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*aca se llaman las screens */}

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={MovieDetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

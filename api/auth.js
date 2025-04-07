import AsyncStorage from "@react-native-async-storage/async-storage";

const TMDB_TOKEN_KEY = "tmdbToken";

export async function getTmdbToken() {
  try {
    return await AsyncStorage.getItem(TMDB_TOKEN_KEY);
  } catch (error) {
    console.error("Error al obtener el token:", error);
    return null;
  }
}

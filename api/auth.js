import * as SecureStore from "expo-secure-store";

const TMDB_TOKEN_KEY = "tmdbToken";

export async function getTmdbToken() {
  return await SecureStore.getItemAsync(TMDB_TOKEN_KEY);
}

export async function deleteTmdbToken() {
  await SecureStore.deleteItemAsync(TMDB_TOKEN_KEY);
}

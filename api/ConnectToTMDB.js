import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { getTmdbToken } from "../api/auth";
import { Alert } from "react-native";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

api.interceptors.request.use(async (config) => {
  const token = await getTmdbToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const getMovies = async () => {
  const response = await api.get(
    "/movie/now_playing?language=es-ES&page=1&append_to_response=credits"
  );
  return response.data.results;
};

export const useGetMovies = () => {
  return useQuery("movies", {
    queryFn: getMovies,
    onError: (error) => {
      console.error("Error consultando peliculas ", error);
    },
  });
};

const getGenres = async () => {
  const response = await api.get("/genre/movie/list?language=es");
  return response.data;
};

export const useGetGenres = () => {
  return useQuery("genres", {
    queryFn: getGenres,
    onError: (error) => {
      console.error("Error consultando generos ", error);
    },
  });
};

const getCast = async ({ queryKey }) => {
  const [_key, movie_id] = queryKey;
  const response = await api.get(`/movie/${movie_id}/credits?language=es-ES`);
  return response.data.cast;
};

export const useGetCast = (movie_id) => {
  return useQuery(["cast", movie_id], getCast, {
    enabled: !!movie_id,
    onError: (error) => {
      console.error("Error consultando cast ", error);
    },
  });
};

const getReviews = async ({ queryKey }) => {
  const [_key, movie_id] = queryKey;
  const response = await api.get(
    `/movie/${movie_id}/reviews?language=es-ES&page=1`
  );
  return response.data.results;
};

export const useGetReviews = (movie_id) => {
  return useQuery(["reviews", movie_id], getReviews, {
    enabled: !!movie_id,
    onError: (error) => {
      console.error("Error consultando cast ", error);
    },
  });
};

export const postRating = async ({ movie_id, value }) => {
  const response = await api.post(`/movie/${movie_id}/rating`, { value });
  return response.data;
};

export const usePostRating = () => {
  return useMutation({
    mutationFn: postRating,
    onSuccess: (data) => {
      if (data.success) {
        Alert.alert(
          "¡Gracias por tu calificación!",
          "Tu opinión ha sido registrada correctamente.",
          [{ text: "OK", style: "default" }]
        );
      }
    },
    onError: (error) => {
      console.error("Error enviando rating ", error);
    },
  });
};

const getSimilarMovies = async ({ queryKey }) => {
  const [_key, movie_id] = queryKey;
  const response = await api.get(
    `/movie/${movie_id}/similar?language=es-ES&page=1`
  );
  return response.data.results;
};

export const useGetSimilarMovies = (movie_id) => {
  return useQuery(["similar", movie_id], getSimilarMovies, {
    enabled: !!movie_id,
    onError: (error) => {
      console.error("Error consultando peliculas similares ", error);
    },
  });
};

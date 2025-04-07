import React from "react";
import { createContext, useState } from "react";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [detailsMovie, setdetailsMovie] = useState(null);
  const [rating, setRating] = useState(0.0);

  return (
    <MoviesContext.Provider
      value={{ detailsMovie, setdetailsMovie, rating, setRating }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

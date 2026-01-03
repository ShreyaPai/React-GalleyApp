/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from "react";

const initialState = {
  theme: "light",
  view: "list",
  selectedContent: null,
  setIsFav: []
};

export const GalleryContext = createContext(initialState);

function galleryReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "CHANGE_VIEW":
        return {...state, view: state.view === "list" ? "grid": "list"};
    case "OPEN_MODAL": 
        return {...state, selectedContent: action.payload};
    case "CLOSE_MODAL":
        return {...state, selectedContent: null};
    case "ADD_TO_FAV":
        return {...state, setIsFav: [...state.setIsFav, ...action.payload]}
    case "REMOVE_FAV":
      return {...state, setIsFav: state.setIsFav.filter((fav) => fav !== action.payload)}
    default:
      return state;
  }
}

export default function GalleryContextProvider({ children }) {
  const [state, dispatch] = useReducer(galleryReducer, initialState);

  const ctxValue = {
    state,
    dispatch,
  };

  const themeClass = state.theme === "dark" ? "dark" : "";

  return (
    <GalleryContext.Provider value={ctxValue}>
      <div
        className={`${themeClass} min-h-screen bg-white dark:bg-black transition-colors duration-300`}
      >
        {children}
      </div>
    </GalleryContext.Provider>
  );
}

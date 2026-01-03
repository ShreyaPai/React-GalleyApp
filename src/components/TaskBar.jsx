import { useContext } from "react";
import { GalleryContext } from "../utils/GalleryReducer";

export default function TaskBar() {
  const { state, dispatch } = useContext(GalleryContext);
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b bg-zinc-100 dark:bg-zinc-300 border-gray-200 dark:border-zinc-800 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <h4 className="text-xl font-bold text-heading">React Gallery</h4>

        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={() => dispatch({ type: "TOGGLE_THEME" })}
            checked={state.theme === "dark"}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Dark mode
          </span>
        </label>
      </div>
    </nav>
  );
}

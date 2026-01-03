import { useContext } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { GALLERY_DATA } from "../data";
import listIcon from "../assets/listIcon.svg";
import gridIcon from "../assets/gridIcon.svg";

import { GalleryContext } from "../utils/GalleryReducer";

export default function GalleryList() {
  const { state, dispatch } = useContext(GalleryContext);

  function toggleView() {
    dispatch({ type: "CHANGE_VIEW" });
  }

  let gallerClassName = 'flex flex-col gap-4 max-w-2xl mx-auto'
  if (state.view === 'grid') {
    gallerClassName = 'grid grid-cols-2 md:grid-cols-4 gap-4'
  } else {
    gallerClassName = 'flex flex-col gap-4 max-w-2xl mx-auto'
  }
  return (
    <div className="mt-14 p-4 mx-auto max-w-7xl text-black dark:text-white">
      <section className="flex justify-end mb-6">
        <button
          type="button"
          className="p-2 rounded-lg transition-colors hover:bg-orange-100 dark:hover:bg-zinc-800 border border-gray-200 dark:border-zinc-700"
          onClick={toggleView}
        >
          <img
            src={state.view === "grid" ? listIcon : gridIcon}
            alt="chane view"
            className="w-5 h-5 dark:invert"
          />{" "}
        </button>
      </section>
      <ul className={gallerClassName}>
        {GALLERY_DATA.map((data) => {
          return (
            <li key={data.id}>
              { state.view === "grid" ? <GridView galleryInfo={data} />: <ListView galleryInfo={data} /> }
            </li>
          );
        })}
      </ul>

    </div>
  );
}

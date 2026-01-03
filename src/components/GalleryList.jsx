import { useContext, useState } from "react";
import { GALLERY_DATA } from "../data";
import listIcon from "../assets/listIcon.svg";
import gridIcon from "../assets/gridIcon.svg";

import { GalleryContext } from "../utils/GalleryReducer";
import GalleryCard from "./shared/GalleryCard";
import SearchBar from "./shared/SearchBar";

export default function GalleryList() {
  const { state, dispatch } = useContext(GalleryContext);
  const [searchQuery, setSearchQuery] = useState('')

  function toggleView() {
    dispatch({ type: "CHANGE_VIEW" });
  }

  const triggerSearch = (val) => {
    setSearchQuery(val)
  }

  let gallerClassName = "flex flex-col gap-4 max-w-2xl mx-auto";
  if (state.view === "grid") {
    gallerClassName = "grid grid-cols-2 md:grid-cols-4 gap-4";
  } else {
    gallerClassName = "flex flex-col gap-4 max-w-2xl mx-auto";
  }
  return (
    <div className="mt-14 p-4 mx-auto max-w-7xl text-black dark:text-white">
      <section className="flex flex-row gap-2 justify-end mb-6">
        <SearchBar triggerSearch={triggerSearch} searchString={searchQuery} />

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
          return <li key={data.id}>{<GalleryCard galleryInfo={data} />}</li>;
        })}
      </ul>
    </div>
  );
}

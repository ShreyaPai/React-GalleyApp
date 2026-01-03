import React, {useContext} from 'react'
import { GalleryContext } from "../utils/GalleryReducer";
import heartEmptyIcon from "../assets/heartEmptyIcon.svg"
import heartFilledIcon from "../assets/heartFilledIcon.svg"


export default function ListView({galleryInfo}) {
   const {state, dispatch} = useContext(GalleryContext)
    const openModal =  () => { 
      dispatch({type: "OPEN_MODAL", payload: galleryInfo})
    }

    const addOrRemoveImageToFav = (id) => {
    const checkIfIfExists = state.setIsFav.includes(id)
      dispatch({ type: !checkIfIfExists ? "ADD_TO_FAV": "REMOVE_FAV", payload: id})
    }

    const favIcon = state.setIsFav.includes(galleryInfo.id) ? heartFilledIcon: heartEmptyIcon
    
  return (
    <div className="p-8" >
      <figure className="max-w-lg">
        <img
          className="h-auto max-w-full rounded-base"
          src={galleryInfo.image}
          alt="image description"
          onClick={openModal}
        />
        <figcaption className="mt-2 text-sm text-center text-body">
          {galleryInfo.name}
          <button  onClick={() => addOrRemoveImageToFav(galleryInfo.id)}><img src={favIcon} alt="fav" className="w-5 h-5 dark:invert" /></button>
        </figcaption>
      </figure>
    </div>
  )
}

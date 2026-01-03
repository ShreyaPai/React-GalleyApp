import React, { useContext } from "react";
import crossIcon from "../../assets/crossIcon.svg"
import { GalleryContext } from "../../utils/GalleryReducer";

export default function Modal() {
    const {state, dispatch} = useContext(GalleryContext);

    const closeModal = () => {
        dispatch({type: "CLOSE_MODAL"})
    }

    if (state.selectedContent === null) { return null }
  return (
    <div
      id="shared-modal"
      tabindex="-1"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
    >
      <div class="relative p-4 w-full max-w-xl max-h-full inset-0 bg-gray-50 backdrop-blur-sm">
        <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
          <div class="flex items-center justify-between border-b border-default pb-4 md:pb-5">
            <h3 class="text-lg font-medium text-heading">{state.selectedContent.name}</h3>
            <button
              type="button"
              class="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
              data-modal-hide="shared-modal"
              onClick={closeModal}
            >
              <img src={crossIcon} className="h-5 w-5" alt="close" />
            </button>
          </div>
          <div class="space-y-4 md:space-y-6 py-4 md:py-6">
            <img src={state.selectedContent.image} alt={state.selectedContent.name} className="h-50" />
            <p class="leading-relaxed text-body">
              {state.selectedContent.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

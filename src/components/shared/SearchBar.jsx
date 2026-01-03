import { useState } from "react";

export default function SearchBar({triggerSearch, searchString = ''}) {
    const [serachVal, setSearchVal] = useState(searchString)
    const searchInGallery = (e) => {
        setSearchVal(e.target.value)
        triggerSearch(e.target.value)
    }
  return (
    <div>
      <input
        type="text"
        id="visitors"
        class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
        placeholder="Search..."
        onChange={searchInGallery}
        value={serachVal}
      />
    </div>
  );
}

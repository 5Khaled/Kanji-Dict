import { Link } from "react-router-dom";

import { useRef, useState } from "react";

const Search = () => {
  const searchRef = useRef();

  const [searchParam, setSearchParam] = useState("");

  function searchValid(searchInput) {
    if (searchInput.length <= 0) {
      searchRef.current.focus();
    }
  }

  return (
    <div className="relative flex">
      <input
        ref={searchRef}
        onChange={() => {
          setSearchParam(`/kanji/${searchRef.current.value}`);
        }}
        className="w-[clamp(9rem,-0.6154rem+61.5385vw,24rem)] bg-transparent backdrop-blur-lg text-white placeholder:text-white placeholder:text-opacity-40 caret-white grow py-2 px-4 rounded-none rounded-s-2xl border border-white border-opacity-40 focus:border-opacity-70 outline-none transition-colors"
        type="text"
        placeholder="Search Kanji"
      />
      <Link
        className="group bg-white bg-opacity-25 hover:bg-opacity-30 backdrop-blur-3xl text-white rounded-e-2xl px-5 font-medium flex items-center transition-all"
        onClick={() => {
          searchValid(searchRef.current.value);
        }}
        to={searchParam}
      >
        <div className="group-hover:scale-95 transition-transform max-sm:text-sm">
          Search
        </div>
      </Link>
    </div>
  );
};

export default Search;

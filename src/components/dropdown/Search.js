import React from "react";

const Search = ({ onChange = () => {} }) => {
  return (
    <div className="block p-3 bg-white dropdown-search">
      <input
        type="text"
        name="search"
        placeholder="Search country"
        className="w-full p-2 outline-none"
        onChange={onChange}
      />
    </div>
  );
};

export default Search;

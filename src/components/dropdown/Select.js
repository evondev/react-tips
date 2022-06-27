import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { useDropdown } from "./dropdown-context";

const Select = ({ children }) => {
  const { handleToggleDropdown, showDropdown, label } = useDropdown();

  return (
    <div
      className="flex items-center justify-between p-5 border rounded-lg cursor-pointer border-slate-100"
      onClick={handleToggleDropdown}
    >
      {label}
      {showDropdown ? (
        <Dropdown.IconArrowUp></Dropdown.IconArrowUp>
      ) : (
        <Dropdown.IconArrowDown></Dropdown.IconArrowDown>
      )}
    </div>
  );
};

export default Select;

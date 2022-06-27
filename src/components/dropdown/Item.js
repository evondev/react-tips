import React from "react";
import { useDropdown } from "./dropdown-context";

const Item = ({ children, onClick = () => {} }) => {
  const { setShowDropdown } = useDropdown();
  const handleClickItem = () => {
    onClick && onClick();
    setShowDropdown(false);
  };
  return (
    <span
      className="block p-5 bg-white cursor-pointer hover:bg-slate-50"
      onClick={handleClickItem}
    >
      {children}
    </span>
  );
};

export default Item;

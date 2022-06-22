import React from "react";
import { useDropdown } from "./dropdown-context";

const List = ({ children }) => {
  const { showDropdown } = useDropdown();
  if (!showDropdown) return null;
  return (
    <div className="absolute left-0 right-0 bg-white border rounded-lg dropdown-list top-full border-slate-100">
      {children}
    </div>
  );
};

export default List;

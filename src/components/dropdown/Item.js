import React from "react";

const Item = ({ children }) => {
  return (
    <span className="block p-5 bg-white cursor-pointer hover:bg-slate-50">
      {children}
    </span>
  );
};

export default Item;

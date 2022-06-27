import { useContext } from "react";
import { createContext, useState } from "react";

const DropdownContext = createContext();

function DropdownProvider(props) {
  return <DropdownContext.Provider {...props}></DropdownContext.Provider>;
}
// KentcDodds - Remix
function useDropdown() {
  const context = useContext(DropdownContext);
  if (typeof context === "undefined") {
    throw new Error("useDropdown must be used within DropdownProvider");
  }
  return context;
}
export { useDropdown, DropdownProvider };

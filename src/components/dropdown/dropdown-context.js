import { useContext } from "react";
import { createContext, useState } from "react";

const DropdownContext = createContext();

function DropdownProvider(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const value = { showDropdown, handleToggleDropdown };
  return (
    <DropdownContext.Provider
      value={value}
      {...props}
    ></DropdownContext.Provider>
  );
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

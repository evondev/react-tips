import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { DropdownProvider } from "./dropdown-context";

const Dropdown = ({ children, selectText = "Select country" }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [label, setLabel] = useState(selectText);
  useEffect(() => {
    setLabel(selectText);
  }, [selectText]);
  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleSearchItem = () => {};
  const value = {
    showDropdown,
    handleToggleDropdown,
    setShowDropdown,
    label,
    handleSearchItem,
  };
  const dropdownRef = useRef();
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
        return;
      }
      setShowDropdown(false);
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <DropdownProvider value={value}>
      <div className="w-full max-w-[300px] relative" ref={dropdownRef}>
        {children}
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;

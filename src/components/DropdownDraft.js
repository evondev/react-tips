import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const dropdownData = ["Viet Nam", "Cambodia", "France", "USA", "Thai Lan"];
const Dropdown = (props) => {
  const { haveSearch = true, haveIcon = false } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="w-full max-w-[300px] relative">
      <div
        className="flex items-center justify-between p-5 border rounded-lg cursor-pointer border-slate-100"
        onClick={handleToggleDropdown}
      >
        <span>Select the country</span>
        {haveIcon && (
          <span>
            {showDropdown ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </span>
        )}
      </div>
      {showDropdown && (
        <div className="absolute left-0 right-0 bg-white border rounded-lg dropdown-list top-full border-slate-100">
          {dropdownData.map((item, index) => (
            <span
              key={index}
              className="block p-5 bg-white cursor-pointer hover:bg-slate-50"
            >
              {item}
            </span>
          ))}
          {haveSearch && (
            <div className="block p-3 bg-white dropdown-search">
              <input
                type="text"
                name="search"
                placeholder="Search country"
                className="w-full p-2 outline-none"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
Dropdown.propTypes = {
  haveSearch: PropTypes.bool,
};
export default Dropdown;

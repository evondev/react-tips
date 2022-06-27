import React from "react";
import { useState } from "react";
import { Dropdown } from "./components/dropdown";
// create-react-app npx create-react-app
// Compound component pattern
// Control props
const dropdownData = ["Viet Nam", "Cambodia", "France", "USA", "Thai Lan"];
const App = () => {
  const [countryData, setCountryData] = useState(dropdownData);
  const [country, setCountry] = useState("");
  const handleClickItem = (item) => {
    setCountry(item);
  };
  const handleSearchItem = (e) => {
    const { value } = e.target;
    const newData = dropdownData.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setCountryData(newData);
  };
  return (
    <div>
      <Dropdown
        selectText={`${
          country && country.length > 0 ? country : "Select the country..."
        }`}
      >
        <Dropdown.Select></Dropdown.Select>
        <Dropdown.List>
          {countryData.map((item, index) => (
            <Dropdown.Item key={item} onClick={() => handleClickItem(item)}>
              {item}
            </Dropdown.Item>
          ))}
          <Dropdown.Search onChange={handleSearchItem}></Dropdown.Search>
        </Dropdown.List>
      </Dropdown>
      {country === "Viet Nam" && <div>Viet Nam</div>}
    </div>
  );
};

export default App;

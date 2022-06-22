import React from "react";
import { Dropdown } from "./components/dropdown";
import { useDropdown } from "./components/dropdown/dropdown-context";
// create-react-app npx create-react-app
// Compound component pattern
const dropdownData = ["Viet Nam", "Cambodia", "France", "USA", "Thai Lan"];
const App = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Select>
          <span>Select the country</span>
        </Dropdown.Select>
        <Dropdown.List>
          {dropdownData.map((item, index) => (
            <Dropdown.Item key={item}>{item}</Dropdown.Item>
          ))}
          <Dropdown.Search></Dropdown.Search>
        </Dropdown.List>
      </Dropdown>
    </div>
  );
};

export default App;

import { useState } from "react";
import { Search } from "lucide-react";
import "./SearchBar.css";

const SearchBar = ({ getWeather }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim()) {
      getWeather(value.trim());
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search">
        <button type="submit">
          <Search />
        </button>
        <input
          onChange={handleChange}
          value={value}
          type="text"
          placeholder="Enter location..."
        ></input>
      </form>
    </>
  );
};

export default SearchBar;

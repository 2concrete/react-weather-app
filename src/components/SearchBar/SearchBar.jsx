import feather from "feather-icons";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="search">
        <i data-feather="search" />
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

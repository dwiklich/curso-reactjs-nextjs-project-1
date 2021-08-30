import { FcSearch } from "react-icons/fc";

import "./styles.css";

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <>
      <input
        className="text-input"
        type="search"
        onChange={handleChange}
        name="procura"
        id="pesquisa"
        value={searchValue}
        placeholder="Type your search"
      ></input>
      <div className={searchValue === "" ? "icon-container" : "icon-disable"}>
        <FcSearch />
      </div>
    </>
  );
};

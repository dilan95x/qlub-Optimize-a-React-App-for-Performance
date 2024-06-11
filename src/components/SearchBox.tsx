import { memo, useState } from "react";
import { SearchComponent } from "../types/SearchComponent.types";
import { Stack, Switch } from "@mui/material";

const SearchBox: React.FC<SearchComponent> = ({
  onSearch,
  placeholder = "Type to search and then press enter...",
  isHDOn = false,
  setIsHDOn,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="search-box sticky">
      <input
        className="search-input-field"
        style={{
          color: "#fff",
          width: "60%",
          height: "2.5rem",
          fontSize: "16px",
          backgroundColor: "#000",
          padding: "0.5rem",
          opacity: 1,
          borderRadius: "0.7rem",
          border: "1px solid #61dafb",
        }}
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          opacity: 1,
          backgroundColor: "#000",
          borderRadius: "0.7rem",
          padding: "0rem 1rem",
        }}
      >
        <h4 style={{ color: "#fff" }}>{isHDOn ? "HD" : "SD"}</h4>
        <Switch
          color="error"
          name="imageHD"
          checked={isHDOn}
          onChange={(_, newVal) => {
            setIsHDOn(newVal);
          }}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Stack>
    </div>
  );
};

export default memo(SearchBox);

import React from "react";

type Props = {
  searchString: string;
  SetSearchString: any;
  SetDisplayResults: any;
};

const SearchBar = (props: Props) => {
  return (
    <>
      <input
        id="search-bar"
        className="search-bar"
        placeholder="Pick-up Location"
        aria-label="Pick-up Location"
        value={props.searchString}
        onChange={(e) => {
          props.SetSearchString(e.target.value);
        }}
        onFocus={() => {
          props.SetDisplayResults(true);
        }}
      />
      <style jsx>
        {`
          .search-bar {
            color: black;
            width: 100%;
            border-radius: 4px;
            padding: 6px 20px;
            font-weight: 600;
            font-size: 0.9rem;
          }
        `}
      </style>
    </>
  );
};

export default SearchBar;

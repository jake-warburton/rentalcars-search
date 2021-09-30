import React, { useCallback, useState } from "react";
const debounce = require("lodash.debounce");

type Props = {
  SetSearchString: any;
  SetDisplayResults: any;
};

const SearchBar = (props: Props) => {
  const [inputContent, UpdateInputContent] = useState("");

  const debouncedHandler = useCallback(
    //  After 200ms, trigger SetSearchString (which will then query the API for new results)
    debounce(
      (newSearchString: string) => props.SetSearchString(newSearchString),
      200
    ),
    []
  );

  const HandleChange = (e: any) => {
    UpdateInputContent(e.target.value);
    debouncedHandler(e.target.value);
  };

  return (
    <>
      <input
        id="search-bar"
        className="search-bar"
        placeholder="Pick-up Location"
        aria-label="Pick-up Location"
        value={inputContent}
        onChange={HandleChange}
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

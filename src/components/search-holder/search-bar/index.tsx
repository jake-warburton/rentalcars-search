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
      <div className="search-bar__holder">
        <div className="icon__holder">
          <img className="icon" src="/car.png" />
        </div>
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
      </div>
      <style jsx>
        {`
          .search-bar__holder {
            display: flex;
            align-items: center;
          }
          .icon__holder {
            width: 0px;
            overflow: visible;
          }
          .icon {
            width: 30px;
            height: auto;
            left: 10px;
            position: relative;
            pointer-events: none;
          }
          .search-bar {
            color: black;
            width: 100%;
            border-radius: 4px;
            padding: 15px;
            padding-left: 44px;
            font-weight: 600;
            font-size: 0.9rem;
          }
        `}
      </style>
    </>
  );
};

export default SearchBar;

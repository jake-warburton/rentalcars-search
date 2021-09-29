import React, { useState, useEffect } from "react";

import ResultItem from "./result-item";

type Props = {
  results: Array<any>;
  displayResults: boolean;
  SetDisplayResults: any;
};

const SearchHolder = (props: Props) => {
  return (
    <>
      <div className="search-results__holder">
        {props.displayResults == true && (
          <div className="search-results">
            {props.results.length > 0 ? (
              <ul className="search-results-list">
                {props.results.map((item) => (
                  <React.Fragment key={`results-item-key__${item.bookingId}`}>
                    <ResultItem
                      item={item}
                      SetDisplayResults={props.SetDisplayResults}
                    />
                  </React.Fragment>
                ))}
              </ul>
            ) : (
              <div className="search-results__empty">No results found</div>
            )}
          </div>
        )}
      </div>
      <style jsx>
        {`
          .search-results__holder {
            position: relative;
            height: 0px;
            width: 100%;
            margin: 4px 0px 0px;

            overflow: visible;
          }
          .search-results {
            z-index: 10000;
            display: flex;
            flex-direction: column;
            color: black;
            background: #fff;
            width: 100%;
            border-radius: 8px;
            box-shadow: 3px 4px 15px #000;
            overflow: hidden;
          }
          .search-results-list {
            padding: 0;
            margin: 0;
          }
          .search-results__empty {
            padding: 16px 10px;
            font-weight: 600;
            font-size: 1rem;
            color: #030303;
          }
        `}
      </style>
    </>
  );
};

export default SearchHolder;

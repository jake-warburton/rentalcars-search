import React, { useState, useEffect } from "react";

import SearchBar from "../search-bar";
import SearchResults from "../search-results";

const SearchHolder = () => {
  //  Input to search with. Default to blank string.
  const [searchString, SetSearchString] = useState("");

  const [displayResults, SetDisplayResults] = useState(true);

  //  Messages to the user in case of errors. Default to blank string.
  const [feedback, SetFeedback] = useState("");

  //  Results from the API
  const [results, SetResults] = useState([]);

  const FetchSearchResults = async (searchString: string, SetResults: any) => {
    const results = await fetch(
      `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${searchString}`
    );
    const json = await results.json();

    //  Update the state with the new results returned from the API
    SetResults(json?.results?.docs);
  };

  useEffect(() => {
    //  Debounce any ongoing calls to the API

    //  Perform a new call to the API using the new search criteria if searchString is longer than 1 character
    if (typeof searchString == "string" && searchString.length > 1) {
      FetchSearchResults(searchString, SetResults);
      SetDisplayResults(true);
    } else if (typeof searchString == "string" && searchString.length == 0) {
      SetDisplayResults(false);
    } else {
      SetResults([]);
    }
  }, [searchString]);

  return (
    <>
      <div className="search-holder">
        <h3 className="search-heading">{`Let's find your ideal car`}</h3>
        <SearchBar
          searchString={searchString}
          SetSearchString={SetSearchString}
          SetDisplayResults={SetDisplayResults}
        />
        <SearchResults
          results={results}
          displayResults={displayResults}
          SetDisplayResults={SetDisplayResults}
        />
      </div>
      <style jsx>
        {`
          .search-heading {
            margin: 10px 0px 5px;
          }
          .search-holder {
            display: flex;
            flex-direction: column;
            color: black;
            background: #ffb700;
            width: 100%;
            border-radius: 8px;
            box-shadow: 3px 4px 15px #000;
            padding: 6px 20px 16px;
            margin: 2rem 0px;
          }
        `}
      </style>
    </>
  );
};

export default SearchHolder;

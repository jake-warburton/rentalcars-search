import React from "react";

import ResultBadge from "./result-badge";
interface item {
  bookingId: string;
  name: string;
  city?: string;
  region?: string;
  country: string;
}

type Props = {
  item: item;
  SetDisplayResults: any;
};

const ResultItem = (props: Props) => {
  let additionals = [];

  if (props.item?.city) {
    additionals.push(props.item.city);
  }

  if (props.item?.region) {
    additionals.push(props.item.region);
  }

  if (props.item?.country) {
    additionals.push(props.item.country);
  }

  return (
    <>
      <li
        className="result-item"
        onClick={() => {
          props.SetDisplayResults(false);
        }}
      >
        {props.item?.bookingId ? (
          <ResultBadge bookingId={props.item.bookingId} />
        ) : (
          ``
        )}

        <div className="result-description__holder">
          <span className="result-description" aria-label={props.item.name}>
            {props.item.name}
          </span>

          {additionals.length > 0 ? (
            <span className="result-additionals">{additionals.join(", ")}</span>
          ) : (
            ``
          )}
        </div>
      </li>
      <style jsx>
        {`
          .result-item {
            display: flex;
            padding: 16px 10px;
            cursor: pointer;
          }
          .result-item:hover {
            background: #e1eaff;
          }
          .result-description__holder {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
          }
          .result-description {
            font-weight: 600;
            font-size: 1rem;
          }
          .result-additionals {
            font-size: 0.8rem;
            color: #3e3e3e;
          }
        `}
      </style>
    </>
  );
};

export default ResultItem;

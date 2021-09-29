import React from "react";

import { GetBadge } from "./get-badge";

type Props = {
  bookingId: string;
};

const ResultBadge = (props: Props) => {
  const badge = GetBadge(props.bookingId);

  return (
    <>
      <div className="result-badge" aria-label={badge.name}>
        {badge.name}
      </div>

      <style jsx>
        {`
          .result-badge {
            display: flex;
            justify-content: center;
            color: #fff;
            background: ${badge.bgColour};
            font-weight: 700;
            font-size: 0.9rem;
            border-radius: 3px;
            padding: 2px 8px;
            margin: auto 15px auto 5px;
            text-align: center;
            width: 30%;
            max-width: 80px;
            max-height: 40px;
          }
        `}
      </style>
    </>
  );
};

export default ResultBadge;

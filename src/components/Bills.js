import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

let url =
  "https://api.congress.gov/v3/bill/117/hr?api_key=a9OP2jf04tL6ExMYMzucnqqxJA3cpV8EMhBrYA9H";

export default function Bills() {
  const [billData, setBillData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setBillData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  if (!billData.bills) {
    return <div>Loading...</div>;
  }

  let data = billData.bills.map(
    ({
      congress,
      latestAction,
      actionDate,
      text,
      number,
      originChamber,
      originChamberCode,
      title,
      type,
      updateDate,
      updateDateIncludingText,
      url,
    }) => {
      return (
        <div>
          <Link
            to={`/bill/${number}`}
            location={{
              congress: congress,
              latestAction: latestAction,
              actionDate: actionDate,
              text: text,
              number: number,
              originChamber: originChamber,
              originChamberCode: originChamberCode,
              title: title,
              type: type,
              updateDate: updateDate,
              updateDateIncludingText: updateDateIncludingText,
              url: url,
            }}
          >
            <div>
              <div>
                <h1>{title}</h1>
                <p>{type}</p>
              </div>
            </div>
          </Link>
        </div>
      );
    }
  );
  return <div>{data}</div>;
}

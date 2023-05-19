import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Bill from "./Bill";

let url =
  "https://api.congress.gov/v3/bill?api_key=a9OP2jf04tL6ExMYMzucnqqxJA3cpV8EMhBrYA9H";

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
          console.log("Error fetching data", err);
        });
    };
    fetchData();
  }, []);

  if (!billData.bills) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Latest Congress Bills</h1>
      <ul>
        {billData.bills.map((bill) => (
          <Link to={`/bill/${bill.number}`}>
            <li key={bill.number}>{bill.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

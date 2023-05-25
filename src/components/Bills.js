import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

let url = `https://api.congress.gov/v3/bill?api_key=a9OP2jf04tL6ExMYMzucnqqxJA3cpV8EMhBrYA9H`;

export default function Bills(limit) {
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
    <div className="bills-container">
      <h1 className="bills-title">Latest Congress Bills</h1>
      <ul className="bills-list">
        {billData.bills.map((bill) => (
          <Link to={`/bill/${bill.congress}/${bill.type}/${bill.number}`}>
            <li key={bill.number} className="bills-link">
              <p className="bills-congress">
                Congress Number: {bill.congress}
                <br />
              </p>
              <p className="bills-number">
                Bill Number: {bill.number}
                <br />
              </p>
              <p className="bills-title">
                Bill Title: {bill.title}
                <br />
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

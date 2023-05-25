import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

let url = `https://api.congress.gov/v3/bill?limit=5&api_key=a9OP2jf04tL6ExMYMzucnqqxJA3cpV8EMhBrYA9H`;

export default function Featured() {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setFeature(data);
        })
        .catch((err) => {
          console.log("Error fetching data", err);
        });
    };
    fetchData();
  }, []);

  if (!feature.bills) {
    return <div>Loading...</div>;
  }

  return (
    <div className="featured-container">
      <ul className="featured-list">
        {feature.bills.map((bill) => (
          <Link to={`/bill/${bill.congress}/${bill.type}/${bill.number}`}>
            <li key={bill.number} className="featured-link">
              <p className="featured-congress">
                Congress Number: {bill.congress}
                <br />
              </p>
              <p className="featured-number">
                Bill Number: {bill.number}
                <br />
              </p>
              <p className="featured-title">
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

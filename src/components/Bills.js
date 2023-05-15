import React, { useState, useEffect } from "react";

let url = "https://api.congress.gov/v3/bill/117/hr?api_key={key}";

export default function Bills() {
  const [billData, setBillData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBillData(data.results);
      });
  }, []);

  console.log(billData);
}

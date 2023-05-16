import React, { useState, useEffect } from "react";

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
        });
    };
    fetchData();
  }, []);

  return console.log(billData);
}

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BillDetails = () => {
  const { congress, type, number } = useParams();
  const [bill, setBill] = useState(null);

  useEffect(() => {
    const fetchBill = async () => {
      try {
        const response = await fetch(
          `https://api.congress.gov/v3/bill/${congress}/${type}/${number}?api_key=a9OP2jf04tL6ExMYMzucnqqxJA3cpV8EMhBrYA9H`
        );
        const data = await response.json();
        setBill(data);
      } catch (error) {
        console.error("Error fetching bill details:", error);
      }
    };

    fetchBill();
  }, []);

  console.log(bill.bill);

  if (!bill) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Bill Details</h1>
      <h2>{bill.bill.title}</h2>
      <p>{bill.bill.description}</p>
      <p>Sponsor: {bill.bill.sponsor}</p>
      {/* Add more bill details as needed */}
    </div>
  );
};

export default BillDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BillInterpretation from "./BillInterpret";

const BillDetails = () => {
  const { congress, type, number } = useParams();
  const [bill, setBill] = useState();
  const [details, setDetails] = useState();

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

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://api.congress.gov/v3/bill/${congress}/${type}/${number}/summaries?api_key=a9OP2jf04tL6ExMYMzucnqqxJA3cpV8EMhBrYA9H`
        );
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error("Error fetching bill details:", error);
      }
    };

    fetchDetails();
  }, []);

  if (!bill) {
    return <div>Loading...</div>;
  }
  let sponsor = bill.bill.sponsors;

  return (
    <div key={number}>
      <h1>Bill Details</h1>
      <h2>Title: {bill.bill.title}</h2>
      <p>Description: {bill.bill.description}</p>
      <BillInterpretation billId={number} />
      {sponsor.map((obj, index) => (
        <p key={index}>{JSON.stringify(obj.fullName)}</p>
      ))}
      {/* Add more bill details as needed */}
    </div>
  );
};

export default BillDetails;

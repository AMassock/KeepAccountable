import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Description() {
  const { congress, type, number } = useParams();
  const [desc, setDesc] = useState();

  useEffect(() => {
    const fetchText = async () => {
      try {
        const response = await fetch(
          `https://api.congress.gov/v3/bill/${congress}/${type}/${number}/text?api_key=a9OP2jf04tL6ExMYMzucnqqxJA3cpV8EMhBrYA9H`
        );
        const data = await response.json();
        setDesc(data);
      } catch (error) {
        console.error("Error fetching bill description:", error);
      }
    };
    fetchText();
  }, []);

  return (
    <div>
      <a
        href="https://www.congress.gov/117/bills/hr3076/BILLS-117hr3076pcs2.htm"
        target="_blank"
        rel="noreferrer"
      >
        Open
      </a>
    </div>
  );
}

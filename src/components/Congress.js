import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Congress.css";

let url =
  "https://api.congress.gov/v3/member?api_key=a9OP2jf04tL6ExMYMzucnqqxJA3cpV8EMhBrYA9H";

export default function Congress() {
  const [memberData, setMemberData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setMemberData(data);
        })
        .catch((err) => {
          console.log("Error fetching data", err);
        });
    };
    fetchData();
  }, []);

  if (!memberData.members) {
    return <div>Loading...</div>;
  }

  // console.log(memberData.members);
  return (
    <div className="congress-container">
      <h1 className="congress-title">Congress Members</h1>
      <ul className="congress-list">
        {memberData.members.map((member) => (
          <Link to={`/congressMembers/${member.members}/`}>
            <li key={member} className="congress-member">
              {/* {console.log(member.member.depiction.imageUrl)} */}
              <img src={member.member.depiction.imageUrl} alt="Senate"></img>
              <p className="congress-name">Name: {member.member.name}</p>
              <p className="congress-state">State: {member.member.state}</p>
              <p className="congress-party">Party: {member.member.party}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

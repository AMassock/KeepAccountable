import React, { useState, useEffect } from "react";

const FavoriteItemsDashboard = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    // Fetch favorite items from the API or your backend
    const fetchFavoriteItems = async () => {
      try {
        // Make an API call to retrieve favorite items for the authenticated user
        const response = await fetch("", {
          method: "GET",
          headers: {
            Authorization: "",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setFavoriteItems(data.favoriteItems);
        } else {
          console.error("Failed to fetch favorite items");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchFavoriteItems();
  }, []);

  return (
    <div>
      <h2>Favorite Items Dashboard</h2>
      {favoriteItems.length > 0 ? (
        <ul>
          {favoriteItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No favorite items found.</p>
      )}
    </div>
  );
};

export default FavoriteItemsDashboard;

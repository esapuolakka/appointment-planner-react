import React from "react";

const Tile = ({ name, ...description }) => {
  const descriptionArray = Object.values(description);

  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {descriptionArray.map((value, index) => (
        <p className="tile" key={index}>{value}</p>
      ))}
    </div>
  );
};

export default Tile;

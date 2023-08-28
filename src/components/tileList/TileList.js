import React from "react";
import Tile from "../tile/Tile";

const TileList = ({ tiles }) => {
  if (!tiles || tiles.length === 0) {
    return <p>No appointments available.</p>;
  }

  return (
    <div>
      {tiles.map((tile, index) => {
        const { name, ...description } = tile;
        console.log(description);
        return (
          <Tile key={index} name={name} {...description} />
        );
      })}
    </div>
  );
};

export default TileList;
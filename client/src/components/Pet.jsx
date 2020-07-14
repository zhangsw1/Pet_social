import React from "react";

export default function Pet({ name, animal, breed }) {
  console.log("lalalalla", name);
  return (
    <div className="adopt-pet">
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}

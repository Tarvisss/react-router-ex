import React from "react";
import { Link, Navigate } from "react-router-dom";



function ColorDetails({ color }) {
    console.log(color)

  if (!color) return <Navigate to="/" />
  return (
    <div>
      <div >
        <h2>{color.name}</h2>
       
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}

export default ColorDetails;
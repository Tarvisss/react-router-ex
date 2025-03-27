
import React from "react";
import { Link, Navigate } from "react-router-dom";



function DogDetails({ dog }) {

  if (!dog) return <Navigate to="/dogs" />
  return (
    <div>
      <div >
        <img src={dog.img} alt={dog.name} style={{height: "350px"}} />
        <h2>{dog.name}</h2>
        <h3>{dog.age} years old</h3>
        <h4>Previous Owners {dog.owners}</h4>
        <h5>Available for adoption: {dog.available ? "Yes" : "No"}</h5>
        <ul>
          {dog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
        <Link to="/dogs">Go Back</Link>
      </div>
    </div>
  );
}

export default DogDetails;

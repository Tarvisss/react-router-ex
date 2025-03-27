import React from "react";
import { Link } from "react-router-dom";

const DogList = ({dogs}) => {
  return (
    <div>
      {dogs.map(d => (
        <div key={d.name}>
          <img src={d.img} alt={d.name} style={{height: "200px"}}/>
          <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
        </div>
      ))}
    </div>
  )
}
export default DogList;
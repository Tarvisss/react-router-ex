import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./NavBar";
import RouteList from "./RouteList";

// Default dogs data (fallback)
const defaultDogs = [
  {
    name: "Whiskey",
    age: 5,
    img: "/whiskey.jpg",
    owners: 2,
    available: true,
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]

  },
  {
    name: "Duke",
    age: 3,
    img: "/duke.jpg",
    owners: 1,
    available: false,
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    img: "/perry.jpg",
    owners: null,
    available: true,
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  },
  {
    name: "Tubby",
    age: 4,
    img: "/tubby.jpg",
    owners: 3,
    available: false,
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore."
    ]
  }
];

const App = ({ initialDogs }) => {
  const [dogs, setDogs] = useState({
    data: initialDogs,
    isLoading: true
  });

  useEffect(() => {
    const loadDogs = async () => {
      const response = await axios.get("http://localhost:5173/dogs");
      setDogs({
        data: defaultDogs,
        isLoading: false
      });
    };
    loadDogs();
  }, []);

  if (dogs.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Welcome to our Page!</h1>
      <BrowserRouter>
        <NavBar dogs={dogs.data} />
        <div>
          <RouteList dogs={dogs.data} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

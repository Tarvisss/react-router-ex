import React from 'react';
import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails';


function FilterDogDetails({ dogs }) {
  const params = useParams();

  if (params.name) {
    const currentDog = dogs.find(
      dog => dog.name.toLowerCase() === params.name.toLowerCase()
    );
    return <DogDetails dog={currentDog} />;
  }

  return null;
}

export default FilterDogDetails;
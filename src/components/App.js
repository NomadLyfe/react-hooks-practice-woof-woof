import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Summary from "./Summary";

function App() {
  const [dogs, setDogs] = useState(null);
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then(r => r.json())
    .then(data => setDogs(data));
  }, [])

  function handleGoodBadClick(updatedDog) {
    setSummary(updatedDog);
    const updatedDogs = dogs.map(dog => {
      if (dog.id === updatedDog.id) {
        return updatedDog;
      } else {
        return dog;
      }
    })
    setDogs([...updatedDogs]);
  }

  function handleFilter(filter) {
    if (filter) {
      const filteredDogs = dogs.filter(dog => dog.isGoodDog);
      setDogs(filteredDogs);
    } else {
      fetch("http://localhost:3001/pups")
      .then(r => r.json())
      .then(data => setDogs(data));
    }
  }

  if (!dogs) return <p>Loading...</p>
  return (
    <div className="App">
      <Filter onFilter={handleFilter} />
      <Navbar dogs={dogs} onDogClick={setSummary} />
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <Summary summary={summary} onGoodBadClick={handleGoodBadClick} />
      </div>
    </div>
  );
}

export default App;

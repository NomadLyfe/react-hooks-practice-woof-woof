import React from "react";

function Filter({ dog, onDogClick }) {
  return (
    <span onClick={() => onDogClick(dog)}>{dog.name}</span>
  );
}

export default Filter;

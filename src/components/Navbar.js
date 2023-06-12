import React from "react";
import Dog from "./Dog";

function Navbar({ dogs, onDogClick }) {
    const dogList = dogs.map(dog => {
        return (
            <Dog key={dog.id} dog={dog} onDogClick={onDogClick} />
        )
    })
    return (
        <div id="dog-bar">
            {dogList}
        </div>
    );
}

export default Navbar;

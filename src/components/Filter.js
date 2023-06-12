import React, { useState } from "react";

function Filter({ onFilter }) {
    const [filter, setFilter] = useState(false);

    function handleClick() {
        setFilter(!filter);
        onFilter(!filter);
    }

    return (
        <div id="filter-div">
            <button id="good-dog-filter" onClick={handleClick}>Filter good dogs: {filter ? "ON" : "OFF"}</button>
        </div>
    );
}

export default Filter;

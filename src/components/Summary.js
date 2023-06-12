import React from "react";

function Summary({ summary, onGoodBadClick }) {
    function handleClick() {
        const value = !summary.isGoodDog;
        fetch(`http://localhost:3001/pups/${summary.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({isGoodDog: value})
        })
        .then(r => r.json())
        .then(data => onGoodBadClick(data));
    }
    
    if (!summary) return <></>;

    return (
        <div id="dog-info">
            <img src={summary.image} alt={summary.name} />
            <h2>{summary.name}</h2>
            <button onClick={handleClick}>{summary.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>  
        </div>
    );
}

export default Summary;

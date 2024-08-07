import React from "react";
import IndCard from "./IndCard";
import data from "./data";

export default function Cards(){
    const reactData = data.map((item) => {
        return <IndCard 
            key={item.id}
            {...item}/>
    })
    return (
        <div className="cards-container">
            {reactData}
        </div>
    )
}
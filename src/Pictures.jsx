import React from "react";

export default function Pictures(){
    return (
        <>
        <div className="grid-pic-container">
            <div className="grid-1">
                <div className="grid-1-img-1"></div>
            </div>
            <div className="grid-2">
                <div className="grid-2-img-1"></div>
                <div className="grid-2-img-2"></div>
            </div>
            <div className="grid-3">
                <div className="grid-3-img-1"></div>
                <div className="grid-3-img-2"></div>
            </div>
            <div className="grid-4">
                <div className="grid-4-img-1"></div>
                <div className="grid-4-img-2"></div>
            </div>
            <div className="grid-5">
                <div className="grid-5-img-1"></div>
                <div className="grid-5-img-2"></div>
            </div>
        </div>
        <div className="pic-container">
            <img className="pic-container-img"
            src="./src/assets/gridGroup.png"
            alt="pictures" />
        </div>
        </>
    )
}
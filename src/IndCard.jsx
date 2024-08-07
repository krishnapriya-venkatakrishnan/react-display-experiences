import React from "react";

export default function IndCard(props) {
    
    const {coverImg, stats, location, title, price, openSpots} = props
    
    let bannerText
    if (!openSpots)
        bannerText = "SOLD OUT"
    else if(location === "Online")
        bannerText = "ONLINE"
    return (
        <div className="card-info">
            <img className="card-img"
            src={coverImg}
            alt="Card image" />
            <div className="card-details">
                <div className="card-ratings">
                    <i className="fa-star fa-solid"></i>
                    <p className="rating">{stats.rating} ({stats.reviewCount}).</p>
                    <p className="country">{location}</p>
                </div>
                <div className="card-description">
                    <p className="description">{title}</p>
                </div>
                <div className="card-pricing">
                    <p className="pricing">
                        <strong>From ${price} </strong>/ person</p>
                </div>
            </div>
            <div style={{display: bannerText?"block":"none"}}>
                <div className="card-banner">
                    <p className="banner">{bannerText}</p>
                </div>
            </div>
        </div>
    )
}
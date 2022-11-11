import React, { Composite } from "react"
import data from "../data.js"

function Card({props}){
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "Sold Out"
    }else if(props.item.location === "Online"){
        badgeText = "Online"
    }
    return (
        <div className = "card-container">
            <div className = "photo-container" style={{ backgroundImage: `url('${props.item.coverImg}')`}}>
                {props.item.openSpots === 0 || props.item.location === 'Online' ? <button className = "card-btn">{badgeText}</button> : null}
            </div>
            <div className = "summary-container">
                <span className = "star"><i className="fa-solid fa-star"></i></span>
                <span className = "rating">{props.item.stats.rating}</span>
                <span className = "reviews">({props.item.stats.reviewCount}) <i className="fa-solid fa-circle"></i> {props.country}</span>
                <h2 className = "title">{props.item.title}</h2>
                <p className = "price"><span>From ${props.item.price}</span> / person</p>
            </div>

        </div>
    )
}



export default Card
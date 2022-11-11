import React, { Composite } from "react"
import data from "../data.js"

function Card(props){
    let badgeText
    if(props.openSpots === 0){
        badgeText = "Sold Out"
    }else if(props.country === "Online"){
        badgeText = "Online"
    }
    return (
        <div className = "card-container">
            <div className = "photo-container" style={{ backgroundImage: `url('${props.img}')`}}>
                {props.openSpots === 0 || props.country === 'Online' ? <button className = "card-btn">{badgeText}</button> : null}
            </div>
            <div className = "summary-container">
                <span className = "star"><i className="fa-solid fa-star"></i></span>
                <span className = "rating">{props.rating}</span>
                <span className = "reviews">({props.reviewCount}) <i className="fa-solid fa-circle"></i> {props.country}</span>
                <h2 className = "title">{props.title}</h2>
                <p className = "price"><span>From ${props.price}</span> / person</p>
            </div>

        </div>
    )
}



export default Card
import React, { Composite } from "react"

function Card(props){
    return (
        <div className = "card-container">
            <div className = "photo-container" style={{ backgroundImage: `url('${props.img}')`}}>
                <button className = "card-btn">Sold Out</button>
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
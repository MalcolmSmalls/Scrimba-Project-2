import React, { Composite } from "react"

function Card(){
    return (
        <div className = "card-container">
            <div className = "photo-container">
                <button className = "card-btn">Sold Out</button>
            </div>
            <div className = "summary-container">
                <span className = "star"><i class="fa-solid fa-star"></i></span>
                <span className = "rating">5.0</span>
                <span className = "reviews">(8) <i class="fa-solid fa-circle"></i> USA</span>
                <h2 className = "title">Life lessons with Katie Zaferes</h2>
                <p className = "price"><span>From $136</span> / person</p>
            </div>

        </div>
    )
}



export default Card
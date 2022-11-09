import React, { Component } from "react"

function Header(){
    return(
        <header>
            <div className = 'top-bar'>
                <div className = "logo"></div>
            </div>
            <div className = "hero"> </div>

            <div className="header-bottom">
                <h1>Online Experiences</h1>
                <p>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.

                </p>
            </div>
        </header>
    )
}

export default Header
import React from "react"
import logo from "./assets/airbnb.png"

export default function Header(){
    return(

        <header className="head">
            <img src={logo} alt="airbnb"></img>
        </header>

    )
}
import React from "react";
import logo from './assests/images/airbnb.png'
import Home from "./Pages/Home";

document.title = "Airbnb | Holiday rentals, Hotels, Rooms, Experiences and more...";
let link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = logo;
document.body.setAttribute('data-theme','light')

export function App(){
    return (
        <Home/>
    )
}

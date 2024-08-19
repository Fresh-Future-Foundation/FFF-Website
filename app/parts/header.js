import React from "react";
import "./header.css";
import "../styles/fonts.css";

import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <div className="header-section" id="logo-section">
                <Link href="home"><button id="logo-img"></button></Link>
                <Link href="home"><button id="brand-text" className="redhat-bold">Fresh Future Foundation</button></Link>
            </div>
            
            <div className="header-section" id="right-section">
                <Link href="about"><button className="header-page-text redhat-regular">About Us</button></Link>
                <Link href="donate"><button className="header-page-text redhat-regular">Donate</button></Link>
                {/*<Link href="our-plan"><button className="header-page-text redhat-regular">Our Plan</button></Link>*/}
                <Link href="join"><button className="header-page-text redhat-regular">Join Us</button></Link>
                <a target="_blank" href="https://fresh-hacks.devpost.com/"><button className="header-page-text redhat-regular">FreshHacks</button></a>
            </div>
        </header>
    );
}
import React from 'react'
import Link from 'next/link'
import { Submenu } from './submenu'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">

                    <a className="navbar-brand" href="#">Portofolio</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <Submenu link="/" menu="Home"/>
                            <Submenu link="/" menu="Blog"/>
                            <Submenu link="/about" menu="About"/>
                            <Submenu link="/contact" menu="Contact"/>
                            
                               
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </>
    )
}

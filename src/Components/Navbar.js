import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='container'>
            <div className='nav-links'>
                <ul>
                    <li>home</li>
                    <li>comtact</li>
                    <li>service</li>
                    <li><a href='#'>My account</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

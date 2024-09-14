import React from 'react'
import '../design/Navbar.css'

export default function Navbar() {
  return (
    <div>
        <header>
            <div className="logo">
              <img className='logo-image' src='https://www.shutterstock.com/image-vector/indian-farmer-cutting-grass-illustration-260nw-2320322657.jpg' alt='logo'></img>
              <text>Krishi Sahayak</text>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#upload">Upload Soil Report</a></li>
                    <li><a href="#recommendations">AI Recommendations</a></li>
                    <li><a href="#tips">Soil Health Tips</a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

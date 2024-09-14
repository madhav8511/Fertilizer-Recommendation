import React from 'react'
import '../design/Hero.css'

export default function Hero() {
  return (
    <div>
    <section className="hero">
        <div className="hero-content">
            <h1>AI-Powered Fertilizer Recommendations</h1>
            <p>Get tailored fertilizer suggestions based on your soil's health and condition using our cutting-edge AI model.</p>
            <a href="#upload" className="cta-btn">Get Started</a>
        </div>
        {/* <!-- <img className="hero-image" src="hero-image.jpg" alt="Soil and plants"> --> */}
    </section>
    </div>
  )
}

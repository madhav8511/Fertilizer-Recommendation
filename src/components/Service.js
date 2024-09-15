import React from 'react'
import '../design/Service.css'

export default function Service() {
  return (
    <div>
        <section className="services">
        <h3>Our Services</h3>
        <div className="content">
            <div className="main-content">
                <img className="content-image" src="https://img.freepik.com/premium-vector/yellow-notepad-sticker-cartoon-illustration-vector_976369-1061.jpg" alt='hi'/>
                <h2>Soil Health Report Card</h2>
            </div>
            <div className="main-content">
                <img className="content-image" src="https://chatgen.ai/wp-content/uploads/2023/04/AI-chat-5-1200x675.png" alt='hi'/>
                <h2>Sahayak : Our AI Chat Bot</h2>
            </div>
            <div className="main-content">
                <img className="content-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlqPU7V0v1kRCNfSF9lX0Dj0q-NF86n4LEGw&s" alt='hi'/>
                <h2>Fertilizer Recommendation</h2>
            </div>
        </div>
    </section>
    </div>
  )
}

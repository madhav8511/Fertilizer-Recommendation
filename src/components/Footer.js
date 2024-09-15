import React from 'react'
import '../design/Footer.css'

export default function Footer() {
  return (
    <div>
        <section id="upload" class="upload-section">
            <h2>Upload Your Soil Report</h2>
            <form>
                <label for="soilFile">Upload Soil Health Report (PDF/CSV):</label>
                <input type="file" id="soilFile" name="soilFile" accept=".pdf, .csv"/>
                <button type="submit">Analyze</button>
            </form>
            <p>Or enter soil details manually:</p>
            <form>
                <label for="ph">pH Level:</label>
                <input type="number" id="ph" name="ph" step="0.01"/>
                <label for="nitrogen">Nitrogen Content:</label>
                <input type="number" id="nitrogen" name="nitrogen" step="0.01"/>
                <button type="submit">Analyze</button>
            </form>
        </section>

    <section id="recommendations" class="recommendation-section">
        <h2>AI Recommendations</h2>
        <div class="analysis-container">
            <div class="chart">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWcly-Fj2t7k0-vNiHcbjPfbyK-6C5MRVyQ&s' alt='Chart'/>
            </div>
            <div class="recommendation">
                <h3>Recommended Fertilizer:</h3>
                <p>Based on your soil report, we recommend the following fertilizers:</p>
                <ul>
                    <li>Fertilizer A: For pH adjustment</li>
                    <li>Fertilizer B: To boost nitrogen content</li>
                </ul>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 SoilAI. All rights reserved. | <a href="#contact">Contact Us</a></p>
    </footer>

    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Welcome Home</h1>  
            <Link target="_blank" to="/algo-visual"><h1>AlgoVisual</h1></Link>
            <a target="_blank" href="/issApiFetchMap/fetchiss.html"><h1>ISS</h1></a>
            <a target="_blank" href="/csvExtractEnhancedWithChart/index.html"><h1>Global World Temperature</h1></a>
            <a href="https://rktech-282f5.web.app/"><h1>Site pour RKTech</h1></a>
            <a href="https://moclan.web.app/"><h1>Site pour MauvaisOeil</h1></a>
        </div>
    )
}

export default Home

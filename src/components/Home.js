import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Welcome Home</h1>  
            <Link to="/algo-visual"><h1>AlgoVisual</h1></Link>
            <a href="/issApiFetchMap/fetchiss.html"><h1>ISS</h1></a>
            <a href="/csvExtractEnhancedWithChart/index.html"><h1>Global World Temperature</h1></a>
        </div>
    )
}

export default Home

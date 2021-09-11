import React from 'react'
import NavBar from './NavBar'

const styles = {
    container: {
        
    },
    homeContainer: {
        margin: "100px 0 0 0",
        textAlign: 'center'
    }
}

const Home = () => {
    return (
        <div style={styles.container}>
            <NavBar />          
            <div style={styles.homeContainer}>
                <h1>Bienvenue et merci pour votre temps !</h1>  
                <h3>Voici un endroit ou j'ai regroupé quelques projets que j'ai retrouvé en urgence pour pouvoir les montrer aux entretients de motivation, c'est evidemment une infime partie des la totalité de mes projets mais j'avoue qu'au début je n'avais pas la discipline de les stocker à l'abris</h3>
                <h3>Veuillez ne pas prendre en compte le CSS de ce portfolio, car la plupart de mes projets n'avaient pas pour but de faire du design mais plutôt d'apprendre des concept bien précis à chaque fois, j'ai pour projet de styliser ce portfolio !</h3>
                <h3>N'hésitez pas a cliquer sur les titres pour voir les projets et si vous voulez voir le code ils sont disponible pour la plupart en cliquant sur le lien github en dessous de chaque projet.</h3>
            </div>
        </div>
    )
}

export default Home
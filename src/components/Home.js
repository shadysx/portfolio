import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
        <h1>Welcome Home</h1>  
        <Link target="_blank" to="/algo-visual"><h1>AlgoVisual</h1></Link>
            <h5>Visualiseur d'algorithme </h5>
            <p>Un des mes projets préférés, lors de me première année de bachelier nous avons appris quelques algorithmes de tri. J'ai été inspiré quand le prof nous à parlé d'une façon de voir les algorithmes fonctionner je me suis dis que c'etait un beau challenge.</p>
            <h6>Technos utilisées:</h6>
            <h6>https://github.com/shadysx/portfolio/tree/main/src/components/projects/AlgoVisual</h6>
            <ul>
                <li>Html/Css</li>
                <li>Javascript</li>
                <li>React</li>
            </ul>
            <a target="_blank" href="/issApiFetchMap/fetchiss.html"><h1>ISS</h1></a>
            <h5>Tracker International Space Station</h5>
            <p>Un de mes premiers projets après avoir découvert ce qu'étaient les APIs, c'est simplement un appel par seconde à l'API de la station spatiale internationale, je traite l'objet qui est renvoyé pour en extraire les coordonées et puis je les envoie dans une map open source. Et j'ai changé le curseur par un png de satelite.</p>
            <h6>Technos utilisées:</h6>
            <ul>
                <li>Html/Css</li>
                <li>Javascript</li>
                <li>API WhereisISS.at</li>
                <li>Map OpenSource Leaflet</li>
            </ul>
            <h6>https://github.com/shadysx/JsFetchApps/tree/master/public_html/issApiFetchMap</h6>

            <a target="_blank" href="/csvExtractEnhancedWithChart/index.html"><h1>Global World Temperature</h1></a>
            <h5>Graphique Démontrant le réfauffement climatique</h5>
            <p>Pour ce projet j'ai utlisé des fichiers CSV très volumineux fournis par NASA, j'ai extrait les données qui m'interressaient pour en faire un graphique qui représente bien le réfauffement climatique.</p>
            <h6>Technos utilisées:</h6>
            <ul>
                <li>Html/Css</li>
                <li>Javascript</li>
                <li>Fichier CSV source : NASA</li>
            </ul>

            <h6>https://github.com/shadysx/JsFetchApps/blob/master/public_html/csvExtractEnhancedWithChart/index.html</h6>

            <a href="https://facebook-messenger-clone-8fa1e.web.app/"><h1>App de messagerie en temps réel(database)</h1></a>
            <h5>messagerie en temps réel stockée sur une base de donnée</h5>
            <p>ce projet est un de mes essais suite à un weekend ou j'ai appris à utiliser firebase, la base de donnée de google qui a beaucoup d'avantage pour des petits projets contrairement aux base de données relationnelles.</p>
            <h6>technos utilisées:</h6>
            <ul>
                <li>html/css</li>
                <li>javascript</li>
                <li>react</li>
                <li>firebase</li>
            </ul>



            <a href="https://rktech-282f5.web.app/"><h1>Site pour RKTech</h1></a>
            <p>Site vitrine pour un ami qui à lancé une entreprise, je n'ai malheureusement plus la version finale car cela fait déja plus d'un an que le site n'est plus en ligne</p>
            <h6>Technos utilisées:</h6>
            <ul>
                <li>Html/Css</li>
                <li>Javascript</li>
            </ul>


            <a href="https://moclan.web.app/"><h1>Site pour MauvaisOeil</h1></a>
            <p>Je fais partie d'un collectif de musique qui est en train de se lancer de façon professionnelle, je suis la personne responsable de tout ce qui est web/appli mobile</p>
            <h6>technos utilisées:</h6>
            <ul>
                <li>html/css</li>
                <li>javascript</li>
                <li>react</li>
            </ul>


        </div>
    )
}

export default Home
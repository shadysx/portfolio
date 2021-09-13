import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const styles = {
    container: {

    },
    projectsContainer: {
        margin: "0 30px"
    }
}

const Projects = () => {
    return (
        <div style={styles.container}>
            <NavBar />
            <div style={styles.projectsContainer}>
                <Link target="_blank" to="/algo-visual"><h1>AlgoVisual (Click here)</h1></Link>
                <h5>Visualiseur d'algorithme </h5>
                <p>Un des mes projets préférés, j'ai été inspiré quand on m'a parlé d'une façon de voir les algorithmes fonctionner je me suis dis que c'etait un beau challenge.</p>
                <h6>Technos utilisées:</h6>
                <ul>
                    <li>Html/Css</li>
                    <li>Javascript</li>
                    <li>React</li>
                </ul>
                <h6><a href="https://github.com/shadysx/portfolio/tree/main/src/components/projects/AlgoVisual">GitHub</a></h6>

                <a target="_blank" href="/issApiFetchMap/fetchiss.html"><h1>ISS (Click here)</h1></a>
                <h5>Tracker International Space Station</h5>
                <p>Un de mes premiers projets après avoir découvert ce qu'étaient les APIs, c'est simplement un appel par seconde à l'API de la station spatiale internationale, je traite l'objet qui est renvoyé pour en extraire les coordonées et puis je les envoie dans une map open source. Et j'ai changé le curseur par un png de satelite.</p>
                <h6>Technos utilisées:</h6>
                <ul>
                    <li>Html/Css</li>
                    <li>Javascript</li>
                    <li>API WhereisISS.at</li>
                    <li>Map OpenSource Leaflet</li>
                </ul>
                <h6><a href="https://github.com/shadysx/portfolio/tree/main/public/issApiFetchMap">GitHub</a></h6>

                <a target="_blank" href="/csvExtractEnhancedWithChart/index.html"><h1>Global World Temperature (Click here)</h1></a>
                <h5>Graphique Démontrant le réfauffement climatique</h5>
                <p>Pour ce projet j'ai utlisé des fichiers CSV très volumineux fournis par NASA, j'ai extrait les données qui m'interressaient pour en faire un graphique qui représente bien le réfauffement climatique.</p>
                <h6>Technos utilisées:</h6>
                <ul>
                    <li>Html/Css</li>
                    <li>Javascript</li>
                    <li>Fichier CSV source : NASA</li>
                </ul>

                <h6><a href="https://github.com/shadysx/portfolio/tree/main/public/csvExtractEnhancedWithChart">GitHub</a></h6>

                <a href="https://facebook-messenger-clone-8fa1e.web.app/"><h1>App de messagerie en temps réel avec database (Click here)</h1></a>
                <h5>messagerie en temps réel stockée sur une base de donnée</h5>
                <p>ce projet est un de mes essais suite à un weekend ou j'ai appris à utiliser firebase, la base de donnée de google qui a beaucoup d'avantage pour des petits projets contrairement aux base de données relationnelles.</p>
                <h6>Technos utilisées:</h6>
                <ul>
                    <li>html/css</li>
                    <li>javascript</li>
                    <li>react</li>
                    <li>firebase</li>
                </ul>
                <h6>Code source perdu</h6>



                <a href="https://rktech-282f5.web.app/"><h1>Site pour RKTech (Click here)</h1></a>
                <p>Site vitrine pour un ami qui à lancé une entreprise, je n'ai malheureusement plus la version finale car cela fait déja plus d'un an que le site n'est plus en ligne</p>
                <h6>Technos utilisées:</h6>
                <ul>
                    <li>Html/Css</li>
                    <li>Javascript</li>
                </ul>
                <h6>Code source perdu</h6>


                <a href="https://moclan.web.app/"><h1>Site pour MauvaisOeil (Click here)</h1></a>
                <p>Je fais partie d'un collectif de musique qui est en train de se lancer de façon professionnelle, je suis la personne responsable de tout ce qui est web/appli mobile</p>
                <h6>Technos utilisées:</h6>
                <ul>
                    <li>html/css</li>
                    <li>javascript</li>
                    <li>react</li>
                </ul>
                <h6><a href="https://github.com/shadysx/MoClanWeb">GitHub</a></h6>


                <a href="https://github.com/shadysx/LighShotGrab"><h1>LightShotGrab (Click here)</h1></a>
                <h5>Programme console qui permet de télécharger des milliers d'images screenshots d'inconnus</h5>
                <p>Lorsque l'on utilise le programme lightshot pour prendre des screenshots, j'ai remarqué que nos images étaient stockées sur des serveurs dont le liens est sous la forme prnt.sc/aa1111</p>
                <p>J'ai donc essayé de changer le lien et me suis rendu compte que j'accedais au photos d'inconnus partout dans le monde et ça ma donné l'idée de coder un programme qui etait capable de telecharger un nombre choisis d'images a partir d'un lien de départ</p>
                <p>J'ai adoré ce challenge car le site n'autorisait pas directement les telechargement des images depuis leurs lien, il a fallut d'abord trouver un moyen de recuperer les liens direct des images et ensuite de les télécharger. Le site bloque également les requetes de ce type j'ai donc du contourner un peu les règles</p>
                <h6>technos utilisées:</h6>
                <ul>
                    <li>python</li>
                </ul>
                <h6><a href="https://github.com/shadysx/LighShotGrab">GitHub</a></h6> 

                <a href="https://github.com/shadysx/DiscordPythonBot/blob/main/main.py"><h1>Bot Discord (Click here)</h1></a>
                <h5>Un client qui se connecte à un serveur Discord et qui se comporte comme un utilisateur classique.</h5>
                <p>Je fais partie d'une petite communauté qui utilise un serveur discord pour communiquer, le fait de programmer un bot qui peut être utile à donc été une bonne source de motivation.</p>
                <p>Pour le moment il n'est pas encore très polyvalent, il peut :</p>
                <ul>
                    <li>Donner la météo en utilisant une commande dans le chat, qui prend comme paramètre la ville et la date. Le bot utilise une API de météo grâce à une fonction que j'ai écrite qui récupère une objet un fonction des demandes de l'utilisateur puis sont traitées et découpées pour arriver au résultat final.</li>
                    <li>Il rentre dans un channel de discussion lorsqu'un utilisateur se connecte et lis un message vocal personnalisé pour accueillir chaque utilisateur.</li>
                    <li>Il stocke chaque utilisateur dans une base de donnée SQL et compte pour chaque utilisateur son nombre de messages envoyés, et bientot il stockera egalement le nombre de minutes passées en conversation vocale.</li>
                    <li>Le tout est hébergé sur un serveur linux qui est sur un raspberry pi que j'ai configuré moi même.</li>
                </ul>
                <h6>technos utilisées:</h6>
                <ul>
                    <li>python</li>
                    <li>discord.py</li>
                    <li>openweather meteo</li>
                </ul>
                <h6><a href="https://github.com/shadysx/DiscordPythonBot/blob/main/main.py">GitHub</a></h6> 

            </div>
        </div>
    )
}

export default Projects

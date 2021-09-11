import React from 'react'

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "60px",
    },
    brand:{
        padding: "0 0 0 50px"
    },
    linksContainer:{
        display: "flex",
        width: "50vw",
        marginRight: "50px",
        listStyleType: "none",
        justifyContent: "flex-end"
    },
}

const NavBar = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.brand} className="font1">Laurent Klein</h1>
                <ul style={styles.linksContainer} className="font1">
                    {/* CSS of links buttons in index.css */}
                    <li><a href="/" className="linkButton">Home</a></li>
                    <li><a href="/projects" className="linkButton">Projects</a></li>
                    <li><a className="linkButton">About me</a></li>
                </ul>
        </div>
    )
}

export default NavBar
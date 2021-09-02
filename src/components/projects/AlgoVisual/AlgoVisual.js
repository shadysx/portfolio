import React, { useState } from 'react'
import Canvas from './Canvas'

const AlgoVisual = () => {

    const [launch, setLaunch] = useState('false')
    const [input, setInput] = useState('150')

    const styles = {
        container: {
        },
        title : {
            textAlign: "center"
        },
        canvas: {
            display: "block",
            backgroundColor: "gray",
            width: "95%",
            maxHeight: "75vh",
            margin: "0 auto",
            borderRadius: "30px",
            boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
        },
        form : {
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            paddingBottom: "500px"
        },
        label : {
            fontSize: "2.5em",
            marginRight: "1em"
        }
    }

    const inputHandler = (e) => {
        setInput(e.target.value)
        console.log(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setLaunch('true')
        console.log(launch)
    }

    function handleLaunch(){
        setLaunch("false")
    }


    return (
        <div style={styles.container}>
            <h1 style={styles.title}>AlgoVisual</h1> 
            <Canvas handleLaunch={handleLaunch} launch={launch} number={input} style={styles.canvas}/>
            <form style={styles.form} onSubmit={submitHandler}>
                <label htmlFor="number" style={styles.label}>Number of sticks ? :</label>
                <input 
                    name="number" 
                    type="text" 
                    placeholder="100-200 recommanded"
                    onChange={inputHandler}
                    value={input}/>
                <button type="submit">GO</button>
            </form>
        </div>
    )
}

export default AlgoVisual

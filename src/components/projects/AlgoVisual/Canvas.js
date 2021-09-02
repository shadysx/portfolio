import React, { useRef, useEffect} from 'react'

const Canvas = props => {
    const canvasRef = useRef(null)
    const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
    let array = generateArray(props.number)

    function drawRect(ctx, x, y, sizeX, sizeY){
        ctx.fillRect(x, y, sizeX-2, sizeY)
        ctx.strokeRect(x,y,sizeX-2,sizeY)
        ctx.strokeStyle = "FFFFFF"
    }

    function drawArray(ctx, array, xPos, j ){

        ctx.clearRect(0,0, 1000, 500)
        let size = 1000 / array.length  
        
        for (let i = 0; i < array.length; i++) {
            if (j === i){
                ctx.fillStyle = "red"
            }
            else {
                ctx.fillStyle = "black"
            }
            drawRect(ctx, xPos, 500 - array[i] * 5, size, array[i] * 5)
            xPos = xPos + size  
        }
    }

    async function bubbleSort(ctx, array){
        console.log(props)
        for (let i = 0; i < array.length; i++){
            for(let j = 0; j < array.length - 1; j++){
                if(array[j] > array[j+1]){
                    let temp = array[j]
                    array[j] = array[j+1]
                    array[j+1] = temp
                    await sleepNow(0)
                    drawArray(ctx, array,0,j)
                    props.handleLaunch()
                }
            }
        }
    }

    function generateArray(size){
        let randomArray = []
        for (let i = 0; i < size; i++){
           randomArray.push(Math.floor(Math.random() * 100)) 
        }
        return randomArray
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")

        canvas.width = 1000 
        canvas.height = 500

        if (props.launch === "true"){
            bubbleSort(ctx, array)
        }
        else {
            drawArray(ctx, array, 0, 0)
        }

    }, [props])

    return <canvas ref={canvasRef} {...props} />
} 

export default Canvas
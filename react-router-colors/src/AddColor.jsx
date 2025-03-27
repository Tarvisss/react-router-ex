import React, { useState } from "react";
import Colors from "./Colors";
import ColorDetails from "./ColorDetails";

const AddColor = () => {
const [colors, setColors] = useState([])
    const handleSubmit = (event) => {
        event.preventDefault();
        const colorName = event.target[0].value
        const colorCode = event.target[1].value
    
    if(colorName && colorCode){
        setColors((previousColors) => [
            ...previousColors,
            { name: colorName, code: colorCode}
        ]);
    }
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Select a color</h2>
                <input type="text" placeholder="ColorName" required></input>
                <input type="color" required/>
                <button>Add Color</button>
            </form>
            {/* Pass the colors array as a prop to the Colors component */}
            <Colors colors={colors}/>
            <ColorDetails colors={colors}/>
        </div>

    )
}

export default AddColor;
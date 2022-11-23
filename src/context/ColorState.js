import ColorContext from "./ColorContext";
import React, { useState } from 'react';

const ColorState =(props) => {

    const initialColor = 'red'
     
    const [color, setColor]=useState(initialColor)

    const handleColorChange=(clr)=>{
        setColor(clr);
    }

    return (
        <ColorContext.Provider value={{ color, handleColorChange}}>
          {props.children}
        </ColorContext.Provider>
      )
}

export default ColorState
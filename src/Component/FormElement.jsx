import React, {useState, useContext} from 'react';
import ColorContext from '../context/ColorContext';
import TextField from '@mui/material/TextField';


function FormElement() {

  const context = useContext(ColorContext);

  const {color, handleColorChange}= context;

  const handleClick = ()=>{
    handleColorChange('blue')
  }

  return (
    <>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" className='text-field' />

      <h2 style={{color:color}}>Text</h2>
      <button onClick={handleClick}>Change color</button>
    </>
  );
}

export default FormElement;

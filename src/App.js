import React from 'react';
import FormElement from './Component/FormElement';
import ColorState from './context/ColorState';
import './Styles/styles.scss'

function App() {
  return (
    <ColorState>
    <div className='container'>
      <h2 className='container_heading'>Changed border color of an outlined text field <br />
        from <span className='mui-color'></span>#1975d2 to <span className='changed-color'></span>#1d72e7</h2>
      <FormElement />
    </div>
    </ColorState>
  );
}

export default App;

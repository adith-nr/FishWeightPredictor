import React from 'react'
import './Modelspecs.css'
function Modelspecs() {
  return (
    <div className='model'>
     <h2>Model-Specifications</h2>
     <ul id='specs'>
        <li>Model Type: Multiple Linear Regression using Polynomial Regression tactics</li>
        <li>Dataset:Fish Market Dataset</li>
        <li>Evaluation Metrics</li>
        <ul id='metric'>
            <li>MSE: 6003</li>
            <li>R2 score: 0.95</li>
        </ul>
        <li>Features:Length,Height,Width</li>
     </ul>
    </div>
  )
}

export default Modelspecs

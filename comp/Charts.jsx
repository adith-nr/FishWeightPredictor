import React from 'react'
import './Charts.css'
import chart from './chart.png'

function charts() {
  return (
    <div className='Chart'>
     <h2>Data Visualization</h2>
     <p>We have taken help of Matplotlib's pyplot module to give us visual charts</p>
     <img src={chart} alt="Not Found"  id='img'/>
     <h3>Explanantion</h3>
     <ol>
        <li>
            <h4>Scatter Plot:</h4>
            <p>Shows the relationship between predictions and actual values.</p>
        </li>
        <li>
            <h4>Perfect Prediction Line:</h4>
            <p>The red line represents where predicted values equal actual values.
            </p>
        </li>
        <li>
            <h4>Legend and labels:</h4>
            <p>Helps make the plot easier to interpret.
            </p>

        </li>
        <li>
            <h4>Grid and Styling:</h4>
            <p>Makes visualization more professional and readable.
            </p>
        </li>
     </ol>
    </div>
  )
}

export default charts

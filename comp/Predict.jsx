import React from 'react'
import { useState } from 'react'
import './Predict.css'

function Predict() {

    const [features,setFeatures]= useState({species: 0, length1:0,length2:0,length3:0,height:0,width:0})
    const [prediction,setPrediction] = useState('0')

    function handleChange(e) {
      e.preventDefault();
      setFeatures({
          ...features,
          [e.target.name]: e.target.value
      });
  }
  
  
    async function onSubmit(e){
      e.preventDefault()
      console.log(features)
      const speciesOneHot = new Array(7).fill(0);
      speciesOneHot[features.species] = 1; 

    // Create the features array, making sure to add all 6 features (1-hot encoded + 5 others)
    const encodedFeatures = [
        ...speciesOneHot,
        parseFloat(features.length1), 
        parseFloat(features.length2), 
        parseFloat(features.length3), 
        parseFloat(features.height), 
        parseFloat(features.width)
    ];
    
    console.log(encodedFeatures)

      try{
        let response = await fetch('http://127.0.0.1:5000/predict',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({ features: encodedFeatures })
        })

        const data = await response.json()
        console.log(data)
        setPrediction(data.prediction)
        

      }
      catch(error){
        console.error('Error: '+error)
      }
    }


  return (
    <div className='predict'>
      <form action="" onClick={onSubmit}>
        <p id='info'>All numeric units are in cm</p>
      <div className="block">
       <label htmlFor="species" className='label'>Species:</label>
       <select name='species' value={features.species} onChange={handleChange} id="opt">
        <option value="2">Select any one</option>
        <option value="0">Bream</option>
        <option value="1">Parki</option>
        <option value="2">Perch</option>
        <option value="3">Pike</option>
        <option value="4">Roach</option>
        <option value="5">Smelt</option>
        <option value="6">Whitefish</option>
       </select>
      {/* < input type="number" onChange={handleChange} placeholder='species' name='species' value={features.species}/> */}
      </div>
     
     
      <div className="block">
      <label htmlFor="length1" className='label'>Length1:</label>
      <input type="number" onChange={handleChange} placeholder='lengh1' name='length1' value={features.length1}/>
      </div>
     
    
      <div className="block"> 
      <label htmlFor="length2" className='label'>Length2:</label>
      <input type="number" onChange={handleChange} placeholder='lengh2' name='length2' value={features.length2}/>
      </div>
     
   
        <div className="block">
        <label htmlFor="length3" className='label'>Length3:</label>
        <input type="number" onChange={handleChange} placeholder='lengh3' name='length3' value={features.length3}/>
        </div>
      
     
        <div className="block">
          <label htmlFor="height" className='label'>Height:</label>
          <input type="number" onChange={handleChange} placeholder='height' name='height' value={features.height}/>
        </div>
      
      
        <div className="block">
        <label htmlFor="width" className='label'>Width:</label>
        <input type="number" onChange={handleChange} placeholder='width' name='width' value={features.width}/>
        </div>
      
      

       <button id='btn'>Submit</button>

      </form>
       <h2 id='predTitle'> Predicted Weight:{Math.floor(prediction)} grams</h2>
    </div>
  )
}

export default Predict

import React from 'react'
import './ProjectIntro.css'
function ProjectIntro() {
  return (
    <div className='intro-container'>
    <h1 id='title'>Fish Weight Predictor</h1>
    
    <h2 id='intro'>Project Intro</h2>
    <p id='desc'>Welcome to the Fish Weight Predictor! This tool uses a multiple linear regression model to estimate the weight of a fish based on features like length, height, and width. The goal is to demonstrate how machine learning models can be applied to real-world datasets for predictive analysis.
    </p>

  </div>
    
  )
}

export default ProjectIntro

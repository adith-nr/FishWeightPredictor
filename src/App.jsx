
import Modelspecs from '../comp/Modelspecs'
import Navbar from '../comp/Navbar'
import Pic from '../comp/Pic'
import Predict from '../comp/Predict'
import ProjectIntro from '../comp/ProjectIntro'
import Charts from '../comp/charts'
import './App.css'

function App() {
  
  return (
    <div className='container'>
      <Navbar/>
      <Pic/>
      <ProjectIntro/>
      <Modelspecs/>
      <Charts/>
      <Predict/>
    </div>
    
  )
}

export default App

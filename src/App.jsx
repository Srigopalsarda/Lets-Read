import './App.css';
import img1 from './1.png'
import img2 from './2.png'
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  // const apiKey = process.env.NEWS_API
  const apiKey = "01bb866c7235403e8a7c514ecffb366f"
  const [progress, setProgress] = useState(0)
  const [mode,setMode] = useState('light');
  const toggleMode=()=>{
      if(mode==='light'){
          setMode("dark")
          // document.body.style.backgroundColor = "rgb(21 30 78)"
          document.body.style.color = "white"
          document.getElementById("root").style.backgroundImage = {img2}

          
      }
      else {
          setMode("light")
          // document.body.style.backgroundColor = "white"
          document.getElementById("root").style.backgroundImage= {img1};
          
          document.body.style.color = "black"
          

      }
  }
    return (
      <div className={`img-${mode}`}>
        <Router>
        <NavBar mode={mode} toggleMode={toggleMode}/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
          <Route exact path="/"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
 
}

export default App;
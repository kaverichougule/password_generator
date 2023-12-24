import './App.css';
import Body from "./Components/Body";
import { useState } from 'react';
function App() {
  let [isDark,setMode]=useState("App");
  let [container,setContainer]=useState("container");
  function modes(){
    if(isDark==="App"){
      setMode("App2");
      setContainer("containerDark");
    }
    else{
      setMode("App");
      setContainer("container");
    }
  }
  
  return (
    <div className={isDark}>
      <div className={container}>
        <div className="heading">
          <p>Password Generator</p>
          <button onClick={modes}>Dark</button>
        </div>
        <Body />
      </div>
    </div>
  );
}

export default App;

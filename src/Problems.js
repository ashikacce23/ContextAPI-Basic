
// The 1st Code with contextAPI


import React,{useState} from "react"
import './App.css';


const GrandChild = ({brand}) =>{
  return(
    <div>
      <Child value={brand} />
    </div>
  )
}

const Child = ({value}) =>{
  return(
    <div>
      <h2>Child: {value} </h2>
    </div>
  )
}


const  App =() =>{

  const [brandname]=useState("Amazon from GrandChild.")
  return (
    <div className="App">
      <GrandChild brand={brandname}/>
    </div>
  );
}

export default App;

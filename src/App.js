
import React from 'react';
import Context from './Context';
import Provider from './Provider';

const AgentBond = () =>{
    return(
        <Context.Consumer>
          {(context)=>( //always use "context". its fixed value
              <div>
              <h3>Agent Information</h3>
               <h4>Mission Name : {context.data.name} </h4>
               <h3>Mission Status : {context.data.accept} </h3>
               <button onClick={context.isMissionAccepted} >Accept Mission</button>
              </div>
          )}
        </Context.Consumer>
    )
}
const AgentThree = () =>{
    return(
        <div>
            <AgentBond />
        </div>
    )
}
const AgentTwo = () =>{
    return(
        <div>
            <AgentThree />
        </div>
    )
}

const Agent = () =>{
    return(
        <div>
            <AgentTwo />
        </div>
    )
}



const App = () => {
    return (
        // Provider diye App ke wrap kore nilam
        <>
        <h1>Context API Basic Learning.</h1>
        <Provider>
            <Agent />
        </Provider>
        </>
    );
};

export default App;



























// import React,{useState} from "react"
// import './App.css';


// const GrandChild = ({brand}) =>{
//   return(
//     <div>
//       <Child value={brand} />
//     </div>
//   )
// }

// const Child = ({value}) =>{
//   return(
//     <div>
//       <h2>Child: {value} </h2>
//     </div>
//   )
// }


// const  App =() =>{

//   const [brandname]=useState("Amazon from GrandChild.")
//   return (
//     <div className="App">
//       <GrandChild brand={brandname}/>
//     </div>
//   );
// }

// export default App;

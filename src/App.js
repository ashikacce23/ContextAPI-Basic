import React from 'react';
//context import
import Context from "./Context";


const FinalYear =()=>{
    return(
        <div>
            <h1>Another Context API practice.</h1>
           <Context.Consumer>
               {(context)=>(
                 <>
                   <h2>Student Name : {context.data.name} </h2>
                   <h2>Educational Institution : {context.data.universityName} </h2>
                   <h2>Roll Number : {context.data.roll} </h2>
                   <h2>Present Status : <span style={{color:"red"}}> {context.data.presentStatus} </span> </h2>
                   <button onClick={context.isPresent}>Give Attendance</button>
                 </>
                   
               )}
           </Context.Consumer>
        </div>
    )
}
const ThirdYear =()=>{
    return(
        <div>
            <FinalYear />
        </div>
    )
}
const SecondYear =()=>{
    return(
        <div>
            <ThirdYear />
        </div>
    )
}

const FirstYear =()=>{
    return(
        <div>
            <SecondYear />
        </div>
    )
}

const App = () => {
    return (
        <div>
            <FirstYear />
        </div>
    );
};

export default App;
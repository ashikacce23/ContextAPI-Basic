import React,{useState} from "react";

//import context from Context.js file
import PackageContext from "./Context"

//Now create Provider & and provide some value as props to the Children.

// const Provider = (props) =>{
//     return()
// }
const Provider = (props) =>{
    //what value we want to send is store in useState.
    const [mission, setMission] = useState({
        name:"Go to Russia",
        agent:"09",
        accept:"Not Accepted"
    })
    return(
        <PackageContext.Provider
        //the stored value is send by a method
          value={{
              data:mission,
              isMissionAccepted: ()=>{
                  setMission({...mission, accept:"Accepted"})
              }
          }}
        >
            {props.children} {/* it is default value */}
        </PackageContext.Provider>
    )
}
export default Provider;
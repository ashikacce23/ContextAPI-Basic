import React, { useState } from 'react';
//import context
import createContext from './Context';

const Provider = (props) => {
    const [present, setPresent] = useState({
        name:"Ashikur Rahman",
        roll:"23",
        universityName:"Islamic University",
        presentStatus:"Absent"
    })
    return (
        <>
        <createContext.Provider
           value={{
               data:present,
               //method
               isPresent:()=>{
                   setPresent({...present, presentStatus:"Present"})
               }
           }}
        >
            {props.children}
        </createContext.Provider>
        </>
    );
};

export default Provider;
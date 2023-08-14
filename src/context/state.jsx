import React,{useState} from 'react';
import Context from './context';

const State=(props)=>{
    let [sidebar,setsidebar]=useState(true);

    return(
        <Context.Provider value={{sidebar,setsidebar}}>
        {props.children}
        </Context.Provider>
    )
}
export default State;
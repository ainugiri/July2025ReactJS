import React from 'react';
import {useState, useContext} from "react";
import ReactDom from "react-dom/client";

const myOwnContext = React.createContext();
function UseContext_Ex() {
    const [userName, setUserName] = useState("ainugiri");
    return (
        <myOwnContext.Provider value = {userName}>
            <h1>Welcome {useContext(myOwnContext)} to ReactJS Context API</h1>
            <h2>Context API is used to pass data from parent to child component without props drilling.</h2>
            <h3>It is used to avoid prop drilling.</h3>     
        </myOwnContext.Provider>
    );
}

function abcComp1() {
    return (
        <div>
            <h1>This is abcComp1.</h1>
            <h2>It is a child component of useContext_Ex.</h2>
        </div>
    )
}

function abcComp2() {
    return (
        <div>
            <h1>This is abcComp2.</h1>
            <h2>It is a child component of useContext_Ex.</h2>
        </div>
    )
}

function abcComp3() {
    return (
        <div>
            <h1>This is abcComp3.</h1>
            <h2>It is a child component of useContext_Ex.</h2>
        </div>
    )
}

function abcComp4() {
    const uname = useContext(myOwnContext);
    return (
        <div>
            <h1>This is abcComp4.</h1>
            <h2>It is a child component of useContext_Ex.</h2>
            <p>Received username: {uname}</p>
        </div>
    )
}

export { UseContext_Ex, abcComp1, abcComp2, abcComp3, abcComp4 };
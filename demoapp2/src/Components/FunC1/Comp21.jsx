import React from "react";
import { useState, createContext, useContext } from "react";

const UserContext = createContext();

function Comp21(){
    // user = 'Giri Prasad '
//    const user = 'Giri Prasad ';
    const [user, setUser] = useState('Giri Prasad');

   return (
    <UserContext.Provider value={user}>
        <h1>This is Comp21. Welcome {user}!</h1>
        <Comp22 />
    </UserContext.Provider>
   );
}

function Comp22() {
    const user = useContext(UserContext);
    console.log("User in Comp22:", user);
    return (
        <div>
            <h1>This is Comp22. Welcome {user}!</h1>
        </div>
    );
}
export default Comp21;
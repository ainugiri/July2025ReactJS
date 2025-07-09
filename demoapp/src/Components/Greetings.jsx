import React from "react";

function Greetings({name = 'Guest', age = '18'} ) {
    return <h1>Hello {name}, His age is {age} Welcome to the React App!</h1>;
}
export default Greetings;

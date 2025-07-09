import React from 'react';  

function Comp1(props) {
    return (
        <div>
            <h1>Hello, {props.name}! and his age is {props.age}
            <br />
            This is a functional component.
            </h1>
        </div>
    );
}
// Exporting the component
export default Comp1;   
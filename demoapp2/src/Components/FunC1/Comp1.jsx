import React from 'react';  

function Comp1(props) {
    return (
        <div>
            {props.userName.map((user, index) => (
                <h2 key={index}>Welcome {user} to ReactJS Functional Components</h2>
            ))}

        </div>
    );
}

function Comp2() {
    return (
        <div>
            <h1>This is a component2.</h1>
        </div>
    );
}
// Exporting the component
export { Comp1, Comp2 };
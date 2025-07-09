import React from 'react';

// function
// function Name(arg) {
  // function body
// }

// const FuncName = (arg/props) => {
    // function body
    // return (
    //         <div>
    //             <h1>Hello from Functional Component B</h1>
    //         </div>
    //     );
    // 
    // // export default FuncName;

function FuncComB(props) {
    return (
        <div>
            <h1>Hello {props.name} from Functional Component B</h1>
        </div>
    )
}
export default FuncComB;
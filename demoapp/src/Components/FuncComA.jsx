// import React from 'react';
// function functionalComponentName() {
//   return (
//     <div>
//       <h1>Hello from Functional Component A</h1>
//     </div>
//   );
// }
import React from 'react';
import CompC from './CompC';
import './FuncComA.css'; // Assuming you have a CSS file for styling
function FuncComA() {
    return(
        <>
            <h1>Hello from Functional Component A</h1>
            <CompC name="Giri" city="Hyderabad" />
            <CompC name="React" city="Hyderabad" />
        </>
    );
}
export default FuncComA;
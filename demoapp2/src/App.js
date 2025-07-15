import React from 'react';
import { useState, useEffect, useRef } from 'react';
function App() {
  const [inputValue, setInputValue] = useState('');
  const count = useRef(0);

  useEffect(() => { // Rendering effect
    // This effect runs after every render
    // It can be used to perform side effects like logging, fetching data, etc.
    console.log('Component rendered');
    // Increment the count of renders
    count.current +=1;
    console.log(`Component rendered ${count.current} times`);
    //  change the background color every 5 renders
    if (count.current % 5 === 0) {
      document.body.style.backgroundColor = 
        document.body.style.backgroundColor === 'lightblue' ? 'orange' : 'lightblue';
    }
  }, [inputValue]); // Dependency array, effect runs when inputValue changes
  return(
    

    <div>
      <h1>Welcome to the React App</h1>
      <p>This is a simple React application demonstrating functional components.</p>
      <p>Explore the components in the FunC1 directory to see examples of state management
      and context usage.</p>
      <p>Check out the HooksEx component for an example of using the useState hook
      to manage state in functional components.</p>
      <p>Enjoy learning React!</p>
      <p>For more examples, refer to the Comp1 and Comp2 components.</p >
      

      <input type="text" placeholder="Type something..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

    </div>
  )
}
export default App;


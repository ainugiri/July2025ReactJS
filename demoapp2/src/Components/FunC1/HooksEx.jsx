import { useState } from "react";

function HooksEx() {
    const [likeCount, setLikeCount] = useState(0);
    const increment = () => {
        setLikeCount(likeCount + 1);
    }

    return (
        <div>
            <p>Likes: {likeCount}</p>
            <button onClick={increment}>Like</button>
        </div>
    );
}

export default HooksEx;


// useState - State management in functional components
//  increment - update the state
//  re-rendering
//  likeCount - state variable
import { useState } from "react";

function Comp11() {
    const [count, setCount] = useState(55);

    return (
        <div>
            <h2>Counter: {count}</h2>
            <Comp12 number={count}/>
        </div>
    );
}

function Comp12({number}) {
    return (
        <div>
            <h1>This is Comp12.</h1>
            <Comp13 number={number}/>
        </div>
    );
}

function Comp13({number}) {
    return (
        <div>
            <h1>This is Comp13.</h1>
            <Comp14 number={number}/>
        </div>
    );
}

function Comp14({number}) {
    return (
        <div>
            <h1>This is Comp14.</h1>
            <p>Received number: {number}</p>
        </div>
    );
}


export default Comp11;

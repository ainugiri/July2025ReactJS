import React from 'react';
function FruitList({fruits}) {
    return (
        <div>
            <h2>Fruit List</h2>
            <ul>
                {fruits.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default FruitList;
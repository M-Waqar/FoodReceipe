import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Receipedetails({ ingredients }) {
    return (
        <>
            {
                ingredients &&
                ingredients.map((ing) => {
                    return (
                        <ul key={uuidv4()} className="list-group list-group-flush">
                            <li className="list-group-item">{ing.text}</li>
                            <li className="list-group-item">{ing.weight}</li>
                            <li className="list-group-item">{ing.foodCategory}</li>
                        </ul>
                    )
                })
            }
        </>
    )
}

export default Receipedetails;

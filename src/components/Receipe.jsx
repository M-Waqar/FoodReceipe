import React, { useState } from 'react';
import Receipedetails from './Receipedetails';

function Receipe({ receipe }) {
    const [showIng, setShowIng] = useState(false);
    const { label, image, url, ingredients } = receipe.recipe;
    return (
        <div className="col-4 mb-5">
            <div className="card">
                <img className="card-img-top" src={image} alt={label} />
                <div className="card-body">
                    <a href={url} target="_blank" rel="noreferrer">
                        <h5 className="card-title">{label}</h5>
                    </a>
                    <button onClick={() => {setShowIng(!showIng)}} className="btn btn-primary btn-block">Ingrediants</button>
                </div>
                {
                    showIng && <Receipedetails ingredients={ingredients} />
                } 
                
            </div>
        </div>
    )
}

export default Receipe;

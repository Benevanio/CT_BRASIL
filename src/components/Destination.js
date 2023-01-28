import React from 'react';
import "./Destination.css";
import Destinatio from './DestineData';
const Destination = () => {
    return (
        <div className="destination">
            <h1>Destinos Populares</h1>
            <p>
                Conheça os destinos mais visitados no estado de Sergipe e se apaixone.
            </p>
            <Destinatio />
        </div>
    );
}

export default Destination;

import React from 'react';
import "./Destination.css";
const Destination = () => {
    return (
        <div className="destination">
            <h1>Destinos Populares</h1>
            <p>
                Conheça os destinos mais visitados no estado de Sergipe e se apaixone.
            </p>
            <div className="Firts">
                <div className="Desc_text">
                    <h2>Rainha das vaquejadas</h2>
                    <p>
                        Porto da Folha é um município brasileiro do estado de
                        Sergipe. Localiza-se a uma latitude 10º30'30" sul e a uma
                        longitude 37º30'00" oeste, estando a uma altitude de 10
                        metros. Sua população estimada em 2010 era de 4.000
                        habitantes.
                    </p>
                </div>
                <div className="Img">
                    <img src="https://user-images.githubusercontent.com/78994881/215268830-ba825bbd-1d71-433a-96b4-5e865a7174b2.jpg" alt='Porto_da_folha'/>
                    <img src="https://user-images.githubusercontent.com/78994881/215268833-1065bcb9-463c-414f-bcd8-de54121a736e.jpg" alt='Porto_da Folha'></img> </div>
            </div>
        </div>
    );
}

export default Destination;

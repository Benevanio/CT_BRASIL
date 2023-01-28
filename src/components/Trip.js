import "./Trip.css";
import React from 'react';
import TripDate from './TripDate';
import FirstImg from '../IMG/O.jpg';
import SecondImg from '../IMG/Orla_de_Atalaia_-_Aracaju.jpg';
import ThirdImg from '../IMG/Ponte_Aracaju-Barra.jpg';
const Trip = () => {
    return (
        <div className="trip">
            <h1>Viagens Recentes</h1>
            <p>
                Veja as viagens que fizemos recentemente.
            </p>
            <div className="t-card">
                <TripDate
                    img={FirstImg}
                    heading="Praia do Mosqueiro"
                    text="A praia do Mosqueiro fica a cerca de 22 km ao sul de Aracaju, em Sergipe.
                Localizada junto à foz do rio Vaza Barris, a praia tem areias claras e finas.
                Além disso, tem uma grande faixa de areia grossa mas dourada, e dependendo do tempo, o mar poderá formar algumas ondas. 
                No entanto, mesmo com algumas ondas, as águas são transparentes, 
                sendo ideal para quem quer tomar um bom banho de mar e para a prática de esportes como o windsurf."

                />
                <TripDate
                    img={SecondImg}
                    heading="Praia do Mosqueiro"
                    text="Atalaia é uma praia brasileira da cidade de Aracaju, Sergipe.
                 A praia é uma das mais famosas do Nordeste e representa Sergipe através do cartão postal na Praça dos Arcos.
                É onde está localizada a orla de Atalaia, é a praia urbana mais popular da cidade de Aracaju.
                Com cerca de seis quilômetros de extensão, é um dos principais cartões-postais da capital sergipana.                
                Na orla de Atalaia existem opções de lazer como bares e casas de dança e música, além de barracas de água de coco e quadras de basquete,
                 futebol, tênis e uma pista de skate.Dentro desse conjunto de belezas, vale destacar que essa orla, considerada uma das mais bonitas do Brasil, 
                oferece aos cidadãos e turistas o que há de melhor em lazer e entretenimento."
                />
                <TripDate
                    img={ThirdImg}
                    heading="Ponte Aracaju-Barra dos Coqueiros"
                    text="A Ponte Aracaju-Barra dos Coqueiros, tendo como nome oficial Ponte Construtor João Alves, 
                liga a capital Aracaju ao município de Barra dos Coqueiros, cidades do litoral de Sergipe. 
                Aracaju encontrava-se separada de sua vizinha Barra dos Coqueiros pelo Rio Sergipe. Sua inauguração foi prevista para 25 de agosto de 2006,
                 mas só aconteceu em 24 de setembro de 2006, às 18:00 h. 
                 Seu propósito criar uma via de ligação rodoviária entre Aracaju e o porto do Estado de Sergipe, à beira do oceano Atlântico, 
                 dentro do Município da Barra dos Coqueiros e as praias do litoral norte. Com a obra, o litoral norte do Estado,
                 que vai da foz do Rio Sergipe até à foz do Rio São Francisco ficou mais acessível ao turismo em Aracaju."
                />
            </div>
        </div>
    );
}

export default Trip;

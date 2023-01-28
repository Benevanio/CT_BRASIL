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
            <Destinatio
                Heading="Porto Da Folha"
                Text=" Em novembro de 1807, 
            Antônio Gomes Ferrão de Castelo Branco
            registrou seus títulos imobiliários na Câmara de Propriá,
            declarando ser de 30 léguas a extensão de suas terras, 
            latifúndio que constituiu o morgado de Porto da Folha.
            Porém, quem colonizou as terras de Porto da 
            Folha foi Tomás de Bermudes, fundando um curral e fazendo amizade 
            com os índios. “A fazenda Curral do Buraco originou a povoação do
            Buraco, que em 19 de fevereiro de 1841 passou a se chamar 
            Nossa Senhora da Conceição de Porto da Folha”, 
            informa a Enciclopédia. Até hoje quem nasce 
            em Porto da Folha é conhecido por buraqueiro. 
            Os moradores mais antigos acreditam que o nome Buraco
            surgiu porque a cidade é cercada de morros, 
            dando a impressão de que fica em uma baixada."
            Heading2="Caninde De São Francisco"
            Text2="O município foi palco de muitas cenas da minissérie Amores Roubados e da novela Cordel Encantado,ambas exibidas na Rede Globo.
            Mas a localidade tornou-se massivamente conhecida ao servir de cenário e caracterizar ambientação-base do enredo da telenovela Velho Chico,
            também exibida pela Globo.
            Cidade que tem uma prainha famosa,com intuito de atender a crescente demanda turística, no ano de 2016 a localidade passou
            a contar com a Orla Salomão Porfírio Britto para a comodidade tanto de seus habitantes locais como
            também para a apreciação da magnífica vista do emblemático Rio São Francisco como presente aos seus visitantes.
        "
            Heading3="Aracaju"
            Text3 ="É apontada como a capital com menor desigualdade do Nordeste Brasileiro,
            como a cidade com os hábitos de vida mais saudáveis do país, exemplo nacional na consideração de ciclovias nos projetos de
            deslocamento urbano e é considerada a segunda capital do país com menor índice de fumantes.
            Está entre as capitais com os custos de vida mais reduzidos do país,
            tendo focado mais recentemente suas ações turísticas na criação de alojamentos coletivos,
            tais como os mundialmente conhecidos hostels.
            As terras onde hoje se encontra Aracaju originaram-se de sesmarias doadas a Pero Gonçalves por volta do ano de 1602.
            No ano de 1699, tem-se notícia de um povoado surgido às margens do Rio Sergipe, próximo à região onde este deságua no mar,
            com o nome de Santo Antônio de Aracaju.
        "

            />
        </div>
    );
}

export default Destination;

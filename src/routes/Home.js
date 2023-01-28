import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Footer from '../components/Footer'
import Trip from '../components/Trip'

function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="Hero"
                heroImg="https://user-images.githubusercontent.com/78994881/215232127-b81a6ae3-9c38-4b7e-83b6-881a3e7befb7.jpg"
                title="Sergipe"
                text="Bem Vindos ao meu Estado"
                btnText="Plano de Viagem"
                url="/"
                btnClass="show"
            />
            <Destination />
            <Trip />
            <Footer />
        </>
    )
}

export default Home
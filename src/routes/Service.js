import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Trip from '../components/Trip'

function Service() {
    return (
        <> <Navbar />
            <Hero
                cName="like__Hero"
                heroImg="https://user-images.githubusercontent.com/78994881/215267189-ada19049-60b4-40e0-bf8a-b9a5e6d241dd.jpg"
                title="Trilhas ecológicas"
                btnClass="Hide"
            />
            <Trip />
            <Footer />
        </>
    )
}

export default Service
import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
function Contact() {
    return (
        <>
        <Navbar />
            <Hero
                cName="like__Hero"
                heroImg="https://user-images.githubusercontent.com/78994881/215267140-f6e4e8a4-2840-41ec-b8b2-bc70df46f621.jpg"
                title="Contato"
                btnClass="Hide"
            />
             <Footer />
        </>
    )
}

export default Contact
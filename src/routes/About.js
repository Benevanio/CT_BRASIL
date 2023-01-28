import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
function About() {
    return (
        <>
            <Navbar />
            <Hero
                cName="like__Hero"
                heroImg="https://user-images.githubusercontent.com/78994881/215265700-f15f815f-cbdc-43e2-a0d1-2cc42a897052.jpg"
                title="Xingo-agreste Sergipano"
                btnClass="Hide"
            />
             <Footer />
        </>
    )
}

export default About
import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import Footer from '../Footer'
import MainSection from '../MainSection'
import Navbar from '../Navbar';



function Home() {
    return (
        <>
            <Navbar />
            <MainSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;
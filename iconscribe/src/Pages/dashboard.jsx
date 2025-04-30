import React from "react"
import Offered from "../components/offered"
import '../css/dashboard.css'
import Header from '../components/header'
import Hero from '../components/Hero'
import atp from "../assets/atp.png"
import calendar from "../assets/calendar.png"
import yearbook from "../assets/yearbook.png"
import document from "../assets/brochure.png"
import Transaction from "../components/transaction"
import About from "../components/aboutus"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Dashboard() {
    const services = [
        {
            label: "Yearbooks & Books",
            imgSrc: yearbook,
            description: "High-quality printing for yearbooks, journals, and more."
        },
        {
            label: "Calendars & Brochures",
            imgSrc: calendar ,
            description: "Custom calendar and brochure printing with various layout options."
        },
        {
            label: "Official Receipts (ATP)",
            imgSrc: atp ,
            description: "We provide Authorized Receipt Book printing for business needs.",
            linkTo:'/atp'
        },
        {
            label: "Document Printing",
            imgSrc: document,
            description: "Professional document printing for reports, flyers, and other materials."
        }
    ];

    return (
        <>
        <div id="home">
             <Header/>
        </div>
        
        <Hero />

        <div id="services" className="Service section">
            <h1 className="">Services Offered</h1>
            <div className="offered-container">
                {services.map((service, index) => (
                   <Offered
                   key={index}
                   label={service.label} 
                   imgSrc={service.imgSrc}
                   description={service.description}
                   linkTo={service.linkTo}
                 />
                ))}
            </div>
        </div>
        <div id="transactions"  className="section">
            <Transaction/>
        </div>

        <div id="about"  className="section">
            <About/>
        </div>

        <div id="contact"  className="section">
            <Contact/>
        </div>
        
        <Footer/>
        </>
    );
}

export default Dashboard;

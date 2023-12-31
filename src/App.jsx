import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import Header  from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { ShlokComponent } from "./components/ShlokComponent";
import { DonationCounter } from "./components/DonationCounter";
import {DonationDetails} from "./components/DonationDetails";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import  ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header  />
      <DonationCounter />
      <ShlokComponent />
      <Features data={landingPageData.Features} />
      <DonationDetails />
      <About data={landingPageData.About} />
      {/* <Services data={landingPageData.Services} /> */}
      <Gallery/>
      <Testimonials data={landingPageData.Testimonials} />
      <Team />
      {/* <Team1 /> */}
      <Contact data={landingPageData.Contact} />
      
       <div className="whatsapp-button-container">
        <FloatingWhatsApp
          phoneNumber="7400056919"
          accountName="ISKCON"
          avatar="https://iskconmumbai.com/images/logo-white.png"
          statusMessage="Welcome to ISKCON!"
        />
      </div> 
      <ScrollToTop/> 


    </div>
  );
};

export default App;

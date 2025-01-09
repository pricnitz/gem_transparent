import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import About from "../components/About";
import Abouttwo from "../components/Abouttwo";
import Overview from "../components/Overview.jsx";
import Overviewcards from "../components/Overviewcards.jsx";
import Howtochoosdiamond from "../components/Howtochoosdiamond.jsx";
import HowtochoosdiamondAccordoin from "../components/HowtochoosdiamondAccordoin.jsx";
import Flurosence from "../components/Flurosence.jsx";
import Grilled from "../components/Grilled.jsx";
import Gemsjudge from "../components/Gemsjudge.jsx";
import Happydiamondhundting from "../components/Happydiamondhundting.jsx";
import Termscondition from "../components/Termscondition.jsx";
import Footer from "../components/Footer.jsx";
import '../css/locomotive-scroll.css';
import '../css/App.css';
import '../css/Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    const createScrollTrigger = (triggerClass, linkId) => {
      ScrollTrigger.create({
        trigger: triggerClass,
        start: "top center",
        end: "bottom center", 
        onEnter: () => gsap.to(`#${linkId}`, { color: "white", duration: 0.3 }),
        onLeave: () => gsap.to(`#${linkId}`, { color: "", duration: 0.3 }),
        onEnterBack: () => gsap.to(`#${linkId}`, { color: "white", duration: 0.1 }),
        onLeaveBack: () => gsap.to(`#${linkId}`, { color: "", duration: 0.1}),
      });
    };

  

    // Call the helper function for each section and button id
    createScrollTrigger(".hero", "home_btn");
    createScrollTrigger(".hero", "about_btn");
    createScrollTrigger(".hero", "services_btn");
    createScrollTrigger(".hero", "contact_btn");
    createScrollTrigger(".hero", "showmodalone_btn");

    createScrollTrigger(".overview", "home_btn");
    createScrollTrigger(".overview", "about_btn");
    createScrollTrigger(".overview", "services_btn");
    createScrollTrigger(".overview", "contact_btn");
    createScrollTrigger(".overview", "showmodalone_btn");

    createScrollTrigger(".howtochoosdiamondAccordoin", "home_btn");
    createScrollTrigger(".howtochoosdiamondAccordoin", "about_btn");
    createScrollTrigger(".howtochoosdiamondAccordoin", "services_btn");
    createScrollTrigger(".howtochoosdiamondAccordoin", "contact_btn");
    createScrollTrigger(".howtochoosdiamondAccordoin", "showmodalone_btn");

    // Common link color animation for all
    ScrollTrigger.create({
      trigger: ".hero, .overview, .howtochoosdiamondAccordoin",
      start: "top center",
      end: "bottom top",
      onEnter: () => gsap.to(".nav_link", { color: "white", duration: 0.3 }),
      onLeave: () => gsap.to(".nav_link", { color: "", duration: 0.3 }),
      onEnterBack: () => gsap.to(".nav_link", { color: "white", duration: 0.3 }),
      onLeaveBack: () => gsap.to(".nav_link", { color: "", duration: 0.3 }),
    });
  }, []);

  return (
    <main className='pages' >
      <div className="left_sidebar_container">
      <Sidebar />
      </div>
      <div className="right_page_container" data-scroll-container>
      <Hero />
      <About />
      <Abouttwo />
      <Overview />
      <Overviewcards />
      <Howtochoosdiamond />
      <HowtochoosdiamondAccordoin />
      <Gemsjudge />
      <Flurosence />
      <Grilled />
      <Happydiamondhundting />
      <Termscondition />
      <Footer />

      </div>
     
    </main>
  
  
  );
};

export default Home;

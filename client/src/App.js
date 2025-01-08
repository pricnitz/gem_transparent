import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './css/locomotive-scroll.css';
import './css/style.css';
import './css/App.css';
import Sidebar from './components/Sidebar';
import Home from './page/Home'

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll_one = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      inertia: 0.3,
      scrollFromAnywhere: true,
      tablet: { breakpoint: 0 },
    });

    // Sync ScrollTrigger with LocomotiveScroll
    scroll_one.on('scroll', () => {
      ScrollTrigger.refresh(); // Ensure ScrollTrigger updates its state on scroll
    });

    // Ensure the scroll position is maintained on page reload
    window.addEventListener('load', () => {
      scroll_one.scrollTo(0, 0);
      scroll_one.update();  // Ensure Locomotive Scroll is updated
    });

    // Clean up LocomotiveScroll instance on component unmount
    return () => {
      scroll_one.destroy();
    };
  }, []);

  useEffect(() => {
    // Apply animation to each section inside the main container
    const sections = document.querySelectorAll('.section');

    gsap.fromTo(
      sections,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sections,
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);
  return (
    <div className="App" >
      <aside className='aside'>
        <Sidebar/>
      </aside>
      <main className='pages'>
        <Home/>  
      </main>    
    </div>
  );
}

export default App;

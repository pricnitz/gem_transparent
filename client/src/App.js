import React, { useEffect } from 'react';
import Header from './components/Header';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './css/locomotive-scroll.css';
import './css/style.css';
import './css/App.css';
import AllRoutes from './page/AllRoutes';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const scroll_one = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      inertia: 0.4,
      scrollFromAnywhere: true,
      tablet: { breakpoint: 0 },
    });

  
    scroll_one.on('scroll', () => {
      ScrollTrigger.refresh(); 
    });

    window.addEventListener('load', () => {
      scroll_one.scrollTo(0, 0);
      scroll_one.update(); 
    });

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
  
      <main className='pages'>
         <div className='header'>
            <Header />
         </div>

          <AllRoutes/>
      </main>    
  );
}

export default App;

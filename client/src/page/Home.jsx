import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import About from '../components/About';
import Abouttwo from '../components/Abouttwo';
import Overview from '../components/Overview.jsx';
import Overviewcards from '../components/Overviewcards.jsx';
import Howtochoosdiamond from '../components/Howtochoosdiamond.jsx';
import HowtochoosdiamondAccordoin from '../components/HowtochoosdiamondAccordoin.jsx';
import Flurosence from '../components/Flurosence.jsx';
import Grilled from '../components/Grilled.jsx';
import Gemsjudge from '../components/Gemsjudge.jsx';
import Happydiamondhundting from '../components/Happydiamondhundting.jsx';
import Termscondition from '../components/Termscondition.jsx';
import Footer from '../components/Footer.jsx';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {


  return (
    <main data-scroll-container>
      <section className="hero section" data-scroll >
        <Hero />
      </section>
      <section className="about section" data-scroll>
        <About />
      </section>
      <section className="abouttwo section" data-scroll>
        <Abouttwo />
      </section>
      <section className="overview section" data-scroll>
        <Overview />
      </section>
      <section className="overviewcards section" data-scroll>
        <Overviewcards />
      </section>
      <section className="howtochoosdiamond section" data-scroll>
        <Howtochoosdiamond />
      </section>
      <section className="howtochoosdiamondAccordoin section" data-scroll>
        <HowtochoosdiamondAccordoin />
      </section>
      <section className="flurosence section" data-scroll>
        <Flurosence />
      </section>
      <section className="grilled section" data-scroll>
        <Grilled />
      </section>
      <section className="gemsjudge section" data-scroll>
        <Gemsjudge />
      </section>
      <section className="happydiamondhundting section" data-scroll>
        <Happydiamondhundting />
      </section>
      <section className="termscondition section" data-scroll>
        <Termscondition />
      </section>
      <Footer />
    </main>
  );
};

export default Home;

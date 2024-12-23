import React, { useRef } from 'react';
import Balance from './Components/Balancing/Balance';
import Nav from './Components/NavBar/Nav';
import Market from './Components/Market/Market';
import Partners from './Components/partners/Partners';
import Footer from './Components/Footer/Footer';

const App = () => {
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const workWithUsRef = useRef(null);
  const blogRef = useRef(null);

  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Nav 
        onNavigate={(section) => {
          switch (section) {
            case 'About Us':
              handleScroll(aboutUsRef);
              break;
            case 'Our Services':
              handleScroll(servicesRef);
              break;
            case 'Work with Us':
              handleScroll(workWithUsRef);
              break;
            case 'BLOG':
              handleScroll(blogRef);
              break;
            default:
              break;
          }
        }}
      />
      <div ref={aboutUsRef}>
        <Balance />
      </div>
      <div ref={servicesRef}>
        <Market />
      </div>
      <div ref={workWithUsRef}>
        <Partners />
      </div>
      <div ref={blogRef}>
        <Footer />
      </div>
    </div>
  );
};

export default App;

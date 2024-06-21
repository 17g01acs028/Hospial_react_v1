import { useEffect, useState } from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero';
import useScrollReveal from './utils/useScrollReveal';
import Services from './sections/Services';
import About from './sections/About';
import Footer from './sections/Footer';
import Listing from './sections/Listing';
import Blog from './sections/Blog';
import useHeadView from './utils/useHeadView';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useScrollReveal();
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  useHeadView();
  return (
    <div className="body">
      <div className={`preloader ${isLoading ? "" : "loaded"}`} data-preloader>
        <div className="circle"></div>
      </div>
     <Header/>
     <main>
      <article>
        <Hero/>
        <Services/>
        <About/>
        <Listing/>
        <Blog/>
      </article>
     </main>
     <Footer/>
    </div>
 
   
  )
}

export default App

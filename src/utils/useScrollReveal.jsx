import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");

    const revealElementOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
          revealElements[i].classList.add("revealed");
        } else {
          revealElements[i].classList.remove("revealed");
        }
      }
    }

    window.addEventListener("scroll", revealElementOnScroll);
    window.addEventListener("load", revealElementOnScroll);

    return () => {
      window.removeEventListener("scroll", revealElementOnScroll);
      window.removeEventListener("load", revealElementOnScroll);
    };
  }, []);
};

export default useScrollReveal;

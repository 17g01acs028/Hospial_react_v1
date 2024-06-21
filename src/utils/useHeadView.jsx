import React, { useEffect } from 'react'

const useHeadView = () => {
    useEffect(() => {
        const header = document.querySelector("[data-header]");
        const backTopBtn = document.querySelector("[data-back-top-btn]");
    
        const activeElementOnScroll = () => {
          if (window.scrollY > 100) {
            header.classList.add("active");
            backTopBtn.classList.add("active");
          } else {
            header.classList.remove("active");
            backTopBtn.classList.remove("active");
          }
        };
    
        window.addEventListener("scroll", activeElementOnScroll);
    
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener("scroll", activeElementOnScroll);
        };
      }, []);
}

export default useHeadView

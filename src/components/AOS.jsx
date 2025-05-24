

export default AOS(){

    import React, { useEffect } from "react";
    import AOS from "aos";
    import "aos/dist/aos.css";
    
    
    
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            offset: 100, // Offset from the trigger point
            easing: "ease-in-out", // Animation easing
            delay: 100, // Delay in milliseconds
            once: true, // Whether animation should happen only once
        });
    }, []);
}
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      easing: "ease-in-out",
    });
  }, [location]);

  return null;
};

export default ScrollToTop;

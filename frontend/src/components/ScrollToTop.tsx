import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollableDiv = document.querySelector(".overflow-y-scroll"); // Target the container
    if (scrollableDiv) {
      scrollableDiv.scrollTo({ top: 0, behavior: "smooth" }); // Scroll container
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

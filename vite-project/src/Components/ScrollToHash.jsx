import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const element = document.querySelector(hash);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block:
          hash === "#about" || hash === "#contact"
            ? "center"
            : "start",
      });
    }
  }, [hash]);

  return null;
}

export default ScrollToHash;
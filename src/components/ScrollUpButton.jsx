import { useEffect, useState } from "react";

export const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <a href="https://wa.link/ikhocj">
        <button
          className="w-12 h-12 fixed bottom-6 right-6  rounded-xl   cursor-pointer flex justify-center items-center transition z-50"

          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
            <g>
              <path
                fill="#BFC8D0"
                fillRule="evenodd"
                d="M16 31c7.732 0 14-6.268 14-14S23.732 3 16 3 2 9.268 2 17c0 2.51.661 4.867 1.818 6.905L2 31l7.315-1.696A13.938 13.938 0 0016 31zm0-2.154c6.543 0 11.846-5.303 11.846-11.846 0-6.542-5.303-11.846-11.846-11.846C9.458 5.154 4.154 10.458 4.154 17c0 2.526.79 4.867 2.138 6.79L5.23 27.77l4.049-1.013a11.791 11.791 0 006.72 2.09z"
                clipRule="evenodd"
              ></path>
              <path
                fill="url(#paint0_linear_87_7264)"
                d="M28 16c0 6.627-5.373 12-12 12-2.528 0-4.873-.782-6.807-2.116L5.09 26.909l1.075-4.03A11.945 11.945 0 014 16C4 9.373 9.373 4 16 4s12 5.373 12 12z"
              ></path>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16c0 2.51.661 4.867 1.818 6.905L2 30l7.315-1.696A13.938 13.938 0 0016 30zm0-2.154c6.543 0 11.846-5.303 11.846-11.846 0-6.542-5.303-11.846-11.846-11.846C9.458 4.154 4.154 9.458 4.154 16c0 2.526.79 4.867 2.138 6.79L5.23 26.77l4.049-1.013a11.791 11.791 0 006.72 2.09z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#fff"
                d="M12.5 9.5c-.333-.669-.844-.61-1.36-.61-.921 0-2.359 1.105-2.359 3.16 0 1.684.742 3.528 3.243 6.286 2.414 2.662 5.585 4.039 8.218 3.992 2.633-.047 3.175-2.313 3.175-3.078 0-.339-.21-.508-.356-.554-.897-.43-2.552-1.233-2.928-1.384-.377-.15-.573.054-.695.165-.342.325-1.019 1.284-1.25 1.5-.232.215-.578.106-.721.024-.53-.212-1.964-.85-3.107-1.958-1.415-1.371-1.498-1.843-1.764-2.263-.213-.336-.057-.542.021-.632.305-.351.726-.894.914-1.164.189-.27.04-.679-.05-.934-.387-1.097-.715-2.015-.981-2.55z"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_87_7264"
                  x1="26.5"
                  x2="4"
                  y1="7"
                  y2="28"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5BD066"></stop>
                  <stop offset="1" stopColor="#27B43E"></stop>
                </linearGradient>
              </defs>
            </g>
          </svg>
        </button>
      </a>
    </>
  );
};

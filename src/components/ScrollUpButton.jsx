import { useEffect, useState } from "react";

export const ScrollUpButton = () => {




  return (
    <>
      <a href="https://wa.link/ikhocj">
        <button
          className="w-12 h-12 fixed bottom-6 right-6  rounded-xl   cursor-pointer flex justify-center items-center transition z-50"

          aria-label="Scroll to top"
        >
          <img src="/logowpp.png" />
        </button>
      </a>
    </>
  );
};

/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-30 border-b-[1px] bg-blur ">
      <div className="py-[16px] flex relative justify-between w-full mr-auto ml-auto max-w-[1000px]">
        <a className="pt-1 pl-6 md:pl-4 lg:pl-0" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" height="25" width="106">
            <path d="M68.664 8.915c-1.784-1.612-3.938-2.4-6.428-2.4-2.456 0-4.61.789-6.395 2.4-1.784 1.577-2.691 3.772-2.691 6.584s.907 5.005 2.691 6.617c1.784 1.577 3.939 2.366 6.395 2.366 2.49 0 4.644-.789 6.428-2.366 1.818-1.612 2.725-3.806 2.725-6.617s-.908-5.007-2.725-6.584zm-9.792 10.183c-.941-.925-1.415-2.126-1.415-3.6s.47-2.674 1.415-3.566a4.6 4.6 0 0 1 3.363-1.371 4.68 4.68 0 0 1 3.398 1.371c.974.892 1.448 2.091 1.448 3.566s-.47 2.674-1.448 3.6c-.941.891-2.086 1.337-3.398 1.337a4.71 4.71 0 0 1-3.363-1.337zm18.881 4.903V.473h-4.24v23.528zM91.438 6.995v9.388c0 2.262-1.2 3.762-3.484 3.762-2.323 0-3.491-1.498-3.491-3.762V6.995h-4.248v10.108c0 3.916 2.423 7.378 7.739 7.378h.033c5.283 0 7.702-3.539 7.702-7.378V6.995zm-42.8 0l-4.24 11.52-4.24-11.52h-4.509l6.766 17.007h3.972l6.765-17.007zm-12.969 8.023c0-2.468-.773-4.491-2.288-6.103s-3.464-2.4-5.854-2.4c-2.456 0-4.544.858-6.26 2.537-1.684 1.681-2.523 3.806-2.523 6.446s.841 4.801 2.49 6.48c1.684 1.681 3.703 2.503 6.092 2.503 3.67 0 6.26-1.646 7.839-4.972l-3.162-1.852c-1.041 2.091-2.558 3.12-4.61 3.12-2.523 0-4.307-1.646-4.577-4.251h12.852v-1.509zM27.39 9.806c2.389 0 3.972 1.371 4.375 3.566h-8.951c.641-2.023 2.389-3.566 4.577-3.566zm-8.647 14.195l-5.689-10.148c3.599-1.337 5.383-3.668 5.383-7.063C18.441 2.641 15.208 0 10.06 0H0v24.001h4.442v-9.737h3.77l5.45 9.738zM10.06 3.977c2.625 0 3.938 1.063 3.938 3.154s-1.314 3.154-3.938 3.154H4.442V3.977zm92.817 20.504c-2.729 0-4.942-2.256-4.942-5.04V2.4h4.24v4.601h3.636v3.497h-3.636v8.665c0 .816.649 1.477 1.451 1.477h2.185v3.841z"></path>
          </svg>
        </a>
        <div className="grid gap-x-4 grid-tm items-center w-full">
          <div className="Basier-Regular items-center space-x-8 pt-1 pl-12 font-semibold text-[#2e2e2e] hidden lg:block">
            <button>Personal</button>
            <button>Business</button>
            <button>Company</button>
          </div>
          <a
            className=" items-center py-[6px] px-4 font-medium text-black rounded-[10px] bg-white hidden lg:block"
            href="/"
          >
            <span className="justify-center">Log in</span>
          </a>
          <a
            className=" items-center py-[6px] px-4 font-medium text-white rounded-[10px] bg-[#191c1f] hidden lg:block"
            href="/"
          >
            <span className="justify-center">Sign up</span>
          </a>
        </div>
      </div>
    </header>
  );
}
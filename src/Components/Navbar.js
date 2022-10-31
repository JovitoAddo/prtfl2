import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo_transparent.png";

const Navbar = () => {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <div
      id="navbar"
      className="sticky top-0 h-0 min-w-full z-10"
      style={{ transition: "top 0.3s" }}
    >
      <div className="flex flex-row justify-around bg-transparent backdrop-blur-md divide-x-2 divide-customblue pl-2 pr-2">
        <Link to="/" className="bg-transparent">
          <img src={logo} className="h-20 w-20 bg-transparent" />
        </Link>
        <div className="basis-10/12 bg-transparent"></div>
        <div className="flex gap-1 pl-2 bg-transparent">
          <div className="bg-transparent grid items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-twitter hover:fill-customblack transition hover:scale-150 hover:stroke-customred bg-transparent hover:cursor-pointer"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#30475E"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => {
                window.open("https://www.google.com/", "_blank");
              }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg>
          </div>

          <div className="bg-transparent grid items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-youtube hover:cursor-pointer transition hover:scale-150 hover:fill-customblack hover:stroke-customred bg-transparent"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#30475E"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => {
                window.open("https://www.google.com/", "_blank");
              }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="5" width="18" height="14" rx="4" />
              <path d="M10 9l5 3l-5 3z" />
            </svg>
          </div>
          <div className="bg-transparent grid items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-instagram hover:cursor-pointer transition hover:scale-150 hover:fill-customblack hover:stroke-customred bg-transparent"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#30475E"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => {
                window.open("https://www.google.com/", "_blank");
              }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

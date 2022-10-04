import React from "react";
import { Link } from "react-router-dom";
import Something from "./Something";
import Something2 from "./something2";

const Navbar = () => {
  return (
    <div className="sticky top-0 h-0 min-w-full z-10">
      <div className="flex flex-row justify-around bg-transparent backdrop-blur-sm divide-x-2 divide-customblue">
        <h1 className="text-5xl text-customblue bg-transparent font-poiret pr-2">
          LOGO
        </h1>
<Something/>
<Something2/>
        <div className="basis-10/12 bg-transparent"></div>
        <div className="flex gap-1 pl-2 bg-transparent">
          <a
            href={"https://www.google.com/"}
            target="_blank"
            className="bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-twitter hover:fill-customblue hover:stroke-customblack bg-transparent"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#F5F5F5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg>
          </a>

          <a
            href={"https://www.google.com/"}
            target="_blank"
            className="bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-youtube hover:fill-customblue hover:stroke-customblack bg-transparent"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#F5F5F5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="5" width="18" height="14" rx="4" />
              <path d="M10 9l5 3l-5 3z" />
            </svg>
          </a>
          <a
            href={"https://www.google.com/"}
            target="_blank"
            className="bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-instagram hover:fill-customblue hover:stroke-customblack bg-transparent"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#F5F5F5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import React from "react";
import logo from "../Assets/logo_transparent.png";

const Footer = () => {
  return (
    <div>
      <footer className="flex justify-between footer p-10 bg-customblack text-customwhite">
        <div className="bg-customblack p-2">
          <img src={logo} className="bg-transparent h-20" />
          <p className="bg-customblack text-md font-merriwheater cursor-default">
            Customize Clothing Company
            <p className="text-sm bg-transparent text-customred">Customize yourself according to what you wants</p>
            
          </p>
        </div>
    
        <div className="bg-customblack grid items-end ">
          <span className="text-customwhite text-xl font-merriwheater text-end bg-customblack cursor-default">
            Socials
          </span>
          <div className="sm:flex sm:gap-4 gap-2 grid justify-items-center bg-customblack">
            <div className="bg-transparent grid items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-twitter hover:fill-custombue transition hover:scale-150 hover:stroke-customred bg-transparent hover:cursor-pointer stroke-customwhite"
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
                className="icon icon-tabler icon-tabler-brand-youtube hover:cursor-pointer transition hover:scale-150 hover:fill-customblack hover:stroke-customred bg-transparent stroke-customwhite"
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
                className="icon icon-tabler icon-tabler-brand-instagram hover:cursor-pointer transition hover:scale-150 hover:fill-customblack hover:stroke-customred bg-transparent stroke-customwhite"
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
      </footer>
    </div>
  );
};

export default Footer;

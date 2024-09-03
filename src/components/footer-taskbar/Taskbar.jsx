import React from "react";

const Taskbar = () => {
  return (
    <div className="z-[999] flex justify-between px-4 absolute bottom-0 left-0 w-full h-12 backdrop-blur-lg bg-black bg-opacity-50 border-t border-white border-opacity-20 ">
      <div className="w-48 mr-2"></div>
      <nav className="flex h-full items-center gap-1.5">
        <div className="pale-bg hover:bg-paleWhite">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <path
              fill="#0077d4"
              d="M7,6h15c0.552,0,1,0.448,1,1v15c0,0.552-0.448,1-1,1H7c-0.552,0-1-0.448-1-1V7	C6,6.448,6.448,6,7,6z"
            ></path>
            <path
              fill="#0077d4"
              d="M25.042,21.958V7c0-0.552,0.448-1,1-1H41c0.552,0,1,0.448,1,1v14.958	c0,0.552-0.448,1-1,1H26.042C25.489,22.958,25.042,22.511,25.042,21.958z"
            ></path>
            <path
              fill="#0077d4"
              d="M7,25h15c0.552,0,1,0.448,1,1v15c0,0.552-0.448,1-1,1H7c-0.552,0-1-0.448-1-1V26	C6,25.448,6.448,25,7,25z"
            ></path>
            <path
              fill="#0077d4"
              d="M25,41V26c0-0.552,0.448-1,1-1h15c0.552,0,1,0.448,1,1v15c0,0.552-0.448,1-1,1H26	C25.448,42,25,41.552,25,41z"
            ></path>
          </svg>
        </div>
        <div className="pale-bg hover:bg-paleWhite">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fff"
              d="M34,24c0,5.521-4.479,10-10,10s-10-4.479-10-10s4.479-10,10-10S34,18.479,34,24z"
            ></path>
            <linearGradient
              id="Pax8JcnMzivu8f~SZ~k1ya_ejub91zEY6Sl_gr1"
              x1="5.789"
              x2="31.324"
              y1="34.356"
              y2="20.779"
              gradientTransform="matrix(1 0 0 -1 0 50)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#4caf50"></stop>
              <stop offset=".489" stopColor="#4aaf50"></stop>
              <stop offset=".665" stopColor="#43ad50"></stop>
              <stop offset=".79" stopColor="#38aa50"></stop>
              <stop offset=".892" stopColor="#27a550"></stop>
              <stop offset=".978" stopColor="#11a050"></stop>
              <stop offset="1" stopColor="#0a9e50"></stop>
            </linearGradient>
            <path
              fill="url(#Pax8JcnMzivu8f~SZ~k1ya_ejub91zEY6Sl_gr1)"
              d="M31.33,29.21l-8.16,14.77C12.51,43.55,4,34.76,4,24C4,12.96,12.96,4,24,4v11 c-4.97,0-9,4.03-9,9s4.03,9,9,9C27.03,33,29.7,31.51,31.33,29.21z"
            ></path>
            <linearGradient
              id="Pax8JcnMzivu8f~SZ~k1yb_ejub91zEY6Sl_gr2"
              x1="33.58"
              x2="33.58"
              y1="6"
              y2="34.797"
              gradientTransform="matrix(1 0 0 -1 0 50)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ffd747"></stop>
              <stop offset=".482" stopColor="#ffd645"></stop>
              <stop offset=".655" stopColor="#fed43e"></stop>
              <stop offset=".779" stopColor="#fccf33"></stop>
              <stop offset=".879" stopColor="#fac922"></stop>
              <stop offset=".964" stopColor="#f7c10c"></stop>
              <stop offset="1" stopColor="#f5bc00"></stop>
            </linearGradient>
            <path
              fill="url(#Pax8JcnMzivu8f~SZ~k1yb_ejub91zEY6Sl_gr2)"
              d="M44,24c0,11.05-8.95,20-20,20h-0.84l8.17-14.79C32.38,27.74,33,25.94,33,24 c0-4.97-4.03-9-9-9V4c7.81,0,14.55,4.48,17.85,11C43.21,17.71,44,20.76,44,24z"
            ></path>
            <linearGradient
              id="Pax8JcnMzivu8f~SZ~k1yc_ejub91zEY6Sl_gr3"
              x1="36.128"
              x2="11.574"
              y1="44.297"
              y2="28.954"
              gradientTransform="matrix(1 0 0 -1 0 50)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#f7572f"></stop>
              <stop offset=".523" stopColor="#f7552d"></stop>
              <stop offset=".712" stopColor="#f75026"></stop>
              <stop offset=".846" stopColor="#f7461b"></stop>
              <stop offset=".954" stopColor="#f7390a"></stop>
              <stop offset="1" stopColor="#f73100"></stop>
            </linearGradient>
            <path
              fill="url(#Pax8JcnMzivu8f~SZ~k1yc_ejub91zEY6Sl_gr3)"
              d="M41.84,15H24c-4.97,0-9,4.03-9,9c0,1.49,0.36,2.89,1.01,4.13H16L7.16,13.26H7.14 C10.68,7.69,16.91,4,24,4C31.8,4,38.55,8.48,41.84,15z"
            ></path>
            <linearGradient
              id="Pax8JcnMzivu8f~SZ~k1yd_ejub91zEY6Sl_gr4"
              x1="19.05"
              x2="28.95"
              y1="30.95"
              y2="21.05"
              gradientTransform="matrix(1 0 0 -1 0 50)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#2aa4f4"></stop>
              <stop offset="1" stopColor="#007ad9"></stop>
            </linearGradient>
            <path
              fill="url(#Pax8JcnMzivu8f~SZ~k1yd_ejub91zEY6Sl_gr4)"
              d="M31,24c0,3.867-3.133,7-7,7s-7-3.133-7-7s3.133-7,7-7S31,20.133,31,24z"
            ></path>
          </svg>
        </div>
        <div className="pale-bg hover:bg-paleWhite">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <path
              fill="#29b6f6"
              d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"
            ></path>
            <path
              fill="#0277bd"
              d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"
            ></path>
            <path
              fill="#0288d1"
              d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"
            ></path>
          </svg>
        </div>
      </nav>
      <div className="flex items-center">
        <div className="pale-bg hover:bg-paleWhite text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="bi bi-chevron-up"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
            />
          </svg>
        </div>
        <ul className="pale-bg gap-2 hover:bg-paleWhite text-white">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-wifi"
              viewBox="0 0 16 16"
            >
              <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.44 12.44 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049" />
              <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.46 9.46 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065m-2.183 2.183c.226-.226.185-.605-.1-.75A6.5 6.5 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.5 5.5 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091zM9.06 12.44c.196-.196.198-.52-.04-.66A2 2 0 0 0 8 11.5a2 2 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              fill="currentColor"
              width="16"
              height="16"
              viewBox="0 0 48 48"
            >
              <path d="M 26.216797 7.1015625 C 26.084935 7.1013567 25.952471 7.1110209 25.820312 7.1289062 C 25.29168 7.2004472 24.770296 7.4185563 24.339844 7.8007812 A 1.50015 1.50015 0 0 0 24.339844 7.8027344 L 15.117188 16 L 8.5 16 C 6.0324991 16 4 18.032499 4 20.5 L 4 27.5 C 4 29.967501 6.0324991 32 8.5 32 L 15.117188 32 L 24.339844 40.197266 C 25.200649 40.96254 26.421458 41.075139 27.345703 40.660156 C 28.269948 40.245173 29 39.257378 29 38.105469 L 29 9.8945312 C 29 8.7430679 28.271967 7.7549754 27.347656 7.3398438 C 27.00104 7.1841693 26.612384 7.10218 26.216797 7.1015625 z M 26 10.339844 L 26 37.660156 L 16.683594 29.378906 A 1.50015 1.50015 0 0 0 15.6875 29 L 8.5 29 C 7.6535009 29 7 28.346499 7 27.5 L 7 20.5 C 7 20.394188 7.0097744 20.292241 7.0292969 20.193359 C 7.1659543 19.501187 7.7593133 19 8.5 19 L 15.6875 19 A 1.50015 1.50015 0 0 0 16.683594 18.621094 L 26 10.339844 z M 43.486328 17.978516 A 1.50015 1.50015 0 0 0 42.439453 18.439453 L 39 21.878906 L 35.560547 18.439453 A 1.50015 1.50015 0 0 0 34.484375 17.984375 A 1.50015 1.50015 0 0 0 33.439453 20.560547 L 36.878906 24 L 33.439453 27.439453 A 1.50015 1.50015 0 1 0 35.560547 29.560547 L 39 26.121094 L 42.439453 29.560547 A 1.50015 1.50015 0 1 0 44.560547 27.439453 L 41.121094 24 L 44.560547 20.560547 A 1.50015 1.50015 0 0 0 43.486328 17.978516 z"></path>
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              fill="currentColor"
              width="16"
              height="16"
              viewBox="0 0 48 48"
            >
              <path d="M 9.5 12 C 6.4802259 12 4 14.480226 4 17.5 L 4 30.5 C 4 33.519774 6.4802259 36 9.5 36 L 34.5 36 C 37.519774 36 40 33.519774 40 30.5 L 40 28 L 42 28 C 43.105 28 44 27.105 44 26 L 44 22 C 44 20.895 43.105 20 42 20 L 40 20 L 40 17.5 C 40 14.480226 37.519774 12 34.5 12 L 9.5 12 z M 9.5 15 L 34.5 15 C 35.898226 15 37 16.101774 37 17.5 L 37 30.5 C 37 31.898226 35.898226 33 34.5 33 L 9.5 33 C 8.1017741 33 7 31.898226 7 30.5 L 7 17.5 C 7 16.101774 8.1017741 15 9.5 15 z M 12 18 C 10.895 18 10 18.895 10 20 L 10 28 C 10 29.105 10.895 30 12 30 L 32 30 C 33.105 30 34 29.105 34 28 L 34 20 C 34 18.895 33.105 18 32 18 L 12 18 z"></path>
            </svg>
          </li>
        </ul>
        <div className="pale-bg gap-1 text-white">
          <div className="flex flex-col text-end mx-1">
            <div className="text-xs">
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <div className="text-xs">
              {new Date().toLocaleDateString([], {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            fill="currentColor"
            width="18"
            height="18"
            viewBox="0 0 48 48"
          >
            <path d="M 23.277344 4.0175781 C 15.193866 4.3983176 9 11.343391 9 19.380859 L 9 26.648438 L 6.3496094 31.980469 A 1.50015 1.50015 0 0 0 6.3359375 32.009766 C 5.2696804 34.277268 6.9957076 37 9.5019531 37 L 18 37 C 18 40.295865 20.704135 43 24 43 C 27.295865 43 30 40.295865 30 37 L 38.496094 37 C 41.002339 37 42.730582 34.277829 41.664062 32.009766 A 1.50015 1.50015 0 0 0 41.650391 31.980469 L 39 26.648438 L 39 19 C 39 10.493798 31.863289 3.6133643 23.277344 4.0175781 z M 23.417969 7.0136719 C 30.338024 6.6878857 36 12.162202 36 19 L 36 27 A 1.50015 1.50015 0 0 0 36.15625 27.667969 L 38.949219 33.289062 C 39.128826 33.674017 38.921017 34 38.496094 34 L 9.5019531 34 C 9.077027 34 8.8709034 33.674574 9.0507812 33.289062 C 9.0507812 33.289062 9.0507812 33.287109 9.0507812 33.287109 L 11.84375 27.667969 A 1.50015 1.50015 0 0 0 12 27 L 12 19.380859 C 12 12.880328 16.979446 7.3169324 23.417969 7.0136719 z M 21 37 L 27 37 C 27 38.674135 25.674135 40 24 40 C 22.325865 40 21 38.674135 21 37 z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;

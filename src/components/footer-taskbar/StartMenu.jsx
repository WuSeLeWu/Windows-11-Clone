import React from "react";

const StartMenu = () => {
  const startApps = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <linearGradient
            id="Q7XamDf1hnh~bz~vAO7C6a_pGHcje298xSl_gr1"
            x1="28"
            x2="28"
            y1="14.966"
            y2="6.45"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#42a3f2"></stop>
            <stop offset="1" stop-color="#42a4eb"></stop>
          </linearGradient>
          <path
            fill="url(#Q7XamDf1hnh~bz~vAO7C6a_pGHcje298xSl_gr1)"
            d="M42,6H14c-1.105,0-2,0.895-2,2v7.003h32V8C44,6.895,43.105,6,42,6z"
          ></path>
          <linearGradient
            id="Q7XamDf1hnh~bz~vAO7C6b_pGHcje298xSl_gr2"
            x1="28"
            x2="28"
            y1="42"
            y2="33.054"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#11408a"></stop>
            <stop offset="1" stop-color="#103f8f"></stop>
          </linearGradient>
          <path
            fill="url(#Q7XamDf1hnh~bz~vAO7C6b_pGHcje298xSl_gr2)"
            d="M12,33.054V40c0,1.105,0.895,2,2,2h28c1.105,0,2-0.895,2-2v-6.946H12z"
          ></path>
          <linearGradient
            id="Q7XamDf1hnh~bz~vAO7C6c_pGHcje298xSl_gr3"
            x1="28"
            x2="28"
            y1="-15.46"
            y2="-15.521"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#3079d6"></stop>
            <stop offset="1" stop-color="#297cd2"></stop>
          </linearGradient>
          <path
            fill="url(#Q7XamDf1hnh~bz~vAO7C6c_pGHcje298xSl_gr3)"
            d="M12,15.003h32v9.002H12V15.003z"
          ></path>
          <linearGradient
            id="Q7XamDf1hnh~bz~vAO7C6d_pGHcje298xSl_gr4"
            x1="12"
            x2="44"
            y1="28.53"
            y2="28.53"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#1d59b3"></stop>
            <stop offset="1" stop-color="#195bbc"></stop>
          </linearGradient>
          <path
            fill="url(#Q7XamDf1hnh~bz~vAO7C6d_pGHcje298xSl_gr4)"
            d="M12,24.005h32v9.05H12V24.005z"
          ></path>
          <path
            d="M22.319,13H12v24h10.319C24.352,37,26,35.352,26,33.319V16.681C26,14.648,24.352,13,22.319,13z"
            opacity=".05"
          ></path>
          <path
            d="M22.213,36H12V13.333h10.213c1.724,0,3.121,1.397,3.121,3.121v16.425	C25.333,34.603,23.936,36,22.213,36z"
            opacity=".07"
          ></path>
          <path
            d="M22.106,35H12V13.667h10.106c1.414,0,2.56,1.146,2.56,2.56V32.44C24.667,33.854,23.52,35,22.106,35z"
            opacity=".09"
          ></path>
          <linearGradient
            id="Q7XamDf1hnh~bz~vAO7C6e_pGHcje298xSl_gr5"
            x1="4.744"
            x2="23.494"
            y1="14.744"
            y2="33.493"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#256ac2"></stop>
            <stop offset="1" stop-color="#1247ad"></stop>
          </linearGradient>
          <path
            fill="url(#Q7XamDf1hnh~bz~vAO7C6e_pGHcje298xSl_gr5)"
            d="M22,34H6c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16	C24,33.105,23.105,34,22,34z"
          ></path>
          <path
            fill="#fff"
            d="M18.403,19l-1.546,7.264L15.144,19h-2.187l-1.767,7.489L9.597,19H7.641l2.344,10h2.352l1.713-7.689	L15.764,29h2.251l2.344-10H18.403z"
          ></path>
        </svg>
      ),
      text: "Word",
      filter: "1",
      date: "",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <rect width="16" height="9" x="28" y="15" fill="#21a366"></rect>
          <path
            fill="#185c37"
            d="M44,24H12v16c0,1.105,0.895,2,2,2h28c1.105,0,2-0.895,2-2V24z"
          ></path>
          <rect width="16" height="9" x="28" y="24" fill="#107c42"></rect>
          <rect width="16" height="9" x="12" y="15" fill="#3fa071"></rect>
          <path
            fill="#33c481"
            d="M42,6H28v9h16V8C44,6.895,43.105,6,42,6z"
          ></path>
          <path
            fill="#21a366"
            d="M14,6h14v9H12V8C12,6.895,12.895,6,14,6z"
          ></path>
          <path
            d="M22.319,13H12v24h10.319C24.352,37,26,35.352,26,33.319V16.681C26,14.648,24.352,13,22.319,13z"
            opacity=".05"
          ></path>
          <path
            d="M22.213,36H12V13.333h10.213c1.724,0,3.121,1.397,3.121,3.121v16.425	C25.333,34.603,23.936,36,22.213,36z"
            opacity=".07"
          ></path>
          <path
            d="M22.106,35H12V13.667h10.106c1.414,0,2.56,1.146,2.56,2.56V32.44C24.667,33.854,23.52,35,22.106,35z"
            opacity=".09"
          ></path>
          <linearGradient
            id="flEJnwg7q~uKUdkX0KCyBa_UECmBSgBOvPT_gr1"
            x1="4.725"
            x2="23.055"
            y1="14.725"
            y2="33.055"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#18884f"></stop>
            <stop offset="1" stop-color="#0b6731"></stop>
          </linearGradient>
          <path
            fill="url(#flEJnwg7q~uKUdkX0KCyBa_UECmBSgBOvPT_gr1)"
            d="M22,34H6c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16	C24,33.105,23.105,34,22,34z"
          ></path>
          <path
            fill="#fff"
            d="M9.807,19h2.386l1.936,3.754L16.175,19h2.229l-3.071,5l3.141,5h-2.351l-2.11-3.93L11.912,29H9.526	l3.193-5.018L9.807,19z"
          ></path>
        </svg>
      ),
      text: "Excel",
      filter: "1",
      date: "",
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <path
            fill="#d35230"
            d="M8,24c0,9.941,8.059,18,18,18s18-8.059,18-18H26H8z"
          ></path>
          <path fill="#ff8f6b" d="M26,6v18h18C44,14.059,35.941,6,26,6z"></path>
          <path fill="#ed6c47" d="M26,6C16.059,6,8,14.059,8,24h18V6z"></path>
          <path
            d="M26,16.681C26,14.648,24.352,13,22.319,13H11.774C9.417,16.044,8,19.852,8,24	c0,5.116,2.145,9.723,5.571,13h8.747C24.352,37,26,35.352,26,33.319V16.681z"
            opacity=".05"
          ></path>
          <path
            d="M22.213,13.333H11.525C9.32,16.321,8,20.002,8,24c0,4.617,1.753,8.814,4.611,12h9.602	c1.724,0,3.121-1.397,3.121-3.121V16.454C25.333,14.731,23.936,13.333,22.213,13.333z"
            opacity=".07"
          ></path>
          <path
            d="M22.106,13.667H11.276C9.218,16.593,8,20.151,8,24c0,4.148,1.417,7.956,3.774,11h10.332	c1.414,0,2.56-1.146,2.56-2.56V16.227C24.667,14.813,23.52,13.667,22.106,13.667z"
            opacity=".09"
          ></path>
          <linearGradient
            id="N~uyq1CljjkKMh72IFt0Fa_ifP93G7BXUhU_gr1"
            x1="4.586"
            x2="22.77"
            y1="14.586"
            y2="32.77"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#ca4e2a"></stop>
            <stop offset="1" stop-color="#b63016"></stop>
          </linearGradient>
          <path
            fill="url(#N~uyq1CljjkKMh72IFt0Fa_ifP93G7BXUhU_gr1)"
            d="M22,34H6c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16	C24,33.105,23.105,34,22,34z"
          ></path>
          <path
            fill="#fff"
            d="M14.673,19.012H10v10h2.024v-3.521H14.3c1.876,0,3.397-1.521,3.397-3.397v-0.058	C17.697,20.366,16.343,19.012,14.673,19.012z M15.57,22.358c0,0.859-0.697,1.556-1.556,1.556h-1.99v-3.325h1.99	c0.859,0,1.556,0.697,1.556,1.556V22.358z"
          ></path>
        </svg>
      ),
      text: "PowerPoint",
      filter: "1",
      date: "",
    },
    {
      id: 4,
      icon: (
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/fluency/40/notepad.png"
          alt="notepad"
        />
      ),
      text: "Notepad",
      filter: "1",
      date: "",
    },
    {
      id: 5,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <linearGradient
            id="HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1"
            x1="37.8"
            x2="37.8"
            y1="43.37"
            y2="7.42"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#29b6f6"></stop>
            <stop offset="1" stop-color="#13b2f6"></stop>
          </linearGradient>
          <path
            fill="url(#HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1)"
            d="M34.176,4.249c0.188,0.092,5.688,2.716,8.374,3.998C43.437,8.67,44,9.564,44,10.546v26.86	c0,0.981-0.559,1.874-1.443,2.299c-2.548,1.228-7.611,3.666-7.948,3.826C34.361,43.649,33.709,44,33.181,44	c-0.678,0-1.133-0.316-1.58-0.73L34,35.711V5.715l-2.254-1.135C32.228,4.109,32.896,4,33.291,4C33.653,4,33.948,4.138,34.176,4.249z"
          ></path>
          <linearGradient
            id="HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2"
            x1="6.085"
            x2="34.793"
            y1="34.801"
            y2="7.173"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".115" stop-color="#0076bb"></stop>
            <stop offset=".257" stop-color="#0069b0"></stop>
            <stop offset=".28" stop-color="#0069b0"></stop>
            <stop offset=".424" stop-color="#0069b0"></stop>
            <stop offset=".491" stop-color="#0072b7"></stop>
            <stop offset=".577" stop-color="#0076bb"></stop>
            <stop offset=".795" stop-color="#0076bb"></stop>
            <stop offset="1" stop-color="#006eb9"></stop>
          </linearGradient>
          <path
            fill="url(#HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2)"
            d="M9,33.896l25-19.023V5.83c0-1.299-1.662-1.808-2.337-1.184	C31.008,5.25,4.658,29.239,4.658,29.239c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574	C7.304,34.37,8.271,34.43,9,33.896z"
          ></path>
          <path
            fill="#0288d1"
            d="M9,14.104l25,19.054v8.771c0,1.198-1.42,2.193-2.399,1.341L4.658,18.761	c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"
          ></path>
        </svg>
      ),
      text: "VS Code",
      filter: "1",
      date: "",
    },
    {
      id: 6,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <linearGradient
            id="~jm6wMmI3aADOIa51_ZGPa_ezj3zaVtImPg_gr1"
            x1="37.672"
            x2="37.672"
            y1="3.68"
            y2="44.487"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#c391f7"></stop>
            <stop offset="1" stop-color="#b579f4"></stop>
          </linearGradient>
          <path
            fill="url(#~jm6wMmI3aADOIa51_ZGPa_ezj3zaVtImPg_gr1)"
            d="M44,10.781v26.403c0,1.147-0.653,2.193-1.684,2.696c-2.348,1.144-6.392,3.113-7.05,3.413	C34.33,43.721,33.742,44,33.007,44s-1.221-0.479-1.559-0.836C31.11,42.806,34,33,34,33V6.23c0,0-3.182-0.666-2.58-1.337	c0.603-0.671,1.107-0.899,1.736-0.899c0.725,0,1.311,0.323,1.971,0.641c0.468,0.225,4.732,2.271,7.174,3.443	C43.342,8.577,44,9.627,44,10.781z"
          ></path>
          <linearGradient
            id="~jm6wMmI3aADOIa51_ZGPb_ezj3zaVtImPg_gr2"
            x1="4.598"
            x2="37.92"
            y1="38.164"
            y2="4.842"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".019" stop-color="#742fb6"></stop>
            <stop offset=".32" stop-color="#702db5"></stop>
            <stop offset=".364" stop-color="#5d2596"></stop>
            <stop offset=".38" stop-color="#5d2596"></stop>
            <stop offset=".48" stop-color="#5d2596"></stop>
            <stop offset=".485" stop-color="#60279a"></stop>
            <stop offset=".517" stop-color="#6f2dab"></stop>
            <stop offset=".556" stop-color="#7932b6"></stop>
            <stop offset=".61" stop-color="#7e34bd"></stop>
            <stop offset=".762" stop-color="#8035bf"></stop>
            <stop offset=".806" stop-color="#7d34bb"></stop>
            <stop offset=".851" stop-color="#7530ae"></stop>
            <stop offset=".897" stop-color="#66299a"></stop>
            <stop offset=".943" stop-color="#52207d"></stop>
            <stop offset=".963" stop-color="#481b6e"></stop>
          </linearGradient>
          <path
            fill="url(#~jm6wMmI3aADOIa51_ZGPb_ezj3zaVtImPg_gr2)"
            d="M4,32c0,1.928,0.261,2.214,2.134,3.028C7.59,35.661,8.17,36,8.559,36	c0.469,0,0.91-0.323,1.327-0.664S34,15.525,34,15.525V5.546c0-1.198-1.674-1.676-2.467-0.778c0,0-24.791,27.531-25.533,28.244	S5.767,31.119,4,32z"
          ></path>
          <linearGradient
            id="~jm6wMmI3aADOIa51_ZGPc_ezj3zaVtImPg_gr3"
            x1="4.405"
            x2="35.886"
            y1="25.413"
            y2="30.112"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".002" stop-color="#9c55d4"></stop>
            <stop offset=".003" stop-color="#9c55d4"></stop>
            <stop offset=".337" stop-color="#9751d2"></stop>
            <stop offset=".737" stop-color="#8847cb"></stop>
            <stop offset=".848" stop-color="#8343c8"></stop>
            <stop offset=".89" stop-color="#8042c3"></stop>
            <stop offset=".938" stop-color="#773db6"></stop>
            <stop offset=".988" stop-color="#68369f"></stop>
            <stop offset="1" stop-color="#643499"></stop>
          </linearGradient>
          <path
            fill="url(#~jm6wMmI3aADOIa51_ZGPc_ezj3zaVtImPg_gr3)"
            d="M4.62,13.681c0.317-0.152,2.934-1.322,3.256-1.463C8.254,12.053,8.39,12,8.669,12	c0.308,0,0.518,0.117,1.001,0.514C10.345,13.068,34,32.483,34,32.483v9.759c0,1.675-1.744,1.847-2.728,0.741	C30.574,42.199,6.389,15.434,6.389,15.434S4,16.641,4,15.587C4,14.166,4.276,13.847,4.62,13.681z"
          ></path>
          <linearGradient
            id="~jm6wMmI3aADOIa51_ZGPd_ezj3zaVtImPg_gr4"
            x1="6.5"
            x2="6.5"
            y1="34.157"
            y2="14.799"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#5c1d9c"></stop>
            <stop offset="1" stop-color="#561b90"></stop>
          </linearGradient>
          <path
            fill="url(#~jm6wMmI3aADOIa51_ZGPd_ezj3zaVtImPg_gr4)"
            d="M9,18.323v11.412c0,0-2.73,2.999-3.34,3.659C5.118,33.981,4,33.797,4,32.148v-16.72	c0-1.251,1.131-1.378,2.098-0.323C6.273,15.296,9,18.323,9,18.323z"
          ></path>
        </svg>
      ),
      text: "Visual Studio 2022",
      filter: "1",
      date: "",
    },
    {
      id: 7,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <linearGradient
            id="WQEfvoQAcpQgQgyjQQ4Hqa_dINnkNb1FBl4_gr1"
            x1="24"
            x2="24"
            y1="6.708"
            y2="14.977"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#eba600"></stop>
            <stop offset="1" stop-color="#c28200"></stop>
          </linearGradient>
          <path
            fill="url(#WQEfvoQAcpQgQgyjQQ4Hqa_dINnkNb1FBl4_gr1)"
            d="M24.414,10.414l-2.536-2.536C21.316,7.316,20.553,7,19.757,7L5,7C3.895,7,3,7.895,3,9l0,30	c0,1.105,0.895,2,2,2l38,0c1.105,0,2-0.895,2-2V13c0-1.105-0.895-2-2-2l-17.172,0C25.298,11,24.789,10.789,24.414,10.414z"
          ></path>
          <linearGradient
            id="WQEfvoQAcpQgQgyjQQ4Hqb_dINnkNb1FBl4_gr2"
            x1="24"
            x2="24"
            y1="10.854"
            y2="40.983"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#ffd869"></stop>
            <stop offset="1" stop-color="#fec52b"></stop>
          </linearGradient>
          <path
            fill="url(#WQEfvoQAcpQgQgyjQQ4Hqb_dINnkNb1FBl4_gr2)"
            d="M21.586,14.414l3.268-3.268C24.947,11.053,25.074,11,25.207,11H43c1.105,0,2,0.895,2,2v26	c0,1.105-0.895,2-2,2H5c-1.105,0-2-0.895-2-2V15.5C3,15.224,3.224,15,3.5,15h16.672C20.702,15,21.211,14.789,21.586,14.414z"
          ></path>
        </svg>
      ),
      text: "Folder",
      filter: "1",
      date: "",
    },
    {
      id: 8,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
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
            <stop offset="0" stop-color="#4caf50"></stop>
            <stop offset=".489" stop-color="#4aaf50"></stop>
            <stop offset=".665" stop-color="#43ad50"></stop>
            <stop offset=".79" stop-color="#38aa50"></stop>
            <stop offset=".892" stop-color="#27a550"></stop>
            <stop offset=".978" stop-color="#11a050"></stop>
            <stop offset="1" stop-color="#0a9e50"></stop>
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
            <stop offset="0" stop-color="#ffd747"></stop>
            <stop offset=".482" stop-color="#ffd645"></stop>
            <stop offset=".655" stop-color="#fed43e"></stop>
            <stop offset=".779" stop-color="#fccf33"></stop>
            <stop offset=".879" stop-color="#fac922"></stop>
            <stop offset=".964" stop-color="#f7c10c"></stop>
            <stop offset="1" stop-color="#f5bc00"></stop>
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
            <stop offset="0" stop-color="#f7572f"></stop>
            <stop offset=".523" stop-color="#f7552d"></stop>
            <stop offset=".712" stop-color="#f75026"></stop>
            <stop offset=".846" stop-color="#f7461b"></stop>
            <stop offset=".954" stop-color="#f7390a"></stop>
            <stop offset="1" stop-color="#f73100"></stop>
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
            <stop offset="0" stop-color="#2aa4f4"></stop>
            <stop offset="1" stop-color="#007ad9"></stop>
          </linearGradient>
          <path
            fill="url(#Pax8JcnMzivu8f~SZ~k1yd_ejub91zEY6Sl_gr4)"
            d="M31,24c0,3.867-3.133,7-7,7s-7-3.133-7-7s3.133-7,7-7S31,20.133,31,24z"
          ></path>
        </svg>
      ),
      text: "Axaf1215abdw.svg",
      filter: "2",
      date: "14m ago",
    },
    {
      id: 9,
      icon: (
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/office/40/image-file.png"
          alt="image-file"
        />
      ),
      text: "Screenshot 2099.01.01",
      filter: "2",
      date: "1h ago",
    },
    {
      id: 10,
      icon: (
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/office/40/image-file.png"
          alt="image-file"
        />
      ),
      text: "Screenshot 2099.01.03",
      filter: "2",
      date: "2h ago",
    },
    {
      id: 11,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <linearGradient
            id="Ja~RXCbVqNAHlfRcVj7wMa_PLvn50bVGAlA_gr1"
            x1="24"
            x2="24"
            y1="18"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".233" stop-color="#41a5ee"></stop>
            <stop offset=".317" stop-color="#3994de"></stop>
            <stop offset=".562" stop-color="#2366b4"></stop>
            <stop offset=".751" stop-color="#154a9b"></stop>
            <stop offset=".86" stop-color="#103f91"></stop>
          </linearGradient>
          <rect
            width="36"
            height="12"
            x="6"
            y="18"
            fill="url(#Ja~RXCbVqNAHlfRcVj7wMa_PLvn50bVGAlA_gr1)"
          ></rect>
          <linearGradient
            id="Ja~RXCbVqNAHlfRcVj7wMb_PLvn50bVGAlA_gr2"
            x1="24"
            x2="24"
            y1="6"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".233" stop-color="#e8457c"></stop>
            <stop offset=".272" stop-color="#e14177"></stop>
            <stop offset=".537" stop-color="#b32c59"></stop>
            <stop offset=".742" stop-color="#971e46"></stop>
            <stop offset=".86" stop-color="#8c193f"></stop>
          </linearGradient>
          <path
            fill="url(#Ja~RXCbVqNAHlfRcVj7wMb_PLvn50bVGAlA_gr2)"
            d="M42,18H6V8c0-1.105,0.895-2,2-2h32c1.105,0,2,0.895,2,2V18z"
          ></path>
          <linearGradient
            id="Ja~RXCbVqNAHlfRcVj7wMc_PLvn50bVGAlA_gr3"
            x1="24"
            x2="24"
            y1="30"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".233" stop-color="#33c481"></stop>
            <stop offset=".325" stop-color="#2eb173"></stop>
            <stop offset=".566" stop-color="#228353"></stop>
            <stop offset=".752" stop-color="#1b673f"></stop>
            <stop offset=".86" stop-color="#185c37"></stop>
          </linearGradient>
          <path
            fill="url(#Ja~RXCbVqNAHlfRcVj7wMc_PLvn50bVGAlA_gr3)"
            d="M40,42H8c-1.105,0-2-0.895-2-2V30h36v10C42,41.105,41.105,42,40,42z"
          ></path>
          <rect width="14" height="36" x="17" y="6" opacity=".05"></rect>
          <rect width="13" height="36" x="17.5" y="6" opacity=".07"></rect>
          <linearGradient
            id="Ja~RXCbVqNAHlfRcVj7wMd_PLvn50bVGAlA_gr4"
            x1="24"
            x2="24"
            y1="6"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".039" stop-color="#f8c819"></stop>
            <stop offset=".282" stop-color="#af4316"></stop>
          </linearGradient>
          <rect
            width="12"
            height="36"
            x="18"
            y="6"
            fill="url(#Ja~RXCbVqNAHlfRcVj7wMd_PLvn50bVGAlA_gr4)"
          ></rect>
          <linearGradient
            id="Ja~RXCbVqNAHlfRcVj7wMe_PLvn50bVGAlA_gr5"
            x1="24"
            x2="24"
            y1="12"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#eaad29"></stop>
            <stop offset=".245" stop-color="#d98e24"></stop>
            <stop offset=".632" stop-color="#c0631c"></stop>
            <stop offset=".828" stop-color="#b75219"></stop>
            <stop offset=".871" stop-color="#a94917"></stop>
            <stop offset=".949" stop-color="#943b13"></stop>
            <stop offset="1" stop-color="#8c3612"></stop>
          </linearGradient>
          <path
            fill="url(#Ja~RXCbVqNAHlfRcVj7wMe_PLvn50bVGAlA_gr5)"
            d="M24,12c-3.314,0-6,2.686-6,6v24h12V18C30,14.686,27.314,12,24,12z"
          ></path>
          <path
            d="M20,32c-0.73,0-1.41-0.2-2-0.55v1.14c0.61,0.26,1.29,0.41,2,0.41h8c0.71,0,1.39-0.15,2-0.41v-1.14 C29.41,31.8,28.73,32,28,32H20z M29,22v6c0,0.55-0.45,1-1,1h-2v-2c0-1.1-0.9-2-2-2s-2,0.9-2,2v2h-2c-0.55,0-1-0.45-1-1v-6 c0-0.55-0.45-1-1-1v7c0,1.1,0.9,2,2,2h3v-3c0-0.55,0.45-1,1-1s1,0.45,1,1v3h3c1.1,0,2-0.9,2-2v-7C29.45,21,29,21.45,29,22z"
            opacity=".05"
          ></path>
          <path
            d="M29.5,22v6c0,0.83-0.67,1.5-1.5,1.5h-2.5V27c0-0.83-0.67-1.5-1.5-1.5s-1.5,0.67-1.5,1.5v2.5H20 c-0.83,0-1.5-0.67-1.5-1.5v-6c0-0.28-0.22-0.5-0.5-0.5V28c0,1.1,0.9,2,2,2h3v-3c0-0.55,0.45-1,1-1s1,0.45,1,1v3h3c1.1,0,2-0.9,2-2 v-6.5C29.72,21.5,29.5,21.72,29.5,22z M20,32c-0.73,0-1.41-0.2-2-0.55v0.58c0.6,0.3,1.28,0.47,2,0.47h8c0.72,0,1.4-0.17,2-0.47 v-0.58C29.41,31.8,28.73,32,28,32H20z"
            opacity=".07"
          ></path>
          <linearGradient
            id="Ja~RXCbVqNAHlfRcVj7wMf_PLvn50bVGAlA_gr6"
            x1="24"
            x2="24"
            y1="21"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".613" stop-color="#e6e6e6"></stop>
            <stop offset=".785" stop-color="#e4e4e4"></stop>
            <stop offset=".857" stop-color="#ddd"></stop>
            <stop offset=".91" stop-color="#d1d1d1"></stop>
            <stop offset=".953" stop-color="#bfbfbf"></stop>
            <stop offset=".967" stop-color="#b8b8b8"></stop>
          </linearGradient>
          <path
            fill="url(#Ja~RXCbVqNAHlfRcVj7wMf_PLvn50bVGAlA_gr6)"
            d="M32,23v5c0,2.2-1.8,4-4,4h-8c-2.2,0-4-1.8-4-4v-5c0-1.105,0.895-2,2-2h0v7 c0,1.105,0.895,2,2,2h3v-3c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v3h3c1.105,0,2-0.895,2-2v-7C31.1,21,32,21.9,32,23z"
          ></path>
        </svg>
      ),
      text: "Windows-11-Clone.zip",
      filter: "2",
      date: "14h ago",
    },
    {
      id: 12,
      icon: (
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/office/40/image-file.png"
          alt="image-file"
        />
      ),
      text: "Cdlryxvyt.png",
      filter: "2",
      date: "22h ago",
    },
  ];

  return (
    <div className="w-full h-full flex items-end">
      <div className="z-[999] w-[40rem]  flex flex-col mb-3 h-[90%] mx-auto bg-startMenu  border border-gray-700 rounded-xl select-none">
        <div className="flex flex-col h-full backdrop-blur-xl bg-opacity-50 md:p-8 rounded-t-xl">
          <div className="flex items-center gap-2 px-3 bg-thirdDarkColor text-white  border border-gray-700 rounded-2xl  py-1 lg:mb-9 sm:mb-4 md:mx-0 my-3 mx-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentcolor"
              width="14"
              height="14"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            <input
              className="outline-none border-none bg-transparent w-full text-sm placeholder:text-placeholderColor placeholder:font-medium"
              type="text"
              placeholder="Type here the search"
            />
          </div>
          <div className="flex flex-col justify-between h-full text-white">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between cursor-default px-6">
                <span className="text-sm font-medium">Pinned</span>
                <span className="flex gap-3 items-center bg-[#ffffff0f] text-xs py-1 px-2 rounded-sm">
                  All apps
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    width="9"
                    height="9"
                    fill="currentcolor"
                  >
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                  </svg>
                </span>
              </div>
              <ul className="flex flex-wrap">
                {startApps
                  .filter((folder) => folder.filter === "1")
                  .map((folder) => (
                    <li
                      key={folder.id}
                      className="flex rounded-md gap-2 flex-col  items-center hover:bg-paleWhite p-2 text-xs w-[5.96rem] max-h-22"
                    >
                      <div className="w-9 h-9">{folder.icon}</div>
                      <span className="text-center">{folder.text}</span>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between cursor-default px-6">
                <span className="text-sm font-medium">Recommended</span>
                <span className="flex gap-3 items-center bg-[#ffffff0f] text-xs py-1 px-2 rounded-sm">
                  More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    width="9"
                    height="9"
                    fill="currentcolor"
                  >
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                  </svg>
                </span>
              </div>
              <ul className="grid grid-rows-3 max-h-44 grid-flow-col gap-x-6 px-4 pr-1">
                {startApps
                  .filter((folder) => folder.filter === "2")
                  .slice(0, 6)
                  .map((folder, index) => (
                    <li
                      key={folder.id}
                      className={`flex rounded-md gap-2 hover:bg-paleWhite p-2 text-xs max-h-22 ${
                        index % 2 === 0 ? "col-start-1" : "col-start-2"
                      }`}
                    >
                      <div className="w-9 h-9">{folder.icon}</div>
                      <div className="flex flex-col">
                        <span>{folder.text}</span>
                        <span className="text-placeholderColor">
                          {folder.date}
                        </span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center h-16 backdrop-blur-3xl bg-[#2e2e2e26] rounded-b-xl md:px-12 sm:px-4">
          <div className="flex gap-3 items-center hover:bg-paleWhite px-3 py-0.5 rounded-md">
            <img
              width="35"
              height="35"
              src={`${process.env.PUBLIC_URL}/img/baby.jpg`}
              className="rounded-full"
              alt="user-male-circle--v1"
            />
            <span className="text-white text-xs">WuSeLeWu</span>
          </div>
          <div className="hover:bg-paleWhite text-white p-3 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="16"
              height="16"
              fill="currentcolor"
            >
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;

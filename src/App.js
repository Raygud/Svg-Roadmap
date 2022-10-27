import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from "react";
import { Penis } from "./Component/StyleComponents/Heading.Styled.js"
import { Button } from "./Component/StyleComponents/Styled.Button.js"


function App() {
  const [buttonClicked, setButtonClicked] = useState()


  const onButtonClick = (X) => {
    setButtonClicked(X)
    let Pathlist = document.querySelectorAll(".cls-4");
    console.log(X)
    console.log(Pathlist)
    Pathlist.forEach((PathItem) => {
      console.log(PathItem.getAttribute("OffSet"))
      
      if (PathItem.getAttribute('value') == X){
        PathItem.style.strokeDashoffset = 0 
        PathItem.style.stroke = "yellowgreen"
      }
      else{
        PathItem.style.strokeDashoffset = parseInt(PathItem.getAttribute("OffSet"))
      }

    });
  };
  return (<>
<div id="owo">
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1323.38 699.45">
<path class="cls-3" d="M1299,667.45H233.77c-13.76,0-24.92-8.6-24.92-19.21V213.66c0-10.61,11.16-19.21,24.92-19.21H1298"/>
  <path class="cls-3" d="M1300,430.68H233.83c-13.99,0-25.33,11.34-25.33,25.33v146.37"/>
  <path class="cls-3" d="M208.5,314.03v92.75c0,13.35,10.82,24.17,24.17,24.17h136.33"/>
  <path class="cls-2" d="M208,487.91v37.42c0,13.87-7.75,25.12-17.31,25.12H66"/>
  <path class="cls-2" d="M208,612.99v-37.42c0-13.87-7.75-25.12-17.31-25.12H66"/>
  <text class="cls-13" transform="translate(525.62 271.51)"><tspan class="cls-20" x="0" y="0">Maritime</tspan></text>
  <text class="cls-13" transform="translate(870.62 271.51)"><tspan class="cls-14" x="0" y="0"></tspan><tspan class="cls-23" x="11.34" y="0">Politi &amp; Forsvar</tspan><tspan class="cls-12" x="69.77" y="0"></tspan><tspan x="79.96" y="0"></tspan><tspan class="cls-18" x="108.41" y="0"></tspan><tspan x="119.07" y="0"></tspan></text>
  <text class="cls-13" transform="translate(1203.62 271.51)"><tspan class="cls-8" x="0" y="0">Kunstneiske</tspan></text>
  <line class="cls-5" x1="405" y1="668.72" x2="405" y2="430.45"/>
  <text class="cls-13" transform="translate(525.62 509.51)"><tspan x="0" y="0">Erhvervsakademi</tspan></text>
  <text class="cls-13" transform="translate(868.62 516.51)"><tspan class="cls-15" x="0" y="0">Professionsbachelor</tspan></text>
  <text class="cls-13" transform="translate(1201.62 516.51)"><tspan x="0" y="0">Universitet</tspan></text>
  <g id="Eudx">
    <path class="cls-4 cls-Eudx" value="PathFromEudx" OffSet="1075" d="M288,430.45h881c13.81,0,25-11.19,25-25v-85"/>
    <path class="cls-4 cls-Eudx" value="PathFromEudx" OffSet="1075" d="M288,430.45H820c13.81,0,32-11.19,32-25v-85"/>
    <path class="cls-4 cls-Eudx" value="PathFromEudx" OffSet="1075" d="M288,430.45H820c13.81,0,32,11.19,32,25v103"/>
    <path class="cls-4 cls-Eudx" value="PathFromEudx" OffSet="1075" d="M288,427.45h201c13.81,0,32-11.19,32-25v-103"/>
    <path class="cls-4 cls-Eudx" value="PathFromEudx" OffSet="1075" d="M288,430.45h201c13.81,0,32,11.19,32,25v103"/>
    <path class="cls-4 cls-Eudx" value="PathFromEudx" OffSet="1075" d="M288,431.45h881c13.81,0,25,11.19,25,25v85"/>
  </g>
  <g id="GrundSkole">
    <path id="GrundMaritime" value="PathFromGrund" OffSet="-1555"  class="cls-4" d="M521,293.45v-74.77c0-13.38-10.85-24.23-24.23-24.23H232.23c-13.38,0-24.23,10.85-24.23,24.23v306.67c0,13.38-10.85,24.23-24.23,24.23l-118.77,.87"/>
    <path id="GrundPolitiForsvar" value="PathFromGrund" OffSet="-1555"  class="cls-4" d="M852,293.45v-74.77c0-13.38-18.62-24.23-32-24.23H232.23c-13.38,0-24.23,10.85-24.23,24.23v306.67c0,13.38-10.85,24.23-24.23,24.23l-118.77,.87"/>
    <path id="GrundKunstneriske" value="PathFromGrund" OffSet="-1555"  class="cls-4" d="M1194,293.45v-74.77c0-13.38-18.62-24.23-32-24.23H232.23c-13.38,0-24.23,10.85-24.23,24.23v306.67c0,13.38-10.85,24.23-24.23,24.23l-118.77,.87"/>
    <path id="GrundEudx" value="PathFromGrund" OffSet="-1555"  class="cls-4" d="M261,430.45h-28c-13.79,0-25,13.18-25,26.96v66.88c0,13.89-11.26,25.15-25.15,25.15H61"/>
    <path id="GrundGym" value="PathFromGrund" OffSet="-1555"  class="cls-4" d="M261,667.45h-28.04c-13.79,0-24.96-11.18-24.96-24.96v-66.88c0-13.89-11.26-25.15-25.15-25.15H61"/>
  </g>
  <g id="Gymn">
    <path id="GymKunst"  value="PathFromGym" OffSet="-1555" class="cls-4" d="M1194,320.07v85.31c0,13.85-18.15,25.08-32,25.08H411.22c-3.43,0-6.22,2.78-6.22,6.22v225.77c0,3.31-2.7,5.98-6.01,5.94l-78.99-.93"/>
    <path id="GymPolitiForsvar" value="PathFromGym" OffSet="-1555" class="cls-4" d="M852,320.07v85.31c0,13.85-18.15,25.08-32,25.08H411.22c-3.43,0-6.22,2.78-6.22,6.22v225.77c0,3.31-2.7,5.98-6.01,5.94l-78.99-.93"/>
    <path id="GymMaritime" value="PathFromGym" OffSet="-1555" class="cls-4" d="M521,320.07v85.31c0,13.85-18.15,25.08-32,25.08h-77.78c-3.43,0-6.22,2.78-6.22,6.22v225.77c0,3.31-2.7,5.98-6.01,5.94l-78.99-.93"/>
    <path id="GymUniversitet" value="PathFromGym" OffSet="-1555" class="cls-4" d="M1194,558.18v84.58c0,13.81-18.19,25-32,25H288.31"/>
    <path id="GymProfessionsbachelor" value="PathFromGym" OffSet="-1555" class="cls-4" d="M852,558.18v84.58c0,13.81-18.19,25-32,25H288.31"/>
    <path id="GymErhvervsakademi" value="PathFromGym" OffSet="-1555" class="cls-4" d="M522,558.18l-1,84.58c0,13.81-18.19,25-32,25h-200.69"/>
  </g>
  <g id="FromErhvervs">
    <path value="PathFromErhvervs" OffSet="-1555" class="cls-4" d="M521.42,558.18v84.27c0,13.81-11.19,25-25,25h-208.12"/>
    <path value="PathFromErhvervs" OffSet="-1555" class="cls-4" d="M521.42,558.18v84.27c0,13.81-11.19,25-25,25h-90.92v-237h-117.19"/>
  </g>
  <g id="FromProfessions">
    <path value="PathFromProfessions" OffSet="-1555" class="cls-4" d="M852.42,558.18v84.58c0,13.81-11.19,25-25,25H288.31"/>
    <path value="PathFromProfessions" OffSet="-1555" class="cls-4" d="M852.42,558.18v84.58c0,13.81-11.19,25-25,25H404.5v-237h-116.19"/>
    <path value="PathFromProfessions" OffSet="-1555" class="cls-4" d="M521.42,558.18v84.27c0,13.81,11.19,25,25,25h280.58c13.81,0,25-11.19,25-25v-84.27"/>
  </g>
  <g id="FromUni">
    <path value="PathFromUni" OffSet="-1655" class="cls-4" d="M288.31,667.76h881.12c13.81,0,25-11.19,25-25v-84.58"/>
    <path value="PathFromUni" OffSet="-1655" class="cls-4" d="M1194.5,558.45v84.5c0,13.81-11.19,25-25,25H405v-238l-116.69,1"/>
  </g>
  <g id="FromMaritime">
    <path value="PathFromMaritime" OffSet="-1555" class="cls-4" d="M521.46,320.07v85.69c0,13.81-11.19,25-25,25h-208.15"/>
    <path value="PathFromMaritime" OffSet="-1555" class="cls-4" d="M521.46,320.07v85.73c0,13.79-11.17,24.98-24.96,25l-91,.15v236.81h-117.19"/>
    <path value="PathFromMaritime" OffSet="-1555" class="cls-4" d="M521.46,320.07v-125.62H233c-13.81,0-25,11.19-25,25v305.13c0,13.81-11.19,25-25,25H33"/>
  </g>
  <g id="FromPolitiForsvar">
    <path value="PathFromPolitiForsvar" OffSet="-1555" class="cls-4" d="M852.46,320.07v85.88c0,13.81-11.19,25-25,25H405.5v236.81h-117.19"/>
    <path value="PathFromPolitiForsvar" OffSet="-1555" class="cls-4" d="M852.46,320.07v85.69c0,13.81-11.19,25-25,25H288.31"/>
    <path value="PathFromPolitiForsvar" OffSet="-1555" class="cls-4" d="M852.46,320.07v-100.62c0-13.81-11.19-25-25-25H233c-13.81,0-25,11.19-25,25v306c0,13.81-11.19,25-25,25H33"/>
  </g>
  <g id="FromKunst">
    <path value="PathFromKunst" OffSet="-1655" class="cls-4" d="M1194.46,320.07v85.38c0,13.81-11.19,25-25,25H405.5v237.31h-117.19"/>
    <path value="PathFromKunst" OffSet="-1655" class="cls-4" d="M1194.46,320.07v85.88c0,13.81-11.19,25-25,25H288.31"/>
    <path value="PathFromKunst" OffSet="-1655" class="cls-4" d="M1194.46,320.07v-100.62c0-13.81-11.19-25-25-25H233.5c-13.81,0-25,11.19-25,25v305.13c0,13.81-11.19,25-25,25H33"/>
  </g>
  <g>
    <g onClick={() => onButtonClick('PathFromPolitiForsvar')}>
      <circle class="cls-10" cx="852" cy="320.45" r="29"/>
      <path d="M852,294.45c14.34,0,26,11.66,26,26s-11.66,26-26,26-26-11.66-26-26,11.66-26,26-26m0-6c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32-14.33-32-32-32h0Z"/>
    </g>
    <g onClick={() => onButtonClick('PathFromKunst')}>
      <circle class="cls-10" cx="1194" cy="320.45" r="29"/>
      <path d="M1194,294.45c14.34,0,26,11.66,26,26s-11.66,26-26,26-26-11.66-26-26,11.66-26,26-26m0-6c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32-14.33-32-32-32h0Z"/>
    </g>
    <g  onClick={() => onButtonClick('PathFromErhvervs')}>
      <circle class="cls-10" cx="521" cy="558.45" r="29"/>
      <path d="M521,532.45c14.34,0,26,11.66,26,26s-11.66,26-26,26-26-11.66-26-26,11.66-26,26-26m0-6c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32-14.33-32-32-32h0Z"/>
    </g>
    <g onClick={() => onButtonClick('PathFromProfessions')}>
      <circle class="cls-10" cx="852" cy="558.45" r="29"/>
      <path d="M852,532.45c14.34,0,26,11.66,26,26s-11.66,26-26,26-26-11.66-26-26,11.66-26,26-26m0-6c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32-14.33-32-32-32h0Z"/>
    </g>
    <g  onClick={() => onButtonClick('PathFromUni')}>
      <circle class="cls-10" cx="1194" cy="558.45" r="29"/>
      <path d="M1194,532.45c14.34,0,26,11.66,26,26s-11.66,26-26,26-26-11.66-26-26,11.66-26,26-26m0-6c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32-14.33-32-32-32h0Z"/>
    </g>
    <g  onClick={() => onButtonClick('PathFromMaritime')}>
      <circle class="cls-10" cx="521" cy="320.45" r="29"/>
      <path d="M521,294.45c14.34,0,26,11.66,26,26s-11.66,26-26,26-26-11.66-26-26,11.66-26,26-26m0-6c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32-14.33-32-32-32h0Z"/>
    </g>
    <g onClick={() => onButtonClick('PathFromGym')}>
      <circle class="cls-10" cx="288" cy="667.45" r="29"/>
      <path d="M288,641.45c14.34,0,26,11.66,26,26s-11.66,26-26,26-26-11.66-26-26,11.66-26,26-26m0-6c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32-14.33-32-32-32h0Z"/>
    </g>
    <g onClick={() => onButtonClick('PathFromGrund')}>
      <circle class="cls-10" cx="33" cy="550.45" r="29"/>
      <path d="M33,524.45c14.34,0,26,11.66,26,26s-11.66,26-26,26-26-11.66-26-26,11.66-26,26-26m0-6c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32-14.33-32-32-32h0Z"/>
    </g>
    <g onClick={() => onButtonClick('PathFromEudx')} data-name="Eudx">
      <circle class="cls-10" cx="288" cy="430.45" r="29"/>
      <path d="M288,404.45c14.34,0,26,11.66,26,26s-11.66,26-26,26-26-11.66-26-26,11.66-26,26-26m0-6c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32-14.33-32-32-32h0Z"/>
    </g>
  </g>
  <g>
    <g id="Universitet" className={buttonClicked == "PathFromUni" ? "buttonShow" : "buttonHide"}>
      <path d="M1194.42,574.32c-8.9,0-16.14-7.24-16.14-16.14s7.24-16.14,16.14-16.14,16.14,7.24,16.14,16.14-7.24,16.14-16.14,16.14Z"/>
      <path d="M1194.42,542.54c8.62,0,15.64,7.02,15.64,15.64s-7.02,15.64-15.64,15.64-15.64-7.02-15.64-15.64,7.02-15.64,15.64-15.64m0-1c-9.19,0-16.64,7.45-16.64,16.64s7.45,16.64,16.64,16.64,16.64-7.45,16.64-16.64-7.45-16.64-16.64-16.64h0Z"/>
    </g>
    <g id="Kunstneriske" className={buttonClicked == "PathFromKunst" ? "buttonShow" : "buttonHide"}>
      <path d="M1194.46,336.21c-8.9,0-16.14-7.24-16.14-16.14s7.24-16.14,16.14-16.14,16.14,7.24,16.14,16.14-7.24,16.14-16.14,16.14Z"/>
      <path d="M1194.46,304.43c8.62,0,15.64,7.02,15.64,15.64s-7.02,15.64-15.64,15.64-15.64-7.02-15.64-15.64,7.02-15.64,15.64-15.64m0-1c-9.19,0-16.64,7.45-16.64,16.64s7.45,16.64,16.64,16.64,16.64-7.45,16.64-16.64-7.45-16.64-16.64-16.64h0Z"/>
    </g>
    <g id="Professionsbachelor" className={buttonClicked == "PathFromProfessions" ? "buttonShow" : "buttonHide"}>
      <path d="M852.42,574.32c-8.9,0-16.14-7.24-16.14-16.14s7.24-16.14,16.14-16.14,16.14,7.24,16.14,16.14-7.24,16.14-16.14,16.14Z"/>
      <path d="M852.42,542.54c8.62,0,15.64,7.02,15.64,15.64s-7.02,15.64-15.64,15.64-15.64-7.02-15.64-15.64,7.02-15.64,15.64-15.64m0-1c-9.19,0-16.64,7.45-16.64,16.64s7.45,16.64,16.64,16.64,16.64-7.45,16.64-16.64-7.45-16.64-16.64-16.64h0Z"/>
    </g>
    <g id="PolitiForsvar" className={buttonClicked == "PathFromPolitiForsvar" ? "buttonShow" : "buttonHide"}>
      <path d="M852.46,336.21c-8.9,0-16.14-7.24-16.14-16.14s7.24-16.14,16.14-16.14,16.14,7.24,16.14,16.14-7.24,16.14-16.14,16.14Z"/>
      <path d="M852.46,304.43c8.62,0,15.64,7.02,15.64,15.64s-7.02,15.64-15.64,15.64-15.64-7.02-15.64-15.64,7.02-15.64,15.64-15.64m0-1c-9.19,0-16.64,7.45-16.64,16.64s7.45,16.64,16.64,16.64,16.64-7.45,16.64-16.64-7.45-16.64-16.64-16.64h0Z"/>
    </g>
    <g id="Erhvervsakademi" className={buttonClicked == "PathFromErhvervs" ? "buttonShow" : "buttonHide"}>
      <path d="M521.42,574.32c-8.9,0-16.14-7.24-16.14-16.14s7.24-16.14,16.14-16.14,16.14,7.24,16.14,16.14-7.24,16.14-16.14,16.14Z"/>
      <path d="M521.42,542.54c8.62,0,15.64,7.02,15.64,15.64s-7.02,15.64-15.64,15.64-15.64-7.02-15.64-15.64,7.02-15.64,15.64-15.64m0-1c-9.19,0-16.64,7.45-16.64,16.64s7.45,16.64,16.64,16.64,16.64-7.45,16.64-16.64-7.45-16.64-16.64-16.64h0Z"/>
    </g>
    <g id="Maritime" className={buttonClicked == "PathFromMaritime" ? "buttonShow" : "buttonHide"}>
      <path d="M521.46,336.21c-8.9,0-16.14-7.24-16.14-16.14s7.24-16.14,16.14-16.14,16.14,7.24,16.14,16.14-7.24,16.14-16.14,16.14Z"/>
      <path d="M521.46,304.43c8.62,0,15.64,7.02,15.64,15.64s-7.02,15.64-15.64,15.64-15.64-7.02-15.64-15.64,7.02-15.64,15.64-15.64m0-1c-9.19,0-16.64,7.45-16.64,16.64s7.45,16.64,16.64,16.64,16.64-7.45,16.64-16.64-7.45-16.64-16.64-16.64h0Z"/>
    </g>
    <g id="Gym" className={buttonClicked == "PathFromGym" ? "buttonShow" : "buttonHide"}>
      <circle cx="288.31" cy="667.76" r="16.14"/>
      <path d="M288.31,652.12c8.62,0,15.64,7.02,15.64,15.64s-7.02,15.64-15.64,15.64-15.64-7.02-15.64-15.64,7.02-15.64,15.64-15.64m0-1c-9.19,0-16.64,7.45-16.64,16.64s7.45,16.64,16.64,16.64,16.64-7.45,16.64-16.64-7.45-16.64-16.64-16.64h0Z"/>
    </g>
    <g id="Eudx-2" className={buttonClicked == "PathFromEudx" ? "buttonShow" : "buttonHide"}>
      <circle cx="288.31" cy="430.76" r="16.14"/>
      <path d="M288.31,415.12c8.62,0,15.64,7.02,15.64,15.64s-7.02,15.64-15.64,15.64-15.64-7.02-15.64-15.64,7.02-15.64,15.64-15.64m0-1c-9.19,0-16.64,7.45-16.64,16.64s7.45,16.64,16.64,16.64,16.64-7.45,16.64-16.64-7.45-16.64-16.64-16.64h0Z"/>
    </g>
    <g id="Grund" className={buttonClicked == "PathFromGrund" ? "buttonShow" : "buttonHide"}>
      <circle cx="33" cy="550.45" r="16.14"/>
      <path d="M33,534.81c8.62,0,15.64,7.02,15.64,15.64s-7.02,15.64-15.64,15.64-15.64-7.02-15.64-15.64,7.02-15.64,15.64-15.64m0-1c-9.19,0-16.64,7.45-16.64,16.64s7.45,16.64,16.64,16.64,16.64-7.45,16.64-16.64-7.45-16.64-16.64-16.64h0Z"/>
    </g>
  </g>
  <text class="cls-13" transform="translate(255.85 386.44)"><tspan class="cls-17" x="0" y="0">E</tspan><tspan x="10.85" y="0">ud/</tspan><tspan class="cls-19" x="43.45" y="0">E</tspan><tspan x="54.29" y="0">ux</tspan></text>
  <text class="cls-13" transform="translate(256.01 624.44)"><tspan x="0" y="0">Gymnasium</tspan></text>
  <g>
    <g id="StartUp">
      <g>
        <circle class="cls-10" cx="1097.08" cy="60.07" r="29"/>
        <path d="M1097.08,34.07c14.34,0,26,11.66,26,26s-11.66,26-26,26-26-11.66-26-26,11.66-26,26-26m0-6c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32-14.33-32-32-32h0Z"/>
      </g>
      <path d="M1096.88,47.08c-4.57,0-8.29,3.23-8.29,7.21,0,.66,.62,1.2,1.38,1.2s1.38-.54,1.38-1.2c0-2.65,2.48-4.81,5.53-4.81,.76,0,1.38-.54,1.38-1.2s-.62-1.2-1.38-1.2Zm-6.9,28.47c0,.24,.08,.47,.23,.66l2.12,2.77c.26,.33,.69,.54,1.15,.54h6.81c.46,0,.89-.2,1.15-.54l2.12-2.77c.15-.2,.23-.43,.23-.66v-3.24s-13.81,0-13.81,0v3.24Zm6.91-34.48c-8.83,0-15.2,6.23-15.2,13.22,0,3.33,1.42,6.37,3.76,8.69,1.44,1.43,3.69,4.42,4.53,6.92h0s4.14,0,4.14,0h0c0-.37-.06-.72-.19-1.07-.48-1.34-1.97-4.86-5.37-8.23-1.77-1.76-2.72-3.99-2.73-6.32-.02-5.53,5.15-9.61,11.05-9.61s11.05,4.31,11.05,9.61c0,2.33-.97,4.57-2.73,6.32-3.38,3.35-4.87,6.87-5.36,8.22-.13,.35-.19,.71-.19,1.07h0s4.14,0,4.14,0h0c.84-2.51,3.09-5.5,4.53-6.92,2.34-2.32,3.76-5.36,3.76-8.69,0-7.3-6.8-13.22-15.2-13.22Z"/>
    </g>
    <g id="Hubs">
      <g>
        <circle class="cls-10" cx="1194.08" cy="60.07" r="29"/>
        <path d="M1194.08,34.07c14.34,0,26,11.66,26,26s-11.66,26-26,26-26-11.66-26-26,11.66-26,26-26m0-6c-17.67,0-32,14.33-32,32s14.33,32,32,32,32-14.33,32-32-14.33-32-32-32h0Z"/>
      </g>
      <g>
        <path class="cls-1" d="M1175.08,41.07h39v38h-39V41.07Z"/>
        <path d="M1209.2,72.74h3.25v3.17h-35.75v-3.17h3.25v-26.92c0-.87,.73-1.58,1.62-1.58h26c.9,0,1.62,.71,1.62,1.58v26.92Zm-21.12-14.25v3.17h4.88v-3.17h-4.88Zm0-6.33v3.17h4.88v-3.17h-4.88Zm0,12.67v3.17h4.88v-3.17h-4.88Zm8.12,0v3.17h4.88v-3.17h-4.88Zm0-6.33v3.17h4.88v-3.17h-4.88Zm0-6.33v3.17h4.88v-3.17h-4.88Z"/>
      </g>
    </g>
  </g>
</svg></div>
  {/* <path id="FromGym1" value="PathFromGrund" OffSet="450" className="cls-2" d="M157.03,123.3h48.64c1.25,0,2.27-1.02,2.27-2.27v-56.54c0-1.25,1.02-2.27,2.27-2.27h54.93c1.25,0,2.27-1.02,2.27-2.27v0c0,1.25,1.02,2.27,2.27,2.27h117.43c1.25,0,2.27-1.02,2.27-2.27v0c0,1.25,1.02,2.27,2.27,2.27h110.85c1.24,0,2.25-1.01,2.25-2.25V31.62"/> */}

<button onClick={() => onButtonClick('PathFromGrund')}>XXXXX</button>
<button onClick={() => onButtonClick('jj')}>XXXXX</button>
<button onClick={() => onButtonClick('PathFromEudx')}>XXXXX</button>
<button onClick={() => onButtonClick('PathFromGym')}>XXXXX</button>



</>
  );
}

export default App;


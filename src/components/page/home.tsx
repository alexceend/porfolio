import React from "react";
import Introduction from '../Introduction.js';
import MyProjects from "../MyProjects.js";

import '../../styles/home.scss';
import MyLinks from "../MyLinks.js";


export default function Home() {
  
  return (
    //<Test />
    <div id="bg">
      <div id="introduction">
        <Introduction />
      </div>
      <div id="myProjects">
        <MyProjects/> 
      </div>
      <div id="myLinks">
        <MyLinks />
      </div>
    </div>
  )
}

import React, { Component, useState } from "react";
import './index.css';
import AppSubMain from './AppSubMain';
import { Tfmd } from "./Tfmd.js";
import {BackToTop} from "./component/backtotop.jsx"
import "./css/backtotop.css";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
};
export class AppMain extends React.Component {
  render() {
    return (<div>
      <AppSubMain />
      <Webcam
        audio={false}
        height={720}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      >
        {({ getScreenshot }) => (
          <button
            onClick={() => {
              const imageSrc = getScreenshot();
              //console.log(imageSrc);
              //TODO
              //this.setState({ preview: imageSrc });
              document.getElementById("cvstart0BTON").innerText = imageSrc;
              document.getElementById("cvstart0BTON").click();
            }}
          >
            Capture photo
          </button>
        )}
      </Webcam>
      <Tfmd ftmdg="ncb" />
      <Tfmd ftmdg="wcb" />
      <BackToTop />
    </div>);
  }
}
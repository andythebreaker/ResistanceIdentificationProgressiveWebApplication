import React/*, { Component, useState }*/ from "react";
import AppSubMain from './AppSubMain';
import { BackToTop } from "./component/backtotop.jsx"
import "./css/backtotop.css";
import Webcam from "react-webcam";
import "./css/appMain.css"
import "./css/webcam.css"
import { Tfmd } from "./Tfmd.js";


function caminner(d, k) {
  return (<div key={k}>
    {d.label || `Device ${k + 1}`}
    <Webcam
      className="webcamcss webcamMain"
      audio={false}
      videoConstraints={{ deviceId: d.deviceId }}
      screenshotFormat="image/jpeg"
      width={window.innerWidth}
    >
      {({ getScreenshot }) => (
        <button
          className="getScreenshotBtonMainTrig01"
          onClick={() => {
            const imageSrc = getScreenshot();
            //console.log(imageSrc);
            //TODO
            //this.setState({ preview: imageSrc });
            document.getElementById("cvstart0BTON").innerText = imageSrc;
            document.getElementById("cvstart0BTON").click();
          }}
          onLoadedMetadata={() => {
            console.log("load metadata");
          }}
          onPlay={() => {
            console.log("on play~~");
          }}
        >
          Capture photo
        </button>
      )}
    </Webcam>
  </div>);
}
/*const videoConstraints = {
  width: 1280,
  height: 720,
};*/
//videoConstraints={videoConstraints}
export function AppMain(props) {

  const [/*deviceId*/, /*setDeviceId*/] = React.useState({});
  const [devices, setDevices] = React.useState([]);
  const [devicesreverse, setDevicesreverse] = React.useState(true);
  const handleDevices = React.useCallback(
    mediaDevices =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  React.useEffect(
    () => {
      navigator.mediaDevices.enumerateDevices().then(handleDevices);
    },
    [handleDevices]
  );

  //render() {
  return (<div className="fullpage">
    <AppSubMain />
    <>
      {devicesreverse ? devices.map((device, key) =>
      (
        caminner(device, key)
      )) : devices.reverse().map((device, key) =>
      (
        caminner(device, key)
      ))}
    </>
    <Tfmd ftmdg="ncb" lf="0vw" />
    <Tfmd ftmdg="wcb" lf="50vw" />
    <BackToTop ocf={() => {
      /*var rsplay = document.getElementsByClassName('rs-play');
      for (let indexres = 0; indexres < rsplay.length; indexres++) {
        const elementres = rsplay[indexres];
        elementres.click();
      }*/
      setDevicesreverse(prev => prev ? false : true);
    }} />
  </div>);
  //}
}
//import 'react-app-polyfill';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Tfmd } from "./Tfmd.js";
import {BackToTop} from "./component/backtotop.jsx"
import "./css/backtotop.css";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
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
                document.getElementById("cvstart0BTON").innerText=imageSrc;
                document.getElementById("cvstart0BTON").click();
              }}
            >
              Capture photo
            </button>
          )}
        </Webcam>
        <Tfmd ftmdg="ncb"/>
        <Tfmd ftmdg="wcb"/>
    <BackToTop/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

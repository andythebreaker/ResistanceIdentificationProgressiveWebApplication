import React from "react";
//import ReactDOM from "react-dom";
import MagicDropzone from "react-magic-dropzone";
//import $ from 'jquery';
//import { ci } from 'case-insensitive';
import { AlwaysOnBottomFooter } from "./component/alwaysOnBottomFooter.jsx"
import "./styles.css";
import { ToastContainer, toast } from 'react-toastify';
//-import { DebugDownload } from './functionalUnit/debugDownload.js'
import 'react-toastify/dist/ReactToastify.css';
const tf = require('@tensorflow/tfjs');
//var randomstring = require("randomstring");

const weights = '/web_model/model.json';
//const MySwal = withReactContent(Swal);
/*
function downloadasimage(canvasdom) {
  var c = canvasdom;
  var link = document.createElement('a');
  link.setAttribute('download', randomstring.generate()+'.png');
  link.setAttribute('href', c.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  link.click();
}*/
function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

const names = ["Black",
  "Brown",
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Violet",
  "Grey",
  "White",
  "Gold",
  "Silver"
];

export class Tfmd extends React.Component {
  state = {
    model: null,
    preview: "",
    predictions: [],
    lf: "0vw",
    x1x2y1y2: [],//{x1:0.0,x2:0.0,y1:0.0,y2:0.0,},
  };

  componentDidMount() {

    tf.loadGraphModel("/ftmdg/" + this.props.ftmdg + weights).then(model => {
      this.setState({
        model: model,
        lf: this.props.lf,
      });
    });
  }

  onDrop = (accepted, rejected, links) => {
    //document.getElementsByClassName('rs-play')[0].click()
    console.log(accepted, links);
    this.setState({ preview: accepted[0].preview || links[0] });
  };

  cropToCanvas = (image, canvas, ctx) => {
    //document.getElementsByClassName('rs-play')[0].click()
    const naturalWidth = image.naturalWidth;
    const naturalHeight = image.naturalHeight;

    // canvas.width = image.width;
    // canvas.height = image.height;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const ratio = Math.min(canvas.width / image.naturalWidth, canvas.height / image.naturalHeight);
    const newWidth = Math.round(naturalWidth * ratio);
    const newHeight = Math.round(naturalHeight * ratio);
    ctx.drawImage(
      image,
      0,
      0,
      naturalWidth,
      naturalHeight,
      (canvas.width - newWidth) / 2,
      (canvas.height - newHeight) / 2,
      newWidth,
      newHeight,
    );

  };

  onImageChange = e => {
    console.log("[Automatic Progress Indicator Scale]🛬md");
    //document.getElementsByClassName('rs-play')[0].click()
    var c = null;
    var ctx = null;
    //if (ci(e.target.tagName).equals('IMG')) {
    //c = document.getElementById("canvas");
    c = this.canvasB;//TODO:check this
    ctx = c.getContext("2d");
    this.cropToCanvas(e.target, c, ctx);
    //function DebugDownload(url) {
    var a = document.createElement('a');
    a.href = e.target.src;
    a.download = "mid_px_" + String(makeid(7)) + ".png";
    document.body.appendChild(a);
    a.click();
    // document.body.removeChild(a);
    // a.remove();
    //}
    //DebugDownload(e.target.src);

    //} else {
    //  c = document.getElementById("canvas");
    //   ctx = c.getContext("2d");
    //  console.log(e.target.tagName)
    // }
    let [modelWidth, modelHeight] = this.state.model.inputs[0].shape.slice(1, 3);
    const input = tf.tidy(() => {
      return tf.image.resizeBilinear(tf.browser.fromPixels(c), [modelWidth, modelHeight])
        .div(255.0).expandDims(0);
    });
    this.state.model.executeAsync(input).then(res => {
      //document.getElementsByClassName('rs-play')[0].click()
      // Font options.
      const font = "16px sans-serif";
      ctx.font = font;
      ctx.textBaseline = "top";

      const [boxes, scores, classes, valid_detections] = res;
      const boxes_data = boxes.dataSync();
      const scores_data = scores.dataSync();
      const classes_data = classes.dataSync();
      const valid_detections_data = valid_detections.dataSync()[0];

      tf.dispose(res)

      var i;
      var this_state_x1x2y1y2 = [];
      for (i = 0; i < valid_detections_data; ++i) {
        document.getElementsByClassName('youcanthavefunctionsinloops')[this.props.ftmdg === "ncb" ? 0 : 1].innerText =
          String(parseInt(document.getElementsByClassName('youcanthavefunctionsinloops')[this.props.ftmdg === "ncb" ? 0 : 1].innerText, 10) + 1);
        console.log(this.props.ftmdg + ` document.getElementsByClassName('youcanthavefunctionsinloops')[this.props.ftmdg === "ncb" ? 0 : 1].innerText` + document.getElementsByClassName('youcanthavefunctionsinloops')[this.props.ftmdg === "ncb" ? 0 : 1].innerText);

        //document.getElementsByClassName('rs-play')[0].click()
        let [x1, y1, x2, y2] = boxes_data.slice(i * 4, (i + 1) * 4);
        var tmpxxyy1122 = { org: { x1: x1, x2: x2, y1: y1, y2: y2, }, mut: {}, klass: "n/a", score: "n/a" }
        x1 *= c.width;
        x2 *= c.width;
        y1 *= c.height;
        y2 *= c.height;
        var tmpxxyy = this_state_x1x2y1y2//this.state.x1x2y1y2;
        tmpxxyy1122["mut"] = { x1: x1, x2: x2, y1: y1, y2: y2, };

        const width = x2 - x1;
        const height = y2 - y1;
        const klass = names[classes_data[i]];
        const score = scores_data[i].toFixed(2);

        tmpxxyy1122["klass"] = klass;
        tmpxxyy1122["score"] = score;

        /**                        .o8       oooo   o8o                 88     o8o                                                              o8o                 .                 88                                o8o                          .oooooo.                                         o8o          
                       "888       `888   `"'                .8'     `"'                                                              `"'               .o8                .8'                                `"'                         d8P'  `Y8b                                        `"'          
oo.ooooo.  oooo  oooo   888oooo.   888  oooo   .ooooo.     .8'     oooo  .oooo.   oooo    ooo  .oooo.    .oooo.o  .ooooo.  oooo d8b oooo  oo.ooooo.  .o888oo  .oooo.o    .8'  oooo d8b  .ooooo.   .oooooooo oooo   .ooooo.  ooo. .oo.   888          oooo d8b  .ooooo.  oo.ooooo.         oooo  .oooo.o 
 888' `88b `888  `888   d88' `88b  888  `888  d88' `"Y8   .8'      `888 `P  )88b   `88.  .8'  `P  )88b  d88(  "8 d88' `"Y8 `888""8P `888   888' `88b   888   d88(  "8   .8'   `888""8P d88' `88b 888' `88b  `888  d88' `88b `888P"Y88b  888          `888""8P d88' `88b  888' `88b        `888 d88(  "8 
 888   888  888   888   888   888  888   888  888        .8'        888  .oP"888    `88..8'    .oP"888  `"Y88b.  888        888      888   888   888   888   `"Y88b.   .8'     888     888ooo888 888   888   888  888   888  888   888  888           888     888   888  888   888         888 `"Y88b.  
 888   888  888   888   888   888  888   888  888   .o8 .8'         888 d8(  888     `888'    d8(  888  o.  )88b 888   .o8  888      888   888   888   888 . o.  )88b .8'      888     888    .o `88bod8P'   888  888   888  888   888  `88b    ooo   888     888   888  888   888 .o.     888 o.  )88b 
 888bod8P'  `V88V"V8P'  `Y8bod8P' o888o o888o `Y8bod8P' 88          888 `Y888""8o     `8'     `Y888""8o 8""888P' `Y8bod8P' d888b    o888o  888bod8P'   "888" 8""888P' 88      d888b    `Y8bod8P' `8oooooo.  o888o `Y8bod8P' o888o o888o  `Y8bood8P'  d888b    `Y8bod8P'  888bod8P' Y8P     888 8""888P' 
 888                                                                888                                                                    888                                                   d"     YD                                                               888               888          
o888o                                                           .o. 88P                                                                   o888o                                                  "Y88888P'                                                              o888o          .o. 88P          
                                                                `Y888P                                                                                                                                                                                                                 `Y888P            */

        var imagetmpca = document.createElement('img');// new Image();
        imagetmpca.src = c.toDataURL("image/png");
        imagetmpca.addEventListener('load', (eEe) => {//not on load ~~ https://stackoverflow.com/questions/14885324/what-is-the-best-way-to-detect-an-image-download-completion-onload-or-addevent
          //var imagetmpca_P = $(this)[0];
          var tmpca = document.createElement("canvas");
          var tmpcactx = tmpca.getContext('2d');
          tmpca.width = width;
          tmpca.height = height;
          tmpcactx.drawImage(eEe.target, x1, y1, width, height, 0, 0, width, height);
          //document.getElementsByClassName('rtU')[this.props.ftmdg === "ncb" ? 14 + parseInt(document.getElementsByClassName('youcanthavefunctionsinloops')[this.props.ftmdg === "ncb" ? 0 : 1].innerText, 10) : 18 + parseInt(document.getElementsByClassName('youcanthavefunctionsinloops')[this.props.ftmdg === "ncb" ? 0 : 1].innerText, 10)].innerText = tmpca.toDataURL("image/png");
          //////////////////////////////////////////////

          var downloadcanvasTMPdebug = document.createElement('a');
          downloadcanvasTMPdebug.href = tmpca.toDataURL("image/png");
          downloadcanvasTMPdebug.download = this.props.ftmdg + "_debug_downloadcanvasT_" + String(makeid(7)) + ".png";
          document.body.appendChild(downloadcanvasTMPdebug);
          downloadcanvasTMPdebug.click();
          //  document.body.removeChild(downloadcanvasTMPdebug);
          // downloadcanvasTMPdebug.remove();
          //////////////////////////////////////////////
          //var tmpnotpf = this.props.ftmdg === "ncb" ? 14 + parseInt(document.getElementsByClassName('youcanthavefunctionsinloops')[this.props.ftmdg === "ncb" ? 0 : 1].innerText, 10) : 18 + parseInt(document.getElementsByClassName('youcanthavefunctionsinloops')[this.props.ftmdg === "ncb" ? 0 : 1].innerText, 10);
          //🥀🥀🥀🥀錯誤原因I非同步
          if (this.props.ftmdg === "ncb") {
            console.log("🥠🥠🥠");
            for (var tmpINS = 14; tmpINS < 14 + 8; tmpINS++) {
              console.log("🍕🍕🍕🍕🍕🍕🍕🍕🍕");// + tmpnotpf);
              if (document.getElementsByClassName('rtU')[tmpINS].innerText.length > 100) {
                console.log("🌯🌯🌯");
                continue;
              } else {
                document.getElementsByClassName('rtU')[tmpINS].innerText = tmpca.toDataURL("image/png");
                console.log("🥗🥗🥗");
                document.getElementsByClassName('rtW')[tmpINS].innerText = width;
                document.getElementsByClassName('rtH')[tmpINS].innerText = height;
                document.getElementsByClassName('reactTransRefresh')[tmpINS].click();
              }
            }
          }  //  tmpca.remove();
        });

        // Draw the bounding box.
        ctx.strokeStyle = "#00FFFF";
        ctx.lineWidth = 4;
        ctx.strokeRect(x1, y1, width, height);

        // Draw the label background.
        ctx.fillStyle = "#00FFFF";
        const textWidth = ctx.measureText(klass + ":" + score).width;
        const textHeight = parseInt(font, 10); // base 10
        ctx.fillRect(x1, y1, textWidth + 4, textHeight + 4);

        tmpxxyy.push(tmpxxyy1122);
        /*this.setState({
          x1x2y1y2: tmpxxyy,
        });*/
        this_state_x1x2y1y2 = tmpxxyy
      }
      for (i = 0; i < valid_detections_data; ++i) {
        //document.getElementsByClassName('rs-play')[0].click()
        let [x1, y1, ,] = boxes_data.slice(i * 4, (i + 1) * 4);
        x1 *= c.width;
        y1 *= c.height;
        const klass = names[classes_data[i]];
        const score = scores_data[i].toFixed(2);

        // Draw the text last to ensure it's on top.
        ctx.fillStyle = "#000000";
        ctx.fillText(klass + ":" + score, x1, y1);

      }
      toast(this.props.ftmdg + JSON.stringify(this_state_x1x2y1y2));

      //把這個download下來
      function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
      }

      download('Rainbow_Toast_Debugging_' + String(makeid(7)), String(this.props.ftmdg + JSON.stringify(this_state_x1x2y1y2)));
      //手動驗證是否正確(框出需求)
      /*    .___                  .__                    .___                                                  
        __| _/______  _  ______ |  |   _________     __| _/   ____ _____    ____ _____ ___  _______    ______
       / __ |/  _ \ \/ \/ /    \|  |  /  _ \__  \   / __ |  _/ ___\\__  \  /    \\__  \\  \/ /\__  \  /  ___/
      / /_/ (  <_> )     /   |  \  |_(  <_> ) __ \_/ /_/ |  \  \___ / __ \|   |  \/ __ \\   /  / __ \_\___ \ 
      \____ |\____/ \/\_/|___|  /____/\____(____  /\____ |   \___  >____  /___|  (____  /\_/  (____  /____  >
           \/                 \/                \/      \/       \/     \/     \/     \/           \/     \/ 
           */
      var b = document.createElement('a');
      b.href = c.toDataURL("image/png");
      b.download = "mid_rec_" + String(makeid(7)) + ".png";
      document.body.appendChild(b);
      b.click();
      //  document.body.removeChild(b);
      //  b.remove();

      //接著.......再說
      /* var istart = 14;//14~17&18192021(?)
       for (var isi = 0; isi < 4 + 4; isi++) {
         var inri = isi + istart;
         document.getElementsByClassName("downloadTcanvas")[inri].click();
 
       }*///這裡的下載會來不及

    });
  };

  render() {
    return (
      <div className="CamPlusTf">
        <h3>{this.props.ftmdg}</h3>
        <button
          className="wakuwaku"
          onClick={() => {
            //var rii = document.getElementsByClassName('WCWC')[1];
            //var riiurl = rii.toDataURL('image/jpeg');
            //console.log(riiurl);
            var rii = document.getElementsByClassName('rtU')[1];
            var riiurl = rii.innerText;
            this.setState({ preview: riiurl });
          }}>TTTF</button>
        <div className="Dropzone-page">
          {this.state.model ? (
            <MagicDropzone
              className="Dropzone"
              accept="image/jpeg, image/png, .jpg, .jpeg, .png"
              multiple={false}
              onDrop={this.onDrop}
            >
              {this.state.preview ? (
                <img
                  alt="upload preview"
                  onLoad={this.onImageChange}
                  className="Dropzone-img"
                  src={this.state.preview}
                />
              ) : (
                "Choose or drop a file."
              )}
              <canvas id="canvas" width="640" height="640"
                ref={(canvasB) => (this.canvasB = canvasB)} />
            </MagicDropzone>
          ) : (
            <div className="Dropzone">Loading model...</div>
          )}
        </div>
        <AlwaysOnBottomFooter lr={this.state.lf} children={JSON.stringify(this.state.x1x2y1y2)} />
        <ToastContainer />
        <h5 className="youcanthavefunctionsinloops" ref={(youcanthavefunctionsinloops) => (this.youcanthavefunctionsinloops = youcanthavefunctionsinloops)}>0</h5>
      </div>
    );
  }
}


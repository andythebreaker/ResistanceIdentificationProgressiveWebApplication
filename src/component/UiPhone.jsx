import React/*, { Component, useState }*/ from "react";
//import { Rating, Message } from "semantic-ui-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
//import $ from 'jquery';
import "./../css/swp.css"

function windowsOBJ(innerHTML) {
  return ({
    position: 'bottom',
    allowOutsideClick: false,
    background: '#ffffff00',
    backdrop: 'none',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: '快門',
    denyButtonText: `重置`,
    title: <p className='glowBG'>teststring</p>,
    html: innerHTML,//dataFET,//go edit public/addHTML/swp.html
    showCloseButton: true,
    footer: "this is a footer",
    didOpen: () => {
      // `MySwal` is a subclass of `Swal` with all the same instance & static methods
      var delayInMilliseconds = 10000; //10 second
      function back_to_top() {
        setTimeout(function () {
          //your code to be executed after 10 second
          if (document.getElementsByClassName('back-to-top').length === 0) {
            back_to_top();
            console.log("back_to_top...wait...");
          }
          else {
            //var flowbubble=document.createElement('div');
            //flowbubble.classList.add('rmsw2fb');
            //flowbubble.innerHTML=document.getElementsByClassName('back-to-top')[0].outerHTML;
            var mainFPU = document.getElementsByClassName('back-to-top')[0];
            var fpu = document.getElementsByClassName('fpu');
            //for (let index = 0; index < fpu.length; index++) {
            //const elementfpu = fpu[index];
            //elementfpu//...
            //}
            fpu[0].innerHTML = mainFPU.outerHTML;
            fpu[0].getElementsByTagName('button')[0].addEventListener('click', () => {
              mainFPU.click();
              /*TODO這裡感覺也不用切換了
              反正我都吃最下方的dom
              dom順序下優先
              */
            });
            console.log("back_to_top...end!!!");
          }
        }, delayInMilliseconds);
      }
      back_to_top();
      document
        .getElementById("not_react_comp_time_swipe_init")
        .click();
      //MySwal.showLoading();
    },
  })
};

const MySwal = withReactContent(Swal);
var globHadTrig = false;
export class UiPhone extends React.Component {

  constructor(props) {
    super(props);
    this.state = { //這裡沒必沒必要存在
      footerObj: "footerObj",
      ttlObj: "ttlObj",
    };
  }

  componentDidMount() {
    //console.log("AppMain.componentDidMount");
    var mainuiwindows = document.getElementsByClassName("Sw222")[0]; //you can only have one of this!!!
    console.log(mainuiwindows);
    if (!globHadTrig) {
      globHadTrig = true;
      mainuiwindows.click();
    }
  }

  render() {
    return (
      <div>
        <button
          className="Sw222"
          onClick={(e) => {
            //console.log("測試$$$$$$$");
            //console.log($(e.target).text());
            fetch("./addHTML/swp.html", { /*設定request內容*/ })
              .then(res => res.text()) /*把request text化*/
              .then(dataFET => {
                /*接到request data後要做的事情*/
                function mySwalfire() {
                  MySwal.fire(windowsOBJ(dataFET)).then((result) => {
                    //return MySwal.fire(<p>Shorthand works too</p>);
                    //if (result.isConfirmed) {
                    ///  console.log("[Automatic Progress Indicator Scale]🛬shutter");
                    //  var at01 = document.getElementsByClassName("getScreenshotBtonMainTrig01")[document.getElementsByClassName("getScreenshotBtonMainTrig01").length - 1];
                    //  at01.click();
                    //  console.log("[Automatic Progress Indicator Scale]🛬clickDetectCorners");
                    //  document.getElementById("aorplane1").click();
                    //} else if (result.isDenied) {
                    //  Swal.fire('Changes are not saved', '', 'info')
                    //} else {
                    document.getElementById("root").style.overflow = "scroll";
                    Swal.fire('swal is closed', '', 'info')
                    //}
                  });
                }
                mySwalfire();
              })
              .catch(eFET => {
                /*發生錯誤時要做的事情*/
                console.error("[error] UIphone.jsx - fetch - add.html" + eFET);
              });
          }}
        >
          SW222
        </button>
      </div>
    );
  }
}

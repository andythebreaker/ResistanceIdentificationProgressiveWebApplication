/*已棄用 */
import React from "react";
//import { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Message } from "semantic-ui-react";
import { MyBtnComp } from "./MyBtn.jsx";
import Typography from "@mui/material/Typography";
var pixels = require("image-pixels");

export function ImgStrip(props) {
  const fucnImgStripDo = () => {
    console.log("fucnImgStripDo");
    pixels(props.srcImgBlobUri,(d,w,h)=>{console.log(d,w,h);});
  };
  return (
    <div className="imgStrip">
      <MyBtnComp
        fucnImgStrip={fucnImgStripDo}
        showText={<Typography>切割影像長條</Typography>}
      />
      <Message
        size="mini"
        header="Changes in Service"
        content={props.srcImgBlobUri}
      />
    </div>
  );
}

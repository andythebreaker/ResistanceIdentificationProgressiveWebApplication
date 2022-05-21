import React, { Component, useState } from "react";
import { Rating, Message } from "semantic-ui-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
var globHadTrig = false;
export class UiPhone extends React.Component {
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
          onClick={() => {
            MySwal.fire({
              title: <p>Hello World</p>,
              html: `<style>.picker {
                    position: relative;
                    width: 300px;
                    overflow: hidden;
                    margin: 1rem auto 0;
                    outline: 1px solid #ccc;
                    padding: 0 30px;
                  }
                  
                  .swiper-container {
                    width: 80px;
                    height: 210px;
                    float: left;
                  }
                  
                  .swiper-slide {
                    text-align: center;
                    font-size: 2rem;
                    /* Center slide text vertically */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    user-select: none;
                    opacity: 0.25;
                    transition: opacity 0.3s ease;
                    cursor: default;
                    font-weight: bold;
                    -webkit-tap-highlight-color: transparent;
                  }
                  
                  .swiper-slide-prev,
                  .swiper-slide-next {
                    cursor: pointer;
                  }
                  
                  .swiper-slide-active {
                    opacity: 1;
                  }
                  
                  .vizor {
                    border-top: 1px solid #ccc;
                    border-bottom: 1px solid #ccc;
                    height: 70px;
                    position: absolute;
                    top: 50%;
                    left: 1rem;
                    right: 1rem;
                    transform: translateY(-50%);
                    font-size: 2rem;
                    line-height: 62px;
                  }
                  
                  .vizor:before,
                  .vizor:after {
                    content: ':';
                    display: inline-block;
                    line-height: inherit;
                    height: 100%;
                    position:absolute;
                    top: 0;
                    transform: translateX(-50%);
                  }
                  
                  .vizor:before {
                    left: 95px;
                  }
                  
                  .vizor:after {
                    left: 175px;
                  }
                  
                  .arrows .swiper-container:after,
                  .arrows .swiper-container:before {
                    content: "";
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                  
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 4px;
                    border-color: transparent;
                    opacity: 0.5;
                  }
                  
                  .arrows .swiper-container:before {
                    top: 0.5rem;
                    border-top-width: 0;
                    border-bottom-color: currentColor;
                  }
                  
                  .arrows .swiper-container:after {
                    bottom: 0.5rem;
                    border-bottom-width: 0;
                    border-top-color: currentColor;
                  }
                  </style><h1>Timepicker using Swiper.js</h1>
                <div class="picker arrows">
                  <div class="swiper-container hours">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">00</div>
                      <div class="swiper-slide">01</div>
                      <div class="swiper-slide">02</div>
                      <div class="swiper-slide">03</div>
                      <div class="swiper-slide">04</div>
                      <div class="swiper-slide">05</div>
                      <div class="swiper-slide">06</div>
                      <div class="swiper-slide">07</div>
                      <div class="swiper-slide">08</div>
                      <div class="swiper-slide">09</div>
                      <div class="swiper-slide">10</div>
                      <div class="swiper-slide">11</div>
                      <div class="swiper-slide">12</div>
                      <div class="swiper-slide">13</div>
                      <div class="swiper-slide">14</div>
                      <div class="swiper-slide">15</div>
                      <div class="swiper-slide">16</div>
                      <div class="swiper-slide">17</div>
                      <div class="swiper-slide">18</div>
                      <div class="swiper-slide">19</div>
                      <div class="swiper-slide">20</div>
                      <div class="swiper-slide">21</div>
                      <div class="swiper-slide">22</div>
                      <div class="swiper-slide">23</div>
                    </div>
                  </div>
                  <div class="swiper-container minutes">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">00</div>
                      <div class="swiper-slide">01</div>
                      <div class="swiper-slide">02</div>
                      <div class="swiper-slide">03</div>
                      <div class="swiper-slide">04</div>
                      <div class="swiper-slide">05</div>
                      <div class="swiper-slide">06</div>
                      <div class="swiper-slide">07</div>
                      <div class="swiper-slide">08</div>
                      <div class="swiper-slide">09</div>
                      <div class="swiper-slide">10</div>
                      <div class="swiper-slide">11</div>
                      <div class="swiper-slide">12</div>
                      <div class="swiper-slide">13</div>
                      <div class="swiper-slide">14</div>
                      <div class="swiper-slide">15</div>
                      <div class="swiper-slide">16</div>
                      <div class="swiper-slide">17</div>
                      <div class="swiper-slide">18</div>
                      <div class="swiper-slide">19</div>
                      <div class="swiper-slide">20</div>
                      <div class="swiper-slide">21</div>
                      <div class="swiper-slide">22</div>
                      <div class="swiper-slide">23</div>
                      <div class="swiper-slide">24</div>
                      <div class="swiper-slide">25</div>
                      <div class="swiper-slide">26</div>
                      <div class="swiper-slide">27</div>
                      <div class="swiper-slide">28</div>
                      <div class="swiper-slide">29</div>
                      <div class="swiper-slide">30</div>
                      <div class="swiper-slide">31</div>
                      <div class="swiper-slide">32</div>
                      <div class="swiper-slide">33</div>
                      <div class="swiper-slide">34</div>
                      <div class="swiper-slide">35</div>
                      <div class="swiper-slide">36</div>
                      <div class="swiper-slide">37</div>
                      <div class="swiper-slide">38</div>
                      <div class="swiper-slide">39</div>
                      <div class="swiper-slide">40</div>
                      <div class="swiper-slide">41</div>
                      <div class="swiper-slide">42</div>
                      <div class="swiper-slide">43</div>
                      <div class="swiper-slide">44</div>
                      <div class="swiper-slide">45</div>
                      <div class="swiper-slide">46</div>
                      <div class="swiper-slide">47</div>
                      <div class="swiper-slide">48</div>
                      <div class="swiper-slide">49</div>
                      <div class="swiper-slide">50</div>
                      <div class="swiper-slide">51</div>
                      <div class="swiper-slide">52</div>
                      <div class="swiper-slide">53</div>
                      <div class="swiper-slide">54</div>
                      <div class="swiper-slide">55</div>
                      <div class="swiper-slide">56</div>
                      <div class="swiper-slide">57</div>
                      <div class="swiper-slide">58</div>
                      <div class="swiper-slide">59</div>
                    </div>
                  </div>
                  <div class="swiper-container seconds">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">00</div>
                      <div class="swiper-slide">01</div>
                      <div class="swiper-slide">02</div>
                      <div class="swiper-slide">03</div>
                      <div class="swiper-slide">04</div>
                      <div class="swiper-slide">05</div>
                      <div class="swiper-slide">06</div>
                      <div class="swiper-slide">07</div>
                      <div class="swiper-slide">08</div>
                      <div class="swiper-slide">09</div>
                      <div class="swiper-slide">10</div>
                      <div class="swiper-slide">11</div>
                      <div class="swiper-slide">12</div>
                      <div class="swiper-slide">13</div>
                      <div class="swiper-slide">14</div>
                      <div class="swiper-slide">15</div>
                      <div class="swiper-slide">16</div>
                      <div class="swiper-slide">17</div>
                      <div class="swiper-slide">18</div>
                      <div class="swiper-slide">19</div>
                      <div class="swiper-slide">20</div>
                      <div class="swiper-slide">21</div>
                      <div class="swiper-slide">22</div>
                      <div class="swiper-slide">23</div>
                      <div class="swiper-slide">24</div>
                      <div class="swiper-slide">25</div>
                      <div class="swiper-slide">26</div>
                      <div class="swiper-slide">27</div>
                      <div class="swiper-slide">28</div>
                      <div class="swiper-slide">29</div>
                      <div class="swiper-slide">30</div>
                      <div class="swiper-slide">31</div>
                      <div class="swiper-slide">32</div>
                      <div class="swiper-slide">33</div>
                      <div class="swiper-slide">34</div>
                      <div class="swiper-slide">35</div>
                      <div class="swiper-slide">36</div>
                      <div class="swiper-slide">37</div>
                      <div class="swiper-slide">38</div>
                      <div class="swiper-slide">39</div>
                      <div class="swiper-slide">40</div>
                      <div class="swiper-slide">41</div>
                      <div class="swiper-slide">42</div>
                      <div class="swiper-slide">43</div>
                      <div class="swiper-slide">44</div>
                      <div class="swiper-slide">45</div>
                      <div class="swiper-slide">46</div>
                      <div class="swiper-slide">47</div>
                      <div class="swiper-slide">48</div>
                      <div class="swiper-slide">49</div>
                      <div class="swiper-slide">50</div>
                      <div class="swiper-slide">51</div>
                      <div class="swiper-slide">52</div>
                      <div class="swiper-slide">53</div>
                      <div class="swiper-slide">54</div>
                      <div class="swiper-slide">55</div>
                      <div class="swiper-slide">56</div>
                      <div class="swiper-slide">57</div>
                      <div class="swiper-slide">58</div>
                      <div class="swiper-slide">59</div>
                    </div>
                  </div>
                  <div class="vizor"></div>
                <button id="not_react_comp_time_swipe_init" style="display:none;" onclick="swipeadd()"></button>
                </div>
                `,
              showCloseButton: true,
              didOpen: () => {
                // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                document
                  .getElementById("not_react_comp_time_swipe_init")
                  .click();
                MySwal.showLoading();
              },
            }).then(() => {
              return MySwal.fire(<p>Shorthand works too</p>);
            });
          }}
        >
          SW222
        </button>
      </div>
    );
  }
}

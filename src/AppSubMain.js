//import logo from './logo.svg';
import './App.css'; import './css/old_layout_down.css'; import './css/old_layout_up.css';
import { useState, useEffect } from "react";
import { KMeans } from 'scikitjs'
import { TableCCall } from './component/TableColorCrecAll.jsx'
import { UiPhone } from './component/UiPhone.jsx'
let X = [
  [1, 2, 7],
  [1, 4, 7],
  [4, 4, 7],
  [4, 0, 7]
];
const kmean = new KMeans({ nClusters: 2 });
console.log(X);
var kfp = kmean.fitPredict(X);
kfp.array().then(function (d) { console.log(d) });
/*TODO:
find out what is diff between fitPredict and fit???????????
*/

function AppSubMain() {
  const data = `
  
<!--注意:

這是從JADE轉過來的，看branch=>master

-->

  <p>操作方法-先按一號按鈕-再按Apply按鈕-再regionCrop</p><button id="regionCrop">regionCrop </button><canvas id="SOLUimgPerspectiveTransformation" width="1000" height="690"></canvas>
  <div class="container" style="display:none;">
      <div class="o_image" id="background"><img id="sample" src="./bill.png" alt="bill" />
          <!--span ©reactcodes blog-->
      </div>
      <div class="p_image"><canvas id="imageInit"></canvas><canvas id="imageResult"></canvas></div>
  </div>
  <div class="b_container"><button id="apply" style="display:none;">Apply</button>
      <!--https://github.com/reactcodes/crop-perspective-correction-image--><button id="TARGimgPerspectiveTransformation">Apply-imgPerspectiveTransformation</button>
  </div>
  <h1 class="splt">EGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEG</h1>
  <div class="divFlex divExperiment" style="width:825px; margin-left:auto; margin-right:auto;">
      <div class="floatLeft"><canvas id="canvasExampleFilters" width="640" height="400"></canvas></div>
      <div class="floatLeft">
          <div class="buttonFilter" onclick="clickExampleFiltersGrayScale()">GrayScale</div>
          <div class="buttonFilter" onclick="clickExampleFiltersBlackAndWhite()">Black and White</div>
          <div class="buttonFilter" onclick="clickExampleFiltersSepia()">Sepia</div>
          <div class="buttonFilter" onclick="clickExampleFiltersEmboss()">Emboss</div>
          <div class="buttonFilter" onclick="clickExampleFiltersHalftone()">Halftone</div>
          <div class="buttonFilter" onclick="clickExampleFiltersInvertColors()">Invert</div>
          <div class="buttonFilter" onclick="clickExampleFiltersEdge()">Edge Detection</div>
          <div class="buttonFilter" onclick="clickExampleFiltersEdge2()">Edge Detection 2</div>
          <div class="buttonFilter" onclick="clickExampleFiltersCrop()">Crop</div>
          <div class="buttonFilter" onclick="clickExampleFiltersInvertScale()">Scale</div>
          <div class="buttonFilter" onclick="clickExampleFiltersReset()">Reset</div>
      </div>
  </div>
  <h1 class="splt">EGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEGEG</h1>
  <div class="divFlex divExperiment" style="width:1188; margin-left:auto; margin-right:auto;">
      <div class="floatLeft"><canvas id="canvasAutoCrop" width="1000" height="570"></canvas></div>
      <div class="floatLeft"><button class="buttonFilter" id="aorplane1" onclick="clickDetectCorners()">1. Detect Corners</button>
          <div class="buttonFilter justLeaveItAnyway" onclick="clickSelectCropArea()">2. Select Crop Area</div>
          <div class="buttonFilter justLeaveItAnyway" onclick="clickAutoCropCrop()">3. Crop</div><button class="buttonFilter" onclick="clickAutoCropReset()">Reset</button>
      </div>
  </div>
  <div class="divFlex divExperiment justLeaveItAnyway" style="width:1188; margin-left:auto; margin-right:auto;">
      <div class="floatLeft"><canvas id="canvasFractals" width="1000" height="570"></canvas></div>
      <div class="floatLeft">
          <div class="buttonFilter" onclick="clickFractalDragon()">Dragon</div>
          <div class="buttonFilter" onclick="clickFractalTree()">Tree</div>
          <div class="buttonFilter" onclick="clickFractalBarnsleyLeaf()">Barnsley Leaf</div>
          <div class="buttonFilter" onclick="clickFractalMappleLeaf()">Mapple Leaf</div>
      </div>
  </div><button onclick="canvDraw()">canvDraw</button>
  <table>
      <thead>
          <tr>
              <th>up-left-x</th>
              <th>up-left-y</th>
              <th>up-right-x</th>
              <th>up-right-y</th>
              <th>down-left-x</th>
              <th>down-left-y</th>
              <th>down-right-x</th>
              <th>down-right-y</th>
          </tr>
      </thead>
      <tbody id="udlrxy"></tbody>
  </table>
  <table>
      <thead>
          <tr>
              <th>x座標max</th>
              <th>y座標max</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td id="xmax"></td>
              <td id="ymax"></td>
          </tr>
      </tbody>
  </table>
  <table>
      <thead>
          <tr>
              <th>轉換座標臨界點</th>
              <th>座標點x</th>
              <th>座標點y</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>wo</td>
              <td id="wo_ptx"></td>
              <td id="wo_pty"></td>
          </tr>
          <tr>
              <td>oh</td>
              <td id="oh_ptx"></td>
              <td id="oh_pty"></td>
          </tr>
          <tr>
              <td>wh</td>
              <td id="wh_ptx"></td>
              <td id="wh_pty"></td>
          </tr>
      </tbody>
      <tfoot>
          <td>oo</td>
          <td id="oo_ptx"></td>
          <td id="oo_pty"></td>
      </tfoot>
  </table>
  <table>
      <thead>
          <tr>
              <th>角點座標</th>
              <th id="trig_corner_finish">是否為最邊角</th>
              <th>00_sqrt_of_sum_of_pow</th>
              <th>w0_sqrt_of_sum_of_pow</th>
              <th>0h_sqrt_of_sum_of_pow</th>
              <th>wh_sqrt_of_sum_of_pow</th>
          </tr>
      </thead>
      <tbody id="mapchart"></tbody>
      <tfoot>
          <tr>
              <td>n/a</td>
              <td>n/a</td>
              <td id="00_sqrt_of_sum_of_pow">n/a</td>
              <td id="w0_sqrt_of_sum_of_pow">n/a</td>
              <td id="0h_sqrt_of_sum_of_pow">n/a</td>
              <td id="wh_sqrt_of_sum_of_pow">n/a</td>
          </tr>
      </tfoot>
  </table>
  <p>X&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;XXXXXX&nbsp;&nbsp;&nbsp;XX&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;XXXX&nbsp;&nbsp;</p>
  <p>X&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;XX&nbsp;&nbsp;XX&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;X&nbsp;&nbsp;XX&nbsp;&nbsp;&nbsp;X&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
  <p>XXXX&nbsp;&nbsp;&nbsp;X&nbsp;XX&nbsp;X&nbsp;XXXXX&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;X&nbsp;X&nbsp;&nbsp;X&nbsp;&nbsp;XXXX&nbsp;&nbsp;</p>
  <p>X&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;XXXXXX&nbsp;X&nbsp;&nbsp;X&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;</p>
  <p>X&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;X&nbsp;&nbsp;&nbsp;XX&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;</p>
  <p>X&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;XXXXXX&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;XXXX&nbsp;&nbsp;</p>
  <button id="kmeansButtonDom">kmeansStart </button><canvas id="kmeansRES"></canvas><input type="number" id="kmeansTermCriteriaPA" value="0.8" />
 
  <script>var reactTransImagePathBton_X=function(domFrom,domTo){
    var sourceCanvas=document.getElementById('myres');
    var destinationCanvas=document.getElementsByClassName('WCWC')[0];
    /*grab the context from your destination canvas*/
    var destCtx = destinationCanvas.getContext('2d');
    /*call its drawImage() function passing it the source canvas directly*/
    destCtx.drawImage(sourceCanvas, 0, 0);
  } </script>
<!--button id="react2pic" onclick="reactTransImagePathBton(myres,domTo)"-->
move to react!
</button>

 <!--

  <script src="https://cdnjs.cloudflare.com/ajax/libs/algebra.js/0.2.0/algebra.min.js" integrity="sha512-uRz8bf2rMRddlRP1Og3D17oayi+oXNJdQxGzJqGD76gCNs+Q8dZOw9GbsJsW8853vyYxZhxEhfz/IZfelCyxVA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script type="text/javascript" src="/javascripts/index.js"></script>
<script type="text/javascript" src="/javascripts/marvin.js"></script>

<script src="./libs/qunit-2.0.1.js" type="text/javascript"></script>
<script src="utils.js" type="text/javascript"></script>
<script src="perspective.js" type="text/javascript"></script>
<script src="./libs/d3.v3.min.js"></script>
<script src="./libs/numeric-solve.min.js"></script>
<script src="./index.js"></script>
<script type="text/javascript" src="/javascripts/TARGimgPerspectiveTransformation.js"></script>
<script type="text/javascript" src="/javascripts/regionCrop.js"></script>
<script type="text/javascript" src="/kmeans/index.js"></script>

-->

<!--<div class="p_image">
<canvas id="imageInit"></canvas>
</div>
<div class="b_container">
<button id="apply">Apply</button>
</div>-->
`;

  const status12 = useScript("https://code.jquery.com/jquery-3.6.0.min.js");
  const statusN1 = useScript("https://www.marvinj.org/releases/marvinj-0.9.js");
  const status0 = useScript("https://cdnjs.cloudflare.com/ajax/libs/algebra.js/0.2.0/algebra.min.js");
  const status1 = useScript("/javascripts/index.js");
  const status2 = useScript("/javascripts/marvin.js");
  const status3 = useScript("./libs/qunit-2.0.1.js");
  const status4 = useScript("utils.js");
  const status5 = useScript("perspective.js");
  const status6 = useScript("./libs/d3.v3.min.js");
  const status7 = useScript("./libs/numeric-solve.min.js");
  const status8 = useScript("./index.js");
  const status9 = useScript("/javascripts/TARGimgPerspectiveTransformation.js");
  const status10 = useScript("/javascripts/regionCrop.js");
  const status11 = useScript("/kmeans/index.js");
  const status13 = useScript("https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.1.5/swiper-bundle.min.js");
  const status14 = useScript("./addjsfuc/swipeadd.js");
  const status15 = useScript("https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js");
  /*因為傳統marvin執行時的設計錯誤
  會出現
  找不到長寬高
  因為該物件被隱藏
  cdn呼叫併發錯誤
  ===================================
  semantic.min.js:11 Uncaught ReferenceError: jQuery is not defined
    at semantic.min.js:11:6043
  ===================================
  */
  const status16 = useScript("./javascripts/swp.js");

  return (
    <div className="App">
      <div className="realReactApp">
        <TableCCall />
        <p>################</p>
        <canvas id="myresClone"></canvas>
      </div>
      <div className="fromOldApp">
        <div className="dpn0">
          {//嚴格遵守順序
          }
          Script statusN1: <b>{statusN1}</b>
          Script status12: <b>{status12}</b>
          {statusN1 === "ready" &&
            status12 === "ready" && (
              <div className="dpn1">
                Script status0: <b>{status0}</b>
                Script status1: <b>{status1}</b>
                Script status2: <b>{status2}</b>
                Script status3: <b>{status3}</b>
                Script status4: <b>{status4}</b>
                Script status5: <b>{status5}</b>
                Script status6: <b>{status6}</b>
                Script status7: <b>{status7}</b>
                Script status8: <b>{status8}</b>
                Script status9: <b>{status9}</b>
                Script status10: <b>{status10}</b>
                Script status11: <b>{status11}</b>
                Script status13: <b>{status13}</b>
                Script status14: <b>{status14}</b>
                Script status15: <b>{status15}</b>
                Script status16: <b>{status16}</b>
                {status0 === "ready" &&
                  status1 === "ready" &&
                  status2 === "ready" &&
                  status3 === "ready" &&
                  status4 === "ready" &&
                  status5 === "ready" &&
                  status6 === "ready" &&
                  status7 === "ready" &&
                  status8 === "ready" &&
                  status9 === "ready" &&
                  status10 === "ready" &&
                  status11 === "ready" &&
                  status13 === "ready" &&
                  status14 === "ready" &&
                  status15 === "ready" &&
                  status16 === "ready" &&
                  (
                    <div>
                      <p>這裡面的東西就是已經載入外部JS了</p>
                      <UiPhone />
                    </div>
                  )}
              </div>
            )}    </div>
      </div>
      <div id="switchFromTraditional" dangerouslySetInnerHTML={{ __html: data }}>
      </div>
    </div >
  );
}

// Hook
//https://usehooks.com/useScript/
function useScript(src) {
  // Keep track of script status ("idle", "loading", "ready", "error")
  const [status, setStatus] = useState(src ? "loading" : "idle");
  useEffect(
    () => {
      // Allow falsy src value if waiting on other data needed for
      // constructing the script URL passed to this hook.
      if (!src) {
        setStatus("idle");
        return;
      }
      // Fetch existing script element by src
      // It may have been added by another intance of this hook
      let script = document.querySelector(`script[src="${src}"]`);
      if (!script) {
        // Create script
        script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.setAttribute("data-status", "loading");
        // Add script to document body
        document.body.appendChild(script);
        // Store status in attribute on script
        // This can be read by other instances of this hook
        const setAttributeFromEvent = (event) => {
          script.setAttribute(
            "data-status",
            event.type === "load" ? "ready" : "error"
          );
        };
        script.addEventListener("load", setAttributeFromEvent);
        script.addEventListener("error", setAttributeFromEvent);
      } else {
        // Grab existing script status from attribute and set to state.
        setStatus(script.getAttribute("data-status"));
      }
      // Script event handler to update status in state
      // Note: Even if the script already exists we still need to add
      // event handlers to update the state for *this* hook instance.
      const setStateFromEvent = (event) => {
        setStatus(event.type === "load" ? "ready" : "error");
      };
      // Add event listeners
      script.addEventListener("load", setStateFromEvent);
      script.addEventListener("error", setStateFromEvent);
      // Remove event listeners on cleanup
      return () => {
        if (script) {
          script.removeEventListener("load", setStateFromEvent);
          script.removeEventListener("error", setStateFromEvent);
        }
      };
    },
    [src] // Only re-run effect if script src changes
  );
  return status;
}

export default AppSubMain;

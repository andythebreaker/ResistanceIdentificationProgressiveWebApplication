/**********************************************************************
 * GLOBAL VARIABLES
 *********************************************************************/
var imageExampleFilters,
  imageExampleFiltersOut,
  imageAutoCrop,
  imageFractals;



/**********************************************************************
* LOADING METHODS
*********************************************************************/

exampleFilters();
exampleAutoCrop();
//exampleFractals();

function example1() {
  imageExample1 = new MarvinImage();
  imageExample1.load("/images/tp1.jpg", function () {
    imageExample1.draw(document.getElementById("canvasExample1A"));
    Marvin.colorChannel(imageExample1, imageExample1, 14, 0, -8);
    imageExample1.draw(document.getElementById("canvasExample1B"));
  });
}

function exampleFilters() {
  imageExampleFilters = new MarvinImage();
  imageExampleFilters.load("/images/tp1.jpg", function () {
    imageExampleFilters.draw(document.getElementById("canvasExampleFilters"));
    imageExampleFiltersOut = new MarvinImage(imageExampleFilters.getWidth(), imageExampleFilters.getHeight())
  });
}

function exampleAutoCrop() {
  imageAutoCrop = new MarvinImage();
  imageAutoCrop.load("/images/tp1.jpg", function () {
    imageAutoCrop.draw(document.getElementById("canvasAutoCrop"));
  });
}

/*function exampleFractals(){
 imageFractals = new MarvinImage(1000,570);
 itfFractal(ITF_DRAGON);
}*/

function clickExampleFiltersInvertColors() {
  Marvin.invertColors(imageExampleFilters, imageExampleFiltersOut);
  imageExampleFiltersOut.draw(document.getElementById("canvasExampleFilters"));
}


function clickExampleFiltersInvertScale() {
  Marvin.scale(imageExampleFilters, imageExampleFiltersOut, Math.floor(imageExampleFilters.getWidth() / 2), Math.floor(imageExampleFilters.getHeight() / 2));

  // Clear canvas
  var canvas = document.getElementById("canvasExampleFilters");
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

  imageExampleFiltersOut.draw(document.getElementById("canvasExampleFilters"), Math.floor(imageExampleFilters.getWidth() / 4), Math.floor(imageExampleFilters.getHeight() / 4));
  imageExampleFiltersOut.setDimension(imageExampleFilters.getWidth(), imageExampleFilters.getHeight());
}

function clickExampleFiltersCrop() {
  Marvin.crop(imageExampleFilters, imageExampleFiltersOut, 250, 35, 180, 368);

  // Clear canvas
  var canvas = document.getElementById("canvasExampleFilters");
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

  imageExampleFiltersOut.draw(document.getElementById("canvasExampleFilters"), 250, 35);
  imageExampleFiltersOut.setDimension(imageExampleFilters.getWidth(), imageExampleFilters.getHeight());
}

function clickExampleFiltersGrayScale() {
  Marvin.grayScale(imageExampleFilters, imageExampleFiltersOut);
  imageExampleFiltersOut.draw(document.getElementById("canvasExampleFilters"));
}

function clickExampleFiltersBlackAndWhite() {
  Marvin.blackAndWhite(imageExampleFilters, imageExampleFiltersOut, 30);
  imageExampleFiltersOut.draw(document.getElementById("canvasExampleFilters"));
}

function clickExampleFiltersSepia() {
  imageExampleFiltersOut.clear(0xFF000000);
  Marvin.sepia(imageExampleFilters, imageExampleFiltersOut, 30);
  imageExampleFiltersOut.draw(document.getElementById("canvasExampleFilters"));
}

function clickExampleFiltersEmboss() {
  Marvin.emboss(imageExampleFilters, imageExampleFiltersOut);
  imageExampleFiltersOut.draw(document.getElementById("canvasExampleFilters"));
}

function clickExampleFiltersHalftone() {
  Marvin.halftoneErrorDiffusion(imageExampleFilters, imageExampleFiltersOut);
  imageExampleFiltersOut.draw(document.getElementById("canvasExampleFilters"));
}

function clickExampleFiltersEdge() {
  imageExampleFiltersOut.clear(0xFF000000);
  Marvin.prewitt(imageExampleFilters, imageExampleFiltersOut);
  imageExampleFiltersOut.draw(document.getElementById("canvasExampleFilters"))
}

function clickExampleFiltersEdge2() {
  imageExampleFiltersOut.clear(0xFF000000);
  Marvin.prewitt(imageExampleFilters, imageExampleFiltersOut);
  Marvin.invertColors(imageExampleFiltersOut, imageExampleFiltersOut);
  Marvin.thresholding(imageExampleFiltersOut, imageExampleFiltersOut, 150);
  imageExampleFiltersOut.draw(document.getElementById("canvasExampleFilters"))
}

function clickExampleFiltersReset() {
  imageExampleFilters.draw(document.getElementById("canvasExampleFilters"))
}

var exampleFeaturesCornersMap;
var exampleFeaturesCropRect;

function clickDetectCorners() {
  var factor = 1000 / 300;
  var image = new MarvinImage(300, 158);
  Marvin.scale(imageAutoCrop, image, 300);
  exampleFeaturesCornersMap = Marvin.moravec(image.clone(), image, 5, 10000);

  var ctx = document.getElementById("canvasAutoCrop").getContext("2d");
  ctx.fillStyle = "#ff0000";
  for (var x = 0; x < exampleFeaturesCornersMap.length; x++) {
    for (var y = 0; y < exampleFeaturesCornersMap.length; y++) {
      if (exampleFeaturesCornersMap[x][y] > 0) {
        if (document.getElementById("mapchart")) {
          document.getElementById("mapchart").innerHTML += `
       <tr><td>
       ${String(x) + "*" + String(y)}
       </td><td>
       n/a
       </td><td>
       ${Math.sqrt(Math.pow(0 - x, 2) + Math.pow(0 - y, 2))}
       </td><td>
       ${Math.sqrt(Math.pow(exampleFeaturesCornersMap.length - x, 2) + Math.pow(0 - y, 2))}
       </td><td>
       ${Math.sqrt(Math.pow(0 - x, 2) + Math.pow(exampleFeaturesCornersMap.length - y, 2))}
       </td><td>
       ${Math.sqrt(Math.pow(exampleFeaturesCornersMap.length - x, 2) + Math.pow(exampleFeaturesCornersMap.length - y, 2))}
       </td></tr>
       `;
        }
        // scale up the corners coordinates
        ctx.fillRect(Math.floor(x * factor), Math.floor(y * factor), 10, 10);
      }
    }
  }
  if (document.getElementById("trig_corner_finish")) {
    document.getElementById("trig_corner_finish").click();
  }
}

function clickSelectCropArea() {
  imageAutoCrop.draw(document.getElementById("canvasAutoCrop"));

  var factor = 1000 / 300;
  var x1 = 9999;
  var x2 = 0;
  var y1 = 9999;
  var y2 = 0;
  for (var x = 0; x < exampleFeaturesCornersMap.length; x++) {

    var minY = 9999;
    var maxY = 0;
    for (var y = 0; y < exampleFeaturesCornersMap.length; y++) {
      if (exampleFeaturesCornersMap[x][y]) {
        if (y < minY) { minY = y; }
        if (y > maxY) { maxY = y; }
      }
    }

    if (maxY - minY > 30) {
      if (x < x1) { x1 = x; }
      if (x > x2) { x2 = x; }
      if (minY < y1) { y1 = minY; }
      if (maxY > y2) { y2 = maxY; }
    }
  }

  // Scale up to the original resolution
  x1 = Math.floor(x1 * factor);
  x2 = Math.floor(x2 * factor);
  y1 = Math.floor(y1 * factor);
  y2 = Math.floor(y2 * factor);

  // Add some margin
  x1 -= Math.floor((x2 - x1) * 0.2);
  x2 += Math.floor((x2 - x1) * 0.2);
  y1 -= Math.floor((y2 - y1) * 0.05);
  y2 += Math.floor((y2 - y1) * 0.05);

  exampleFeaturesCropRect = [x1, y1, x2 - x1, y2 - y1];

  console.log("x1:" + x1 + ",x2:" + x2 + ",y1:" + y1 + ",y2:" + y2);
  var ctx = document.getElementById("canvasAutoCrop").getContext("2d");
  ctx.strokeStyle = "#ff0000";
  ctx.lineWidth = 4;
  ctx.rect(x1, y1, x2 - x1, y2 - y1);
  ctx.stroke();
}

function clickAutoCropCrop() {
  var image = new MarvinImage(1, 1);
  Marvin.crop(imageAutoCrop, image, exampleFeaturesCropRect[0], exampleFeaturesCropRect[1], exampleFeaturesCropRect[2], exampleFeaturesCropRect[3]);

  // Clear canvas
  var canvas = document.getElementById("canvasAutoCrop");
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

  image.draw(document.getElementById("canvasAutoCrop"), exampleFeaturesCropRect[0], exampleFeaturesCropRect[1]);
}

function clickAutoCropReset() {
  imageAutoCrop.draw(document.getElementById("canvasAutoCrop"));
}


function itfFractal(rules) {
  imageFractals.clear();
  var canvas = document.getElementById("canvasFractals");
  Marvin.iteratedFunctionSystem(imageFractals.clone(), imageFractals, rules[0], rules[1]);
  imageFractals.draw(canvas);
}

/*function clickFractalDragon(){
 itfFractal(ITF_DRAGON);
}*/

function clickFractalBarnsleyLeaf() {
  itfFractal(ITF_BARNSLEY_LEAF);
}

function clickFractalMappleLeaf() {
  itfFractal(ITF_MAPPLE_LEAF);
}

function clickFractalTree() {
  itfFractal(ITF_TREE);
}
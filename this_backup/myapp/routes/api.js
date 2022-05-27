var express = require('express');
var PerspT = require('perspective-transform');
var router = express.Router();

var DATAsrcCorners = [];
var DATAdstCorners = [];
var DATAsrcCornersINT = [];
var DATAdstCornersINT = [];
var perspT;
router.get('/perspective-transform-init', function (req, res, next) {
    if (req.query.srcCorners && req.query.dstCorners) {
        DATAsrcCorners = req.query.srcCorners.split("*");
        DATAdstCorners = req.query.dstCorners.split("*");
        DATAsrcCorners.forEach(element => {
            DATAsrcCornersINT.push(parseInt(element, 10));
        });
        DATAdstCorners.forEach(element => {
            DATAdstCornersINT.push(parseInt(element, 10));
        });
        perspT = PerspT(DATAsrcCornersINT, DATAdstCornersINT);

        res.send("ok");
    } else {
        res.send("input error");
    }
});//http://localhost:3000/api/perspective-transform-init?srcCorners=0*0*1000*0*690*0*1000*690&dstCorners=0*0*696*7*-14*273*693*279

router.get('/perspT-transform', function (req, res, next) {
    if (req.query.x && req.query.y) {
        var srcPt = [req.query.x, req.query.y];
        var dstPt = perspT.transform(srcPt[0], srcPt[1]);
        res.send({ dstPtX: dstPt[0], dstPtY: dstPt[0] });
    } else {
        res.send("input error");
    }
});

module.exports = router;

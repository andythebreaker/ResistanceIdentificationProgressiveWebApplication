document.getElementById('regionCrop').addEventListener('click', function (e) {
    var income_img_height = document.getElementById('SOLUimgPerspectiveTransformation').getAttribute('height');
    var income_img_width = document.getElementById('SOLUimgPerspectiveTransformation').getAttribute('width');
    var squareLengthAndWidth_h = parseInt(income_img_height, 10) * 8.0 / (6.0 + 8.0 + 8.0);
    var squareLengthAndWidth_w = parseInt(income_img_width, 10) / 6.0;
    var sla20_h = squareLengthAndWidth_h * 0.8;
    var sla20_w = squareLengthAndWidth_w * 0.8;
    for (let index = 0; index < 6; index++) {
        var crp1 = document.createElement('canvas');
        crp1.style.width = String(Math.round(sla20_w)) + 'px';
        crp1.style.height = String(Math.round(sla20_h)) + 'px';
        crp1.id = 'crpU' + String(index);
        document.body.appendChild(crp1);
        console.log('good');
        var cropX = squareLengthAndWidth_w * 0.2 + squareLengthAndWidth_w * (index);
        var cropY = squareLengthAndWidth_h * 0.2;
        var cropWidth = squareLengthAndWidth_w * 0.8;
        var cropHeight = squareLengthAndWidth_h * 0.8;
        var canvas1 = document.getElementById('crpU' + String(index));
        canvas1.width = cropWidth;
        canvas1.height = cropHeight;
        var ctx1 = canvas1.getContext('2d');
        ctx1.drawImage(document.getElementById('SOLUimgPerspectiveTransformation'), cropX, cropY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
    }
    for (let index = 0; index < 6; index++) {
        var crp1 = document.createElement('canvas');
        crp1.style.width = String(Math.round(sla20_w)) + 'px';
        crp1.style.height = String(Math.round(sla20_h)) + 'px';
        crp1.id = 'crpD' + String(index);
        document.body.appendChild(crp1);
        console.log('good');
        var cropX = squareLengthAndWidth_w * 0.2 + squareLengthAndWidth_w * (index);
        var cropY = squareLengthAndWidth_h * 0.2 + parseInt(income_img_height, 10) * (8.0 + 6.0) / (6.0 + 8.0 + 8.0);
        var cropWidth = squareLengthAndWidth_w * 0.8;
        var cropHeight = squareLengthAndWidth_h * 0.8;
        var canvas1 = document.getElementById('crpD' + String(index));
        canvas1.width = cropWidth;
        canvas1.height = cropHeight;
        var ctx1 = canvas1.getContext('2d');
        ctx1.drawImage(document.getElementById('SOLUimgPerspectiveTransformation'), cropX, cropY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
    }
});
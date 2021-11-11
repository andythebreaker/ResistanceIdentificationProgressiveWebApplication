document.getElementById('regionCrop').addEventListener('click', function (e) {
    var income_img_height = document.getElementById('SOLUimgPerspectiveTransformation').getAttribute('height');
    var income_img_width = document.getElementById('SOLUimgPerspectiveTransformation').getAttribute('width');
    var squareLengthAndWidth_h = parseInt(income_img_height, 10) * 8.0 / (6.0 + 8.0 + 8.0);
    var squareLengthAndWidth_w = parseInt(income_img_width, 10) / 6.0;
    var sla20_h = squareLengthAndWidth_h * 0.8;
    var sla20_w = squareLengthAndWidth_w * 0.8;
    var crp2 = document.createElement('canvas');
    crp2.style.width = String(Math.round(parseInt(income_img_width, 10) * 0.9 * 0.8 / (1.15 + 0.9 + 1.15))) + 'px';
    crp2.style.height = String(Math.round(parseInt(income_img_height, 10) * 6.0 * 0.8 / (6.0 + 8.0 + 8.0))) + 'px';
    crp2.id = 'myres';
    document.body.appendChild(crp2);
    console.log('good');
    var cropX0 = parseInt(income_img_width, 10) * 0.9 * 0.1 / (1.15 + 0.9 + 1.15) + parseInt(income_img_width, 10) * 1.15 / (1.15 + 0.9 + 1.15);
    var cropY0 = parseInt(income_img_height, 10) * 6.0 * 0.1 / (6.0 + 8.0 + 8.0) + parseInt(income_img_height, 10) * 8.0 / (6.0 + 8.0 + 8.0);
    var cropWidth0 = parseInt(income_img_width, 10) * 0.9 * 0.8 / (1.15 + 0.9 + 1.15);
    var cropHeight0 = parseInt(income_img_height, 10) * 6.0 * 0.8 / (6.0 + 8.0 + 8.0);
    var canvas2 = document.getElementById('myres');
    canvas2.width = cropWidth0;
    canvas2.height = cropHeight0;
    var ctx2 = canvas2.getContext('2d');
    ctx2.drawImage(document.getElementById('SOLUimgPerspectiveTransformation'), cropX0, cropY0, cropWidth0, cropHeight0, 0, 0, cropWidth0, cropHeight0);
    for (let index = 0; index < 6; index++) {
        var crp1 = document.createElement('canvas');
        crp1.style.width = String(Math.round(sla20_w)) + 'px';
        crp1.style.height = String(Math.round(sla20_h)) + 'px';
        crp1.id = 'crpU' + String(index);
        document.body.appendChild(crp1);
        console.log('good');
        var cropX = squareLengthAndWidth_w * 0.1 + squareLengthAndWidth_w * (index);
        var cropY = squareLengthAndWidth_h * 0.1;
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
        var cropX = squareLengthAndWidth_w * 0.1 + squareLengthAndWidth_w * (index);
        var cropY = squareLengthAndWidth_h * 0.1 + parseInt(income_img_height, 10) * (8.0 + 6.0) / (6.0 + 8.0 + 8.0);
        var cropWidth = squareLengthAndWidth_w * 0.8;
        var cropHeight = squareLengthAndWidth_h * 0.8;
        var canvas1 = document.getElementById('crpD' + String(index));
        canvas1.width = cropWidth;
        canvas1.height = cropHeight;
        var ctx1 = canvas1.getContext('2d');
        ctx1.drawImage(document.getElementById('SOLUimgPerspectiveTransformation'), cropX, cropY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
    }
});
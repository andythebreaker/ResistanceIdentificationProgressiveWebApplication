//已廢止
var randomstring = require("randomstring");
export function DebugDownload(url) {
    var a = document.createElement('a');
    a.href = url;
    a.download = randomstring.generate() + ".png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    a.remove();
}
document.getElementById("trig_corner_finish").addEventListener("click", function () {
    /*var oo = []; var wo = []; var oh = []; var wh = [];*/
    var oo = -1.0; var wo = -1.0; var oh = -1.0; var wh = -1.0;
    var ooi = -1; var woi = -1; var ohi = -1; var whi = -1;
    var data_chart = document.getElementById("mapchart");
    var trs = data_chart.getElementsByTagName("tr");
    for (let index = 0; index < trs.length; index++) {
        const element = trs[index];
        if (oo < 0) {
            oo = parseFloat(element.getElementsByTagName("td")[2].innerText);
            ooi=index;
        } else {
            if (parseFloat(element.getElementsByTagName("td")[2].innerText) < oo) {
                oo = parseFloat(element.getElementsByTagName("td")[2].innerText);
                ooi=index;
            }
        }
        if (wo < 0) {
            wo = parseFloat(element.getElementsByTagName("td")[3].innerText);
            woi=index;
        } else {
            if (parseFloat(element.getElementsByTagName("td")[3].innerText) < wo) {
                wo = parseFloat(element.getElementsByTagName("td")[3].innerText);
                woi=index;
            }
        }
        if (oh < 0) {
            oh = parseFloat(element.getElementsByTagName("td")[4].innerText);
            ohi=index;
        } else {
            if (parseFloat(element.getElementsByTagName("td")[4].innerText) < oh) {
                oh = parseFloat(element.getElementsByTagName("td")[4].innerText);
                ohi=index;
            }
        }
        if (wh < 0) {
            wh = parseFloat(element.getElementsByTagName("td")[5].innerText);
            whi=index;
        } else {
            if (parseFloat(element.getElementsByTagName("td")[5].innerText) < wh) {
                wh = parseFloat(element.getElementsByTagName("td")[5].innerText);
                whi=index;
            }
        }
        /*oo.push(parseFloat(element.getElementsByTagName("td")[2].innerText));
        wo.push(parseFloat(element.getElementsByTagName("td")[3].innerText));
        oh.push(parseFloat(element.getElementsByTagName("td")[4].innerText));
        wh.push(parseFloat(element.getElementsByTagName("td")[5].innerText));*/
    }
    /*console.log(Math.max(oo));
    document.getElementById("trig_corner_finish")[oo.indexOf(Math.max(oo))].getElementsByTagName("td")[1].innerText = "oo";
    document.getElementById("trig_corner_finish")[wo.indexOf(Math.max(wo))].getElementsByTagName("td")[1].innerText = "wo";
    document.getElementById("trig_corner_finish")[oh.indexOf(Math.max(oh))].getElementsByTagName("td")[1].innerText = "oh";
    document.getElementById("trig_corner_finish")[wh.indexOf(Math.max(wh))].getElementsByTagName("td")[1].innerText = "wh";*/
    document.getElementById("00_sqrt_of_sum_of_pow").innerText=oo;
    document.getElementById("w0_sqrt_of_sum_of_pow").innerText=wo;
    document.getElementById("0h_sqrt_of_sum_of_pow").innerText=oh;
    document.getElementById("wh_sqrt_of_sum_of_pow").innerText=wh;
    document.getElementById("mapchart").getElementsByTagName("tr")[ooi].getElementsByTagName("td")[1].innerText="oo";
    document.getElementById("mapchart").getElementsByTagName("tr")[woi].getElementsByTagName("td")[1].innerText="wo";
    document.getElementById("mapchart").getElementsByTagName("tr")[ohi].getElementsByTagName("td")[1].innerText="oh";
    document.getElementById("mapchart").getElementsByTagName("tr")[whi].getElementsByTagName("td")[1].innerText="wh";
});
import { KMeans } from "scikitjs";

export function ConvertImageContainingTransparentPrimaryColorsToGroupedClassArray(
    imgData,
    ct,
    cb
) {
    //console.log(imgData);
    const n = 4;
    var ceil = Math.ceil;
    let X = Array.from(Array(ceil(imgData.length / n)), (_, i) =>
        imgData.slice(i * n, i * n + n - 1)
    ); //https://stackoverflow.com/questions/8495687/split-array-into-chunks
    const kmean = new KMeans({ nClusters: ct });
    var kfp = kmean.fitPredict(X);
    kfp.array().then(function (d) {
        cb(d, X);
    });
    /*TODO
    *: (5) [1194, 1035, 空白, 469, 677]
     [Array(2), Array(2), Array(2), Array(2)]
0: (2) [1, 1035]
1: (2) [0, 1194]
2: (2) [3, 469]
3: (2) [4, 677]

以上，贛，她會發生這種4情
    */
}


export function MatrixStatisticsOccurrences(arr) {
    //https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
    // count is [ [valX, count], [valY, count], [valZ, count]... ];
    return [...new Set(arr)].map((val) => [
        val,
        arr.join("").split(val).length - 1,
    ]);
}

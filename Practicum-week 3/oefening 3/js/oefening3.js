
let drawFlatArea = function (count) {
    let strResult = '';
    for(i=1;i<=count;i++){
    strResult += '_';
    }
   return strResult;
}

let drawMountain = function (count) {
    let strResult = '/';
    for(i=1;i<=count;i++){
    strResult += "'";
    }
    strResult +='\\';
   return strResult;
}

console.log(drawMountain (10), drawFlatArea(10), drawMountain(5), drawFlatArea(14));
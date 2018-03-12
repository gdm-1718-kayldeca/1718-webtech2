console.log("he");

let result;
let startValue = parseInt(prompt('Geef beginwaarde in'));
let endValue = parseInt(prompt('Geef eindwaarde in'));

for (i=startValue; i<=endValue; i++) {  
console.log(i);
if (i % 3 === 0 && i%5 === 0){
    //deelbaar door drie en vijf
    result = 'bitterbal <br>';

}else if(i % 3 === 0){
    //deelbaar door drie
    result = 'bitter <br>';

}else if (i % 5 === 0){
    // deelbaar door vijf
    result = 'bal <br>';

}else{
    //niet deelbaar door drie en vijf
    result = i + '<br>';
}
document.getElementById('result').innerHTML = result;
}
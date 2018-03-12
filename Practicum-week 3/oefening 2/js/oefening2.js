console.log('he');

let checkResult = function () {

let sumPopcorn = document.getElementById('result1').value;
let sumBurger =  document.getElementById('result2').value;
let SumDonut = document.getElementById('result3').value;
let inputResult = document.getElementById('result4').value;

console.log(sumPopcorn);
console.log(sumBurger);
console.log(SumDonut);

let popcorn = sumPopcorn / 3;
let burger = (sumBurger - popcorn) / 2;
let donut = (SumDonut - burger) / 4;

console.log(popcorn);
console.log(burger);
console.log(donut);

let result = burger + donut * popcorn;

console.log(result);

if(result == inputResult){
    //correct
   document.getElementById('message').innerHTML ='Well done';


}else{
    //fout
    document.getElementById('message').innerHTML = 'Fail, try again';
}

}



document.getElementById('check').addEventListener('click', checkResult);
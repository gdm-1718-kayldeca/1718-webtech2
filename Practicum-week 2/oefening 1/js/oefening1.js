console.log('hello');

var num;
num=prompt('Voer een getal in');
num=parseInt(num);
if(num%2 ==0)
document.write (num+' ,' + 'is even nummer');
else
document.write(num+ ' ' + 'is oneven nummer');

//fancy//
//let checkEvenOrOdd = function() {
//let number = document.getElementById('someNumber').value;
//let rest = number % 2;
//if(rest == 0) {
  //  document.write('een even getal');
//} else {
  //  document.write('een oneven getal');

//}
//}

//document.getElementById('checkInput').addEventListener('click', checkEvenOrOdd);
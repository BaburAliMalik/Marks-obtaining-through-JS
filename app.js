alert("Enter your marks one by one!");

var eng = +prompt("Enter your marks of english");
var math = +prompt("Enter your marks of math");
var science = +prompt("Enter your marks of science");
var pakstudy = +prompt("Enter your marks of pak pakstudy");
var biology = +prompt("Enter your marks of biology");

var total = 500;
console.log('total marks = ' , total);

var obtained = Number(eng + math + science + pakstudy + biology);
console.log('obtained marks = ' , obtained)

var percentage = obtained/total*100;
console.log('percentage = ' , percentage);


// document write

document.write('total marks = ' , total); 

document.write('obtained marks = ', obtained );

document.write('percentage = ' , percentage);




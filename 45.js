var myvar= 1;
console.log(myvar);
// <----------############------------------->
// Square of a number


function square(num){
    return num * num;
  }

  console.log(square(23))
// <------Swapping 2 numbers-------->
let a = 5;
let b = 10;

[a, b] = [b, a]; // ES6

console.log(a, b);


// <------Addition of 3 numbers------>

function additon(a,b,c){
    return a+b+c;
}
console.log(additon(2,6,9));


// <--------Celsius to Fahrenheit conversion------->

function celsius(celsius){
    return F = celsius * (9/5) + 32;

}
console.log(celsius(12));


// <--------Meter to miles--------->

function getMiles(meters) {
    return meters*0.000621371192;
}
console.log(getMiles(13436476824));


// <--------Pounds to kg------>


function Pounds(kg){
    return p=kg*0.453592;
}

console.log(Pounds(3244));

// <-----Calculate Batting Average------>

function average(score,out){
    return score/out;

}
console.log(average(530,27));






// <-----------Calculate five test scores and print their average---->
const avg = arr => {
    const sum = arr.reduce((acc, cur) => acc + cur);
    const average = sum/arr.length;
    return average;
  }
  
  console.log(avg([1, 2, 3, 7, 8]));



// <------------Power of any number x ^ y.--------->

function power(x,y){
    
    console.log(x**y);
}

power(21,3);

// <--------------Calculate Simple Interest----->

function simple(P,T,R){
    return (SI) = P * T * R / 100;
}

console.log(simple(2000,1,10))
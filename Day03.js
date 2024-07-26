//Control Statement

//Activity 1: If-Else Statement
//Task 1:
let num = 5;
if (num > 0) {
  console.log("num is positive");
}
if (num < 0) {
  console.log("num is negaative");
}
if (num == 0) {
  console.log("num is 0");
}

//Task 2:
let age = 20;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

//Activity 2: Nested if-else
//Task 3:
let a = 1;
let b = 2;
let c = 3;
let largest;
if(a>=b){
    if(a>=c){
        largest=a;
    }
    else{
        largest =c;
    }
}
else {
    if(b>=c){
        largest=b;
    }
    else{
        largest=c;
    }
}
console.log(`Largest is ${largest}`);

//Activity 3: Switch Case
//Task 4:
let dayNo=4;
let week;
switch (dayNo) {
    case 1:
        week="monday";
        break;
    case 2:
        week="tuesday";
        break;
    case 3:
        week="wednesday";
        break;
    case 4:
        week="thursday";
        break;
    case 5:
        week="friday";            
        break;
    case 6:
        week="saturday";
        break;
    case 7:
        week="sunday";
        break;
    default:
        week="invalid input";
        break;
}
console.log(`weekday is ${week}`);

//Task 5:

//Activity 4: Terniary Operator
//Task 6:
let res= (num%2==0) ? "num is even" : "num is odd";
console.log(res);
//Activity 5:
//Task 7:
let year=2024;
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log("leap year");
        }
        else{
            console.log("not a leap year");
        }
    }
    else{
        console.log("leap year");
    }
}
else{
    console.log("not aleap year");
}

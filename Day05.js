//Functions

//Activity 1: function declarartion
//Task 1:
function evenOdd(num){
    if(num%2==0){
        return console.log("even");
    }
    else{
        return console.log("odd");
    }
}
evenOdd(5);

//Task 2:
function square(num){
    let squareNum= num**2;
    return console.log(squareNum);
}
square(5);

//Activity 2: Function Expression 
//Task 3:
function max(num1,num2){
    let max = (num1>num2) ? num1 :num2 ;
    console.log(max);
}
max(5,6);

//Task 4:
function concat(str1,str2){
    let str= str1+str2;
    return console.log(str);
}
concat("Harshit","Verma");

//Activity 3: Arrow function
//Task 5:
const sum = (num1,num2)=>{
    return num1+num2;
}
console.log(sum(1,3));

//Task 6:
const specialChar = (str)=>{
    for(let i=0;i<str.length;i++){
        char=str.charAt(i);
        if(char=='!'||char=='@'||char=='#'||char=='$'||char=='%'||char=='&'||char=='*'){
            return true;
        }
    }
}
console.log(specialChar("Harshit"));
console.log(specialChar("H@rshit"));

//Activity 4: Function Parameter and Default value
//Task 7:
function product(a,b=2){
    return a+b;
}
console.log(product(5,6));
console.log(product(5));

//Task 8:
function greeting(name,age=18){
    return console.log(`Good Moring ${name} of age ${age}`);
}
greeting("Harshit",20);
greeting("Harshit");

//Activity 5: Higher order function
//Task 9:
function mulCall(num,print){
 for(let i=0; i<num;i++){
    print();
 }
}
mulCall(5 , ()=>{
    console.log("Hello World");
});

//Task 10:
function Task(func1,func2,value){
    let res= func2(func1(value));
    return console.log(res);
}

Task((num)=>{
    return num+2;
},(num)=>{
    return num+1;
},5);


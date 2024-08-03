//Arrays 

//Activity 1: Array Creation and Access
//Task 1:
let arr=[1,2,3,4,5];
console.log(arr);

//Task 2:
console.log(arr[0]);
console.log(arr[4]);

//Activity 2: Array methods(basic)
//Task 3:
arr.push(6);
console.log(arr);

//Task 4:
arr.pop();
console.log(arr);

//Task 5:
arr.shift();
console.log(arr);

//Task 6:
arr.unshift(1);
console.log(arr);

//Activity 3: Array method(intermediate)
//Task 7:
let doubleArr= arr.map((num)=>{
    return num*2
});
console.log(doubleArr);

//Task 8:
let evenArr= arr.filter((num)=>{
    return num%2==0;
});
console.log(evenArr);

//Task 9:
let sumArr= arr.reduce((result,currentValue)=>{
    return result+currentValue;
})
console.log(sumArr);

//Activity 4: Array iteration
//Task 10; 
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//Task 11:
arr.forEach((num)=>{
    console.log(num);
})

//Activity 5:multi dimension arr
//Task 12:
let mulDimArr=[[1,2,3],[4,5,6],[7,8,9]];
console.log(mulDimArr);

//Task 13:
console.log(mulDimArr[1][2]);
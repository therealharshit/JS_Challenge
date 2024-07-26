//Loops

//Activity 1: For Loops
//Task 1:
for(let i=1;i<=10;i++){
    console.log(i);
}

//Task 2:
for(let i=1;i<=10;i++){
    console.log(`5 x ${i} = ${5*i}`);
}

//Activity 2:While loop
//Task 3:
let i=1;
let sum=0;
while (i<=10) {
    sum +=i;
    i++;
}
console.log(sum);

//Task 4:
let j=10;
while(j>0){
    console.log(j);
    j--;
}

//Activity 3: Do While loop
//Task 5:
i=1;
do {
    console.log(i);
    i++;
} while (i<=5);

//Task 6:
let fact=1;
let n=2;
do{
    fact= fact*n;
    n++
}while(n<=5);
console.log(fact);

//Activity 4: Nested lops
//Task 7:
for(i=0;i<5;i++){
    let pattern="";
    for(j=0;j<=i;j++){
        pattern += "* ";
    }
    console.log(pattern);
}

//Activity 5: Loop control statements
// Task 8:
for(i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

//Task 9:
for(i=1;i<=10;i++){
    if(i==7){
        break;
    }
    console.log(i);
}
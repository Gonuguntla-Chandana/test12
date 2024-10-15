let x=[10,20,30,40,50];

for(let i of x)
{
    console.log(`i value is ${i}`)
}

/*default parameter*/
function calculate(a,b=20){
    console.log(a+b)
}
calculate(10);

/*simple parameter*/
function calculate(a,b){
    console.log(a+b)
}
calculate(10,20);

/*with return statement*/
function add(x,y)
{
    return x+y;
}
console.log(add(10,20));

/*rest operators*/
function rest(...args){
    let result=0;
    for(let arg of args)
    {
        result=result+arg;       
    }
    console.log(result);
}
rest(10,20,30,40,50);

/*spread operators used to combine multiple arrays*/
const array1=["one","two","three"];
const array2=["four",...array1]
console.log(array2)

/*the below example is a object literal concept in js*/
let Person={
    firstName:"Ajay",
    lastName:"Reddy",
    job:"Master Trainer"
}
console.log(Person);

//console.log(Person);
console.log(Person.firstName);

/*object destructuring concept in js*/

const {firstName,lastName}=Person;//Object destrucring

console.log(firstName);
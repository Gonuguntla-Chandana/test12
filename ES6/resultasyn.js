async function displayInfo()
{
    let x=10,y=20;
    if(x<y){
        return "y value is biggest";
    }
    else{
        throw new Error;        
    }
    return x;
}
let result=displayInfo();
result.then((data)=>{
    console.log(data);
})
result.catch((data)=>{
    console.log(data);

})
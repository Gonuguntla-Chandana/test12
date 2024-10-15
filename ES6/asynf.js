async function displayInfo()
{
    let x=10,y=20;
    if(x<y){
        return "y value is biggest";
    }
    else{
        throw new Error;
    }    
}
let result=displayInfo();
result.then((data)=>{
    console.log("result is="+data);
})
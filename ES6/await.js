async function displayInfo()
{
    let x=await 10+20;
    return x;
}
let result=displayInfo();
result.then((data)=>{
    console.log("result is="+data);
})
result.catch((data)=>{
    console.log(data);
})
async function displayInfo()
{
    let x=10+20;
    return x;
}
let result=displayInfo();
result.then((data)=>{
    console.log("result is="+data);
})
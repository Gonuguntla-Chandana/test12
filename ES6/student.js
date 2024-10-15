class Student{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    showDetails(){
        console.log(this.id+" "+this.name)
    }
    displayInfo(){
        console.log("This is displayInfo method")
    }}
let s=new Student(2001, "AjayReddy");
s.showDetails();
s.displayInfo();
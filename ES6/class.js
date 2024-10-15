class Student{
    id=1001;
    name="chandana";
    showDetails(){
        console.log(this.id+" "+this.name)
    }
   }
let s=new Student();
s.showDetails();
/*
arrowfuns = (fName, lname) => `My first name is :${fName} & last name is : ${lname}`;
const result = arrowfuns("Muktadir", "Hossain");
console.log(result);
*/

class Father{
    constructor(){
        this.FatherName = 'ABBA'
    }
}

let father= new Father("rahim");
// console.log(father.FatherName);

class Student extends Father{
    constructor ( name, sch, dist ){
        super();
        this.name = name;
        this.school = sch;
        this.district = dist 
    }

}

let stu1 = new Student('Rabbi', 'RUS', 'Rajshahi');

console.log(stu1.FatherName);


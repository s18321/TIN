
class Person{
  constructor(name, surname)
{
  this.surname = surname;
  this.name = name;
  
}
get getFullName(){
  return this.name + " " + this.surname; 
}


set setFullName(newFullName){
  newFullName=newFullName.split(' ');
        this.name = newFullName[0];
        this.surname = newFullName[1];
}
}

class Student extends Person {
  constructor(name, surname, idNum, grades)
{
  super(name,surname);
  this.idNum = idNum;
  this.grades = grades;
  this.avg = 0;
}

  get getAvg(){
    let sum =0;
    for(let i =0;i < this.grades.length; i++){
      sum += this.grades[i];
    }
    this.avg = sum / this.grades.length;
    return this.avg;
  }
 
}

let templateStudent = new Student("John","Doe",18321,[3,4,5]);
console.log(templateStudent.getAvg);
console.log(templateStudent.getFullName);
templateStudent.setFullName =("Alan Maple");
console.log(templateStudent.getFullName);


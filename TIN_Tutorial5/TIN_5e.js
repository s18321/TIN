class Student{
  constructor(name, surname, idNum, grades)
{
  this.surname = surname;
  this.name = name;
  this.idNum = idNum;
  this.grades = grades;
  this.avg = 0;
}
  get getFullName(){
    return this.name + " " + this.surname; 
  }
  
  
  set setFullName(newFullName){
    let nameArr = newFullName.split(" ");
    this.name = nameArr[0];
    this.surname = nameArr[1];
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

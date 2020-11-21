
function student(name, surname, idNum, grades)
  {
      this.surname = surname;
      this.name = name;
      this.idNum = idNum;
      this.grades = grades;
      this.getAvg = function(){
        let avg =0;
        let sum =0;
        for(let i =0;i < this.grades.length; i++){
          sum += grades[i];
        }
        avg = sum / this.grades.length;
       return avg;
      }
      this.getFullName = function(){
        return this.name + " " + this.surname;
      }
  }
let templateStudent = new student("John","Doe",18321,[3,4,5]);
console.log(templateStudent.getFullName());
   console.log(templateStudent.getAvg());

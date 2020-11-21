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
       Object.defineProperty(this, 'fullName', {
      get: function(){
        return this.name + " " + this.surname;
      },
      set:  function(newFullName){
        newFullName=newFullName.split(' ');
        console.log(newFullName[0]);
        this.name = newFullName[0];
        this.surname = newFullName[1];
      }
    });
  }
let templateStudent = new student("John","Doe",18321,[3,4,5]);
console.log(templateStudent.getAvg());
      console.log(templateStudent.fullName);
    console.log(templateStudent.name);
    console.log(templateStudent.surname);
templateStudent.fullName = ("Adam Maple");
    console.log(templateStudent.name);
    console.log(templateStudent.surname);
  console.log(templateStudent.fullName);
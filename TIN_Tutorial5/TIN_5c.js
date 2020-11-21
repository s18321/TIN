
studentPrototype = {
  name:'', surname:'', idNum:'', courses:['subject1','subject2','subject3']
}

function studentCreation(name, surname, idNum)
  {
      let newStudent = Object.create(studentPrototype);
      
      newStudent.surname = surname;
      newStudent.name = name;
      newStudent.idNum = idNum;
      newStudent.prototype=studentPrototype;
      return newStudent;
      
  }

  let templateStudent = new studentCreation('Adam','maple',18321);
  console.log(templateStudent);
  console.log(templateStudent.courses);
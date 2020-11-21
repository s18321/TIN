
var salaryman = { //object initialization
  salary: 10000,
  Name: "Indiana", 
  Surname: "Johnes",
  yearlySalary: function() 
      {  
        let yearly = 12 * this.salary;
       console.log(yearly);
      },
  fullName: function() 
      {  
       console.log(this.Name + " " + this.Surname);
      },
  getSalary: function() 
      {  
       return this.salary;
      }    
};
  function show_SalaryMan( exampleSalaryman) {   //function printing data and tyoeof from salaryman
        console.log(typeof exampleSalaryman.Name);
        console.log(exampleSalaryman.Name); 
        console.log(typeof exampleSalaryman.Surname); 
        console.log(exampleSalaryman.Surname);
        console.log(typeof exampleSalaryman.salary); 
        console.log( exampleSalaryman.salary); 
        
        }
  
 show_SalaryMan(salaryman);

console.log(salaryman.salary);
salaryman.yearlySalary();
salaryman.getSalary();
salaryman.fullName();

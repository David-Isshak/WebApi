let fruits = ['pomme', 'banane', 'orange', 'fraise', 'mangue'];


let student = {
    name: "Marie",
    age: 20,
    courses: []
  };
  
  student.age = 21; 
  student.grade = "A"; 
  
  student.courses.push("Math", "Physics", "Chemistry");
  
  let indexPhysics = student.courses.indexOf("Physics");
  


  let firstTwoCourses = student.courses.slice(0, 2);
  
  console.log("student", student);
  console.log("index physique' :", indexPhysics);
  console.log("new tableau :", firstTwoCourses);
  
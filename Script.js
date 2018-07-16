//lecture 46
// Function Constructor

var person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job;
    
  }
  //creating Prototype
person.prototype.lastName = "noraiz";
person.prototype.calculateAge = function(){
    console.log(2018 - this.yearOfBirth);
};
var noraiz = new person("noraiz", 1920, "teacher" );
var xulfi = new person("xulfi", 1923, "teacher" );
var jamal = new person("jamal", 1922, "teacher" );

noraiz.calculateAge();
jamal.calculateAge();
xulfi.calculateAge();

console.log(noraiz.lastName);




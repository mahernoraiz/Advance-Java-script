//lecture 46
// Function Constructor
/*
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

*/

//lecture 50
//Passing Function As arrgument
/*
var years = [1992, 2000, 2010, 1980];

function calYear(arr , fn){
    var arRes = [];
    for (let i = 0; i < arr.length; i++) {
        arRes.push(fn(arr[i]));
        
    }
     return  arRes;
}
function calculateAge(el){
    return 2018 - el;
}
function calAges(el){
    return el >= 18;
}
function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round (206.9 - (0.67 - el));
    }else{
        return -1;
    }
}

var ages = calYear (years , calculateAge);
console.log(ages);
var fullAges = calYear(ages , calAges);
console.log(fullAges);
var heartRate = calYear(ages , maxHeartRate);
console.log(heartRate);

*/
/*
// lecture 51
// function returning Function

function interViewQuestion(job) {
  if (job === "teacher") {
    return function(name) {
      console.log(name + " which subject do you teach");
    };
  } else if (job === "developer") {
    return function(name) {
      console.log(name + " can you pleas explain where we use java script");
    };
  }
}
var question = interViewQuestion("teacher");
question("noraiz");
interViewQuestion("developer")("noraiz");
*/

/*
//lecture 52
// Immediately invoked Function Expresion(IIFE)

(function(noraiz){
    var score = Math.random() * 10;
    console.log(score >= 5 - noraiz);
    
})(5);
*/

// lecture 53
// Closures
/*
function retirement(retirementAge){
    a = " Years left Untill Retirment.."
    return function(yearOfBirth){
        var age =  2018 - yearOfBirth;
        console.log(retirementAge - age + a);
    }
}
retirement(1990)(66);
var retirementUs = retirement(1990)(60);
var retirementPak = retirement(1990)
retirementPak(70);


function interViewQuestion(job){
    b = " which subject you want to teach ?";
    c = " can you pleas explain where we use java script ?";
    return function(name){
        if(job === "teacher"){
            console.log(name + b);
            
        }else if (job === "developer"){
            console.log(name  + c);
            
        }else{
            console.log(name + " what you want to do?");
            
        }
    }
}
interViewQuestion("")("noraiz");
*/
/*
//lecture 54
//Bind Call and Apply


var noraiz = {
    name : "Noraiz",
    job  : "Teacher",
    age : 25,
    presentation : function(style , timeOfday){
        if (style === "formal"){
            console.log("good " + timeOfday + " ladies and gentelman this is " + this.name + " my age is  " + this.age +" and  i'\ m good  " +this.job );
        }else if(style === "friendly"){
            console.log("ladies and gentelman this is  " + this.name + " good " + timeOfday +  " my age is " + this.age +" and  i'\ m good " +this.job );
        }
    }
}

var jamal = {
    name : "jamal",
    job  : "teacher",
    age : 20
}

noraiz.presentation.call(jamal, "friendly", "evening");
noraiz.presentation.apply(jamal, ["formal", "morning"]);
var presentationTime = noraiz.presentation.bind(jamal,"formal");
presentationTime("sham ho rahi hai ");

*/



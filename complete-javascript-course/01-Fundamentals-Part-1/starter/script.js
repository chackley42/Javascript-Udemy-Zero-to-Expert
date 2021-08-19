let js = "awesome";
console.log(10 + 10 + 2);

let firstName = 'jonas';
console.log(firstName);

let myFirstJob = "Carpenter";
let myCurrentJob = "programmer";

console.log(myCurrentJob)

//Homework #1 Begin++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Values and Variables
const country = 'USA';
const continent = 'North America';
let population = 350000000;

console.log(country, continent, population);

// Data Types
let isIsland = false;
let language = 'English';

console.log(isIsland, population, country, language);
//Basic Operators
let popuHalf = population/2;
console.log('US population split in half:', popuHalf);
let popuPlus1 = population + 1;
console.log('population + 1:',popuPlus1);

let finlandPop = 6000000;
if (population > finlandPop) console.log('USA has more population than Finland');
let avgPop = 33000000;
if (population > avgPop) console.log('USA has more population than the avg');

let description = console.log(country,'is in',continent,
                                "and its",population,'speak', language);

//Description With template literal
let newDescription = console.log(`${country}, is in ${continent}, and it's ${population} speaks ${language}`);

//Homework #1 end^^^^^^^^ ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let myNumber = 9;
console.log(typeof myNumber);

// How to redeclare a variable
let changeThis = 'I need to change';
console.log(changeThis);
changeThis = 'I changed';
console.log(changeThis);

//==============================
//Coding Challenge #1
function BMI(mass, height) {
    return mass /(height*height);
}
//measurements in Metric system
let markHeight = 1.69;
let markMass = 78;
let johnHeight = 1.88;
let johnMass = 95;

console.log("Mark's BMI:", BMI(markMass,markHeight));
console.log("John's BMI:", BMI(johnMass,johnHeight));

const myName = 'Chad';
const job = 'student';
const birthYear = 1996;
const currentYear = 2021

const chad = "I'm " + myName + ', a ' + 
(currentYear - birthYear) + ' year-old ' + job;

console.log(chad);

//begin template literal practice here
const chadNew = `I'm ${myName}, a ${currentYear - birthYear} year old student`;
 console.log(chadNew);
// Back ticks used for just a string 
 console.log(`String with back ticks`);

 //newline characters
 console.log('Line 1 \nLine 2 \nLine 3');

 //newline with back ticks
 console.log(`With Back Ticks,
  we make new lines
  by hitting enter`);

//Video 18 begins==============================
const age = 13;
needYears = 18 - age;
if(age >= 18) {
    console.log('Aidan can go on a mission');
} else {
    console.log(`Aidan needs to wait ${needYears} years, to serve a mission`);
}


const birthYear2 = 1996;
let century;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}

console.log('Person was born in', century);
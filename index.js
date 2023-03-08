// ANSWER 1

//Mutating methods are ones that change the object after the method has been used. While,
// Non mutating methods do not change the object after the method has been used.

// EXAMPLES OF MUTATING METHODS

// * prototype.pop()
// ** prototype.push()
// *** prototype.shift()
// **** prototype.unshift()
// ***** prototype.splice()

// EXAMPLES OF NON MUTATING METHODS

// * prototype.slice()
// ** prototype.concat()
// *** prototype.map()
// **** prototype.filter() 

// ANSWER 2 i

let languages= ["C#","JavaScript", "Ruby", "PHP", "Python"];
languages.push("Kotlin");
console.log(languages);

// ANSWER 2ii

languages.splice(3,0,"Java");
console.log(languages);

// ANSWER 2iii
languages.shift("C#");
console.log(languages);

// ANSWER 2iv
languages.splice(0,0,"Scala","Swift");
console.log(languages);

// ANSWER 2v
languages.splice(5,1,"Go", "Rust");
console.log(languages);


// ANSWER 3
let fruit = ["apple","mango","banana"];
function changefruit ("fruit") {
fruit [2] = "orange"
return fruit;
}
console.log (fruit)









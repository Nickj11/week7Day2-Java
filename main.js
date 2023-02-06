//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};
function Fav(person3){
  for(let key in person3){
    console.log(`my favorite foods are ${key}`);
    
};
return `I would say ${person3.burgers} are my number 1 \n 
i like tacos but please ${person3.tacos} \n
chicage has best types of pizza like ${person3.pizza} \n
you can't go wrong with a desert ${person3.ice_cream} \n
or you mix it up with some shakes like ${person3.shakes[0].mcDonalds} ${person3.shakes[0].cupids_candies}
`
};
console.log(Fav(person3))




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
function person(name,age){
    this.name = name;
    this.age = age;
    this.printinfo = function (param){
        console.log(param);
        return `My name is ${this.name} and i am ${this.age}`
    };
    this.addAge = () => {
        this.age++
    }

    };
const p1 = new person("Adam", 25)
const p2 = new person("Eve",25 )
console.log(p1.printinfo("hello "))
p1.printinfo()
p1.addage()





// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const GetString = (stringg) => {
    return new Promise((resolve,reject) => {
        if( stringg.length >10){
            resolve("Big Word")
        }
        else{
            reject("Small Numberl")
        }
    })
};

response = GetString('fabricatedd')
console.log(response)
response2 = GetString('Nick')
console.log(response2)
//Same keys and values ES2015
function createInstructor(firstName, lastName) {
    return{
       firstName,
       lastName 
    };
}

//Computed Property Names
const favoriteNumber = 42;
let instructor = {
    [firstName]: 'Colt'
}

instructor.Colt = 'That is my favorite!'

//Object Methods ES2015
const instructor = {
  firstName: 'Colt',
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
  } 

/*## **createAnimal function**

Write a function which generates an animal object. The function should accepts 3 arguments:

- species: the species of animal (‘cat’, ‘dog’)
- verb: a string used to name a function (‘bark’, ‘bleet’)
- noise: a string to be printed when above function is called (‘woof’, ‘baaa’)*/

const catAnimal = createAnimal('cat', 'bleet', 'Meow!');
catAnimal.bleet()

const pigAnimal = createAnimal('pig', 'oink', 'Oiiiiink!');
pigAnimal.oink()

const dogAnimal = createAnimal('dog', 'bark', 'Woooof!');
dogAnimal.bark()

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}  

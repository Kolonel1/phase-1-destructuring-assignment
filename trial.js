//destructuring is for pulling out data from an object and assigning it to a variable
const doggie = {
    name: 'Buzz',
    breed: 'Great Pyrenees',
    furColor: 'black and white',
    activityLevel: 'sloth-like',
    favoriteFood: 'hot dogs'
  };
  const name = doggie.name;
  const breed = doggie.breed;
const {furColor,activityLevel}= doggie;
  //apparently this is the way of renaming components of an object
  //then there is this other way
console.log(furColor);

//we can also use the destructuring assignment with a nested data structure

const doggieName = {
    name: 'Buzz',
    breed: 'Great Pyrenees',
    furColor: 'black and white',
    activityLevel: 'sloth-like',
    favoriteFoods: {
      meats:{
        ham: 'smoked',
        hotDog: 'Oscar Meyer',
      },
      cheeses:{
        american: 'kraft'
      }
    }
  };
  doggieName.name = 'not buzz'//seems i had not forgotten but i definitely forgot how to modify an array non-destructively
  console.log(doggieName.name)
  const {ham,hotDog}= doggieName.favoriteFoods.meats;
  console.log(ham);

 // i do not get how you modify this destructured thing

 //using destructuring with arrays
 const dogs = ['Great Pyrenees', 'Pug', 'Bull Mastiff'];
 const [medium,small,giant] = dogs;
 console.log(medium);

 const[another,another2,another3]= dogs;
 console.log(another);

 console.log(another === medium);
 //so they are equal interesting

 //we can also destructure strings
 //we use the striing method split to convert the string to an array

 const dogsName = 'Sir Woody BarksALot';
const [title, firstName, lastName] = dogsName.split(' ');
console.log(title,firstName,lastName);
// i thought split was destructive now i do ot get how it was able to return a normal string and not an array


// it seems i have forgotten how to modify arrays or objects



 

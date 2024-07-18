// interface and intersection
interface Person {
  name: string;
  age: number;
}


const persons: Person[] = [
    { name: "osama", age: 22 },
    { name: "ali", age: 23 },
];
console.log('persons: ', persons);

// types alias
type Student = {
  name: string,
  age: number,
  isStudent?: boolean,
};

const studetns: Student[] = [
    { name: "ahmed", age: 21, isStudent: true },
    { name: "zohaib", age: 33, isStudent: true },
];
console.log('studetns: ', studetns);

// for loop
for (let i = 0; i < studetns.length; i++) {
  console.log(studetns[i].name)
}

// break early for loop
for (let i = 0; i < persons.length; i++) {

  // when this condition gets true it will break the loop immediately
  if (persons[i].name === "osama") {
    console.log(persons[i].name)
    break;
  }

  console.log(persons[i].name)
}



// do intersection here with interfaces and types




type cb = (name: string) => void;

// callbacks
// a function receives another function as an argument
function greet(name: string, cb: cb): void {
  console.log(`Hello ${name}`)
  cb(name);
}

function morningText(name: string): void {
  console.log(`Good morning ${name}`)
}

greet("Zeyan", morningText)
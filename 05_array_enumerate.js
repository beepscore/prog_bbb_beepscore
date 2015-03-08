var people = ["fred", "mary", "becky", "steve"];

for (var i = 0; i < people.length; i++) {
  console.log("people[" + i + "] " + people[i]);
}

people.forEach(function(person) {console.log(person);});

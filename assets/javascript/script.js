
setTimeout(function () {
let input = prompt("What would you like to do?");
const todos = [`Dishes`, `Laundery`];
while (input !== `quit` && input !== `q`) {
  if (input == `list`) {
    for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
    }
     } else if (input === `new`) {
            const newToDo = prompt(`Ok, what is the new to do?`)
            todos.push(newToDo);
            console.log(`${newToDo} added to the list`)
        } else if (input === `delete`){
            const index = prompt(`Ok, enter an index to delete`)
            const deleted = todos.splice(index, 1)
            console.log(`Ok, deleted ${deleted[0]}`)
        }
        input = prompt("What would you like to do?");
    }
console.log("Ok quit the app!");

// let question = prompt("what would you like to do?");
// let list = [""];

// if (question === "New") {
//   let newTask = prompt("Enter new ToDo");
//   list.push(newTask);
//     console.log(`You added "${newTask}" to the ToDo list`);
// } else if (question === "List") {
//   for (let i = 0; i < list.length; i++) {
//     console.log(`${i}: ${list[i]}`);
//   }
// } else if (question === "Delete") {
//   const index = prompt(`Ok, enter an index to delete`);
//   const deleted = list.splice(index, 1);
//     console.log(`Ok, you deleted ${deleted[0]}`);
// } else if (question === " Quit") {
//     console.log("Ok quit the app!");
// }
// return;

}, 200)
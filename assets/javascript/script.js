let question = prompt("what would you like to do?");
let list = [""]

if ( question === "New") {
    let newTask = prompt("Enter new ToDo")
    list.push(newTask)
    console.log(`You added "${newTask}" to the ToDo list`)
}
else if (question === "List") {
    for (let i = 0; i < list.length; i++) {
        console.log(`${i}: ${list[i]}`);
}
}
// else if ( question === "Delete") {

// }
// else if ( question === " Quit") {

// }

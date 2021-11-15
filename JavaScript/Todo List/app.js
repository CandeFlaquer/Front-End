let input = prompt("What would you like to do?");
const toDos = [];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("--------------");
    for (let i = 0; i < toDos.length; i++) {
      console.log(`${i}: ${toDos[i]}`);
    }
    console.log("--------------");
  } else if (input === "new") {
    const newToDo = prompt("What is the new todo?");
    toDos.push(newToDo);
    console.log(`${newToDo} added to the list!`);
  } else if (input === "delete") {
    const toDelete = parseInt(prompt("What is the index we shall delete?"));
    if (!Number.isNaN(toDelete)) {
      const deleted = toDos.splice(toDelete, 1);
      console.log(`${deleted[0]} has been deleted.`);
    } else {
      console.log("Unknown index");
    }
  }

  input = prompt("What would you like to do?");
}
console.log("Closing the app.");

// Todo App (only by Js)
let todo = [];
let req = prompt("Please enter your request:");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    if(req == "list"){
        console.log("-----------");
        for(let i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("----------");
    }else if(req == "add"){
      let task = prompt("Please enter the task you want to add:");
      todo.push(task);
      console.log("task added");
    }else if(req == "delete"){
       let idx = prompt("Please enter the task index:");
       let index = Number(idx);
       if(Number.isNaN(index) || index < 0 || index >= todo.length){
        console.log("Invalid index. Use 'list' to see indexes");
       }else{
        let removed = todo.splice(index, 1);
        console.log("Removed:", removed[0]);
       }
    }else{
       console.log("Wrong request");
    }
    req = prompt("Please enter your request:");
}
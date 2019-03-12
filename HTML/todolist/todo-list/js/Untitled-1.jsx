
let array = []
console.log(array) // vuoto

array.push('Mela')
array.push('Kiwi')
array.push('Banama')

console.log(array) // pieno

for (let i = 0; i < array.length; i++) {
    console.log(i)
    console.log(array[i])
}





this.state = {
    toDoList: [
      {
        id: 0,
        task: 'contenuto task',
        done: true
      }
    ]
  }
}

render() {
  const toDoList = this.state.toDoList;

  for (let i = 0; i < toDoList.length; i++) {
    console.log(i)

  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="to-do-list">
        <span>Numero: {toDoList[0].id} </span>
        <span>Task: {toDoList[0].task} </span>
        <span>Fatto: {toDoList[0].done ? 'done' : 'not done'} </span>
      </div>
    </div>
  );
}
}










function newElement() {
    var li = document.createElement("li");     //let id = toDoList[0].id
    var inputValue = document.getElementById("myInput").value; //let task = toDoList[0].task
    var t = document.createTextNode(inputValue); //let value = toDoList[0].done
    li.appendChild(t); 
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
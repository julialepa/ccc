$(document).ready(() => {
    const todos = [];
    const createTodo = (task) => { //costante che contiene una funzione anonima
        todos.push({ // funzione js che fa push all'interno di todo
            task: task,
            done: false
        })
    }
    const UpdateTodo = (index, task, done) => { //costante che contiene una funzione anonima con index che servià per indicare l'indice dell'elemento
        todos[index] = {
            task: task,
            done: done
        }
    }

    const DeleteTodo = (index) => { //costante che contiene una funzione anonima con index che servià per indicare l'indice dell'elemento
        delete todos[index]
    }

    createTodo("Spesa")
    createTodo("Pulizie")

    console.log(todos)
    $("#add-todo-button").click(() =>{
       const todoTask = $("#add-todo-content").val()
        createTodo(todoTask)
    })
});


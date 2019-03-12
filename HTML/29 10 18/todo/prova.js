$(document).ready(()=>{

    const todos = []

    const createTodos = task => {
        todos.push({
            task: task,
            done: false
        })
    };

    const updateTodos = (index, task, done) =>{
        todos[index] = {
            task : task,
            done : done
        }
    };

    const deleteTodos = index => {
        todos.splice(index, 1);
    };

    const renderTodos = () => {
        $('#todos-container').append(todos)
    };

});
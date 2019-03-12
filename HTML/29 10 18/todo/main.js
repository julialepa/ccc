/**
 * Consegna Esercizio TODO 1:
 * Come utente vorrei avere la possibilità di aggiungere un "Task" e poterlo segnare come fatto.
 * Vorrei che all'aggiunta di un Task il campo input text venga cancellato.
 * Vorrei inoltre che il Task segnato come fatto abbia il testo barrato.
 * Per la grafica mi piacerebbe vedere qualcosa di abbastanza moderno, magari utilizzando una libreria come Bootstrap, Materialize o UiKit.
 * 
 * BONUS: come utente vorrei avere la possibilità di cancellare un task
 * BONUS2: come utente vorrei avere la possibilità di inserire un task premendo il tasto INVIO
 * BONUS3: come utente vorrei avere la possibilità di cancellare tutti i Task con un pulsante
 *
 */

/**
 * con il metodo ready(callback) abbiamo la possibilità di eseguire una funzione (il parametro callback)
 * una volta che tutto l'albero del DOM è stato caricato sul browser, in questo modo evitiamo di selezionare
 * elementi che ancora non esistono
 */
$(document).ready(() => {
  /**
   * questa è la nostra base dati: conterrà tutti i Task della TodoList. 
   * Se abbiamo la necessità di creare/vedere/modificare/eliminare Task questa è la variabile da usare.
   */
  const todos = [];

  /** crea un nuovo Task */
  const createTodo = task => {
    todos.push({
      task: task,
      done: false // di default settiamo il Task come ancora da fare
    });
  };

  /** aggiorna un Task */
  const updateTodo = (index, task, done) => {
    todos[index] = {
      task: task,
      done: done
    };
  };

  /** rimuove un Task */
  const deleteTodo = index => {
    // https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    todos.splice(index, 1);
  };

  /** 
   * cancella tutti gli elementi presenti all'interno del div con 
   * id: todos-container e stampa tutti i Task presenti all'interno della variabile todos
   * agganciando inoltre l'evento per l'aggiornamento del task (fatto/da fare)
   */
  const renderTodos = () => {
    let myDiv = $('<div>')
    let checkBox = $('<button>')

    for (let i = 0; i< todos.length; i++) {
      myDiv.append(todos[i].task)
      myDiv.append(checkBox)
      $('#todos-container').append(myDiv);

    }


  };

  /** agganciamo l'evento di aggiunta di un task al click dell'elemento con id: add-todo-button */
  $("#add-todo-button").click(() => {
    // recuperiamo il valore dell'input con id: todo-content
    const task = $("#todo-content").val();
    // creiamo il todo
    createTodo(task);
    // aggiorniamo il DOM con le nuove informazioni
    renderTodos();
    // cancelliamo il contenuto della input text
    // $(...)....
  });
});

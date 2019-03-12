/*
 name: todolist
 version: 1.0
 author: Roberto Affuso
 date: 21/10/2018
*/
window.onload = function() {
  //letiables
  let form = document.getElementById("form");
  let input = document.getElementById("input");
  let btn = document.getElementById("btn");
  let list = document.getElementById("list");
  let btnClr = document.getElementById("btnClr");
  let id = 1;
  // listItem = {item: "todo item", checked: flase}
  let liItem = "";
  let todoList = [];

  //button event listener
  btn.addEventListener("click", addTodoItem);

  //list event listener
  list.addEventListener("click", boxChecked);

  //event listener for clear list
  btnClr.addEventListener("click", clearList);

  if (localStorage.length <= 0) {
    btnClr.style.display = "none"; //hide clear btn
    console.log("button");
  }

  //checking localstorage has data
  if (localStorage.length > 0) {
    displayList();
  }

  //add todo item to list
  function addTodoItem() {
    if (input.value === "") {
      alert("You must enter some value!");
    } else {
      if (list.style.borderTop === "") {
	        list.style.borderTop = "2px solid white";
        btnClr.style.display = "inline";
      }
      let text = input.value;
      let item = `<li class="list-item" id="li-${id}">${text} <input id="box-${id}" class="checkboxes" type="checkbox"> </li>`;
      list.insertAdjacentHTML("beforeend", item);
      liItem = { item: text, checked: false };
      todoList.push(liItem);
      id++;
      addToLocalStorage();
      form.reset();
    }
  }

  //adding string through style to list itme
  function boxChecked(event) {
    const element = event.target;
    if (element.type === "checkbox" && element.checked === true ) { //QUI STAVA IL BUG. MANCAVA L'ESPRESSIONE " && element.checked === true "
      element.parentNode.style.textDecoration = "line-through";
      todoList = JSON.parse(localStorage.getItem("todoList"));
      todoList[
        element.id.split("-")[1] - 1
      ].checked = element.checked.toString();
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
    else {
      element.parentNode.style.textDecoration = "none";
    }
  }

  //adding data to local storage
  function addToLocalStorage() {
    if (typeof Storage !== "undefined") {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    } else {
      alert("browser doesn't support local storage!");
    }
  }
    //display all todo list
    function displayList() {
      list.style.borderTop = "2px solid white";
      todoList = JSON.parse(localStorage.getItem("todoList"));

      //remove single item

      //deleteListElement()
      //   for (let i = 0; i < removeBtn.length; i++) {
      // 	  console.log(i, removeBtn[i])
      // 	//removeBtn[i].addEventListener("click", deleteListElement());
      //   }
    }

    // function deleteSingleItem(ID) {
    //   document.querySelector("#li-" + ID).remove();
    // }

    todoList.forEach((element, i) => {
      console.log(element.item);
      let text = element.item;
      let item = `<li class="list-item" id="li-${id}">${text} <input id="box-${id}" class="checkboxes" type="checkbox"> </li>`;
      // let item = '<li class="list-item" id="li-${id}">${text} <input id="box-${id}" class="checkboxes" type="checkbox"> </li>';
      let itemArray = [];
      itemArray.push(item);
      list.insertAdjacentHTML("beforeend", item);
      console.log(item);
      if (itemArray.length > 0) console.log(">>>>>", itemArray);
        for (let i = 0; i < itemArray.length; i++) {
			console.log(i, '---', itemArray[0])
			let button = document.querySelector('#btn')
			button.addEventListener("click", 
			// deleteSingleItem
			() => {
				console.log(document.querySelector("#li-" + i))
				document.querySelector("#li-" + i)//.remove();
			}
			);
        }
      //if we got a checked box, then style
      if (element.checked) {
        let li = document.getElementById("li-" + id);
        li.style.textDecoration = "line-through";
        li.childNodes[1].checked = element.checked;
      }
      id++;
    });
  

  //   function createListElement() {
  //     if (!newitem.value.trim()) {
  //       alert("You must enter a value");
  //       return;
  //     }
  //     let li = document.createElement("li");
  //     li.appendChild(document.createTextNode(newitem.value));

  //     newitem.value = " ";
  //     let delbutt = document.createElement("button");
  //     delbutt.appendChild(document.createTextNode("Delete"));
  //     li.appendChild(delbutt);
  //     ul.appendChild(li);
  //     delbutt.addEventListener("click", deleteListElement);
  //     li.addEventListener("click", liClick);
  //   }

  //   let removeBtn = document.querySelectorAll(".custom-button");
  //   console.log(removeBtn);
  //   removeBtn.forEach((btn, idx) => {
  //     btn.addEventListener("click", () => {
  //       //let allItems = document.querySelectorAll(".list-item");
  //       //allItems.forEach((item, index) => {
  //       console.log(idx);
  //       deleteSingleItem(idx);
  //     });
  //     //});
  //   });

  //clear list event listener
  function clearList() {
    todoList = [];
    localStorage.clear();
    list.innerHTML = "";
    btnClr.style.display = "none";
    list.style.borderTop = "";
  }
};

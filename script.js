const todoInput = document.querySelector(".todo-input")
const btnAdd = document.querySelector(".btn-add")
const errorInfo = document.querySelector(".error-info")
const complete = document.querySelector(".complete")
const edit = document.querySelector(".edit")
const del = document.querySelector(".delete")
const ulList = document.querySelector(".todolist ul")
let liItem = document.querySelectorAll("li")
const popup = document.querySelector(".popup")
const popupInput = document.querySelector(".popup-input")
const popupBtnAccept = document.querySelector(".accept")
const popupBtnCancel = document.querySelector(".cancel")
const popupInfo = document.querySelector(".popup-info")
let toDoEdit




const main = () => {
    prepereDOMElements()
    prepereDOMEvents()

}

const prepereDOMElements = () =>{

}

const prepereDOMEvents = () => {
    btnAdd.addEventListener("click", newToDo)
    ulList.addEventListener("click", checkClick)
    popupBtnCancel.addEventListener("click", closePopup)
    popupBtnAccept.addEventListener("click", acceptPopup)
    todoInput.addEventListener("keyup", enterKeyCheck)
}

document.addEventListener("DOMContentLoaded", main)

const newToDo =() =>{

if (todoInput.value !== ""){

   liItem =  document.createElement('li')
   ulList.append(liItem)
   liItem.textContent = todoInput.value
   createToolsArea()
   errorInfo.textContent = ""
   todoInput.value = ""
    }
    else{
    errorInfo.textContent = "Wprowadź treść zadania"
    }
    }

const createToolsArea = () => {                     // dodawanie narzedzi do LI
    const div = document.createElement("div")       // najpierw tworzymy diva  
    div.classList.add('tools')                      // do diva dodajemy przyciski

    const button1 = document.createElement("button")
    const button2= document.createElement("button")
    const button3 = document.createElement("button")
    
    button1.classList.add("complete")
    button1.innerHTML = '<i class="fas fa-check"></i>'
    
    button2.classList.add("edit")
    button2.textContent = 'EDIT'
    
    button3.classList.add("delete")
    button3.innerHTML = '<i class="fas fa-times"></i>'

    div.append(button1, button2, button3)               // przyciski dodajemy do diva
    liItem.append(div)                                  // diva dodajemy do listy LI
}

const checkClick = (e) => {
    if (e.target.matches('.complete')) {
        e.target.closest("li").classList.toggle("completed") // zmiana stylu LI na skreslenie
        e.target.classList.toggle("completed") // zmiana stylu ptaszka. Zamiast odwoływać się do globalnej zmiennej odwołujemy się do targetu .complete
        // complete.classList.toggle("completed")  to też działa
    }
    else if (e.target.matches(".edit")){
     editToDo(e)
    }
    else if (e.target.matches(".delete")){
        delateToDo(e)
    }
    }

const closePopup = () => {
    popup.style.display = "none"
    popupInfo.textContent = ""
}
const editToDo = (e) => {
    toDoEdit = e.target.closest("li")
    console.log(toDoEdit.firstChild);
     popupInput.value = toDoEdit.firstChild.textContent
        popup.style.display = "flex"
}

const acceptPopup = () => {
    if (popupInput.value !== ""){
        toDoEdit.firstChild.textContent = popupInput.value  
        popup.style.display = "none"
}
else {popupInfo.textContent = "Wprowadź jakąś treść"}
}

const delateToDo = (e) => {
    e.target.closest("li").remove()
    const allTodos = ulList.querySelectorAll("li")
    if (allTodos.length === 0 ){
        errorInfo.textContent = "Brak zadań na liście"
    }
}

const enterKeyCheck = (e) => {
    if (e.key === "Enter")
    newToDo()
}

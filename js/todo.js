const toDoList = document.querySelector("#list-contents")
const toDoInput = document.querySelector("#todo-input")
const TODOS_KEY = "todos"

let toDoArr = [];

const done = (event) => {
    event.preventDefault()
    const target = event.target
    const target2 = target.nextSibling
    target.classList.toggle("clicked")
    target2.classList.toggle("clickedText")
}


function once() {
    const result = JSON.parse(localStorage.getItem(TODOS_KEY))
    if (result !== null && result.length !== 0) {
        toDoList.classList.remove(HIDDEN_CLASSNAME)
        for (let i = 0; i < result.length; i++) {
            paintToDo(result[i])
        }
    } else {
        toDoList.classList.add(HIDDEN_CLASSNAME)
    }
}

once()

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArr))
}

function deletToDo(event) {
    let localData = JSON.parse(localStorage.getItem(TODOS_KEY))
    const delpoint = event.target.parentElement.id
    toDoArr = localData.filter((item) => String(item.id) !== delpoint)
    saveToDos()
    const target = event.target.parentElement
    target.remove()
    if (toDoArr.length === 0) {
        toDoList.classList.add(HIDDEN_CLASSNAME)
    }
}

function paintToDo(item) {
    toDoList.classList.remove(HIDDEN_CLASSNAME)
    const div = document.createElement("div")
    div.classList.add("todoElement")
    div.id = item.id

    const doneIcon = document.createElement("img")
    doneIcon.addEventListener("click", done)

    const span = document.createElement("span")
    span.innerText = item.text

    const delIcon = document.createElement("img")
    delIcon.setAttribute("src", "img/del.png")
    delIcon.addEventListener("click", deletToDo)

    div.appendChild(doneIcon)
    div.appendChild(span)
    div.appendChild(delIcon)
    toDoList.append(div)
}

function handleToDoSubmit(event) {
    event.preventDefault()
    const newToDo = toDoInput.value
    toDoInput.value = ""
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDoArr.push(newTodoObj)
    paintToDo(newTodoObj)
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)


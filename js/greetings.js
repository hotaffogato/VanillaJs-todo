const loginForm = document.querySelector("#login")
const loginInput = document.querySelector("#login input")
const greeting = document.querySelector("#greeting")

const quote = document.querySelector("#quotes")

const toDoForm = document.querySelector("#todo-form")
const todo = document.querySelector("#todo-all")

const HIDDEN_CLASSNAME ="hidden"
const USERNAME_KEY = "username"
const GUEST_NAME = "Guest"

const savedUsername = localStorage.getItem(USERNAME_KEY)

// if(savedUsername === null){
//   loginForm.classList.remove(HIDDEN_CLASSNAME)
//   todo.classList.add(HIDDEN_CLASSNAME)
//   quote.classList.add(HIDDEN_CLASSNAME)
// }else{
//   loginGreeting(savedUsername)
//   todo.classList.remove(HIDDEN_CLASSNAME)
//   toDoForm.classList.remove(HIDDEN_CLASSNAME)
//   quote.classList.remove(HIDDEN_CLASSNAME)
// }

function autoLogin(){
  const username = GUEST_NAME
  localStorage.setItem(USERNAME_KEY, username)
  loginGreeting(GUEST_NAME)
  todo.classList.remove(HIDDEN_CLASSNAME)
  toDoForm.classList.remove(HIDDEN_CLASSNAME)
  quote.classList.remove(HIDDEN_CLASSNAME)
}

autoLogin()

function loginSubmit(event){
  event.preventDefault()
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  loginGreeting(username)
  todo.classList.remove(HIDDEN_CLASSNAME)
  toDoForm.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener("submit", loginSubmit)


function loginGreeting(item){
  greeting.innerText = `Hello, ${item}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
  loginForm.classList.add(HIDDEN_CLASSNAME)
  todo.classList.remove(HIDDEN_CLASSNAME)
  toDoForm.classList.remove(HIDDEN_CLASSNAME)
  quote.classList.remove(HIDDEN_CLASSNAME)
}
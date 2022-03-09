"use strict";

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const todoArray = [];
const TODO_KEY = "todo";

function SaveTodos(todos) {
  localStorage.setItem("todo", JSON.stringify(todos));
}

function delTodo(e) {
  const li = e.target.parentElement;
  li.remove();
}

function paintTodo(todo) {
  console.log(todo);
  const todoLi = document.createElement("li");
  const todoSpan = document.createElement("span");
  todoLi.appendChild(todoSpan);
  todoSpan.innerHTML = todo;
  todoList.appendChild(todoLi);
  const button = document.createElement("button");
  button.innerHTML = "-";
  todoLi.appendChild(button);
  button.addEventListener("click", delTodo);
  todoArray.push(todo);
  SaveTodos(todoArray);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const todo = todoInput.value;
  todoInput.value = null;
  paintTodo(todo);
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODO_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach(paintTodo);
}

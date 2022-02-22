"use strict";

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

function paintTodo(todo) {
  console.log(todo);
  const todoLi = document.createElement("li");
  const todoSpan = document.createElement("span");
  todoLi.appendChild(todoSpan);
  todoSpan.innerHTML = todo;
  todoList.appendChild(todoLi);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const todo = todoInput.value;
  todoInput.value = null;
  paintTodo(todo);
}

todoForm.addEventListener("submit", handleToDoSubmit);

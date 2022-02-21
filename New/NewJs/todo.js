"use strict";

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

function handleToDoSubmit(e) {
  e.preventDefault();
  const todo = todoInput.value;
  console.log(todoInput.value);
  todoInput.value = null;
}

todoForm.addEventListener("submit", handleToDoSubmit);

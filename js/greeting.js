"use strict";
const loginForm = document.querySelector("#input-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logOut");
const USERNAME_KEY = "username";
const HIDDEN = "hidden";

function loggedIn() {
  const username = localStorage.getItem(USERNAME_KEY);
  loginForm.classList.add(HIDDEN);
  greeting.classList.remove(HIDDEN);
  logoutBtn.classList.remove(HIDDEN);
  greeting.innerHTML = `Hello ${username}!`;
}

function loggedOut() {
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN);
  greeting.classList.add(HIDDEN);
  logoutBtn.classList.add(HIDDEN);
  loginInput.value = "";
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loggedIn();
}

function loginCheck() {
  const loginName = localStorage.getItem(USERNAME_KEY);
  if (loginName) {
    loggedIn();
  } else {
    loggedOut();
  }
}
loginForm.addEventListener("submit", onLoginSubmit);
logoutBtn.addEventListener("click", loggedOut);

loginCheck();

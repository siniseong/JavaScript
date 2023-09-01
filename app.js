const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  console.dir(event);
}

function handleLinkClick(event) {
event.preventDefault();
}
loginForm.addEventListener("sumbit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

handleLinkClick({information about the event that just happend})


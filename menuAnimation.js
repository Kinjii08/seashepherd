let open = document.getElementById("open");
let close = document.getElementById("close");
let background = document.getElementById("background");
let body = document.querySelector("body");

function openNav() {
  document.getElementById("leftMenu").style.width = "275px";
  open.style.display = "none";
  close.style.display = "block";
  background.style.visibility = "visible";
  body.style.position = "fixed";
}

function closeNav() {
  document.getElementById("leftMenu").style.width = "0";

  close.style.display = "none";
  open.style.display = "block";
  background.style.visibility = "hidden";
  body.style.position = "";
}

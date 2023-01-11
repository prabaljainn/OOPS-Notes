var data = 0;

document.getElementById("JScounting").innerText = data;

function Increase() {
  data++;
  document.getElementById("JScounting").innerText = data;
}
function Reset() {
  data = 0;
  document.getElementById("JScounting").innerText = data;
}
function Decrease() {
  if (data > 0) {
    data--;
  }
  document.getElementById("JScounting").innerText = data;
}

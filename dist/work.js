
function leftClick() {
  btn.style.left = '57px'
}

function rightClick() {
  btn.style.left = '170px'
}
let btnA = document.getElementById("btnA");
let btnB = document.getElementById("btnB");
let ui = document.getElementById("ui");
let fun = document.getElementById("fun");

reset_styles = function() {
  btnA.classList.remove("active");
  btnB.classList.remove("active");
};

btnA.addEventListener("click", function() {

  fun.classList.remove("active");
    ui.classList.toggle("active");
})
btnB.addEventListener("click", function() {
  ui.classList.remove("active");
    fun.classList.toggle("active");
});

  // デフォルトで未完了のみ表示
ui.classList.toggle("active");


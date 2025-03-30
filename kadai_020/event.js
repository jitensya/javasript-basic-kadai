// *const Btn = document.getElementById("btn");

// Btn.addEventstener("click",() =>{
// const bt2 = document.createElement();
// textContent = "ボタンをクリックしました";
// });
const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click",function() {
text.textContent ="ボタンをクリックしました";
});



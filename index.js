// const fields = document.querySelector("form__input")

// document.querySelector(".form__input").addEventListener("keyup", function () {
//     this.value = this.value.replace(Value);
// });
// for (i = 0; i < fields.length; i++) {
//     if (fields[i].value) {
//         console.log('field is blank', fields[i])


let minusBtn = document.getElementById("minusbtn");
let count = document.getElementById("count");
let plusBtn = document.getElementById("plusbtn");

let countNum = 0;
count.innerHTML = countNum;

minusBtn.addEventListener("click", () => {
	countNum -= 1;
	count.innerHTML = countNum;
});

plusBtn.addEventListener("click", () => {
	countNum += 1;
	count.innerHTML = countNum;
});



// const fields = document.querySelector("form__input")

// document.querySelector(".form__input").addEventListener("keyup", function () {
//     this.value = this.value.replace(Value);
// });
// for (i = 0; i < fields.length; i++) {
//     if (fields[i].value) {
//         console.log('field is blank', fields[i])


// let minusBtn = document.getElementById("minusbtn");
// let count = document.getElementById("count");
// let plusBtn = document.getElementById("plusbtn");

// let countNum = 0;
// count.innerHTML = countNum;

// minusBtn.addEventListener("click", () => {
// 	countNum -= 1;
// 	count.innerHTML = countNum;
// });

// plusBtn.addEventListener("click", () => {
// 	countNum += 1;
// 	count.innerHTML = countNum;
// });


$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
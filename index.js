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




// CIRCLE LOADERS
$(function () {
    $('.chart').easyPieChart({
        size: 44,
        barColor: "#0880AE",
        scaleLength: 0,
        lineWidth: 3,
        trackColor: "#DBE2EA",
        lineCap: "circle",
        animate: 2000,
    });
});
$(function () {
    $('.chart2').easyPieChart({
        size: 44,
        barColor: "#F2AC57",
        scaleLength: 0,
        lineWidth: 3,
        trackColor: "#DBE2EA",
        lineCap: "circle",
        animate: 10000,
    });
});
$(function () {
    $('.chart3').easyPieChart({
        size: 44,
        barColor: "#14A38B",
        scaleLength: 0,
        lineWidth: 3,
        trackColor: "#DBE2EA",
        lineCap: "circle",
        animate: 20000,
    });
});
$(function () {
    $('.chart4').easyPieChart({
        size: 44,
        barColor: "#FF7171",
        scaleLength: 0,
        lineWidth: 3,
        trackColor: "#DBE2EA",
        lineCap: "circle",
        animate: 7000,
    });
});




// $('button').click(function() {
//     const $btn = $(this);
//     $('#output').html(function(i, val) {
//       val = val * 1 + $btn.data('inc');
//       return (val <= 0 ? '' : '+') + val;
//     });
//   });

$(document).ready(function() {
    $('.counter__minus').click(function () {
        var $input = $(this).parent().find('.counter__input');
        var count = parseInt($input.val()) - 01;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.counter__plus').click(function () {
        var $input = $(this).parent().find('.counter__input');
        $input.val(parseInt($input.val()) + 01);
        $input.change();
        return false;
    });
});
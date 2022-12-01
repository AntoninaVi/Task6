

// CIRCLE LOADERS
// $(function () {
//     $('.chart').easyPieChart({
//         size: 44,
//         barColor: "#0880AE",
//         scaleLength: 0,
//         lineWidth: 3,
//         trackColor: "#DBE2EA",
//         lineCap: "circle",
//         animate: 18000,
//     });
// });
// $(function () {
//     $('.chart2').easyPieChart({
//         size: 44,
//         barColor: "#F2AC57",
//         scaleLength: 0,
//         lineWidth: 3,
//         trackColor: "#DBE2EA",
//         lineCap: "circle",
//         animate: 14000,
//     });
// });
// $(function () {
//     $('.chart3').easyPieChart({
//         size: 44,
//         barColor: "#14A38B",
//         scaleLength: 0,
//         lineWidth: 3,
//         trackColor: "#DBE2EA",
//         lineCap: "circle",
//         animate: 18000,
//     });
// });
// $(function () {
//     $('.chart4').easyPieChart({
//         size: 44,
//         barColor: "#FF7171",
//         scaleLength: 0,
//         lineWidth: 3,
//         trackColor: "#DBE2EA",
//         lineCap: "circle",
//         animate: 17000,
//     });
// });


// COUNTERS

let num1 = 0
let sumEL = document.getElementById("sum")

function minus1() {
    let result = num1 - 1
    sumEL.textContent = result
    num1 = num1 - 1
}
console.log(num1)

function add1() {
    let result = num1 + 1
    sumEL.textContent = + result
    num1 = num1 + 1
}
console.log(num1)



let num2 = 0
let sumEL2 = document.getElementById("sum2")

function minus2() {
    let result = num2 - 1
    sumEL2.textContent = result
    num2 = num2 - 1
}
console.log(num2)

function add2() {
    let result = num2 + 1
    sumEL2.textContent = + result
    num2 = num2 + 1
}
console.log(num2)






// RANGE SLIDERS

const rangeInputs = document.querySelectorAll('input[type="range"]')

function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
        target = document.getElementById('range')
    }
    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
})



// STAR RATING
document.querySelector('jsuites-rating').addEventListener('onchange', function (e) {
    document.getElementById('console').innerHTML = + this.value;
});

// BURGER MENU page 4
// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "inline-block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "inline-block";
//     }
// }

// function myFunction2() {
//     var x = document.getElementById("myLinks2");
//     if (x.style.display === "inline-block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "inline-block";
//     }
// }


// dropdown 2
function show_list() {
    var courses = document.getElementById("dropdown_id");

    if (courses.style.display == "block") {
        courses.style.display = "none";
    } else {
        courses.style.display = "block";
    }
}
window.onclick = function (event) {
    if (!event.target.matches('.form__select-button')) {
        document.getElementById('dropdown_id')
            .style.display = "none";
    }
}

function show_list2() {
    var courses = document.getElementById("dropdown_id2");

    if (courses.style.display == "block") {
        courses.style.display = "none";
    } else {
        courses.style.display = "block";
    }
}
window.onclick = function (event) {
    if (!event.target.matches('form__select-button2')) {
        document.getElementById('dropdown_id2')
            .style.display = "none";
    }
}   
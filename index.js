// PAGE 2
//DROPDOWN BUTTONS
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


// CIRCLE LOADERS
var bar = new ProgressBar.Circle(containerProgress, {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 20000,
    color: '#0880AE',
    trailColor: '#D8D8D8',
    trailWidth: 9,
    svgStyle: null
});

bar.animate(1.0);

var bar = new ProgressBar.Circle(containerProgress2, {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 21000,
    color: '#F2AC57',
    trailColor: '#D8D8D8',
    trailWidth: 9,
    svgStyle: null
});

bar.animate(1.0);


var bar = new ProgressBar.Circle(containerProgress3, {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 22000,
    color: '#14A38B',
    trailColor: '#D8D8D8',
    trailWidth: 9,
    svgStyle: null
});

bar.animate(1.0);

var bar = new ProgressBar.Circle(containerProgress4, {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 25000,
    color: '#FF7171',
    trailColor: '#D8D8D8',
    trailWidth: 9,
    svgStyle: null
});

bar.animate(1.0);


// PAGE 4
// STAR RATING
document.querySelector('jsuites-rating').addEventListener('onchange', function (e) {
    document.getElementById('console').innerHTML = + this.value;
});



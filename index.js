

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


// COUNTERS

$(document).ready(function () {
    $('.counters__counter-minus').click(function () {
        var $input = $(this).parent().find('.counters__counter-input');
        var count = parseInt($input.val()) - 01;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.counters__counter-plus').click(function () {
        var $input = $(this).parent().find('.counters__counter-input');
        $input.val(parseInt($input.val()) + 01);
        $input.change();
        return false;
    });
});





// SELECT

function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.form__select-dropbtn')) {
        var dropdowns = document.getElementsByClassName("form__select-dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function dropDown2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('dropbtn2')) {
        var dropdowns = document.getElementById("myDropdown2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function dropDown3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('dropbtn2')) {
        var dropdowns = document.getElementById("myDropdown3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function dropDown4() {
    document.getElementById("myDropdown4").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('dropbtn4')) {
        var dropdowns = document.getElementById("myDropdown3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



// RANGE SLIDER



var $slider = $("#slider");
var $fill = $(".slider-container__bar .slider-container__fill");

function setBar() {
	$fill.css("width", $slider.val() + "%");
}

$slider.on("input", setBar);

setBar();




document.querySelector('jsuites-rating').addEventListener('onchange', function(e) {
    document.getElementById('console').innerHTML =  + this.value;
});

// BURGER MENU
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


// CIRCLE LOADERS
$(function () {
    $('.chart').easyPieChart({
        size: 44,
        barColor: "#0880AE",
        scaleLength: 0,
        lineWidth: 3,
        trackColor: "#DBE2EA",
        lineCap: "circle",
        animate: 16000,
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
        animate: 14000,
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
        animate: 18000,
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
        animate: 17000,
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



//04. FORMS - SELECT
$(document).ready(function () {

    //DropDown input - select
    $('.t-dropdown-input').on('click', function () {
        $(this).parent().next().slideDown('fast');
    });

    $('.t-select-btn').on('click', function () {
        $('.t-dropdown-list').slideUp('fast');

        if (!$(this).prev().attr('disabled')) {
            $(this).prev().trigger('click');
        }
    });

    $('.t-dropdown-input').width($('.t-dropdown-select').width() - $('.t-select-btn').width() - 13);

    $('.t-dropdown-list').width($('.t-dropdown-select').width());

    $('.t-dropdown-input').val('');

    $('li.t-dropdown-item').on('click', function () {
        var text = $(this).html();
        $(this).parent().prev().find('.t-dropdown-input').val(text);
        $('.t-dropdown-list').slideUp('fast');
    });

    $(document).on('click', function (event) {
        if ($(event.target).closest(".t-dropdown-input, .t-select-btn").length)
            return;
        $('.t-dropdown-list').slideUp('fast');
        event.stopPropagation();
    });

});



// RANGE SLIDER

const $slider = $("#slider");
const $fill = $("#bar #fill");

function setBar() {
    $fill.css("width", $slider.val() + "%");
}
$slider.on("input", setBar);

setBar();

let inputSlider2 = document.querySelector("#slider2");
inputSlider2.disabled = true


// STAR RATING
document.querySelector('jsuites-rating').addEventListener('onchange', function (e) {
    document.getElementById('console').innerHTML = + this.value;
});

// BURGER MENU page 4
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function myFunction2() {
    var x = document.getElementById("myLinks2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


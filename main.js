

var evszam;
var egesz;
var ev;
const kinai = ["Patkány", "Bivaly", "Tigris", "Nyúl", "Sárkány", "Kígyó", "Ló", "Kecske", "Majom", "Kakas", "Kutya", "Disznó"];
$("#sub").click(testResults);
$("#btn").click(slide);
$("#btn").click(hidedet);
$("#mainbtn").click(calc);
$("#fadef").click(navshow);
$(window).scroll(mainimg);




function hidedet() {
    if ($(".detstyle").val('display','block')) {
        $("#kalk").hide();
    } else {
            $("#kalk").show();
    }
}
function navshow() {
    if ($("nav").is(":hidden")) {
        $("nav").fadeIn("slow");

    } else {
        $("nav").hide();
    }
}

function calc() {
    $("#kalk").fadeIn("slow");
}
function testResults() {
    evszam = $("#nbr").val();
    var a;
    if (evszam < 1900) {
        alert('Túl korai évszámot adtál meg!');
        $("#txt").hide();
        $("#btn").hide();
    } else if (evszam > 2022) {
        alert('Az évszám későbbi az idei évnél');
        $("#txt").hide();
        $("#btn").hide();
    } else {
        egesz = (evszam - 1900) / 12;
        ev = (evszam - 1900) - (Math.floor(egesz)) * 12;

        $("#txt").show();
        $("#txt").text(kinai[ev]);
        $("#btn").show();
    }
}

function slide() {
    $('#details')
    if (ev < 1) {
        $("#patk").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 1) {
        $("#biv").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 2) {
        $("#tig").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 3) {
        $("#nyul").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 4) {
        $("#sarkany").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 5) {
        $("#snake").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 6) {
        $("#horse").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 7) {
        $("#kecsk").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 8) {
        $("#monkey").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 9) {
        $("#kak").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 10) {
        $("#dog").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 11) {
        $("#pig").slideUp(2000).delay(800).fadeIn(2000);
    }

}
function szovegelt() {
    $("#details").hide();
}

function mainimg() {
    $("#mainpic").css("transform", "rotate(180deg)").css('transition-duration', '12s');
}
















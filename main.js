

var evszam;
var egesz;
var ev;
const kinai = ["Patkány", "Bivaly", "Tigris", "Nyúl", "Sárkány", "Kígyó", "Ló", "Kecske", "Majom", "Kakas", "Kutya", "Disznó"];
$("#sub").click(testResults);
$("#btn").click(slide);
$("#mainbtn").click(calc);
$("#fadef").click(navshow);




 function navshow() {
    if ( $( "nav" ).is( ":hidden" ) ) {
      $( "nav" ).fadeIn("slow");
      
    } else {
      $( "nav" ).hide();    
    }
}

function calc(){
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
        $("#txt").text(kinai[ev - 1]);
        $("#btn").show();
    }
}

function slide() {
    $('#details')
    if (ev <= 1) {
        $("#patk").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 2) {
        $("#biv").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 3) {
        $("#tig").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 4) {
        $("#nyul").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 5) {
        $("#sarkany").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 6) {
        $("#snake").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 7) {
        $("#horse").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 8) {
        $("#kecske").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 9) {
        $("#monkey").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 10) {
        $("#kak").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 11) {
        $("#dog").slideUp(2000).delay(800).fadeIn(2000);
    }
    else if (ev == 12) {
        $("#pig").slideUp(2000).delay(800).fadeIn(2000);
    }
    
    
}
function szovegelt() {
    $("#details").hide();
}

function mainimg() {
    $("#mainpic").css("transform", "rotate(90deg)").css('transition-duration', '8s');
    }
function mainimgback() {
    $("#mainpic").css("transform", "rotate(-90deg)").css('transition-duration', '8s');
}
$("#mainpic").mouseenter(mainimg);
$("#mainpic").mouseleave(mainimgback);




 









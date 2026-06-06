// ===== SPORTS POPUP =====

const liveMatchesBtn =
document.getElementById("liveMatchesBtn");

const sportsPopup =
document.getElementById("sportsPopup");

const closeSports =
document.getElementById("closeSports");


// open popup

liveMatchesBtn.addEventListener(
"click",
function(e){

    e.preventDefault();

    sportsPopup.classList.add(
        "show"
    );

});


// close button

closeSports.addEventListener(
"click",
function(){

    sportsPopup.classList.remove(
        "show"
    );

});


// click outside close

sportsPopup.addEventListener(
"click",
function(e){

    if(
        e.target === sportsPopup
    ){

        sportsPopup.classList.remove(
            "show"
        );

    }

});


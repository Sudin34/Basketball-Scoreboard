let homeScore= document.getElementById("home-score")
let guestScore= document.getElementById("guest-score")
let newGame=document.getElementById("reset")
let homePoints=0
let guestPoints=0
function oneH(){
    homePoints+= 1
    homeScore.textContent=homePoints
}
function twoH(){
     homePoints+= 2
    homeScore.textContent=homePoints
}
function threeH(){
     homePoints+= 3
    homeScore.textContent=homePoints
}
function oneG(){
     guestPoints+= 1
    guestScore.textContent=guestPoints
}
function twoG(){
     guestPoints+= 2
    guestScore.textContent=guestPoints
}
function threeG(){
     guestPoints+= 3
    guestScore.textContent=guestPoints
}
function reset(){
    homePoints=0
    guestPoints=0
    homeScore.textContent=0
    guestScore.textContent=0
}

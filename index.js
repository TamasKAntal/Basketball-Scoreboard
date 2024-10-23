let homeScoreNumb = document.getElementById("home_score")
let homeScore = 0
let guestScoreNumb = document.getElementById("guest_score")
let guestScore = 0

function incrementHomeBy1() {
    homeScore += 1
    homeScoreNumb.textContent = homeScore
}

function incrementHomeBy2() {
    homeScore += 2
    homeScoreNumb.textContent = homeScore
}

function incrementHomeBy3() {
    homeScore += 3
    homeScoreNumb.textContent = homeScore
}

function incrementGuestBy1() {
    guestScore += 1
    guestScoreNumb.textContent = guestScore
}

function incrementGuestBy2() {
    guestScore += 2
    guestScoreNumb.textContent = guestScore
}

function incrementGuestBy3() {
    guestScore += 3
    guestScoreNumb.textContent = guestScore
}

function scoreReset() {
    homeScore = 0
    guestScore = 0
    homeScoreNumb.textContent = homeScore
    guestScoreNumb.textContent = guestScore
}
function randomNumber(min, max) {
    return Math.floor(Math.random() * 100);
}
var player1 = randomNumber(1, 100);
var player2 = randomNumber(1, 100);
var random = randomNumber(1, 100);
function winner(random, player1, player2) {
    if (player1 === void 0) { player1 = 20; }
    var winner1 = Math.abs(random - player1);
    var winner2 = Math.abs(random - player2);
    if (winner1 === winner2) {
        return "I giocatori hanno la distanza uguale ";
    }
    else if (winner1 < winner2) {
        return "Player1 è andato più vicino ad indovinare";
    }
    else if (winner2 < winner1) {
        return "player2 è andato più vicino ad indovinare";
    }
    else {
        return "errore";
    }
}
var risultato = winner(random, player1, player2);
console.log(player1);
console.log(player2);
console.log("Il numero casuale e' ", random);
var winner2 = player1 === random ? "Player1 ha vinto" : console.log(risultato);
var winner3 = player2 === random ? "Player2 ha vinto" : console.log(risultato);

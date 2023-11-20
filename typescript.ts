function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * 100);
  }
  
  const player1: number = randomNumber(1,100);
  const player2: number = randomNumber(1,100);
  const random: number = randomNumber(1,100);
  
  function winner(random: number, player1: number, player2: number): string {
    const winner1: number = Math.abs(random - player1);
    const winner2: number = Math.abs(random - player2);
  
    if (winner1 === winner2) {
      return "I giocatori hanno la distanza uguale ";
    } else if (winner1 < winner2) {
      return "Player1 è andato più vicino ad indovinare";
    } else if (winner2 < winner1) {
      return "player2 è andato più vicino ad indovinare";
    } else {
      return "errore";
    }
  }

  const risultato: string = winner(random,player1,player2)
  
  console.log(player1);
  console.log(player2);
  console.log("Il numero casuale e' ", random);
  
  
  const winner2 = player1 === random ? "Player1 ha vinto" : console.log(risultato);
  
  const winner3 = player2 === random ? "Player2 ha vinto" : console.log(risultato);

  
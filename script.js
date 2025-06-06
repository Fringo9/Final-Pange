function rollDice() {
  const die1Elem = document.getElementById('die1');
  const die2Elem = document.getElementById('die2');
  const resultElem = document.getElementById('result');

  // Aggiungi la classe 'roll' per avviare l'animazione
  die1Elem.classList.add('roll');
  die2Elem.classList.add('roll');

  // Dopo l'animazione, mostra il risultato
  setTimeout(() => {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    const total = die1 + die2;

    die1Elem.textContent = `🎲 ${die1}`;
    die2Elem.textContent = `🎲 ${die2}`;
    resultElem.innerText = `Hai ottenuto: ${die1} + ${die2} = ${total}`;

    // Rimuovi la classe 'roll' per poter riavviare l'animazione in futuro
    die1Elem.classList.remove('roll');
    die2Elem.classList.remove('roll');

    if (total >= 8) {
      setTimeout(() => {
        window.location.href = "victory.html";
      }, 1000);
    }
  }, 500); // Durata dell'animazione
}
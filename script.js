function rollDice() {
  const die1Elem = document.getElementById('die1');
  const die2Elem = document.getElementById('die2');
  const resultElem = document.getElementById('result');

  // Aggiunge animazione
  die1Elem.classList.add('animate');
  die2Elem.classList.add('animate');

  // Dopo l'animazione, calcola risultato
  setTimeout(() => {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    die1Elem.src = `images/dice/die${die1}.png`;
    die2Elem.src = `images/dice/die${die2}.png`;

    die1Elem.classList.remove('animate');
    die2Elem.classList.remove('animate');

    const isStar = (v) => v === 5 || v === 6;
    const stars = [die1, die2].filter(isStar).length;

    resultElem.innerText = `Hai ottenuto ${stars} stella(e)!`;

    if (stars >= 1) {
      setTimeout(() => {
        window.location.href = "victory.html";
      }, 1200);
    }
  }, 400); // Durata della shake
}
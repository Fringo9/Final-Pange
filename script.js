function rollDice() {
  const die1Elem = document.getElementById('die1');
  const die2Elem = document.getElementById('die2');
  const resultElem = document.getElementById('result');

  let rollCount = 0;
  const maxRolls = 20;
  const rollInterval = 50; // tempo in ms tra un cambio di faccia e l'altro

  const rollAnimation = setInterval(() => {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    die1Elem.src = `images/dice/die${die1}.png`;
    die2Elem.src = `images/dice/die${die2}.png`;

    rollCount++;

    if (rollCount >= maxRolls) {
      clearInterval(rollAnimation);

      // Determina il numero di stelle (facce 5 o 6)
      const stars = [die1, die2].filter(num => num >= 5).length;

      resultElem.innerText = `Hai ottenuto ${stars} stella(e)!`;

      if (stars >= 2) {
        setTimeout(() => {
          window.location.href = "victory.html";
        }, 1000);
      }
    }
  }, rollInterval);
}
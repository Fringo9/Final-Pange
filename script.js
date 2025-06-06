die1Elem.classList.add('roll');
die2Elem.classList.add('roll');

setTimeout(() => {
  const die1 = Math.floor(Math.random() * 6) + 1;
  const die2 = Math.floor(Math.random() * 6) + 1;
  const total = die1 + die2;

  die1Elem.textContent = `🎲 ${die1}`;
  die2Elem.textContent = `🎲 ${die2}`;
  resultElem.innerText = `Hai ottenuto: ${die1} + ${die2} = ${total}`;

  // 👇 Rimuovi la classe DOPO il rendering
  die1Elem.classList.remove('roll');
  die2Elem.classList.remove('roll');

  if (total >= 8) {
    setTimeout(() => {
      window.location.href = "victory.html";
    }, 1000);
  }
}, 500); // ⏱ La durata deve essere uguale a quella dell'animazione CSS
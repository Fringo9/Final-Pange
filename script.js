function rollDice() {
  const die1 = Math.floor(Math.random() * 6) + 1;
  const die2 = Math.floor(Math.random() * 6) + 1;
  const total = die1 + die2;

  document.getElementById('result').innerText = `You rolled: ${die1} + ${die2} = ${total}`;

  if (total >= 8) {
    setTimeout(() => {
      window.location.href = "victory.html";
    }, 1000);
  }
}

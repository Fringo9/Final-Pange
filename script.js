let pangeHp = 10;
let enemyHp = 33;

function rollDice() {
  const die1Elem = document.getElementById("die1");
  const die2Elem = document.getElementById("die2");
  const resultElem = document.getElementById("result");
  const pangeStatus = document.getElementById("pangeStatus");
  const enemyStatus = document.getElementById("enemyStatus");

  // reset animazioni
  pangeStatus.classList.remove("damage-pange");
  enemyStatus.classList.remove("damage-enemy");

  let rollCount = 0;
  const maxRolls = 15;
  const interval = 50;

  const rollInterval = setInterval(() => {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    die1Elem.src = `images/dice/die${die1}.png`;
    die2Elem.src = `images/dice/die${die2}.png`;

    rollCount++;
    if (rollCount >= maxRolls) {
      clearInterval(rollInterval);

      const dice = [die1, die2];
      const stars = dice.filter((v) => v === 5 || v === 6).length;
      const has34 = dice.some((v) => v === 3 || v === 4);

      let msg = ``;
      let damageToPange = 0;
      let damageToEnemy = 0;

      if (stars === 2) {
        damageToEnemy = 2;
        msg += "Gli anni de Cristo perde 2 ❤️";
      } else if (stars === 1) {
        damageToEnemy = 1;
        msg += "Gli anni de Cristo perde 1 ❤️";
      } else {
        if (has34) {
          damageToPange = 1;
          msg += "Pange subisce 1 ❤️";
        } else {
          damageToPange = 2;
          msg += "Pange subisce 2 ❤️";
        }
      }

      // Applica danni
      if (damageToPange > 0) {
        pangeHp -= damageToPange;
        pangeStatus.classList.add("damage-pange");
      }
      if (damageToEnemy > 0) {
        enemyHp -= damageToEnemy;
        enemyStatus.classList.add("damage-enemy");
      }

      // Aggiorna UI
      document.getElementById("pangeHp").innerText = Math.max(pangeHp, 0);
      document.getElementById("enemyHp").innerText = Math.max(enemyHp, 0);
      resultElem.innerText = msg;

      // Fine partita
      if (pangeHp <= 0 && enemyHp > 0) {
        alert("GAME OVER: Pange è stato sconfitto.");
      } else if (enemyHp <= 0 && pangeHp > 0) {
        alert("VITTORIA! Hai sconfitto Gli Anni de Cristo!");
      } else if (enemyHp <= 0 && pangeHp <= 0) {
        alert("Entrambi cadono... pareggio epico.");
      }
    }
  }, interval);
}

function healPange() {
  if (pangeHp <= 0) return; // non curare se sei già morto
  pangeHp = Math.min(10, pangeHp + 2);
  document.getElementById("pangeHp").innerText = pangeHp;
}

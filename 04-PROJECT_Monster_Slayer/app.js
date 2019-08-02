class Turn {
  constructor(initiator, target, action, amount) {
    this.initiator = initiator;
    this.target = target;
    this.action = action;
    this.amount = amount;
  }
}

new Vue({
  el: "#app",
  data: {
    gameIsActive: false,
    monsterHealth: 100,
    playerHealth: 100,
    combatLog: []
  },
  methods: {
    playerAttack() {
      const playerDamage = this.calculateDamage(1, 10);
      this.monsterHealth -= playerDamage;

      this.combatLog.unshift(
        new Turn("player", "monster", "hits", playerDamage)
      );

      this.monsterAttack();

      if (this.monsterHealth <= 0) {
        this.checkWin("won");
        return;
      }

      if (this.playerHealth <= 0) {
        this.checkWin("lost");
      }
    },
    monsterAttack() {
      const damage = this.calculateDamage(3, 11);

      this.playerHealth -= damage;
      this.combatLog.unshift(new Turn("monster", "player", "hits", damage));
    },

    specialAttack() {
      const damage = this.calculateDamage(9, 13);
      this.monsterHealth -= damage;
      this.combatLog.unshift(new Turn("player", "monster", "crushes", damage));
      this.monsterAttack();
    },

    heal() {
      let healed = this.calculateDamage(1, 16);
      this.playerHealth += healed;

      if (this.playerHealth >= 100) {
        this.playerHealth = 100;
        healed = "max";
      }

      this.combatLog.unshift(new Turn("player", "himself", "healed", healed));
      this.monsterAttack();
    },

    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    surrender() {
      alert("You gave up, the monster won!");
      this.resetGame();
    },

    checkWin(status) {
      const message = status === "won" ? "You won" : "You lost";
      alert(message);
      this.resetGame();
    },

    resetGame() {
      this.gameIsActive = false;
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.combatLog = [];
    }
  }
});

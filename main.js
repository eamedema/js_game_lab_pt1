"used strict";

let play = confirm("You are about to take on the mighty Grant at... THE GAME!!");

if (play === true) {
  startGame();
} else if (play === false){
  console.log(`don't be lame play the game, refresh the page and then engage`)
}

function startGame() {

  let playerName = prompt("Who are yee that competes against thee?");
  let userHealth = 40;
  let grantHealth = 10;
  let grantLives = 0;

    while (userHealth > 0  && grantLives <= 2) {
      userHealth -= Math.floor((Math.random() * 2) + 1);
      grantHealth -= Math.floor((Math.random() * 2) + 1);


        if (userHealth > 0) {
          console.log(`${playerName} has ${userHealth} health left.`);
          console.log(`The Grant the Almighty Chicken has ${grantHealth} health left`);
        }

        if (grantHealth <= 0) {
          grantLives +=1;
        }

        if (grantLives < 3 && grantHealth <= 0) {
            console.log(`Grant the Almighty Chicken has Fallen. But.... whats this? He has respawned.`);
        } else if (grantLives === 3) {
          console.log(`IT'S ALL OVER! Grant the Almighty Chicken has 0 health and 0 remaining lives. ${playerName} wins!`);
        }

        if (grantHealth <= 0) {
            grantHealth = 10;
        }

        if (userHealth <= 0) {
          console.log(`${playerName} has ${userHealth} health left. Grant the Almighty Chicken has defeated you!`);
        }


    }

}

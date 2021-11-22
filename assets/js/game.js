window.alert("Welcome to Robot Gladiators!");

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  console.log(promptFight);

  if(promptFight === "FIGHT" || promptFight === "fight"){
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    playerHealth -= enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } 
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth -= playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    if(enemyHealth <= 0){
      window.alert(enemyName + " has died!");
    }
    else{
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  }
  else if(promptFight === "SKIP" || promptFight === "skip"){
    window.alert("You have chosen to skip the fight.");
  }
  else{
    window.alert("Invlaid input please choose to either 'FIGHT' or 'SKIP'");
    fight();
  }
};




fight();
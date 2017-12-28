var debug = false;

// POKEMONS
var Lucario = {name: "Lucario", health: 1, maxHealth:50, summoned:false, type: "Fighting", moves: [
 {name: "Tackle", minDamage: 10, maxDamage: 18, PP: 10, maxPP: 10, type: "Normal"} ,
 {name: "Low Kick", minDamage: 10, maxDamage: 13, PP: 15, maxPP: 15, type: "Fighting"}, 
 {name: "Chop",minDamage: 15, maxDamage: 20, PP: 12, maxPP: 12, type: "Fighting"},
 {name: "Brick Break", minDamage: 12, maxDamage: 18, PP: 18, maxPP: 18, type: "Fighting"}]};
var Charizard = {name: "Charizard", health: 150, maxHealth: 150, summoned:false, type: "Fire", xOffset: -130, yOffset: 135, height: 430, width: 300,  moves: [
  {name: "Ember", minDamage: 12, maxDamage: 20, PP: 10, maxPP: 10, type: "Fire"},
  {name: "Tackle", minDamage: 10, maxDamage: 18, PP: 10, maxPP: 10, type: "Normal"},
  {name: "Flamethrower", minDamage: 22, maxDamage: 27, PP: 6, maxPP: 6, type: "Fire"},
  {name: "Fire Wheel", minDamage: 22, maxDamage: 36, PP: 4, maxPP: 4, type: "Fire"}
  ]};
var Mew = {name: "Mew", Health: 100, maxHealth: 100, summoned:false, type: "Psychic", moves: [
  {name: "Zen Headbutt", minDamage: 12, maxDamage: 26, PP: 12, maxPP: 12, type: "Psychic"},
  {name: "Psychic", minDamage: 20, maxDamage: 32, PP: 5, maxPP: 5, type: "Psychic"},
  {name: "Hyperbeam", minDamage: 30, maxDamage: 35, PP: 3, maxPP: 3, type: "Normal"},
  {name: "Bite", minDamage: 10, maxDamage: 18, PP: 18, maxPP: 18, type: "Dark"}
  ]};
var team1 = [Charizard];
var Jigglypuff = {name: "Jigglypuff", health: 50, maxHealth: 50, summoned: false, type: "Ice", moves: [
  {name: "Scratch", minDamage: 5, maxDamage: 15, PP: 20, maxPP: 20, type: "Normal"},
  {name: "Pound", minDamage: 8, maxDamage: 18, PP: 20, maxPP: 20, type: "Normal"},
  {name: "Zen Headbutt", minDamage: 12, maxDamage: 26, PP: 12, maxPP: 12, type: "Ice"},
  {name: "Torment", minDamage: 10, maxDamage: 18, PP: 18, maxPP: 18, type: "Dark"}]};
var Gengar = {name: "Gengar", health: 75, maxHealth: 75, summoned: false, type: "Ice", moves: [
  {name: "Hyperbeam", minDamage: 30, maxDamage: 35, PP: 3, maxPP: 3, type: "Normal"},
  {name: "Night Slash", minDamage: 12, maxDamage: 25, PP: 18, maxPP: 18, type: "Dark"},
  {name: "Payback", minDamage: 20, maxDamage: 31, PP: 10, maxPP: 10, type: "Dark"}
  ]};
var Darkrai = {name: "Darkrai", health: 100, maxHealth: 100, summoned: false, type: "Ice", moves: [  
  {name: "Hyperbeam", minDamage: 30, maxDamage: 35, PP: 3, maxPP: 3, type: "Normal"},
  {name: "Night Slash", minDamage: 12, maxDamage: 25, PP: 18, maxPP: 18, type: "Dark"},
  {name: "Payback", minDamage: 20, maxDamage: 31, PP: 10, maxPP: 10, type: "Dark"},
  {name: "Hyper Space Fury", minDamage: 30, maxDamage: 45, PP: 2, maxPP: 2, type: "Dark"}
  ]};
var team2 = [Jigglypuff,Gengar,Darkrai];
// MOVES
var flamethrower = {minDamage: 25, maxDamage: 32, PP: 5, maxPP: 5, type: "Fire"};
var flamewheel = {minDamage: 20, maxDamage: 30, PP: 15, maxPP: 15, type: "Fire"};
var ember = {minDamage: 12, maxDamage: 20, PP: 10, maxPP: 10, type: "Fire"};
var scratch = {minDamage: 5, maxDamage: 15, PP: 20, maxPP: 20, type: "Normal"};
var tackle = {minDamage: 10, maxDamage: 18, PP: 10, maxPP: 10, type: "Normal"};
var lowkick = {minDamage: 10, maxDamage: 13, PP: 15, maxPP: 15, type: "Fighting"};
var psychic = {minDamage: 20, maxDamage: 32, PP: 5, maxPP: 5, type: "Psychic"};
var zenheadbutt = {minDamage: 12, maxDamage: 26, PP: 12, maxPP: 12, type: "Psychic"};
var pound = {minDamage: 8, maxDamage: 18, PP: 20, maxPP: 20, type: "Normal"};
var bite = {minDamage: 10, maxDamage: 18, PP: 18, maxPP: 18, type: "Dark"};
var hyperbeam = {minDamage: 30, maxDamage: 35, PP: 3, maxPP: 3, type: "Normal"};
var chop = {minDamage: 15, maxDamage: 20, PP: 12, maxPP: 12, type: "Fighting"};
var brickbreak = {minDamage: 12, maxDamage: 18, PP: 18, maxPP: 18, type: "Fighting"};
var nightslash = {name: "Night Slash", minDamage: 12, maxDamage: 25, PP: 18, maxPP: 18, type: "Dark"};
var payback = {name: "Payback", minDamage: 20, maxDamage: 31, PP: 10, maxPP: 10, type: "Dark"};
var hyperspacefury = {name: "Hyper Space Fury", minDamage: 30, maxDamage: 45, PP: 2, maxPP: 2, type: "Dark"};
var pokemonIndexTeam1 = 0;
var pokemonIndexTeam2 = 0;
var turn = 1;
var fightbuttons = ["move1", "move2", "move3", "move4"];
var moveChose = false;
var hpCounter = 0;
var hpBar;
var doPhase1 = true;
var doPhase2 = false;
var damageDone;
var lost = false;
var won = false;

onEvent("playButton", "click", function() {
  hideMenu();
  instantiatePokemonSwitcher();
  console.log("Battle commencing ...");
  var iteration = 0;
  resetGameData();
  updateInfo();
  var battle = setInterval(function(){
    if(iteration === 0){
      setScreen("Battle");
      animate(210, "playerSummon1", "playerSummon2", "playerSummon3", "playerSummon4");
      iteration ++;
      showElement("pokemon1");
      showElement("Jigglypuff");
      showElement("playerBack");
      showElement("playerHP");
      showElement("yourPokemon");
    }
    if(doPhase1 === true){
    doPhase1 = false;
    team1Phase();
    // checkStatus();
    }
    if(doPhase2 === true){
    doPhase2 = false;
    team2Phase();
    // checkStatus();
    }
    if(checkWinner() === 2){
      displayText("Congratulations. You have defeated Team Rocket.", 5000);
      displayText("Returning to main menu ...", 5000);
      setScreen("Menu Screen");
      clearInterval(battle);
    }else if(checkWinner() === 0){
      displayText("You have been defeated by Team Rocket",5000);
      displayText("Returning to main menu ...",5000);
      setScreen("Menu Screen");
      clearInterval(battle);
    }
  }, 10);
});

pokemonIndexTeam2 = 0;
function team1Phase(){
  showMenu();
  var team1PhaseInterval = setInterval(function(){
  if(moveChose === true){
    moveChose = false;
    clearInterval(team1PhaseInterval);
    doPhase2 = true;
    console.log("Player 1 turn complete");
  }
  },10);
  // This line of code does NOT work animate(210, "playerSummon1", "playerSummon2", "playerSummon3", "playerSummon4");
}

function team2Phase(){
  var opponentPokemon = team2[pokemonIndexTeam2];
  var move = opponentPokemon.moves[randomNumber(0, opponentPokemon.moves.length -1)];
  performAttack(2, move);
  console.log(move);
  doPhase1 = true;
  
  console.log("Player 2 turn complete");
}

function checkStatus(){
  if(turn % 2 === 0 && (team2[pokemonIndexTeam1].health <= 0)){
    pokemonIndexTeam2++;
    
    if(checkLost(team2)){
      setScreen("LostScreen");
    }
    
    switchPokemon(team2);
  }else if(turn % 2 == 1){
    pokemonIndexTeam1++;
    
    if(checkLost(team2)){
      setScreen("LostScreen");
    }
    
    switchPokemon(team1);
  }
}

function checkLost(team){
  var deadCount = 0;
  
  for(var i = 0; i < team.length; i++){
    if(team[i].health <= 0){
      deadCount++;
    }
  }
  if(deadCount == team.length){
    return true;
  }
  return false;
}

function createDelay(delay){
  var delayTime = getTime() + delay;
  while(getTime() < delayTime){
    
  }
}

function animate(delay, element1, element2, element3, element4){
  showElement(element1);
  createDelay(delay);
  hideElement(element1);
  showElement(element2);
  createDelay(delay);
  hideElement(element2);
  showElement(element3);
  createDelay(delay);
  hideElement(element3);
  showElement(element4);
  createDelay(delay);
  hideElement(element4);
}
  
  function showFightMenu(){
  showElement("FightMenu");
  showElement("ppLabel");
  showElement("typeLabel");
  showElement("move1");
  showElement("move2");
  showElement("move3");
  showElement("move4");
  for(var i = 0; i < 4;i++){
    if(team1[pokemonIndexTeam1].moves[i]!== null){
      setProperty(fightbuttons[i],"text", team1[pokemonIndexTeam1].moves[i].name);
    }else{
      hideElement(fightbuttons[i]);
    }
  }
}

function hideFightMenu(){
  hideElement("FightMenu");
  hideElement("ppLabel");
  hideElement("typeLabel");
  hideElement("move1");
  hideElement("move2");
  hideElement("move3");
  hideElement("move4");
}

function hideMenu(){
  hideElement("battleMenu");
  hideElement("displayTextLine1");
  hideElement("displayTextLine2");
  hideElement("fightButton");
  hideElement("RunButton");
  hideElement("bagButton");
  hideElement("pokemonButton");
  hideElement("whiteImage");
}

function showMenu(){
  showElement("battleMenu");
  showElement("displayTextLine1");
  showElement("displayTextLine2");
  showElement("fightButton");
  showElement("RunButton");
  showElement("bagButton");
  showElement("pokemonButton");
  showElement("whiteImage");
}

function showBattleFeed(){
  hideFightMenu();
  hideMenu();
  showElement("feedMenu");
  showElement("battleFeed");
}

function hideBattleFeed(){
  hideElement("feedMenu");
  hideElement("battleFeed");
}

function hideAll(){
  hideMenu();
  hideFightMenu();
  hideBattleFeed();
}

 // BUTTONS

  onEvent("move1", "click", function() {
    if(team1[pokemonIndexTeam1].moves[0].PP > 0 && moveChose === false){
        if(team1[pokemonIndexTeam1].moves[0].PP > 0 && moveChose === false){
      
        moveChose = true;
        performAttack(1, team1[pokemonIndexTeam1].moves[0]);
        moveChose = true;
        berryRestore(getText("berriesYou"),getText("berriesCPU"));
        updateInfo();
        }
    } 
    console.log(team2[pokemonIndexTeam2].health);
  });
  onEvent("move2", "click", function() {
        if(team1[pokemonIndexTeam1].moves[1].PP > 0 && moveChose === false){
        performAttack(1, team1[pokemonIndexTeam1].moves[1]);
        moveChose = true;
        berryRestore(getText("berriesYou"),getText("berriesCPU"));
        updateInfo();
        console.log(team2[pokemonIndexTeam2].health);
        }
  });
    onEvent("move3", "click", function() {
      if(team1[pokemonIndexTeam1].moves[2].PP > 0 && moveChose === false){
        performAttack(1, team1[pokemonIndexTeam1].moves[2]);
        moveChose = true;
        berryRestore(getText("berriesYou"),getText("berriesCPU"));
        updateInfo();
      }
      console.log(team2[pokemonIndexTeam2].health);
  });
    onEvent("move4", "click", function() {
   if(team1[pokemonIndexTeam1].moves[3].PP > 0 && moveChose === false){
    performAttack(1, team1[pokemonIndexTeam1].moves[3]);
    berryRestore(getText("berriesYou"),getText("berriesCPU"));
    updateInfo();
    moveChose = true;
   }
   console.log(team2[pokemonIndexTeam2].health);
  });
  onEvent("move1","mouseover",function(){
    setText("typeLabel","TYPE/FIRE ");
    setText("ppLabel","PP " + team1[pokemonIndexTeam1].moves[0].PP + "/" + team1[pokemonIndexTeam1].moves[0].maxPP);
  });
  onEvent("move2","mouseover",function(){
    setText("typeLabel","TYPE/NORMAL ");
    setText("ppLabel","PP " + team1[pokemonIndexTeam1].moves[1].PP + "/" + team1[pokemonIndexTeam1].moves[1].maxPP);
  });
  onEvent("move3","mouseover",function(){
    setText("typeLabel","TYPE/FIRE ");
    setText("ppLabel","PP " + team1[pokemonIndexTeam1].moves[2].PP + "/" + team1[pokemonIndexTeam1].moves[2].maxPP);
  });
   onEvent("move4","mouseover",function(){
    setText("typeLabel","TYPE/FIRE ");
    setText("ppLabel","PP " + team1[pokemonIndexTeam1].moves[3].PP + "/" + team1[pokemonIndexTeam1].moves[3].maxPP);
  });
  
  onEvent("settingsScreen", "click", function() {
  setScreen("settings");});

  onEvent("returnButton1", "click", function() {
  setScreen("Menu Screen");
  });
  onEvent("bagButton","click",function(){
    setScreen("Bag");
  });
  onEvent("BackBttn","click",function(){
    setScreen("Battle");
  });
  onEvent("pokemonButton", "click", function() {
  setScreen("Pokemon");
  });

  onEvent("RunButton","click",function(){
    hideMenu();
    displayText("There is no running from a trainer battle!",2500);
    showMenu();
  });
  onEvent("pokemonBackButton", "click", function() { // THIS IS IN THE POKEMON CHOOSE SCREEN TO RETURN TO BATTLE SCREEN
  setScreen("Battle");
  
  });
  
  onEvent("fightButton", "click", function() {
  hideMenu();
  showFightMenu();
  });
  
 var pokeSwitch = setInterval(function(){
    if(team2[pokemonIndexTeam2].health <= 0){
      setText("EnemyHP"," HP: 0/" + team2[pokemonIndexTeam2].maxHealth);
      pokemonIndexTeam2++;
    if(pokemonIndexTeam2 === 0){
      setText("EnemyPokemon",team2[pokemonIndexTeam2].name);
      setText("EnemyHP","HP: " + team2[pokemonIndexTeam2].health + "/" + team2[pokemonIndexTeam2].maxHealth);
      hideElement("Gengar");
      hideElement("Darkrai");
    }else if (pokemonIndexTeam2 == 1){
      setText("EnemyPokemon",team2[pokemonIndexTeam2].name);
      setText("EnemyHP","HP: " + team2[pokemonIndexTeam2].health + "/" + team2[pokemonIndexTeam2].maxHealth);
      hideElement("Darkrai");
      showElement("Gengar");
      hideElement("Jigglypuff");
    }else if (pokemonIndexTeam2 == 2){
      setText("EnemyPokemon",team2[pokemonIndexTeam2].name);
      setText("EnemyHP","HP: " + team2[pokemonIndexTeam2].health + "/" + team2[pokemonIndexTeam2].maxHealth);
      hideElement("Jigglypuff");
      hideElement("Gengar");
      showElement("Darkrai");
    }
    }
  },100);
  function performAttack(attackingTeamNo, move){
    if(attackingTeamNo == 1){
     displayText(team1[pokemonIndexTeam1].name + " uses " + move.name, 2250);
     team2[pokemonIndexTeam2].health -= Math.round(randomNumber(move.minDamage,move.maxDamage) * criticalHitChance() * typeResistanceWeakness(move,1));
     console.log(team1[pokemonIndexTeam1].name + " uses " + move.name);
    }else if(attackingTeamNo == 2){
      displayText(team2[pokemonIndexTeam2].name + " uses " + move.name, 2250);
      team1[pokemonIndexTeam1].health -= Math.round(randomNumber(move.minDamage, move.maxDamage)*criticalHitChance() * typeResistanceWeakness(move,2));
     console.log(team2[pokemonIndexTeam2].name + " uses " + move.name);
    }
    move.PP--;
    Debug();
  }
  function updateBar(startHP, endHP){
        var barPix = Math.round((endHP/startHP)*180);
        console.log("Healthbar Pixels:" + barPix);
        
        for(var i = 180; i <= 180 - barPix; i--){
           setProperty("enemyHealthBar","width",getProperty("enemyHealthBar","width")-1);
           createDelay(10);
        }
        // setTimeout USE LATER!
       
  }
  
  function displayText(text, delay){
    hideAll();
    showBattleFeed();
    setProperty("battleFeed", "text", text);
    createDelay(delay);
    setProperty("battleFeed", "text", "");
    createDelay(500);
    hideBattleFeed();
  }
  
  function pokemonStatusHandler(){
    
  }
  
  function switchPokemon(teamNo, index){
    if(teamNo == 1){
      // IMPLEMENT A CHOOSING MENU
    }else if(teamNo == 2){
      pokemonIndexTeam2++;
      
    }
  }
  
  function checkWinner(){
    var deadCountTeam1 = 0;
    var deadCountTeam2 = 0;
    
    for(var i = 0; i < team1.length; i++){
      if(team1[i].health <= 0){
        deadCountTeam1++;
        if(deadCountTeam1 == team1.length){
        return 0;
      }
      }
      
    }
    
    for(var z = 0; z < team2.length; z++){
      if(team2[z].health <= 0){
        deadCountTeam2++;
        
        if(deadCountTeam2 == team2.length){
        return 2;
        }
      }
      
      }
    return -1;
  }
  
  function instantiatePokemonSwitcher(){
    switch(team1.length){
      case 1:
        dropdown("pokemonSwitcher", team1[0].name);
        break;
      case 2:
        dropdown("pokemonSwitcher", team1[0].name, team1[1].name);
        break;
      case 3:
        dropdown("pokemonSwitcher", team1[0].name, team1[1].name, team[2].name);        
        break;
      case 4:
        dropdown("pokemonSwitcher", team1[0].name, team1[1].name, team[2].name, team[3].name);        
        break;
      case 5:
        dropdown("pokemonSwitcher", team1[0].name, team1[1].name, team[2].name, team[3].name, team[4].name);        
        break;
      case 6:
        dropdown("pokemonSwitcher", team1[0].name, team1[1].name, team[2].name, team[3].name, team[4].name, team[5].name);        
        break;
    }
    setPosition("pokemonSwitcher", 90, 90, 45, 15);
    showElement("pokemonSwitcher");
  }
  
  function pokemonImageHandler(){
    // Team 1 Pokemon Image
      
    
    // Team 2 Pokemon Type
  }
  
  function Debug(){
    if(debug === true){
      console.log(team1[pokemonIndexTeam1]);
      console.log();
      console.log(team2[pokemonIndexTeam2]);
      console.log();
    }
  }

function berryRestore(berry1,berry2){
  if(berry1 > 0){
    if(team1[pokemonIndexTeam1].health <= (team1[pokemonIndexTeam1].maxHealth * 0.20)){
      berry1--;
      team1[pokemonIndexTeam1].health = team1[pokemonIndexTeam1].health + 20;
      hideMenu();
      displayText(team1[pokemonIndexTeam1].name + " used a berry! It restored 20 HP!",2250);
      showMenu();
      
    }
  }
  else if (berry2 > 0){
    if(team2[pokemonIndexTeam2].health <= (team2[pokemonIndexTeam2].maxHealth * 0.20)){
      berry2--;
      team2[pokemonIndexTeam2].health = team2[pokemonIndexTeam2].health + 20;
      hideMenu();
      displayText(team2[pokemonIndexTeam2].name + " used a berry! It restored 20 HP!",2250);
      showMenu();
    }
  }
}

function updateInfo(){
  setText("EnemyPokemon",team2[pokemonIndexTeam2].name);
  setText("EnemyHP", "HP: " + team2[pokemonIndexTeam2].health + "/" + team2[pokemonIndexTeam2].maxHealth);
  setText("yourPokemon",team1[pokemonIndexTeam1].name);
  setText("playerHP","HP: " + team1[pokemonIndexTeam1].health + "/" + team1[pokemonIndexTeam1].maxHealth);
}
function criticalHitChance(){
  if(randomNumber(1,10) == 3){
    hideMenu();
    displayText("It was a Critical Hit!",2250);
    showMenu();
    return 1.5;
  } else {
    return 1;
  }
}

function typeResistanceWeakness(move1,teamChoice){
 if(teamChoice == 2){
    if (move1.type == "Normal" && (team1[pokemonIndexTeam1].type == "Rock" || team1[pokemonIndexTeam1].type == "Steel")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Fighting" && (team1[pokemonIndexTeam1].type == "Poison" || team1[pokemonIndexTeam1].type == "Flying" || team1[pokemonIndexTeam1].type == "Bug"||team1[pokemonIndexTeam1].type == "Psychic" || team1[pokemonIndexTeam1].type == "Fairy")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Flying" && (team1[pokemonIndexTeam1].type == "Rock" || team1[pokemonIndexTeam1].type == "Steel" || team1[pokemonIndexTeam1].type == "Electric")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Poison" && (team1[pokemonIndexTeam1].type == "Poison" || team1[pokemonIndexTeam1].type == "Ground" || team1[pokemonIndexTeam1].type == "Rock"||team1[pokemonIndexTeam1].type == "Ghost")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Rock" && (team1[pokemonIndexTeam1].type == "Poison" || team1[pokemonIndexTeam1].type == "Flying" || team1[pokemonIndexTeam1].type == "Bug"||team1[pokemonIndexTeam1].type == "Psychic" || team1[pokemonIndexTeam1].type == "Fairy")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Bug" && (team1[pokemonIndexTeam1].type == "Fighting" || team1[pokemonIndexTeam1].type == "Fire" || team1[pokemonIndexTeam1].type == "Poison"||team1[pokemonIndexTeam1].type == "Ghost" || team1[pokemonIndexTeam1].type == "Steel"|| team1[pokemonIndexTeam1].type == "Fire"|| team1[pokemonIndexTeam1].type == "Fairy")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Ghost" && (team1[pokemonIndexTeam1].type == "Dark" )){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Steel" && (team1[pokemonIndexTeam1].type == "Steel" || team1[pokemonIndexTeam1].type == "Fire" || team1[pokemonIndexTeam1].type == "Water"||team1[pokemonIndexTeam1].type == "Electric")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Fire" && (team1[pokemonIndexTeam1].type == "Fire" || team1[pokemonIndexTeam1].type == "Water" || team1[pokemonIndexTeam1].type == "Dragon")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Water" && (team1[pokemonIndexTeam1].type == "Water" || team1[pokemonIndexTeam1].type == "Grass" || team1[pokemonIndexTeam1].type == "Dragon")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Grass" && (team1[pokemonIndexTeam1].type == "Flying" || team1[pokemonIndexTeam1].type == "Poison" || team1[pokemonIndexTeam1].type == "Rock"|| team1[pokemonIndexTeam1].type == "Bug"|| team1[pokemonIndexTeam1].type == "Steel"|| team1[pokemonIndexTeam1].type == "Grass"|| team1[pokemonIndexTeam1].type == "Dragon")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Electric" && (team1[pokemonIndexTeam1].type == "Grass" || team1[pokemonIndexTeam1].type == "Electric" || team1[pokemonIndexTeam1].type == "Dragon")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Psychic" && (team1[pokemonIndexTeam1].type == "Steel" || team1[pokemonIndexTeam1].type == "Psychic" )){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Ice" && (team1[pokemonIndexTeam1].type == "Steel" || team1[pokemonIndexTeam1].type == "Fire"|| team1[pokemonIndexTeam1].type == "Water"|| team1[pokemonIndexTeam1].type == "Ice" )){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Dragon" && (team1[pokemonIndexTeam1].type == "Steel" )){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Dark" && (team1[pokemonIndexTeam1].type == "Fighting" || team1[pokemonIndexTeam1].type == "Dark"|| team1[pokemonIndexTeam1].type == "Fairy" )){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Fairy" && (team1[pokemonIndexTeam1].type == "Steel" || team1[pokemonIndexTeam1].type == "Fire"|| team1[pokemonIndexTeam1].type == "Poison" )){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
     if (move1.type == "Fighting" && (team1[pokemonIndexTeam1].type == "Normal" || team1[pokemonIndexTeam1].type == "Rock" || team1[pokemonIndexTeam1].type == "Steel"||team1[pokemonIndexTeam1].type == "Ice" || team1[pokemonIndexTeam1].type == "Dark")){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Flying" && (team1[pokemonIndexTeam1].type == "Fighting" || team1[pokemonIndexTeam1].type == "Bug" || team1[pokemonIndexTeam1].type == "Grass")){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Poison" && (team1[pokemonIndexTeam1].type == "Grass" || team1[pokemonIndexTeam1].type == "Fairy" )){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Rock" && (team1[pokemonIndexTeam1].type == "Flying" || team1[pokemonIndexTeam1].type == "Bug" || team1[pokemonIndexTeam1].type == "Fire"||team1[pokemonIndexTeam1].type == "Ice" || team1[pokemonIndexTeam1].type == "Fairy")){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Bug" && (team1[pokemonIndexTeam1].type == "Grass" || team1[pokemonIndexTeam1].type == "Psychic" || team1[pokemonIndexTeam1].type == "Dark")){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Ghost" && (team1[pokemonIndexTeam1].type == "Ghost" || team1[pokemonIndexTeam1].type == "Psychic")){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Steel" && (team1[pokemonIndexTeam1].type == "Rock" || team1[pokemonIndexTeam1].type == "Ice" || team1[pokemonIndexTeam1].type == "Fairy")){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Fire" && (team1[pokemonIndexTeam1].type == "Bug" || team1[pokemonIndexTeam1].type == "Steel" || team1[pokemonIndexTeam1].type == "Grass") || team1[pokemonIndexTeam1].type == "Ice"){
     hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Water" && (team1[pokemonIndexTeam1].type == "Ground" || team1[pokemonIndexTeam1].type == "Rock" || team1[pokemonIndexTeam1].type == "Fire")){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Grass" && (team1[pokemonIndexTeam1].type == "Ground" || team1[pokemonIndexTeam1].type == "Rock" || team1[pokemonIndexTeam1].type == "Water")){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Electric" && (team1[pokemonIndexTeam1].type == "Flying" || team1[pokemonIndexTeam1].type == "Water")){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Psychic" && (team1[pokemonIndexTeam1].type == "Fighting" || team1[pokemonIndexTeam1].type == "Poison" )){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Ice" && (team1[pokemonIndexTeam1].type == "Flying" || team1[pokemonIndexTeam1].type == "Ground"|| team1[pokemonIndexTeam1].type == "Grass"|| team1[pokemonIndexTeam1].type == "Dragon" )){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Dragon" && (team1[pokemonIndexTeam1].type == "Dragon" )){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Dark" && (team1[pokemonIndexTeam1].type == "Ghost" || team1[pokemonIndexTeam1].type == "Psychic" )){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Fairy" && (team1[pokemonIndexTeam1].type == "Fighting" || team1[pokemonIndexTeam1].type == "Dragon"|| team1[pokemonIndexTeam1].type == "Dark" )){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    else {
      return 1;
    }
    
    
  
  
 }
 if(teamChoice == 1){
    if (move1.type == "Normal" && (team2[pokemonIndexTeam2].type == "Rock" || team2[pokemonIndexTeam2].type == "Steel")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Fighting" && (team2[pokemonIndexTeam2].type == "Poison" || team2[pokemonIndexTeam2].type == "Flying" || team2[pokemonIndexTeam2].type == "Bug"||team2[pokemonIndexTeam2].type == "Psychic" || team2[pokemonIndexTeam2].type == "Fairy")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Flying" && (team2[pokemonIndexTeam2].type == "Rock" || team2[pokemonIndexTeam2].type == "Steel" || team2[pokemonIndexTeam2].type == "Electric")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Poison" && (team2[pokemonIndexTeam2].type == "Poison" || team2[pokemonIndexTeam2].type == "Ground" || team2[pokemonIndexTeam2].type == "Rock"||team2[pokemonIndexTeam2].type == "Ghost")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Rock" && (team2[pokemonIndexTeam2].type == "Poison" || team2[pokemonIndexTeam2].type == "Flying" || team2[pokemonIndexTeam2].type == "Bug"||team2[pokemonIndexTeam2].type == "Psychic" || team2[pokemonIndexTeam2].type == "Fairy")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Bug" && (team2[pokemonIndexTeam1].type == "Fighting" || team2[pokemonIndexTeam2].type == "Fire" || team2[pokemonIndexTeam2].type == "Poison"||team2[pokemonIndexTeam2].type == "Ghost" || team2[pokemonIndexTeam2].type == "Steel"|| team2[pokemonIndexTeam2].type == "Fire"|| team2[pokemonIndexTeam2].type == "Fairy")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Ghost" && (team2[pokemonIndexTeam2].type == "Dark" )){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Steel" && (team2[pokemonIndexTeam2].type == "Steel" || team2[pokemonIndexTeam2].type == "Fire" || team2[pokemonIndexTeam2].type == "Water"||team2[pokemonIndexTeam2].type == "Electric")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Fire" && (team2[pokemonIndexTeam2].type == "Fire" || team2[pokemonIndexTeam2].type == "Water" || team2[pokemonIndexTeam2].type == "Dragon")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Water" && (team2[pokemonIndexTeam2].type == "Water" || team2[pokemonIndexTeam2].type == "Grass" || team2[pokemonIndexTeam2].type == "Dragon")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Grass" && (team2[pokemonIndexTeam2].type == "Flying" || team2[pokemonIndexTeam2].type == "Poison" || team2[pokemonIndexTeam2].type == "Rock"|| team2[pokemonIndexTeam2].type == "Bug"|| team2[pokemonIndexTeam2].type == "Steel"|| team2[pokemonIndexTeam2].type == "Grass"|| team2[pokemonIndexTeam2].type == "Dragon")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Electric" && (team2[pokemonIndexTeam2].type == "Grass" || team2[pokemonIndexTeam2].type == "Electric" || team2[pokemonIndexTeam2].type == "Dragon")){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Psychic" && (team2[pokemonIndexTeam2].type == "Steel" || team2[pokemonIndexTeam2].type == "Psychic" )){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Ice" && (team2[pokemonIndexTeam2].type == "Steel" || team2[pokemonIndexTeam2].type == "Fire"|| team2[pokemonIndexTeam2].type == "Water"|| team2[pokemonIndexTeam2].type == "Ice" )){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Dragon" && (team2[pokemonIndexTeam2].type == "Steel" )){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Dark" && (team2[pokemonIndexTeam2].type == "Fighting" || team2[pokemonIndexTeam2].type == "Dark"|| team2[pokemonIndexTeam2].type == "Fairy" )){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    if (move1.type == "Fairy" && (team2[pokemonIndexTeam2].type == "Steel" || team2[pokemonIndexTeam2].type == "Fire"|| team2[pokemonIndexTeam2].type == "Poison" )){
      hideMenu();
      displayText("It was not very effective...",2250);
      showMenu();
      return 0.5;
    }
    
    
    
     if (move1.type == "Fighting" && (team2[pokemonIndexTeam2].type == "Normal" || team2[pokemonIndexTeam2].type == "Rock" || team2[pokemonIndexTeam2].type == "Steel"||team2[pokemonIndexTeam2].type == "Ice" || team2[pokemonIndexTeam2].type == "Dark")){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Flying" && (team2[pokemonIndexTeam2].type == "Fighting" || team2[pokemonIndexTeam2].type == "Bug" || team2[pokemonIndexTeam2].type == "Grass")){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Poison" && (team2[pokemonIndexTeam2].type == "Grass" || team2[pokemonIndexTeam2].type == "Fairy" )){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Rock" && (team2[pokemonIndexTeam2].type == "Flying" || team2[pokemonIndexTeam2].type == "Bug" || team2[pokemonIndexTeam2].type == "Fire"||team2[pokemonIndexTeam2].type == "Ice" || team2[pokemonIndexTeam2].type == "Fairy")){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Bug" && (team2[pokemonIndexTeam1].type == "Grass" || team2[pokemonIndexTeam2].type == "Psychic" || team2[pokemonIndexTeam2].type == "Dark")){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Ghost" && (team2[pokemonIndexTeam2].type == "Ghost" || team2[pokemonIndexTeam2].type == "Psychic")){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Steel" && (team2[pokemonIndexTeam2].type == "Rock" || team2[pokemonIndexTeam2].type == "Ice" || team2[pokemonIndexTeam2].type == "Fairy")){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Fire" && (team2[pokemonIndexTeam2].type == "Bug" || team2[pokemonIndexTeam2].type == "Steel" || team2[pokemonIndexTeam2].type == "Grass") || team2[pokemonIndexTeam2].type == "Ice"){
     hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Water" && (team2[pokemonIndexTeam2].type == "Ground" || team2[pokemonIndexTeam2].type == "Rock" || team2[pokemonIndexTeam2].type == "Fire")){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Grass" && (team2[pokemonIndexTeam2].type == "Ground" || team2[pokemonIndexTeam2].type == "Rock" || team2[pokemonIndexTeam2].type == "Water")){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Electric" && (team2[pokemonIndexTeam2].type == "Flying" || team2[pokemonIndexTeam2].type == "Water")){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Psychic" && (team2[pokemonIndexTeam2].type == "Fighting" || team2[pokemonIndexTeam2].type == "Poison" )){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Ice" && (team2[pokemonIndexTeam2].type == "Flying" || team2[pokemonIndexTeam2].type == "Ground"|| team2[pokemonIndexTeam2].type == "Grass"|| team2[pokemonIndexTeam2].type == "Dragon" )){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Dragon" && (team2[pokemonIndexTeam2].type == "Dragon" )){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Dark" && (team2[pokemonIndexTeam2].type == "Ghost" || team2[pokemonIndexTeam2].type == "Psychic" )){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
    if (move1.type == "Fairy" && (team2[pokemonIndexTeam2].type == "Fighting" || team2[pokemonIndexTeam2].type == "Dragon"|| team2[pokemonIndexTeam2].type == "Dark" )){
      hideMenu();
      displayText("It was super effective!",2250);
      showMenu();
      return 2;
    }
      
      
      
    

   
    else {
      return 1;
    }
    
  
  
 }
 else {
   return 1;
 }
}

function hideSpriteAll(){
  hideElement("Gengar");
  hideElement("Jigglypuff");
  hideElement("Darkrai");
}
function resetGameData(){
  Lucario = {name: "Lucario", health: 1, maxHealth:50, summoned:false, type: "Fighting", moves: [
 {name: "Tackle", minDamage: 10, maxDamage: 18, PP: 10, maxPP: 10, type: "Normal"} ,
 {name: "Low Kick", minDamage: 10, maxDamage: 13, PP: 15, maxPP: 15, type: "Fighting"}, 
 {name: "Chop",minDamage: 15, maxDamage: 20, PP: 12, maxPP: 12, type: "Fighting"},
 {name: "Brick Break", minDamage: 12, maxDamage: 18, PP: 18, maxPP: 18, type: "Fighting"}]};
 Charizard = {name: "Charizard", health: 150, maxHealth: 150, summoned:false, type: "Fire", xOffset: -130, yOffset: 135, height: 430, width: 300,  moves: [
  {name: "Ember", minDamage: 12, maxDamage: 20, PP: 10, maxPP: 10, type: "Fire"},
  {name: "Tackle", minDamage: 10, maxDamage: 18, PP: 10, maxPP: 10, type: "Normal"},
  {name: "Flamethrower", minDamage: 22, maxDamage: 27, PP: 6, maxPP: 6, type: "Fire"},
  {name: "Fire Wheel", minDamage: 22, maxDamage: 36, PP: 4, maxPP: 4, type: "Fire"}
  ]};
 Mew = {name: "Mew", Health: 100, maxHealth: 100, summoned:false, type: "Psychic", moves: [
  {name: "Zen Headbutt", minDamage: 12, maxDamage: 26, PP: 12, maxPP: 12, type: "Psychic"},
  {name: "Psychic", minDamage: 20, maxDamage: 32, PP: 5, maxPP: 5, type: "Psychic"},
  {name: "Hyperbeam", minDamage: 30, maxDamage: 35, PP: 3, maxPP: 3, type: "Normal"},
  {name: "Bite", minDamage: 10, maxDamage: 18, PP: 18, maxPP: 18, type: "Dark"}
  ]};
 team1 = [Charizard];
 Jigglypuff = {name: "Jigglypuff", health: 50, maxHealth: 50, summoned: false, type: "Fairy", moves: [
  {name: "Scratch", minDamage: 5, maxDamage: 15, PP: 20, maxPP: 20, type: "Normal"},
  {name: "Pound", minDamage: 8, maxDamage: 18, PP: 20, maxPP: 20, type: "Normal"},
  {name: "Zen Headbutt", minDamage: 12, maxDamage: 26, PP: 12, maxPP: 12, type: "Psychic"},
  {name: "Torment", minDamage: 10, maxDamage: 18, PP: 18, maxPP: 18, type: "Dark"}]};
 Gengar = {name: "Gengar", health: 75, maxHealth: 75, summoned: false, type: "Ice", moves: [
  {name: "Hyperbeam", minDamage: 30, maxDamage: 35, PP: 3, maxPP: 3, type: "Normal"},
  {name: "Night Slash", minDamage: 12, maxDamage: 25, PP: 18, maxPP: 18, type: "Dark"},
  {name: "Payback", minDamage: 20, maxDamage: 31, PP: 10, maxPP: 10, type: "Dark"}
  ]};
 Darkrai = {name: "Darkrai", health: 100, maxHealth: 100, summoned: false, type: "Ice", moves: [  
  {name: "Hyperbeam", minDamage: 30, maxDamage: 35, PP: 3, maxPP: 3, type: "Normal"},
  {name: "Night Slash", minDamage: 12, maxDamage: 25, PP: 18, maxPP: 18, type: "Dark"},
  {name: "Payback", minDamage: 20, maxDamage: 31, PP: 10, maxPP: 10, type: "Dark"},
  {name: "Hyper Space Fury", minDamage: 30, maxDamage: 45, PP: 2, maxPP: 2, type: "Dark"}
  ]};
 team2 = [Jigglypuff,Gengar,Darkrai];
// MOVES
 flamethrower = {minDamage: 25, maxDamage: 32, PP: 5, maxPP: 5, type: "Fire"};
 flamewheel = {minDamage: 20, maxDamage: 30, PP: 15, maxPP: 15, type: "Fire"};
 ember = {minDamage: 12, maxDamage: 20, PP: 10, maxPP: 10, type: "Fire"};
 scratch = {minDamage: 5, maxDamage: 15, PP: 20, maxPP: 20, type: "Normal"};
 tackle = {minDamage: 10, maxDamage: 18, PP: 10, maxPP: 10, type: "Normal"};
 lowkick = {minDamage: 10, maxDamage: 13, PP: 15, maxPP: 15, type: "Fighting"};
 psychic = {minDamage: 20, maxDamage: 32, PP: 5, maxPP: 5, type: "Psychic"};
 zenheadbutt = {minDamage: 12, maxDamage: 26, PP: 12, maxPP: 12, type: "Psychic"};
 pound = {minDamage: 8, maxDamage: 18, PP: 20, maxPP: 20, type: "Normal"};
 bite = {minDamage: 10, maxDamage: 18, PP: 18, maxPP: 18, type: "Dark"};
 hyperbeam = {minDamage: 30, maxDamage: 35, PP: 3, maxPP: 3, type: "Normal"};
 chop = {minDamage: 15, maxDamage: 20, PP: 12, maxPP: 12, type: "Fighting"};
 brickbreak = {minDamage: 12, maxDamage: 18, PP: 18, maxPP: 18, type: "Fighting"};
 nightslash = {name: "Night Slash", minDamage: 12, maxDamage: 25, PP: 18, maxPP: 18, type: "Dark"};
 payback = {name: "Payback", minDamage: 20, maxDamage: 31, PP: 10, maxPP: 10, type: "Dark"};
 hyperspacefury = {name: "Hyper Space Fury", minDamage: 30, maxDamage: 45, PP: 2, maxPP: 2, type: "Dark"};
 pokemonIndexTeam1 = 0;
 pokemonIndexTeam2 = 0;
 turn = 1;
 fightbuttons = ["move1", "move2", "move3", "move4"];
 moveChose = false;
 hpCounter = 0;
 hpBar;
 doPhase1 = true;
 doPhase2 = false;
 damageDone;
 lost = false;
 won = false;
}

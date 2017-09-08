//Nest all functions inside this.  This function makes sure the page loads before the JS runs.  
//Not a real issue on this project, but on a heavier load, it can be significant.
$(document).ready(function () {

//**************GLOBAL VARIABLES**************//
	var attackerName = "";
	var increasedAttack;
	var remainingHPAttacker;
	var defenderName = "";
	var retaliate;
	var remainingHPDefender;
	var yourCharacterSelect = false;
	var defenderSelect = false;
	var wins = 0;

	//Character Profiles
	var Revan = {
		Name: "Darth Revan",
		HP: 120,
		Attack: 15,
		Retaliate: 40,
	};

	var Starkiller = {
		Name: "Starkiller",
		HP: 90,
		Attack: 25,
		Retaliate: 30,
	};

	var Skywalker = {
		Name: "Jedi Anakin Skywalker",
		HP: 110,
		Attack: 25,
		Retaliate: 40,
	};

	var Trooper = {
		Name: "Storm Trooper",
		HP: 140,
		Attack: 0,
		//If Attack is <= 0, say the attack misses
		Retaliate: 10,
		//If Retaliate is >= 50, say something clever about using a thermal detonator or something
	};


//****************PROCESSES****************//

	//Choose the character to attack with.
	if (!yourCharacterSelect) {
		$(".revan").on("click", function() {
			$(".beginHere").css("display", "none");
			$("#yourCharacter").html('<h2>Your Character</h2><div class="col-xs-6 col-md-3 contender revan"><div class="contender"><img src="assets/images/Revan.jpg" alt="Darth Revan"></div><h3>Darth Revan</h3></div>');
			$("#opponentStarkiller").html('<div class="col-xs-6 col-md-3 contender starkiller"><div class="contender"><img src="assets/images/starkiller.jpg" alt="Starkiller"></div><h3>Starkiller</h3></div>');
			$("#opponentSkywalker").html('<div class="col-xs-6 col-md-3 contender skywalker"><div class="contender"><img src="assets/images/anakin.jpg" alt="Jedi Anakin Skywalker"></div><h3>Jedi Anakin Skywalker</h3></div>');
			$("#opponentTrooper").html('<div class="col-xs-6 col-md-3 contender trooper"><div class="contender"><img src="assets/images/trooper.jpg" alt="Storm Trooper"></div><h3>Stormtrooper</h3></div>');
			yourCharacterSelect = true;
			defenderSelect = false;
			attackerName = "Darth Revan";
			increasedAttack = Revan.Attack;
			remainingHPAttacker = Revan.HP;
			$("#history").prepend("<hr><h5>" + attackerName + "'s Attack Value is " + increasedAttack + " and his starting health is " + remainingHPAttacker + ".</h5>");
			$("#history").prepend("<h3>Pick your opponent.</h3>");
		})
		$(".starkiller").on("click", function() {
			$(".beginHere").css("display", "none");
			$("#yourCharacter").html('<h2>Your Character</h2><div class="col-xs-6 col-md-3 contender starkiller"><div class="contender"><img src="assets/images/starkiller.jpg" alt="Starkiller"></div><h3>Starkiller</h3></div>');
			$("#opponentRevan").html('<div class="col-xs-6 col-md-3 contender revan"><div class="contender"><img src="assets/images/Revan.jpg" alt="Darth Revan"></div><h3>Darth Revan</h3></div>');
			$("#opponentSkywalker").html('<div class="col-xs-6 col-md-3 contender skywalker"><div class="contender"><img src="assets/images/anakin.jpg" alt="Jedi Anakin Skywalker"></div><h3>Jedi Anakin Skywalker</h3></div>');
			$("#opponentTrooper").html('<div class="col-xs-6 col-md-3 contender trooper"><div class="contender"><img src="assets/images/trooper.jpg" alt="Storm Trooper"></div><h3>Stormtrooper</h3></div>');
			yourCharacterSelect = true;
			defenderSelect = false;
			attackerName = "Starkiller";
			increasedAttack = Starkiller.Attack;
			remainingHPAttacker = Starkiller.HP;
			$("#history").prepend("<h5>" + attackerName + "'s Attack Value is " + increasedAttack + " and his starting health is " + remainingHPAttacker + ".</h5>");
			$("#history").prepend("<h3>Pick your opponent.</h3>");
		})
		$(".skywalker").on("click", function() {
			$(".beginHere").css("display", "none");
			$("#yourCharacter").html('<h2>Your Character</h2><div class="col-xs-6 col-md-3 contender skywalker"><div class="contender"><img src="assets/images/anakin.jpg" alt="Jedi Anakin Skywalker"></div><h3>Jedi Anakin Skywalker</h3></div>');
			$("#opponentRevan").html('<div class="col-xs-6 col-md-3 contender revan"><div class="contender"><img src="assets/images/Revan.jpg" alt="Darth Revan"></div><h3>Darth Revan</h3></div>');
			$("#opponentStarkiller").html('<div class="col-xs-6 col-md-3 contender starkiller"><div class="contender"><img src="assets/images/starkiller.jpg" alt="Starkiller"></div><h3>Starkiller</h3></div>');
			$("#opponentTrooper").html('<div class="col-xs-6 col-md-3 contender trooper"><div class="contender"><img src="assets/images/trooper.jpg" alt="Storm Trooper"></div><h3>Stormtrooper</h3></div>');
			yourCharacterSelect = true;
			defenderSelect = false;
			attackerName = "Jedi Anakin Skywalker";
			increasedAttack = Skywalker.Attack;
			remainingHPAttacker = Skywalker.HP;
			$("#history").prepend("<h5>" + attackerName + "'s Attack Value is " + increasedAttack + " and his starting health is " + remainingHPAttacker + ".</h5>");
			$("#history").prepend("<h3>Pick your opponent.</h3>");
		})
		$(".trooper").on("click", function() {
			$(".beginHere").css("display", "none");
			$("#yourCharacter").html('<h2>Your Character</h2><div class="col-xs-6 col-md-3 contender trooper"><div class="contender"><img src="assets/images/trooper.jpg" alt="Stormtrooper"></div><h3>Stormtrooper</h3></div>');
			$("#opponentRevan").html('<div class="col-xs-6 col-md-3 contender revan"><div class="contender"><img src="assets/images/Revan.jpg" alt="Darth Revan"></div><h3>Darth Revan</h3></div>');
			$("#opponentStarkiller").html('<div class="col-xs-6 col-md-3 contender starkiller"><div class="contender"><img src="assets/images/starkiller.jpg" alt="Starkiller"></div><h3>Starkiller</h3></div>');
			$("#opponentSkywalker").html('<div class="col-xs-6 col-md-3 contender skywalker"><div class="contender"><img src="assets/images/anakin.jpg" alt="Jedi Anakin Skywalker"></div><h3>Jedi Anakin Skywalker</h3></div>');
			yourCharacterSelect = true;
			defenderSelect = false;
			attackerName = "Stormtrooper";
			increasedAttack = Trooper.Attack;
			remainingHPAttacker = Trooper.HP;
			$("#history").prepend("<h5>" + attackerName + "'s Attack Value is " + increasedAttack + " and his starting health is " + remainingHPAttacker + ".</h5>");
			$("#history").prepend("<h3>Pick your opponent.</h3>");
		})
	};


	//Choose an opponent from the remaining 3 contenders
		if (!defenderSelect) {
			$("#opponentRevan").on("click", function() {
				$("#opponentRevan").empty();
				$("#opponent").prepend('<div class="col-xs-6 col-md-3 contender revan"><div class="contender"><img src="assets/images/Revan.jpg" alt="Darth Revan"></div><h3>Darth Revan</h3></div>');
				defenderName = "Darth Revan";
				remainingHPDefender = Revan.HP;
				retaliate = Revan.Retaliate;
				$("#history").prepend("<h5>You've chosen a powerful enemy! <br> <b>" + defenderName + "!! He has " + remainingHPDefender + " health and a fearsome " + retaliate + " counter attack!!</b><br>  The possibility of successfully defeating this legened are approxamately  3,720 to 1!!</h5>")
				defenderSelect = true;
				$("#history").prepend("<h3>Click 'Attack' to proceed.</h3>");
				$("#fightSection").css("display", "block");
			})
			$("#opponentStarkiller").on("click", function() {
				$("#opponentStarkiller").empty();
				$("#opponent").prepend('<div class="col-xs-6 col-md-3 contender starkiller"><div class="contender"><img src="assets/images/starkiller.jpg" alt="Starkiller"></div><h3>Starkiller</h3></div>');
				defenderName = "Starkiller";
				remainingHPDefender = Starkiller.HP;
				retaliate = Starkiller.Retaliate;
				$("#history").prepend("<hr><h5>You MUST be losing your mind to take on this secret weapon of a warrior!<br> <b>" + defenderName + "!! He has " + remainingHPDefender + " health and a fearsome " + retaliate + " counter attack!!</b><br> I've got a bad feeling about this...")
				defenderSelect = true;
				$("#history").prepend("<h3>Click 'Attack' to proceed.</h3>");
				$("#fightSection").css("display", "block");
			})
			$("#opponentSkywalker").on("click", function() {
				$("#opponentSkywalker").empty();
				$("#opponent").prepend('<div class="col-xs-6 col-md-3 contender skywalker"><div class="contender"><img src="assets/images/anakin.jpg" alt="Jedi Anakin Skywalker"></div><h3>Jedi Anakin Skywalker</h3></div>');
				defenderName = "Jedi Anakin Skywalker";
				remainingHPDefender = Skywalker.HP;
				retaliate = Skywalker.Retaliate;
				$("#history").prepend("<h5>Seriously??  This guy was BORN of the force!!<br> <b>" + defenderName + " has " + remainingHPDefender + " health and a fearsome " + retaliate + " counter attack!!</b><br>  Just <b><i>please</i></b> don't mention sand...he never shuts up about it...</h5>")
				defenderSelect = true;
				$("#history").prepend("<h3>Click 'Attack' to proceed.</h3>");
				$("#fightSection").css("display", "block");
			})
			$("#opponentTrooper").on("click", function() {
				$("#opponentTrooper").empty();
				$("#opponent").prepend('<div class="col-xs-6 col-md-3 contender trooper"><div class="contender"><img src="assets/images/trooper.jpg" alt="Strom Trooper"></div><h3>Stormtrooper</h3></div>');
				defenderName = "Stormtrooper";
				remainingHPDefender = Trooper.HP;
				retaliate = Trooper.Retaliate;
				$("#history").prepend("<h5>These bucketheads don't have the best aim w a blaster...doesn't make for much of a fight, I guess.<br> <b>The " + defenderName + " has " + remainingHPDefender + " health.  I don't see anything here about his counter attack though. Strage.</b><br>  I think I heard some rumor about these guys having some heavy explosives, though...</h5>")
				defenderSelect = true;
				$("#history").prepend("<h3>Click 'Attack' to proceed.</h3>");
				$("#fightSection").css("display", "block");
			})

		};


	//COMBAT! 
		$(".attackBTN").on("click", function() {
			if ((remainingHPAttacker > 0) && (remainingHPDefender > 0)) {
				remainingHPDefender -= increasedAttack;
				console.log(defenderName + " HP: " + remainingHPDefender);
				remainingHPAttacker -= retaliate;
				console.log(attackerName + " HP: " + remainingHPAttacker);
				//Nobody dies, keep fighting, increase attack.
				if ((remainingHPAttacker > 0) && (remainingHPDefender > 0)) {
					$("#history").prepend("<h5>Good job. " + attackerName + " did " + increasedAttack + " damage to " + defenderName + ", though " + defenderName + " did " + retaliate + " damage to" + attackerName + ".</h5>");
					$("#history").prepend("<h5>" + attackerName + "'s health: " + remainingHPAttacker + "</h5>");
					$("#history").prepend("<h5>" + defenderName + "'s health: " + remainingHPDefender + "</h5>");
					$("#history").prepend("<hr><h3>Click 'Attack' to proceed.</h3>");
					increasedAttack *= 2;
					console.log(attackerName + " Next attack: " + increasedAttack);
				} 
				//Attacker lives, defender dies.  Pick a new opponent. 
				else if ((remainingHPAttacker > 0) && (remainingHPDefender <= 0)) {
					$("#history").prepend("<h5>You've actually done it! " + attackerName + " did " + increasedAttack + " damage to " + defenderName + ", landing the killing blow!</h5>");
					$("#history").prepend("<h3>Choose your next opponent to attack!</h3>");
					$("#fightSection").css("display", "none");
					defenderSelect = false;
					wins++;
					console.log("Wins: " + wins);
				}
				//Attacker dies, defender lives.  Reset. 
				else if ((remainingHPAttacker <= 0) && (remainingHPDefender > 0)) {
					$("#history").prepend("<h5>Uh oh..." + attackerName + "'s last attach wasn't enough. " + attackerName + " did " + increasedAttack + " damage, though " + defenderName + " did " + retaliate + " damage and killed you! " + attackerName + "'s health fell below 0 while " + defenderName + " lives to fight another day.</h5>");
					$("#history").prepend("<h3>Click 'Reset' to start anew.</h3>");
					$("#fightSection").css("display", "none");
					$(".reset").css("display", "block");
				}
				//Both die.  Reset. 
				else if ((remainingHPAttacker <= 0) && (remainingHPDefender <= 0)) {
					$("#history").prepend("<h5>" + attackerName + " managed to slay " + defenderName + ", but died in the act.  Both characters died!</h5>");
					$("#history").prepend("<h3>Click 'Reset' to start anew.</h3>");
					$("#fightSection").css("display", "none");
					$(".reset").css("display", "block");
				}

				//Winning!
				if (wins === 3) {
					$("#history").html("<h2>YOU DID IT! YOU WON!</h2><h3>I had faith in you the whole time.<h3>");
					$(".reset").css("display", "block");
					$("#yourCharacter").empty();
					$("#selectEnemy").empty();
					$("#opponentRevan").empty();
					$("#opponentStarkiller").empty();
					$("#opponentSkywalker").empty();
					$("#opponentTrooper").empty();
					$("#opponent").empty();
				}
			}
		});


	


	//Reset button
		$(".resetBTN").on("click", function() {
			var attackerName = "";
			var increasedAttack;
			var remainingHPAttacker;
			var defenderName = "";
			var retaliate;
			var remainingHPDefender;
			var yourCharacterSelect = false;
			var defenderSelect = false;
			var wins = 0;
			$("#history").html("<h2>Your Adventure:</h2><h3>(Pick your character.)</h3>")
			$(".beginHere").css("display", "block");
			$("#yourCharacter").html("<h2>Your Character</h2>");
			$("#selectEnemy").html('<h2>Chose your opponent.  Choose wisely.</h2><div id="opponentRevan"></div><div id="opponentStarkiller"></div><div id="opponentSkywalker"></div><div id="opponentTrooper"></div>');
			$("#opponentRevan").empty();
			$("#opponentStarkiller").empty();
			$("#opponentSkywalker").empty();
			$("#opponentTrooper").empty();
			$("#opponent").html('<h2>Your Opponent</h2><div id="opponentRevan"></div><div id="opponentStarkiller"></div><div id="opponentSkywalker"></div><div id="opponentTrooper"></div>');
			$(".reset").css("display", "none");
			var Revan = {
				Name: "Darth Revan",
				HP: 120,
				Attack: 15,
				Retaliate: 40,
			};
			var Starkiller = {
				Name: "Starkiller",
				HP: 90,
				Attack: 25,
				Retaliate: 30,
			};
			var Skywalker = {
				Name: "Jedi Anakin Skywalker",
				HP: 110,
				Attack: 25,
				Retaliate: 40,
			};
			var Trooper = {
				Name: "Storm Trooper",
				HP: 140,
				Attack: 0,
				Retaliate: 10,
			};
		});




	





//*************** PSUEDO CODE ***************
	//Global variables:
		//each contender needs initial values for:
			//Name
			//HP
			//Attack (start static, but this will need to become a dynamic value)
			//Retaliate - counter attack value
		//remainingHPAttacker - post-combat HP each round on yourCharacter
		//remainingHPDefender - post-combat HP each round on defender
		//increasedAttack - dynamic increases on yourCharacter's attack value
		//Boolean for on/off button.  
			//yourCharacterSelect - selecting yourCharacter
			//defenderSelect - selecting a defender


	//Select a charater to use.
		//Only clickable if yourCharacterSelect condition is !
		//onclick event for each of the 4 contenders images
		//moves the chosen contender to the youCharacter div 
		//remaining 3 contenders move to the selectEnemy div
		//after selecting, toggle yourCharacterSelect to true and defenderSelect to false

	//Select an enemy to attack.
		//Only clickable if yourCharacterSelect condition is !
		//onclick event for each of the remaining 3 contenders images
		//moves the chosen contender to the defender div 
		//remaining 2 contenders remain in the selectEnemy div
			//make the remaining 2 unclickable once combat has begun?
		//after selecting, toggle yourCharacterSelect to true and defenderSelect to false
		
	//Begin combat w .onclick event using the attackBTN button.
		//computate yourCharacter's attack against defender's remainingHP first. 
			//display defender's newly calculated remainingHP
			//if defender HP <= 0, no Retaliate and toggle defenderSelect.  
				//make the defenderSelect var false again so that...
				//user chooses new defender. (new var defender2 defender3?)
			//else (defender lives), computate defender's Retaliate against yourCharacter's remainingHP.
				//display yourCharacter's newly calculated remainingHP
				//if yourCharacter remainingHP <= 0, game over
					//Reset button is only option...toggle anything else off?
				//else (yourCharacter lives), update increasedAttack

	//


//*************** TO DO ***************
	// Need to display orig health and then current HP (remainingHPAttacker and remainingHPDefender) 
	// Make attacks dynamic and balance characters (ha!)

});

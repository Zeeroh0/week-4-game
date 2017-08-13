//Nest all functions inside this.  This function makes sure the page loads before the JS runs.  
//Not a real issue on this project, but on a heavier load, it can be significant.
$(document).ready(function () {
	//Global variables
	var increasedAttack;
	var remainingHPAttacker;
	var retaliate;
	var remainingHPDefender;
	var yourCharacterSelect = false;
	var defenderSelect = false;

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
		Retaliate: 80,
		//If Retaliate is >= 50, say something clever about using a thermal detonator or something
	};

	
	if (!yourCharacterSelect) {
		$(".revan").on("click", function() {
			$(".beginHere").css("display", "none");
			$("#yourCharacter").html('<h2>Your Character</h2><div class="col-xs-6 col-md-3 contender revan"><div class="contender"><img src="assets/images/Revan.jpg" alt="Darth Revan"></div><h3>Darth Revan</h3></div>');
			$("#opponentStarkiller").html('<div class="col-xs-6 col-md-3 contender starkiller"><div class="contender"><img src="assets/images/starkiller.jpg" alt="Starkiller"></div><h3>Starkiller</h3></div>');
			$("#opponentSkywalker").html('<div class="col-xs-6 col-md-3 contender skywalker"><div class="contender"><img src="assets/images/anakin.jpg" alt="Jedi Anakin Skywalker"></div><h3>Jedi Anakin Skywalker</h3></div>');
			$("#opponentTrooper").html('<div class="col-xs-6 col-md-3 contender trooper"><div class="contender"><img src="assets/images/trooper.jpg" alt="Storm Trooper"></div><h3>Stormtrooper</h3></div>');
			yourCharacterSelect = true;
			defenderSelect = (false);
			increasedAttack = Revan.Attack;
			remainingHPAttacker = Revan.HP;
			console.log("Darth Revan's Attack Value is " + increasedAttack + " and his starting health is " + remainingHPAttacker + ".")
		})
		$(".starkiller").on("click", function() {
			$(".beginHere").css("display", "none");
			$("#yourCharacter").html('<h2>Your Character</h2><div class="col-xs-6 col-md-3 contender starkiller"><div class="contender"><img src="assets/images/starkiller.jpg" alt="Starkiller"></div><h3>Starkiller</h3></div>');
			$("#opponentRevan").html('<div class="col-xs-6 col-md-3 contender revan"><div class="contender"><img src="assets/images/Revan.jpg" alt="Darth Revan"></div><h3>Darth Revan</h3></div>');
			$("#opponentSkywalker").html('<div class="col-xs-6 col-md-3 contender skywalker"><div class="contender"><img src="assets/images/anakin.jpg" alt="Jedi Anakin Skywalker"></div><h3>Jedi Anakin Skywalker</h3></div>');
			$("#opponentTrooper").html('<div class="col-xs-6 col-md-3 contender trooper"><div class="contender"><img src="assets/images/trooper.jpg" alt="Storm Trooper"></div><h3>Stormtrooper</h3></div>');
			yourCharacterSelect = true;
			defenderSelect = (false);
			increasedAttack = Starkiller.Attack;
			remainingHPAttacker = Starkiller.HP;
			console.log("Starkiller's Attack Value is " + increasedAttack + " and his starting health is " + remainingHPAttacker + ".")
		})
		$(".skywalker").on("click", function() {
			$(".beginHere").css("display", "none");
			$("#yourCharacter").html('<h2>Your Character</h2><div class="col-xs-6 col-md-3 contender skywalker"><div class="contender"><img src="assets/images/anakin.jpg" alt="Jedi Anakin Skywalker"></div><h3>Jedi Anakin Skywalker</h3></div>');
			$("#opponentRevan").html('<div class="col-xs-6 col-md-3 contender revan"><div class="contender"><img src="assets/images/Revan.jpg" alt="Darth Revan"></div><h3>Darth Revan</h3></div>');
			$("#opponentStarkiller").html('<div class="col-xs-6 col-md-3 contender starkiller"><div class="contender"><img src="assets/images/starkiller.jpg" alt="Starkiller"></div><h3>Starkiller</h3></div>');
			$("#opponentTrooper").html('<div class="col-xs-6 col-md-3 contender trooper"><div class="contender"><img src="assets/images/trooper.jpg" alt="Storm Trooper"></div><h3>Stormtrooper</h3></div>');
			yourCharacterSelect = true;
			defenderSelect = (false);
			increasedAttack = Skywalker.Attack;
			remainingHPAttacker = Skywalker.HP;
			console.log("Jedi Anakin Skywalker's Attack Value is " + increasedAttack + " and his starting health is " + remainingHPAttacker + ".")
		})
		$(".trooper").on("click", function() {
			$(".beginHere").css("display", "none");
			$("#yourCharacter").html('<h2>Your Character</h2><div class="col-xs-6 col-md-3 contender trooper"><div class="contender"><img src="assets/images/trooper.jpg" alt="Stormtrooper"></div><h3>Stormtrooper</h3></div>');
			$("#opponentRevan").html('<div class="col-xs-6 col-md-3 contender revan"><div class="contender"><img src="assets/images/Revan.jpg" alt="Darth Revan"></div><h3>Darth Revan</h3></div>');
			$("#opponentStarkiller").html('<div class="col-xs-6 col-md-3 contender starkiller"><div class="contender"><img src="assets/images/starkiller.jpg" alt="Starkiller"></div><h3>Starkiller</h3></div>');
			$("#opponentSkywalker").html('<div class="col-xs-6 col-md-3 contender skywalker"><div class="contender"><img src="assets/images/anakin.jpg" alt="Jedi Anakin Skywalker"></div><h3>Jedi Anakin Skywalker</h3></div>');
			yourCharacterSelect = true;
			defenderSelect = (false);
			increasedAttack = Trooper.Attack;
			remainingHPAttacker = Trooper.HP;
			console.log("The Strom Trooper's Attack Value is...unclear... His starting health is " + remainingHPAttacker + ".")
		})
	};

	if (!defenderSelect) {
		$("#opponentRevan").on("click", function() {
			$("#opponentRevan").css("display", "none");
			$("#opponent").append('<div class="col-xs-6 col-md-3 contender revan"><div class="contender"><img src="assets/images/Revan.jpg" alt="Darth Revan"></div><h3>Darth Revan</h3></div>');
			remainingHPDefender = Revan.HP;
			retaliate = Revan.Retaliate;
			console.log("You've chosen a powerful enemy!  Darth Revan!! He has " + remainingHPDefender + " health and a fearsome " + retaliate + " counter attack!!  The possibility of successfully defeating this legened are approxamately  3,720 to 1!!")
			defenderSelect = true;
		})
		$("#opponentStarkiller").on("click", function() {
			$("#opponentStarkiller").css("display", "none");
			$("#opponent").append('<div class="col-xs-6 col-md-3 contender starkiller"><div class="contender"><img src="assets/images/starkiller.jpg" alt="Starkiller"></div><h3>Starkiller</h3></div>');
			remainingHPDefender = Starkiller.HP;
			retaliate = Starkiller.Retaliate;
			console.log("You MUST be losing your mind to take on this secret weapon of a warrior!  Starkiller!! He has " + remainingHPDefender + " health and a fearsome " + retaliate + " counter attack!!  I've got a bad feeling about this...")
			defenderSelect = true;
		})
		$("#opponentSkywalker").on("click", function() {
			$("#opponentSkywalker").css("display", "none");
			$("#opponent").append('<div class="col-xs-6 col-md-3 contender skywalker"><div class="contender"><img src="assets/images/anakin.jpg" alt="Jedi Anakin Skywalker"></div><h3>Jedi Anakin Skywalker</h3></div>');
			remainingHPDefender = Skywalker.HP;
			retaliate = Skywalker.Retaliate;
			console.log("Seriously??  This guy was BORN of the force!! He has " + remainingHPDefender + " health and a fearsome " + retaliate + " counter attack!!  Whatever you do, just please don't mention sand...")
			defenderSelect = true;
		})
		$("#opponentTrooper").on("click", function() {
			$("#opponentTrooper").css("display", "none");
			$("#opponent").append('<div class="col-xs-6 col-md-3 contender trooper"><div class="contender"><img src="assets/images/trooper.jpg" alt="Strom Trooper"></div><h3>Stormtrooper</h3></div>');
			remainingHPDefender = Trooper.HP;
			retaliate = Trooper.Retaliate;
			console.log("These bucketheads don't have the best aim w a blaster...doesn't make for much of a fight, I guess. He has " + remainingHPDefender + " health.  I think I heard some rumor about these guys having some heavy explosives, though...")
			defenderSelect = true;
		})

	};

	





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




});

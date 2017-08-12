//Nest all functions inside this.  This function makes sure the page loads before the JS runs.  
//Not a real issue on this project, but on a heavier load, it can be significant.
$(document).ready(function () {
	//Global variables
	var increasedAttack;
	var remainingHPAttacker;
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
			$(".contender").css("display", "none");
			$("#yourCharacter").html('<h2>Your Character</h2><div class="col-xs-6 col-md-3 contender revan"><div class="contender"><img src="assets/images/Revan.jpg" alt="Darth Revan"></div><h3>Darth Revan</h3></div>');
			$("#selectEnemy").html('<h2>Chose your opponent.  Choose wisely.</h2><div class="col-xs-6 col-md-3 contender starkiller"><div class="contender"><img src="assets/images/starkiller.jpg" alt="Starkiller"></div><h3>Starkiller</h3></div><div class="col-xs-6 col-md-3 contender skywalker"><div class="contender"><img src="assets/images/anakin.jpg" alt="Jedi Anakin Skywalker"></div><h3>Jedi Anakin Skywalker</h3></div><div class="col-xs-6 col-md-3 contender trooper"><div class="contender"><img src="assets/images/trooper.jpg" alt="Storm Trooper"></div><h3>Stormtrooper</h3></div>');
		})
		$(".starkiller").on("click", function() {
			$(".contender").css("display", "none");
			$("#yourCharacter").html('<h2>Your Character</h2><div class="col-xs-6 col-md-3 contender starkiller"><div class="contender"><img src="assets/images/starkiller.jpg" alt="Starkiller"></div><h3>Starkiller</h3></div>');
			$("#selectEnemy").html('<h2>Chose your opponent.  Choose wisely.</h2><div class="col-xs-6 col-md-3 contender revan"><div class="contender"><img src="assets/images/Revan.jpg" alt="Darth Revan"></div><h3>Darth Revan</h3></div><div class="col-xs-6 col-md-3 contender skywalker"><div class="contender"><img src="assets/images/anakin.jpg" alt="Jedi Anakin Skywalker"></div><h3>Jedi Anakin Skywalker</h3></div><div class="col-xs-6 col-md-3 contender trooper"><div class="contender"><img src="assets/images/trooper.jpg" alt="Storm Trooper"></div><h3>Stormtrooper</h3></div>');
		})
		$(".skywalker").on("click", function() {
			$(".contender").css("display", "none");
			$("#yourCharacter").html('<h2>Your Character</h2><div class="col-xs-6 col-md-3 contender skywalker"><div class="contender"><img src="assets/images/anakin.jpg" alt="Jedi Anakin Skywalker"></div><h3>Jedi Anakin Skywalker</h3></div>');
			$("#selectEnemy").html('<h2>Chose your opponent.  Choose wisely.</h2><div class="col-xs-6 col-md-3 contender revan"><div class="contender"><img src="assets/images/Revan.jpg" alt="Darth Revan"></div><h3>Darth Revan</h3></div><div class="col-xs-6 col-md-3 contender starkiller"><div class="contender"><img src="assets/images/starkiller.jpg" alt="Starkiller"></div><h3>Starkiller</h3></div><div class="col-xs-6 col-md-3 contender trooper"><div class="contender"><img src="assets/images/trooper.jpg" alt="Storm Trooper"></div><h3>Stormtrooper</h3></div>');
		})
		$(".trooper").on("click", function() {
			$(".contender").css("display", "none");
			$("#yourCharacter").html('<h2>Your Character</h2><div class="col-xs-6 col-md-3 contender trooper"><div class="contender"><img src="assets/images/trooper.jpg" alt="Stormtrooper"></div><h3>Stormtrooper</h3></div>');
			$("#selectEnemy").html('<h2>Chose your opponent.  Choose wisely.</h2><div class="col-xs-6 col-md-3 contender revan"><div class="contender"><img src="assets/images/Revan.jpg" alt="Darth Revan"></div><h3>Darth Revan</h3></div><div class="col-xs-6 col-md-3 contender starkiller"><div class="contender"><img src="assets/images/starkiller.jpg" alt="Starkiller"></div><h3>Starkiller</h3></div><div class="col-xs-6 col-md-3 contender skywalker"><div class="contender"><img src="assets/images/anakin.jpg" alt="Jedi Anakin Skywalker"></div><h3>Jedi Anakin Skywalker</h3></div>');
		})
	}



//PSUEDO CODE ***************
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
				//user chooses new defender. (new var defender2 defender3?)
			//else (defender lives), computate defender's Retaliate against yourCharacter's remainingHP.
				//display yourCharacter's newly calculated remainingHP
				//if yourCharacter remainingHP <= 0, game over
					//Reset button is only option...toggle anything else off?
				//else (yourCharacter lives), update increasedAttack

	//




});

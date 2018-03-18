function Start(){
	$ = {};
	
	/////// SET UP SCENE ////////

	Show("background", "blank");

	//////////////////////////////

	N("Sort Your Life Out");
	N("A game about lazing about and making major life decisions.");
	N("Ready?")

	Choose({
		"Ready.": function(){
			Start_Game();
		}
	});

}

function Game(){
	Start_Game();
}
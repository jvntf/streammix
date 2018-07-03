function Deck(deck){
	this.player = new Tone.Player();
	// this.player.load('song.mp3');
	// this.player.autostart =true;
}

function EQ(){
	this.eq = new Tone.EQ3();
}


function Fader(){
	this.volume = new Tone.Volume();
}
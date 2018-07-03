var deckA, eqA, faderA;
var faderMaster;
$(function(){
	console.log('ready');

	

	

	deckA = new Deck();
	eqA = new EQ();
	faderA = new Fader();
	faderMaster = new Fader();

	makeControls();
	makeSliders();
	makeKnobs();
	setupSignalChain();

	deckA.player.load('song.mp3');
	$('#deckA').click(()=>deckA.player.start());

});
function makeControls(){

}

function makeKnobs(){
	$("#eqA_hi").knob({
		'change' : function (v) {
			eqA.eq.high.value = v*4;
		}
	});
	$("#eqA_mid").knob({
		'change' : function (v) {
			eqA.eq.mid.value = v*4;
		}
	});
	$("#eqA_lo").knob({
		'change' : function (v) {
			eqA.eq.low.value = v*4;
		}
	});

	$(".dial").knob({
		'change' : function (v) { 
			// console.log(v);
		}
	});
}

function makeSliders(){
	var handle = $( "#custom-handle" );

	$( "#faderA .container" ).slider({
		orientation: "vertical",
		range: "max",
		min: -40,
		max: 30,
		value: 0,
		slide: function( event, ui ) {
			faderA.volume.volume.value =  ui.value;
		}
	});
	// $( "#amount" ).val( $( "#faderA .container" ).slider( "value" ) );


	$( "#faderMaster .container" ).slider({
		orientation: "vertical",
		range: "max",
		min: -100,
		max: 30,
		value: 0,
		slide: function( event, ui ) {
			// faderMaster.volume.volume.value = ui.value;
			Tone.Master.volume.value = ui.value
		}
	});
	// $( "#amount" ).val( $( "#faderMaster .container" ).slider( "value" ) );

	$( "#faderB .container" ).slider({
		orientation: "vertical",
		range: "max",
		min: 0,
		max: 100,
		value: 60,
		slide: function( event, ui ) {

		}
	});
	// $( "#amountB" ).val( $( "#faderB .container" ).slider( "value" ) );
}



function setupSignalChain(){
	// deckA.player.chain(eqA.eq, faderA.volume, Tone.Master);
	// deckA.player.connect(faderA.volume).toMaster();
	// deckA.player.toMaster();
	deckA.player.connect(eqA.eq)
	eqA.eq.connect(faderA.volume)

	faderA.volume.toMaster();
}
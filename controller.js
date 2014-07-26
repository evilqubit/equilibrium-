var path = require('path');
var five = require("johnny-five");

 five.Board().on("ready", function() {

  // Initialize the RGB LED
  led = new five.Led.RGB({
    pins: {
      red: 11,
      green: 10,
      blue: 9
    }
});

  this.repl.inject({
    led: led
  });

  //led.on();
  //led.color("#FFFFFF"); 
  });




exports.rgb = function(options){

  if (options.life==true) {led.color("#00FF00");}
 
  if (options.death==true) {led.color("#FF0000");}


  console.log(options) 
	
	setInterval(function() {

led.off();

	},1000)

		};

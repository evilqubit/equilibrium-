/**
 * Module dependecies
 */

var path = require('path');
var config = require('./config.js')['ntwitter'];
var twitter = require('ntwitter');
var controller = require('./controller.js');







//Twitter API Config
var twit = new twitter(config);

// Twitter symbols array
var watch = ['#life','#death'];

twit.verifyCredentials(function (err, data) {
    if(err) console.log(err);
})
.stream('user', {track:watch}, function(stream) {
	console.log("Twitter stream is ready and waiting for inc tweets...");
	stream.on('data', function (data) {

		if (data.text !== undefined) {

			var name = data.user.screen_name;
			var hashtags = data.entities.hashtags;
			var options = { life: false,
							death: false}

			for(var i=0,l=hashtags.length;i<l;i++){
				var hashtag = hashtags[i].text.toLowerCase();
				if( hashtag == 'life') options.life = true;
				if( hashtag == 'death') options.death = true;
				

			}

			if(options.death == true || options.life==true) controller.rgb(options)
		
		}
	});

	stream.on('error', function (err, code) {
		console.log("err: "+err+" "+code)
	});
});
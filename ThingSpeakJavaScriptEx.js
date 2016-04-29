
request = require('request')
http = require('http')

var url =  'https://api.thingspeak.com/update'
request.post({
	url:url,
	form: {
		//api_key:"NQR6662A22JQ7Q1G", // account key
		field1:21
	},
	headers: {
       'X-THINGSPEAKAPIKEY': 'CAHNOEBZ1S0VQCUH' //Channel key
    },
}, function(error, response, body){
      console.log(body)
});


request.get({
	url: 'https://api.thingspeak.com/channels/111490/feed.json',
	headers:{
		'X-THINGSPEAKAPIKEY':'T2DC5YYTWMH1ITYU'
	}
}, function(error, response, body){
	console.log(JSON.parse(body, null, 2))
})


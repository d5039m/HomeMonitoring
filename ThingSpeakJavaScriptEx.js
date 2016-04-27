request = require('request')
http = require('http')

var url =  'https://api.thingspeak.com/update'
request.post({
	url:url,
	form: {
		api_key:"XXXXXXXXXX",
		field1:46
	},
	headers: {
       'X-THINGSPEAKAPIKEY': 'XXXXXXXXXXXX'
    },
}, function(error, response, body){
      console.log(body)
});


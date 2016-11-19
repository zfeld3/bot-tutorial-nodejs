var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
  botRegex = /@randNum10$/;
  var botRegex3 = /@randNum100$/;
  var botRegex2 = /@coinFlip$/;
  var botRegex4 = /@magicConch$/;
  var botRegex5 = /(I'm|im) hungry$/;
  botRegex5 = botRegex5.toUpperCase();
  
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(400);
    randNum(10);
    this.res.end();
  } 
  else if(request.text && botRegex2.test(request.text)){
    this.res.writeHead(400);
    coinFlip();
    this.res.end();
  }else if(request.text && botRegex3.test(request.text)){
    this.res.writeHead(400);
    randNum(100);
    this.res.end();
  }else if(request.text && botRegex4.test(request.text)){
    this.res.writeHead(400);
    magicConch();
    this.res.end();
  }else if(request.text && botRegex5.test(request.text))){
    this.res.writeHead(400);
    hiImHackathonBot();
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}
var upperLimit;
function randNum(upperLimit) {
  var botResponse, options, body, botReq, userID, userNickname, randNumber;
  randNumber = Math.random() * (upperLimit -1) + 1;
  randNumber = Math.round(randNumber);
  botResponse = randNumber.toString();

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function coinFlip() {
  var botResponse, options, body, botReq, userID, userNickname, coinFlips;
  coinFlips = Math.random();
  if(coinFlips >= 0.5){
    botResponse = 'heads';
  }else{
    botResponse = 'tails';
  }

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function magicConch() {
  var botResponse, options, body, botReq, userID, userNickname, conchResponses;
  conchResponses = ["Nothing", "Neither", "No", "Maybe Someday", "Yes", "Try Asking Again"];
  var index = Math.random() * 5;
  index = Math.round(index);
  botResponse = conchResponses[index];
  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}
function hiImHackathonBot() {
  var botResponse, options, body, botReq, userID, userNickname;
    botResponse = "Hi hungry, I'm HackathonBot";
  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;

// setup
"use strict";
require('dotenv').config();

const Snoowrap = require('snoowrap')
const Snoostorm = require('snoostorm')

// build snoowrap + snoostorm clients
const s = new Snoowrap({
	userAgent: 'itsokay-bot',
	clientId: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	username: process.env.REDDIT_USER,
	password: process.env.REDDIT_PASS
});
const client = new Snoostorm(s);

// set stream options
const sr = 'testingground4bots';
const streamOpts = {
	subreddit: sr,
	results: 30
}

//comment-check logic
console.log("... starting 'er up ...");
const comments = client.CommentStream(streamOpts);
comments.on("comment", function(comment){
	console.log(comment.author.name + ' posted: ' + comment.body);

	if(comment.body.includes("(╯°□°）╯︵ ┻━┻")){
		comment.reply("┬─┬ノ( º _ ºノ)");
	};

	console.log("ehue\n");
});



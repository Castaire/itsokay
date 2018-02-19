// setup
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
const ss = new Snoostorm(s);

// set stream options
const streamOpts = {
	subreddit: 'testingground4bots',
	results: 25
}



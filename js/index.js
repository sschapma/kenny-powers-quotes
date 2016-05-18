var quotes = [

{quote: "I'm the man who has the ball. I'm the man who can throw it faster than fuck. So that is why I am better than everyone in the world. Kiss my ass and suck my dick... everyone." },
{quote: "Sure, I've been called a xenophobe, but the truth is, I'm not. I honestly just feel that America is the best country and the other countries aren't as good. That used to be called patriotism."},
{quote: "When my ass was 19 years old, I changed the face of professional baseball. I was handed the keys to the kingdom, multi-million dollar deals, endorsements. Everyone wanted a piece of my shit. Just a man with a mind for victory and an arm like a fucking cannon. But sometimes when you bring the thunder, you get lost in the storm."},
{quote: "I'm sick and tired of carrying all the weight, the coaches and owners not giving me the shit I need to win. Atlanta, you're fucking out. Kenny Powers is now a free agent. Let's buy the bar and get shitfaced. Get me paid, bitch!"},
{quote: "But a true champion, face to face with his darkest hour, will do whatever it takes to rise above. A man fights, and fights, and then fights some more. Because surrender is death, and death is for pussies."},
{quote: "I play real sports. Not trying to be the best at exercising."},
{quote: "People say Kenny Powers is a woman hater. That's not true. I love women. Every fucking one of them, even the ugly as shit ones. But don't ask me to trust 'em. Not even nuns, because every pair of tits comes with a gaping hole of need that even Kenny Powers can't fill."},
{quote: "Honey, I love you. I think you're a terrific girl. But you have clothes like a fucking dickhead."},
{quote: "I got two hard rules I live by, Pop: I don't fuck with the devil and I never do tag-teams with blood relatives."},
{quote: "Well, it's no mystery that ass has always been tits greatest enemy. It's almost like a Muslim-Jewish thing, but with tits and ass."},
{quote: "No, babe, rehab. No, I didn't hurt myself. Oh, ok. Yeah, I hurt myself. I hurt my nose."},
{quote: "This is me every night dude, just staring at buttholes and getting a buzz on."},
{quote: "This is a real job, it's not like teaching kids. I can't get fucked up."},
{quote: "Y'all named your daughter after fucking Titanic? Wow. You've got to be shitting me. What's his name? Fucking Shrek? No, huh?"},
{quote: "If there's one thing I hate it's losing. If there's two things I hate it it's losing and getting cancer."},
{quote: "If at first you don't succeed then maybe you just suck!"},
{quote: "I'm not going to stop yelling because that would mean I lost the fight!"},
{quote: "I need to remember that I'm a winner man. I need to remember that I am better than everyone else. Bulletproof tiger, man."},
{quote: "One time I was invited to come to a social gathering. I was paid a handsome amount of money, and I brought a shotgun and a bottle of Tanqueray and showed those people the best time they've ever seen."},
{quote: "The humongous part about being a celebrity is cashing in on it - making loads of money, having expensive, luxurious things. That way in case one day you're not famous you can still be rich as hell and better than everyone around you."},
{quote: "Stay in school. Fight the Power. And don't do drugs... Unless of course you're doing 'em with me, I never turn down free drugs"},
{quote: "Does it make your life easier to just throw a quick, racist term at somebody? A man who has seen the things Ive seen, experienced the loss and pain that Ive experienced, I transcend race, hombre"},
{quote: "Just like that, the journey is over. Depression is finished and you are on your way back to the world of the living, smiling, regular people. The road has been paved with dick-heads, back-stabbers, and pains in the fucking ass. But, memories were made, allies were had, pole-smokers were toppled, and the truth was discovered. And like any journey, if you stay the course long enough, the road might just show you what you need. All you got to do is keep your eyes on the road and your foot on the fucking gas"},
{quote: "Undaunted, I knew the game was mine to win. Just like in life, all of my successes depend on me. Im the man who has the ball; Im the man who can throw it faster than fuck. So, that is why I am better than everyone in the world. Kiss my ass and suck my dick, everyone."},
{quote: "I am sick and tired for carrying all the weight... the coaches and owners not giving me the shit I need to win. Atlanta, you're fucking out. Kenny Powers is now a free agent. Lets find a bar and get shit-faced. Get me paid, Bitch! Superstar!"},
{quote: "I'm a ballplayer... and not just any ballplayer... I'm Kenny Fucking Powers"},
{quote: "Sometimes you gotta wash away the paint, and reveal to the world the jackass that is hiding beneath"},
{quote: "But a true champion, face to face with his darkest hour, will do whatever it takes to rise above. A man fights, and fights, and then fights some more. Because surrender is death, and death is for pussies"},
{quote: "So, besides getting shot in the back of the head do you know what else Abraham Lincoln did? He was a champion wrestler in high school and no, I'm not making that up."},
{quote: "Funny thing, when you're on top of the world, every motherfucker wants to get a piece of your ass. But then, you take a little time off from being unstoppable... just to... regroup and relax, no one will give you the time of fuckin' day."}
];

$(document).ready(function() {

	window.onload = function() {
		pickQuote(); //picks a random quote from the object above
		createButton(); //creates twitter button to tweet current quote
	}



	// Quote changer
	$("#button").on("click", function() {
		pickQuote();
		createButton();
	});

	function pickQuote() {
		var randomNum = quotes[ Math.floor( Math.random() * quotes.length ) ];
		//adds transition effect
		$(".quoteBox").hide();
    $("#quote").html(randomNum.quote);
    $(".quoteBox").fadeIn(1500);

	}

// Tweet Button - from http://denvycom.com/blog/twitter-button-with-dynamic-custom-data-text-message/
	function createButton() {

		window.twttr = (function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0],
			t = window.twttr || {};
			if (d.getElementById(id)) return t;
			js = d.createElement(s);
			js.id = id;
			js.src = "https://platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js, fjs);
			t._e = [];
			t.ready = function(f) {
				t._e.push(f);
			};
		return t;
		}
	(document, "script", "twitter-wjs"));

    // Create a New Tweet Element
		var tweet;
    var kp = " -Kenny Powers"
		var msg = document.getElementById('quote').innerHTML;


		if ( msg.length >= 99 ) {
			var truncated = msg.slice( 0, 95 );
			tweet = "\"" + truncated + "..." + "\"" + "\n" + kp + "\n";
		};
        if ( msg.length  < 99 ) {
			tweet =  "\"" + msg + "\"" + "\n" + kp + "\n";
		};


		var link = document.createElement('a');
		link.setAttribute('href', 'https://twitter.com/share');
		link.setAttribute('id', 'twitterbutton');
    link.setAttribute('class', 'twitter-share-button');
		link.setAttribute("data-text", tweet);

		// Put it inside the twtbox div
		var tweetdiv = document.getElementById('twtbox');
		// Removes previous tweet button if one already exists
		while (tweetdiv.firstChild) {
			tweetdiv.removeChild(tweetdiv.firstChild)
		};
		tweetdiv.appendChild(link);


		twttr.widgets.load(); //very important
	}


});

function Start_Game(){

	$ = {};

	// Just clear dialogue & stuff.
	queue(ClearScene,0);
	
	/////// SET UP SCENE ////////

	Show("background","bed");

	//////////////////////////////

	Wait(2000);


	N("Do you ever make coffee");
	N("but the smell of everything else in your house");
	N("mixes with the smell of the coffee");
	N("and ruins the whole experience?");
	N("So like, the coffee smells a bit like coffee");
	N("but also a bit like washing powder and egg shells?");

	Choose({
		"No.": function(){
			Black0("No.");
		},
		"That's very specific but yes?": function(){
			Black0("That's very specific but yes?");
		} 
	});

}

function Black0(message){
	
	p(message);

	p("Maybe you actually don't like the smell of coffee?");
	N("No, I do. I know I do-");
	p("Also what do eggshells smell like?");
	p("Do they even have a smell?");
	N("Umm...");
	p("...a smell that would over-power coffee smell?");
	N("Okay, yeah, I dunno.")

	Wait(2000);

	p("How was your aunt's birthday?");
	N("Fine. It was in a hotel in Essex.");
	N("So it was as good as it could be for a hotel in Essex.");

	Choose({
		/*"Let's play this thing!": Play,*/
		"Bit snobby.": function(){
			Snob("Bit snobby.");
		},
		"Weird how you get actual hotels in actual Essex.": function(){
			Essex("Weird how you get actual hotels in actual Essex.");
		}
	});
}

function Black1(message){

	p(message);

	Wait(1000);

	N("All the toilets had the end of the loo paper folded into a point.");

	Choose({
		"Ha... what a waste of time.": function(){
			Waste("Ha... what a waste of time.");
		},
		"Oooh fancy.": function(){
			Fancy("Oooh fancy.");
		}
	});

}

function Black2(message){

	p(message);

	if ($.fancy) {
		N("It all makes sense now!");
		p("Okay...");
		N("TOILET PAPER HAS A POINT.");
	}
	else if ($.sheets) {
		p("So I can use their sheet-tucking powers against my enemies.")
	}
	
	Wait(2000);

	p("I wonder who first suddenly turned around and said");
	p("'Guys...");
	p("we've been doing toilet paper all wrong this whole time.");
	p("My idea will change the face of hospitality forever.'");
	N("That person is sitting in their mansion somewhere,");
	N("surrounded by their house staff,");
	N("who are constantly folding all the toilet paper ends into points.");
	p("Like a boss");

	Wait(1000);

	N("I wish I thought of it now.");

	Wait(2000);

	N("How's stuff going with you and Alex?");
	p("She's talking about moving in together.");
	N("Talking about? Or asking?");

	Choose({
		"Right, yeah, asking.": function(){
			Asking("Right, yeah, asking.");
		},
		"TALKING": function(){
			Talking("TALKING.");
		}
	});

}

function Black3(message){
	
	p(message);

	if ($.decisions){
		p("I'm offended you don't know this about me yet.");
	}

	Wait(2000);

	N("I can't believe it's Monday again tomorrow.");
	p("Monday happens every week, dude.");
	N("I wouldn't mind so much about Mondays");
	N("if my job wasn't so intesely lame");
	N("and my colleagues weren't such relentless turd-sacks.");

	Choose({
		"Gosh...": function(){
			Gosh("Gosh...");
		},
		"Heh... turd-sack.": function(){
			Turd("Heh... turd-sack.");
		}
	});

}

function Black4(message){

	p(message);

	if ($.freesucks){
		p("Enjoy your benefits.");
	}

	N("Can you wear a power rangers costume");
	N("and eat garlic paste all day");
	N("while you work?");

	Choose({
		"Yes.": function(){
			$.garlic = true;
			Garlic("Yes.");
		},
		"No.": function(){
			Garlic("No.");
		}
	});

}

function Black5(message){

	if ($.reasonyes){
		p(message);
		p("I don't know what is.");
	}
	else if ($.exactly){
		p(message);
		p("Please don't expect a birthday dinner out of this.");
	} else if ($.talkSomething)
	{

		Wait(1000);

		N("Wanna go fold up the toilet paper into points?");
	}

	Wait(2000);

	if ($.gosh){
		p("Would you like me to help you figure out how to quit your job?");
		N("What now?");
		p("It just sounds like");
		p("you're not cut out for getting up");
		p("and going to work every day.");
		p("And, you know...");

		Wait(500);

		p("getting dressed, apparently.");
		N("Yeah...");
		N("I'm pretty sure every time I call in sick");
		N("is just because I want to sleep more.");
		N("Or I can't find my shoes.");

		Choose({
			"If you had a job you actually liked...": function(){
				Job("If you had a job you actually liked");
			},
			"If you worked for yourself...": function(){
				Freelance("If you worked for yourself");
			}
		});
	} else {
		Choose({
			"So, what sort of pet are you thinking?": function(){
				Pet("So, what sort of pet are you thinking?");
			},
			"When you say you're getting a pet...": function(){
				Me("When you say you're getting a pet...");
			}
		});
	}
}

function Snob(message){

	// $.asked_credits = true;
	
	p(message);
	N("Sorry.");

	Black1(". . .");

}

function Essex(message){

	// $.asked_about = true;

	
	p(message);
	p("Like Essex is so great.");
	N("Exactly. Weird vibe.");

	Black1(". . .");

}

function Waste(message){

	p(message);
	N("I know right.");
	N("That's how you put the fun back into going to the toilet.")
	p("And like how they tuck sheets under the mattress.");
	p("Like really really tuck them in so going to bed is a bit of a chore.");
	N("I know. No one else does sheets like that.");
	N("And if they do...");
	N("I don't want to know them.");
	
	Choose({
		"Me neither": function(){
			Black2("Me neither.");
		},
		"I do.": function(){
			$.sheets = true;
			Black2("I do.");
		}
	});

}

function Fancy(message){

	$.fancy = true;

	p(message);
	N("Don't you mean, 'oooh, pointless'?");
	p("Fancy stuff isn't pointless.");
	p("Fancy stuff makes you feel good.");
	p("Feeling good has a point.");
	N("...and so does the toilet paper.");

	Wait(1000);

	Choose({
		"Sure toilet paper does have a point but-": function(){
			Black2("Sure toilet paper does have a point but-");
		},
		"What I meant was-": function(){
			Black2("What I meant was-");
		}
	});

}

function Talking(message){

	$.talking = true;

	p(message);
	N("Woah.");
	p("Yeah all matter of fact like that's obviously where we are going.");
	N("Bit forward, bit much.");
	p("Very much a bit much.");
	N("But would you?");
	p("Would I what?");
	N("Would you want to move in together?");
	p("Umm...");

	Wait(1000);

	Asking();
}

function Asking(message){

	if (!$.talking){
		p(message);
		N("Okay, okay...");
		N("how do we feel about this?");
		N("Is Alex a type of person that another person can live with?");
		N("Does she make long distance phone calls?");
		N("Does she scratch up all your CDs");
		N("and put them back in the wrong cases?");
		p("No... none of that stuff.");
		p("Because this is not 2002.");
		N("Ah, right, okay.");
	}
	

	Choose({
		"Living with Alex might be kind of cool.": function(){
			Cool("Living with Alex might be kind of cool.");
		},
		"Alex is starting to seem meh.": function(){
			Meh("Alex is starting to seem meh.");
		}
	});

}

function Cool(message){

	p(message);
	N("Really? Cool!");
	N("I like Alex.");
	N("I really respect her scarf choices.");
	p("Yeah me too!")
	p("That's basically what I'm basing this decision on.");

	Wait(500);

	N("...");
	N("...really?");
	
	Choose({
		"No, you numpty. No.": function(){
			Black3("No, you numpty. No.");
		},
		"Scarves play a large part in most of my decision making.": function(){
			$.decisions = true;
			Black3("Scarves play a large part in most of my decision making.");
		}
	});

}

function Meh(message){

	p(message);
	N("Really?");
	N("But she makes such good scarf choices.");
	p("Yeah the scarves are fun");
	p("but the other stuff is sort of not");
	p("you know?");
	N("I... don't know.");
	N("All I can remember about her is scarves now.");
	p("She laughs at her own jokes too much.");
	N("Yeah but you do that.");
	p("Exactly.");
	p("We can't be a pair of people who BOTH do that.");
	p("Then we're just two stupid fucks");
	p("who laugh at ourselves but not at each other.");
	N("Okay that's fair.");
	N("You don't want to be one of THOSE couples.");

	Choose({
		"Yeah.": function(){
			Black3("Yeah.");
		},
		"What if we already are?": function(){
			Black3("What if we already are?");
		}
	});

}

function Gosh(message){
	$.gosh = true;

	p(message);
	N("Yeah.");
	N("And I know this is a really unorigial fantasy");
	N("but I really do think about killing my boss.");

	Wait(1000);

	N("A lot.");

	Wait(500);

	p("That is pretty unoriginal.");

	Choose({
		"Please be more original.": function(){
			Original("Please be more original.");
		},
		"But it doesn't mean you are unoriginal": function(){
			Original("But it doesn't mean you are unoriginal.");
		}
	});

}

function Original(message){

	p(message);

	N("I just hate all the rules.");
	N("So many damn rules.");
	p("Like what?");
	N("You know...");
	N("Turn up on time.");
	N("Don't wear pyjamas.");
	N("Be productive.");
	N("Be polite.");
	N("Don't talk about anything inappropriate.");
	N("Whatever that means.");

	Choose({
		"I mean...": function(){
			Mean("I mean...");
		},
		"Those are...": function(){
			Mean("Those are...");
		}
	});
}

function Mean(message){

	p(message);

	Wait(500);

	p("Everyone has to abide by those rules?");
	N("Well yeah.");
	N("But maybe they don't.");

	Wait(1000);

	p("You're right.");
	p("Maybe they don't need to pay bills");
	p("and feed themselves and their families.");

	N("Or rather, maybe I don't.");

	Choose({
		"Sure. You can pay rent with magic...": function(){
			$.sure = true;
			Sure("Sure.");
		},
		"Do you have a trust fund I don't know about?": function(){
			$.sure = false;
			Sure("Do you have a trust fund I don't know about?");
		}
	});
}


function Sure(message){

	p(message);

	if ($.sure){
		p("You can pay rent with magic");
		p("and feed yourself with regret.");
	} else {
		p("Gimme some, you greed-monkey!");
	}

	N("No no.");
	N("I could work for myself.");

	p("Doing what?");

	N("Dunno.");

	p("Folding toilet paper into points?");

	N("That already sounds better.");

	Wait(1000);

	Choose({
		"Either way, your job is not worse than my job.": function(){
			Black4("Either way, your job is not worse than my job.");
		},
		"Freelance sucks.": function(){
			$.freesucks = true;
			Black4("Freelance sucks.");
		}
	});
}

function Turd(message){
	$.gosh = false;

	p(message);

	N("Exactly.");
	N("A delightfully hilarious yet tradically truthful analogy.");
	p("Sounds like you need to shake things up.");
	N("Ooh yeah I love a good shake up.");
	p("Buy a bunch of paint...");
	
	Choose({
		"...and lets do a mural!": function(){
			Paint("...and lets do a mural!");
		},
		"...and consider adding a brightly coloured feature wall!": function(){
			Paint("...and consider adding a brightly coloured feature wall!");
		}
	});

}

function Paint(message){

	p(message);

	N("I don't think they'll let me do that.");
	N("My job has rules.");
	N("One of them is");
	N("'Don't change the colour of the walls.'");
	p("No, at your flat.");
	N("What?");
	N("No.");
	N("Paint smells and is expensive.");
	p("So?");
	p("Your colleagues smell too, remember?");
	p("Turd-balls.");
	N("Sacks");
	p("Whatever.");

	Wait(1000);

	N("I dunno.");
	N("This just sounds like a long and boring activity");
	N("with a permanent result that I may regret in the end.");
	N("Which is what my job is.");

	Choose({
		"Well...": function(){
			Pointless("Well...");
		},
		"Hmmm...": function(){
			Pointless("Hmmm...");
		}
	});
}

function Pointless(message){
	
	p(message);

	N("...and then I'll still have to go to work");
	N("and come home over and over again");
	N("and the only thing that will be different");
	N("is the colour of the walls.")

	p("Okay, okay.");
	p("That'll do, pet, that'll do.");
	N("Pet?!");

	Choose({
		"Sorry, I forgot you hate to be called that.": function(){
			PetTime("Sorry, I forgot you hate to be called that.");
		},
		"Please, I've always wanted to call you pet.": function(){
			$.yespet = true;
			PetTime("Please, I've always wanted to call you pet.");
		}
	});
}

function PetTime(message){

	p(message);

	if ($.yespet){
		p("Can I?");
	}

	N("No I mean");
	N("That's a great idea!");
	p("What?");
	N("I should just get a pet!");
	p("Oh.");
	N("Yep.");
	N("I feel better already.");
	p("I prefer my idea.");
	p("It's not something you can kill by accident.");
	N("Rude.");

	Wait(2000);

	Black4();
}

function Garlic(message){
	p(message);

	if ($.garlic){
		p("And it's not as fun as it sounds.");
	} else {
		p("Because then my power rangers costume would smell of garlic?");
	}

	N("Still better.");
	p("But I have to do this horrible kind of begging");
	p("for each and every bit of work.");
	N("Yeah, you were never great at that.");
	p("Oh thanks.");
	N("I mean it's obviously really tiring to be freelance sometimes.");
	p("Yeah it's also the money.");
	N("What about it?");

	Choose({
		"I don't have enough of it.": function(){
			Money("I don't have enough of it.");
		},
		"I need more of it. Munneh plz.": function(){
			Money("I need more of it. Munneh plz.");
		}
	});

}

function Money(message){

	p(message);
	N("Ah.");
	p("It's getting to the point");
	p("where I think I can no longer afford living alone.");
	N("Yaaaaaaaay live with me!");
	p("No. You live in a sink-hole next to a swamp");

	Wait(500);

	p("and it smells like bums.")

	Wait(500);

	N("Good point.");
	N("Very good point.");

	Wait(500);

	p(". . .");

	Wait(500);

	N("Okay so...");
	N("move in with Alex.");

	Choose({
		"Mmmyeah...": function(){
			Myeah("Mmmyeah...");
		},
		"Urgh...": function(){
			Urgh("Urgh...");
		}
	});
}

function Myeah(message) {
	
	p(message);

	Wait(1000);
	
	N("...yeah?");

	p(". . .");

	Wait(500);

	N("...just think of all the scarves.");

	Choose({
		"We could have a whole room dedicated to scarves.": function(){
			Scarves("We could have a whole room dedicated to scarves.");
		},
		"I could assign a different scarf for every day of the week.": function(){
			Scarves("I could assign a different scarf for every day of the week.");
		}
	});
}

function Scarves(message){

	p(message);

	N("That's the spirit.");
	p("And I'd have... money.");
	N("You sure would.");
	p("I could eat out at nice restaurants.");
	p("Finally.");
	p("If I budget  sensibly");
	p("and only go three times a year.");
	N("That's enough for both of your birthdays");
	N("plus one bonus dinner");
	N("my birthday?");
	N("That's what I call living.");

	if ($.talking){
		p("Still not totally sure though.");
		p("It's like I'm only moving in because I have to");
		p("and not because I want to.");
		N("Because Alex didn't really ask you yet?");
		p("Yeah");

		Choose({
			"Yeah, it's just the not asking.": function(){
				NoAsk("Yeah, it's just the not asking.");
			},
			"Yeah, but maybe I could do the asking?": function(){
				IAsk("Yeah, but maybe I could do the asking?");
			}
		});

	} else {

		Choose({
			"If that's not a reason to do it.": function(){
				$.reasonyes = true;
				Black5("If that's not a reason to od it.");
			},
			"Exactly!": function(){
				$.exactly = true;
				Black5("Exactly!");
			}
		});
	}
}

function NoAsk(message){

	p(message);
	N("It is a bit much.");
	p("Yep. Much.");
	N("Scarves are great but I mean...");
	N("no one needs THAT many.");
	p("I might have to think of something else.");

	Black5();
}

function IAsk(message){

	p(message);
	N("That could work.");
	N("Then it will feel like you do want to.");
	p("Which...");

	Wait(500);

	p("I do.");
	N("You do?");
	p("...heck yeah!");
	N("WOOO SCARF PARTYYYYY!");

	Black5();

}

function Urgh(message){

	p(message);
	N("Oh.");
	N("That is not a happy noise.");

	if ($.talking){

		Choose({
			"It's fine.": function(){
				Fine("It's fine.");
			},
			"It just would have been nice if we discussed it.": function(){
				Discuss("It just would have been nice if we discussed it.");
			}
		});

	} else {
		
		Choose({
			"It's fine.": function(){
				Fine("It's fine.");
			},
			"It's ok... it's just a big step.": function(){
				BigStep("It's ok... it's just a big step.");
			}
		});
	}
}

function Fine(message){

	p(message);
	p("It's just that even though Alex has like");
	p("a really hilarious twitter presence");
	p("and great taste in furniture");
	p("not to mention the scarves");
	p("that's basically where she peaks.");

	N("What a shame.");
	p("I know.");
	N("Can someone really peak so early?");
	N("I mean");
	N("I'm pretty shallow");
	N("but I'm not THAT shallow.");

	Choose({
		"But she's somehow shallow AND snobby.": function(){
			Shallow("But she's somehow shallow AND snobby.");
		},
		"Yeah I thought you were maximum shallow until Alex.": function(){
			Shallow("Yeah I thought you were maximum shallow until Alex.");
		}
	});
}

function Shallow(message){

	p(message);
	p("She thinks that making Christmas cards");
	p("as a way to get by should be beneath me.");
	N("Urgh, yuk.");
	N("Stop.");
	N("Like she's so great.");
	N("With her artisan bakery.");
	p("It's not hers.");
	p("She just works there.");
	N("This is my point.");

	Wait(1000);

	N("If that is really where she peaks");
	N("does that mean you want to break up?");

	Choose({
		"I don't know.": function(){
			Black5("I don't know.");
		},
		"Can we talk about something else?": function(){
			$.talkSomething = true;
			Black5("Can we talk about something else?");
		}
	});
}

function Discuss(message){
	p("It just would have been nice if we discussed it");
	p("instead of her assuming that's what I want to do.");
	N("Yeah.");
	N("You know what the say.");
	N("When you assume, you make...");
	Wait(500);
	N("the both of us look...");
	Wait(500);
	N("silly?");
	p("It's when you assume you make an ass out of you and me.");
	N("Oh right yeah.");
	N("Gosh, that's so clever.");

	Wait(500);

	Choose({
		"Sometimes I wonder who dresses you.": function(){
			Wonder("Sometimes I wonder who dresses you.");
		},
		"Sometimes I wonder how you manage to blink and talk at the same time.": function(){
			Wonder("Sometimes I wonder how you manage to blink and talk at the same time.");
		}
	});
}

function Wonder(message){

	p(message);
	N("And sometimes I wonder who made your face like that");
	N("but I tend not to bring it up.");

	Wait(1000);

	p("Anyway...");
	p("Alex is not an option.");
	N("She probably doesn't even fold her toilet paper into points.");
	N("Like some kind of amateur.");
	p("Exactly.");
	p("I need to think of something else.");

	Black5();
}

function BigStep(message){
	p(message);
	N("Is it because she folds her toilet paper into points?");
	p("She doesn't do that.");
	N("Ah, great!");
	N("So what's the problem?");

	Choose({
		"I really hate the way she makes toast.": function(){
			$.toast = true;
			Hate("I really hate the way she makes toast.");
		},
		"She does this really weird yawn when she wakes up.": function(){
			Hate("She does this really weird yawn when she wakes up.");
		}
	});
}

function Hate(message){
	p(message);

	if ($.toast){
		p("Guess I could just make my own toast.");
	}
	else {
		p("Guess I could yawn at the same time to drown it out.");
	}

	N("Well, yeah...");
	p("She is supportive of those lame Christmas cards I make.");
	N("They're not lame.");
	N("My Mum loves them.");
	p(". . .")

	Wait(1000);

	N("Oh right, I see.");
	p("If I move in with Alex I'll actually have money");
	p("for once...");
	N("And I heard you can exchange money for goods and services.");
	p("God.");

	Choose({
		"I could buy AN ISLAND!": function(){
			Buy("I could buy AN ISLAND!");
		},
		"I could buy A SOLID GOLD BOAT!": function(){
			Buy("I could buy A SOLID GOLD BOAT!");
		}
	});
}

function Buy(message){

	p(message);
	p("My life will be changed.");
	N("You'll be like that 1% I keep reading about.");
	N("But without the evil.");
	p("Oh don't worry");
	p("I have plenty of evil.");

	Black5();

}

function Job(message){
	p(message);
	p("you'd probably wake up for it.");
	N("Yeah. But I don't want a job I have to GO to.");
	p("What?");
	N("I just think jobs have become this really stupid, standardised thing.");
	N("Work starts at this time");
	N("and then ends at this time.");
	N("And you have to do that five times a week");
	N("on consecutive days.");
	p("It's like that so...")
	
	Choose({
		"...when you're in New York, you know what time to call London.": function(){
			Call("...when you're in New York, you know what time to call London.");
		},
		"...we can have bank holidays.": function(){
			Call("...we can have bank holidays.");
		}
	});

}

function Call(message){

	p(message);
	N("What? No that's...");
	p("You have to do SOMETHING.");
	p("You can't just not work because you don't like it.");
	N("Dude, no. I can work for MYSELF.");
	p("Oh.");
	N("Yeah.");
	N("Why did I need to explain that?");
	N("It's what you do.");
	p("Working for yourself is hard.")
	
	Choose({
		"If you get sick you don't get paid.": function(){
			Hard("If you get sick you don't get paid.");
		},
		"Have you ever tried paying your own taxes?": function(){
			Hard("Have you ever tried paying your own taxes?");
		}
	});
}

function Hard(message){

	p(message);
	N("My job is hard.");
	N("But why should I work hard");
	N("to achieve something for someone else?");
	p("Well, in the long run...");
	N("No.");
	N("There is no long run.");
	N("I need to start working for myself NOW.");
	p("Golly.");
	N(". . .");

	Wait(500);

	p("Do you think your boss just flat out started working for themselves?");
	p("You think they didn't work for anyone else at any point?");
	N("I don't care what my boss did.");
	N("I care about waht I'm going to do.");
	p("Okay, cool. What is that?");
	N("Exactly what my boss is doing.");
	p("Um....");
	N("But BETTER.");

	//END JEAN STARTS MAGAZINE.
	Wait(2000);
	queue(function(){
		document.getElementById("game").setAttribute("screen","blank");
	},1000);
	queue(function(){
		document.getElementById("game").setAttribute("screen","credits");
	},0);
}

function Freelance(message){
	p(message);
	p("you could get up at 4pm");
	p("and work into the morning.");

	Wait(500);

	p("I mean...");
	p("if you really wanted to.");
	N("Yeah.");
	N("And I really hate people telling me what to do.");
	N("I mean.");
	N("I REALLY hate it.");
	p("Yeah.");
	N("The other day my manager asked me to forward him an email");
	N("and I almost said 'forward your own damn email'.");

	Choose({
		"Can you even forward an email you don't have?": function(){
			$.forward = true;
			Email("Can you even forward an email you don't have?");
		},
		"Sheet that would have been hella rude.": function(){
			Email("Sheet that would have been hella rude.");
		}
	});
}

function Email(message){
	p(message);

	if ($.forward){
		p("No, you can't.");
	}

	N("I know.");
	N("It's terrible.");
	N("And I hardly get to do my own writing.");
	N("I just look at other people's writing and think");
	N("Pff... I could have written that.");
	p("Lame.");
	N("I should just put an end to this rubbish");
	N("and start my own magazine.");

	Choose({
		"Is that really what you want to do?": function(){
			Magazine("Is that really what you want to do?");
		},
		"A whole magazine?": function(){
			Magazine("A whole magazine?");
		}
	});
}

function Magazine(message){
	
	p(message);
	N("Yeah.");
	N("Why not?");
	N("I could do it so much better.");
	p("You certainly could.");
	p("But you'd be reading other people's writing");
	p("instead of doing your own.");
	p("Still.");
	N("Yeah");
	N("but I'd be doing it for ME.");
	N("I wouldn't have to wear shoes");
	N("and I would be allowed to swear.");
	
	Choose({
		"You'd need to swear a lot due to having cold feet.": function(){
			Feet("You'd need to swear a lot due to having cold feet.");
		},
		"You'd be like a bare-footed foul-mouthed Rupert Murdoch.": function(){
			Feet("You'd be like a bare-footed foul-mouthed Rupert Murdoch.");
		}
	});
}

function Feet(message){
	p(message);

	p("What would the magazine be about?");

	Wait(500);

	N("Penguins?");
	p("Art?");
	N("Avocados?");
	p("The economy?");
	N("I don't know anything about that.");
	p("Cars?");
	N("Kitchen-wear?");
	p("Ice-cream?");
	N("Dairy-free alternatives to ice-cream?");
	p("Beer?");
	N("These are all great ideas.");
	N("If there's anything we are not short of, it's ideas.");

	Wait(1000);

	p("If you need an illustrator");
	p("I'm down.");
	N("Oh");
	N("my");
	N("gosh.");

	Wait(500);

	N("YES!");

	//END JEAN STARTS MAGAZINE, LESLEY ILLUSTRATES.
	Wait(2000);
	queue(function(){
		document.getElementById("game").setAttribute("screen","blank");
	},1000);
	queue(function(){
		document.getElementById("game").setAttribute("screen","credits");
	},0);
}

function Pet(message){
	p(message);
	p("Goldfish?");
	p("Cactus?");
	p("Rock?");
	p("Did you know rocks can be pets?");

	N("You're just being rude now.");

	p("But rocks CAN be pets.");
	p("They can.");

	N("Okay I'll get a pet that is a rock.");
	N("But BETTER.");

	// END JEAN HAS DOG.
	Wait(2000);
	queue(function(){
		document.getElementById("game").setAttribute("screen","blank");
	},1000);
	queue(function(){
		document.getElementById("game").setAttribute("screen","credits");
	},0);
}

function Me(message){
	p(message);
	p("do you just mean you'll start feeding me whenever I'm at your place?");
	p("Because that would be fine.");

	N("You're just being rude now.");

	p("I like lasagne.");
	p("Feed me lasagne.");
	N("Like Garflied?");
	p("Yes.");
	N("Okay, I'll get a pet just like Garfield.");
	N("But BETTER.");

	// END JEAN HAS CAT.
	Wait(2000);
	queue(function(){
		document.getElementById("game").setAttribute("screen","blank");
	},1000);
	queue(function(){
		document.getElementById("game").setAttribute("screen","credits");
	},0);
}
export type SportsCommunity = "Soccer/Futbol" | "NBA" | "NFL";

export type FeatureCategory =
  | "Lexical Ambiguity (Polysemy)"
  | "Valence Inversion"
  | "Multi-Word Expression"
  | "Morphological Blend";

export type PragmaticMechanism =
  | "Speech Act"
  | "Presupposition"
  | "Conversational Implicature"
  | "In-group signaling"
  | "Banter / Face-threat";

export interface CorpusEntry {
  id: string;
  community: SportsCommunity;
  tweetText: string;
  targetExpression: string;
  context: string;
  tweetURL?: string;
  category: FeatureCategory;
  secondaryCategories?: FeatureCategory[];
  literalMeaning: string;
  sociolectMeaning: string;
  pragmatics: {
    primaryMechanism: PragmaticMechanism;
    secondaryMechanisms?: PragmaticMechanism[];
    analysis: string;
  };
  nlpComparison: {
    standardLabel: "Positive" | "Neutral" | "Negative";
    actualIntent: "Positive" | "Neutral" | "Sarcastic/Banter";
    whyNLPFails: string;
  };
}

export const SPORTSTWT_CORPUS: CorpusEntry[] = [
  // ================= SOCCER / FUTBOL (3 Active) =================
  {
    id: "soc-01",
    community: "Soccer/Futbol",
    tweetText:
      "wearing my barça rain jacket and someone said visca barça to me",
    targetExpression: "visca barça",
    context:
      "Posted by an FC Barcelona supporter (@simpleculer) recounting a real-life fan greeting while wearing a Barça rain jacket, with replies referencing the 'Visca Catalunya' call-and-response and praising the use of the cedilla (ç) in 'Barça'.",
    tweetURL: "https://x.com/simpleculer/status/2123418270791524631?a=2HwgOjuylTpL7H_8GDk&s=46",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning:
      "Wearing rainwear bearing the name of a soccer club and receiving a greeting in Catalan.",
    sociolectMeaning:
      "A celebratory Catalan rally cry ('Long live Barça!') used as an in-group greeting among FC Barcelona fans, where spelling 'Barça' with 'ç' preserves the soft /s/ sound and signals respect for Catalan identity rather than spelling 'Barca' (which shifts to a hard /k/ sound meaning 'boat').",
    pragmatics: {
      primaryMechanism: "In-group signaling",
      secondaryMechanisms: ["Speech Act", "Conversational Implicature"],
      analysis:
        "Code-switching from English into Catalan ('visca barça', alongside reply references to 'Visca Catalunya' and handles like 'culer') works as a warm greeting speech act and in-group identity marker among Barça supporters. " +
        "The cedilla in 'Barça' also carries real cultural weight: dropping 'ç' to 'c' changes the pronunciation from a soft /s/ to a hard /k/ (meaning 'boat' in Catalan and Spanish), so spelling it properly signals awareness of the club's Catalan roots.",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails:
        "Standard sentiment models often read a short everyday narrative as neutral and ASCII-normalization pipelines frequently strip diacritics like 'ç', missing the code-switched fan greeting, cultural identity cues, and warm positive intent.",
    },
  },
  {
    id: "soc-02",
    community: "Soccer/Futbol",
    tweetText:
      "CITY washed\n" +
      "Bayern injury crisis\n" +
      "PSG injury crisis\n" +
      "Barca are bottlers\n" +
      "Arsenal's attack is trash..",
    targetExpression: "CITY washed / ... Barca are bottlers",
    context:
      "Posted by a Real Madrid supporter (@annxsrmfc) with a reaction GIF and trailing ellipsis dismissing major Champions League rivals to imply Real Madrid is set to win again, sparking replies from a fellow Madrid fan ('This could only mean one thing…'), a Barcelona fan ('cry vardrid dog'), and a City fan ('Just don't let arsenal win').",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning:
      "Listing rival clubs as having been cleaned/rinsed, suffering medical injuries, bottling/pouring liquids, or having literal garbage in their attack.",
    sociolectMeaning:
      "Dismissing major Champions League rivals as past their prime ('washed'), injury-hampered, choke artists ('bottlers'), or lacking firepower to push the narrative that Real Madrid will claim the trophy.",
    pragmatics: {
      primaryMechanism: "Conversational Implicature",
      secondaryMechanisms: ["In-group signaling", "Banter / Face-threat"],
      analysis:
        "The tweet relies heavily on conversational implicature: it never names Real Madrid directly, leaving the conclusion ('...so Real Madrid is winning the Champions League') unstated via a trailing ellipsis and GIF while signaling allegiance through the handle ('rmfc') and bio. " +
        "Compact Football Twitter slang ('washed', 'bottlers') and reply insults like 'Vardrid' (a blend of VAR and Madrid) act as tribal shorthand, while replies from other fanbases turn the thread into layered rival banter—including a City fan hoping anyone but Arsenal wins.",
    },
    nlpComparison: {
      standardLabel: "Negative",
      actualIntent: "Sarcastic/Banter",
      whyNLPFails:
        "Standard sentiment tools latch onto words like 'washed', 'injury crisis', 'bottlers', and 'trash' as negative and miss the unstated Real Madrid agenda-pushing implicature, handle/bio cues, and Football Twitter banter.",
    },
  },
  
  {
    id: "soc-03",
    community: "Soccer/Futbol",
    tweetText:
      "Cubarsí giving us an early trailer of what's going to happen in UCL KOs",
    targetExpression: "early trailer of what's going to happen in UCL KOs",
    context:
      "Posted by an FC Barcelona supporter (@AdiiiFCB) reacting to a defensive mistake by young center-back Pau Cubarsí during an international match, framing it as a preview of future UEFA Champions League knockout heartbreak alongside replies mocking Lamine Yamal ('ballon dor winner') and calling out 'bozo defenders'.",
    tweetURL: "https://x.com/adiiifcb/status/2122065380915249561",
    category: "Multi-Word Expression",
    literalMeaning:
      "A short promotional preview clip of a film showing scenes from upcoming UEFA Champions League knockout games.",
    sociolectMeaning:
      "A defensive blunder seen as an early warning sign of another calamitous Barcelona exit in the Champions League knockouts.",
    pragmatics: {
      primaryMechanism: "Conversational Implicature",
      secondaryMechanisms: ["Banter / Face-threat", "In-group signaling"],
      analysis:
        "Framing a defensive error as an 'early trailer' uses Football Twitter's recurring 'scripted movie' metaphor to implicate that Barcelona's Champions League knockout troubles are already foreshadowed. " +
        "Even though the poster supports Barça, fans routinely roast their own side with dark humor after costly mistakes, while replies amplify the banter through sarcastic hype ('ballon dor winner lamine'), 'bozo defender' slander for big-game brain fades, and follow-up 'movie' jokes.",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Sarcastic/Banter",
      whyNLPFails:
        "Standard sentiment models treat 'early trailer' as literal media/event commentary—and miss the sarcasm in phrases like 'ballon dor winner'—overlooking the self-deprecating Champions League joke and rival banter.",
    },
  },


  // ================= NBA (3 Active) =================
  {
    id: "nba-01",
    community: "NBA",
    tweetText: "Silver glazing us nonstop 😭😭😭",
    targetExpression: "glazing",
    context: "Subtweeting a viral Victor Wembanyama highlight play by mentioning NBA Commissioner Adam Silver.",
    tweetURL: "https://x.com/seeqent/status/2123879240303059014?a=rmZbOh6-pcsNeuU0XZo&s=46",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "Applying a glossy liquid coating (such as sugar icing or ceramic glaze) to a surface.",
    sociolectMeaning: "praising a person or team excessively, or dramaticially that it comes across as over the top and bias",
    pragmatics: {
      primaryMechanism: "Speech Act",
      secondaryMechanisms: ["In-group signaling", "Conversational Implicature", "Banter / Face-threat"],
      analysis: 
      "Referring to NBA Commissioner Adam Silver, the tweet signals NBA twitter lore" +
      "(the running joke/theory that the league is constantly marketing and force-feeding Wembanyama highlights to make him the face of the leauge)" +
      "Using 'us' operates on two layers of NBA Twitter fan discourse: literally signaling collective solidarity with Wembanyama's fanbase (treating a star's stan community like its own franchise), " +
      "while playfully blurring the line between supporter and athlete as if the poster is physically on the court. " 
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "Standard sentiment tools read 'glazing' by its literal dictionary sense—putting a glossy coating on a surface—and" +
      "miss how the pronoun 'us' plus the Adam Silver reference turns a mock accusation into genuine hype for Wembanyama.",
    },
  },
  {
    id: "nba-02",
    community: "NBA",
    tweetText:
      'Coworker FC just called LeBron “bronze” to my face\n' +
      "Time to get an HR meeting",
    targetExpression: "bronze",
    context:
      "Posted by a LeBron James fan using a made-up workplace story and a reaction video clip to joke about casual fans calling LeBron 'bronze' (short for 'LeBronze').",
    tweetURL: "https://x.com/brongotit/status/2122750773956120858",
    category: "Morphological Blend",
    secondaryCategories: ["Lexical Ambiguity (Polysemy)"],
    literalMeaning:
      "A brownish metal alloy made of copper and tin, or the third-place medal in a competition.",
    sociolectMeaning:
      "A clipped form of the slander nickname 'LeBronze,' mocking LeBron James as a third-place finisher rather than the GOAT.",
    pragmatics: {
      primaryMechanism: "Banter / Face-threat",
      secondaryMechanisms: ["Conversational Implicature", "In-group signaling"],
      analysis:
        "The poster is making up a fictional scenario—a common NBA Twitter storytelling format used to set up a reaction video—where a casual coworker uses 'bronze' (a clipped version of 'LeBronze') to provoke a LeBron fan. " +
        "Instead of taking the slander seriously, the poster leans into hyperbolic banter by joking that it warrants an HR meeting. " +
        "Labeling the fictional coworker 'Coworker FC' also borrows 'FC' from soccer (Football Club), where NBA and NFL Twitter have shifted it to mean 'Fan Club' to playfully group casual fans together as their own mock fanbase.",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Sarcastic/Banter",
      whyNLPFails:
        "Standard sentiment tools read 'bronze' as a neutral noun and take the made-up 'HR meeting' complaint at face value, missing the 'LeBronze' slander, the hyperbolic joke, and the soccer-borrowed 'FC' ('Fan Club') label.",
    },
  },
  {
    id: "nba-03",
    community: "NBA",
    tweetText: "Lebron MVP chants in Orlando at 42. This fuckery is forever.",
    targetExpression: "This fuckery is forever",
    context:
      "Posted after a 42-year-old LeBron James received 'MVP' chants during a road game in Orlando, flipping a famous 2015 tweet that predicted his decline at age 30.",
    tweetURL: "https://x.com/tayoshi222/status/2123244080109133871",
    category: "Valence Inversion",
    secondaryCategories: ["Multi-Word Expression"],
    literalMeaning:
      "Foolishness, irritating nonsense, or unfair behavior that will never end.",
    sociolectMeaning:
      "LeBron James's unreals and seemingly permanent dominace and longetivity in the NBA, despite being 42 years old.",
    pragmatics: {
      primaryMechanism: "In-group signaling",
      secondaryMechanisms: ["Presupposition", "Speech Act"],
      analysis:
        "To catch the full meaning here, you have to know the viral 2015 NBA Twitter post that said, 'LeBron is 30, this fuckery won't go on for much longer, thank god.' " +
        "By flipping that quote into 'This fuckery is forever' at age 42, the poster is performing a celebratory speech act of praise while signaling insider NBA Twitter knowledge. " +
        "The profanity 'fuckery' undergoes valence inversion—instead of complaining about annoying behavior, it expresses amazement at how long LeBron has stayed at an MVP level.",
    },
    nlpComparison: {
      standardLabel: "Negative",
      actualIntent: "Positive",
      whyNLPFails:
        "Standard sentiment models immediately flag the profanity 'fuckery' as negative and miss both the valence inversion and the callback to the 2015 LeBron tweet.",
    },
  },

  // ================= NFL (3 Active) =================
  {
    id: "nfl-01",
    community: "NFL",
    tweetText: "Jalen just threw a Wawa Hoagiefest what the fuck",
    targetExpression: "threw a Wawa Hoagiefest",
    context:
      "Posted by a Philadelphia Eagles fan reacting to quarterback Jalen Hurts throwing an interception, adapting the common NFL joke about a QB throwing a sandwich or sub instead of a pass with a local Philly reference.",
    tweetURL: "https://x.com/icyvert/status/2104762360497868896?a=zs7sTCFSdzg12azJIIc&s=46",
    category: "Multi-Word Expression",
    literalMeaning:
      "Tossing a sandwich promotion or sub event from Wawa instead of throwing a football.",
    sociolectMeaning:
      "Throwing an awful, off-target pass or interception, playfully swapping in a beloved Philly hoagie staple.",
    pragmatics: {
      primaryMechanism: "Conversational Implicature",
      secondaryMechanisms: ["In-group signaling", "Banter / Face-threat"],
      analysis:
        "On NFL Twitter, whenever a quarterback throws a bad pick or wild pass, fans joke that they threw a sandwich, sub, or burger instead of a football. " +
        "Swapping in 'Wawa Hoagiefest' takes that running joke and brings in a staple that Philly fans know and love, signaling shared fan culture while implicating that Hurts's pass was way off target. " +
        "Even with 'what the fuck' right after, the poster is venting frustration through exaggerated sports humor rather than making a literal claim.",
    },
    nlpComparison: {
      standardLabel: "Negative",
      actualIntent: "Sarcastic/Banter",
      whyNLPFails:
        "Standard sentiment tools get tripped up by 'what the fuck' and take 'threw a Wawa Hoagiefest' literally, missing the recurring NFL 'thrown sandwich' joke and the Philly local reference.",
    },
  },
  {
    id: "nfl-02",
    community: "NFL",
    tweetText:
      "226 bookmarks bears fc getting ready to blitz someone whose a fan of a team that has red40 liquid iv mckinstry as cb1",
    targetExpression: "red40 liquid iv mckinstry as cb1 / bears fc / blitz",
    context:
      "Posted by a Saints fan (@AlexTopsAll2) reacting to another Saints fan (@CHR1S0LAVE) predicting the defense would hold the Bears under 25 points—and Bears fans bookmarking the post to hold receipts if that prediction blows up.",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning:
      "A football club making a defensive rush toward a quarterback, paired with a cornerback named McKinstry and references to food coloring and hydration packets.",
    sociolectMeaning:
      "Bears fans saving a bold prediction to pile on a Saints fan who's overconfident with Kool-Aid McKinstry as their #1 cornerback.",
    pragmatics: {
      primaryMechanism: "Banter / Face-threat",
      secondaryMechanisms: ["In-group signaling", "Conversational Implicature"],
      analysis:
        "Here, a Saints fan is basically roasting their own fanbase's confidence after someone claimed New Orleans would hold Chicago under 25. " +
        "'226 bookmarks' points to Bears fans saving the post to pull receipts later if the Bears run up the score, while 'bears fc getting ready to blitz someone' uses 'FC' (borrowed from soccer's Football Club to mean Fan Club) and 'blitz' to frame Bears fans as a coordinated pack ready to jump into the replies. " +
        "Calling out 'red40 liquid iv mckinstry as cb1' riffs on Kool-Aid McKinstry's nickname by swapping in artificial red dye and a hydration packet, making the punchline that New Orleans shouldn't talk big with him as CB1.",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Sarcastic/Banter",
      whyNLPFails:
        "Standard sentiment tools read 'blitz', 'red40', 'liquid iv', and '226 bookmarks' as neutral or literal details and miss the receipt-bookmarking setup, 'FC' fan-club shift, and the Kool-Aid McKinstry nickname riff.",
    },
  },
  
  {
    id: "nfl-03",
    community: "NFL",
    tweetText: 'The NFL "suspending" Puka Nacua while he\'s on IR',
    targetExpression: '"suspending" ... while he\'s on IR',
    context:
      "Reacting to the NFL's three-game personal conduct suspension of Rams wide receiver Puka Nacua while he is already on Injured Reserve (and likely out for the season following knee surgery), paired with a video of someone pretending to help lift an item for trash and then high-fiving the person actually carrying it.",
    tweetURL: "https://x.com/42cyc/status/2123516961804206314?a=5aorgMqYcj0a8zyctJs&s=46",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning:
      "Barring a player from participating in games as a disciplinary penalty.",
    sociolectMeaning:
      "Applying a game suspension when the player is already injured and unable to play anyway, making the on-field penalty feel like a freebie.",
    pragmatics: {
      primaryMechanism: "Conversational Implicature",
      secondaryMechanisms: ["Banter / Face-threat", "In-group signaling"],
      analysis:
        "Putting 'suspending' in quotes flags the catch here: Nacua is already out on Injured Reserve, so serving three games of a suspension while hurt doesn't cost him extra active snaps. " +
        "The video makes that point visual—the NFL is like the person faking a lift while others carry something out, then high-fiving like they put in real work. " +
        "Even though he still forfeits roughly $961,000 in game checks and faces a warning about future violations or his diversion program, fans are calling out the timing because on the surface it looks like a convenient way to knock out the ban while he's sidelined anyway.",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Sarcastic/Banter",
      whyNLPFails:
        "Standard sentiment tools read 'suspending' as a straightforward disciplinary news update and miss both the scare-quote irony around an IR suspension and the visual joke of faking effort for a high-five.",
    },
  },
  

  /* ================= FUTURE EXPANSION (04–10 per community) =================
  Uncomment and duplicate the template above when expanding from 9 to 30 posts:

  ----------------------------------------------------------------------------
  - soccer-04 through soccer-10 (community: "Soccer/Futbol")
  {
    id: "soccer-04",
    community: "Soccer/Futbol",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },
  {
    id: "soccer-05",
    community: "Soccer/Futbol",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },
  {
    id: "soccer-06",
    community: "Soccer/Futbol",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },
  {
    id: "soccer-07",
    community: "Soccer/Futbol",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },
  {
    id: "soccer-08",
    community: "Soccer/Futbol",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },
  {
    id: "soccer-09",
    community: "Soccer/Futbol",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },

  {
    id: "soccer-10",
    community: "Soccer/Futbol",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },

  --------------------------------------------------------
  - nba-04 through nba-10 (community: "NBA")
  {
    id: "nba-04",
    community: "NBA",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },
  {
    id: "nba-05",
    community: "NBA",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },
  {
    id: "nba-06",
    community: "NBA",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },
  {
    id: "nba-07",
    community: "NBA",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },
  {
    id: "nba-08",
    community: "NBA",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },

  {
    id: "nba-09",
    community: "NBA",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },

  {
    id: "nba-10",
    community: "NBA",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },

  ------------------------------------------------------------------
  - nfl-04 through nfl-10 (community: "NFL")
  
  {
    id: "nfl-04",
    community: "NFL",
    tweetText: "fuck he so cold",
    targetExpression: "fuck he so cold",
    context:
      "Posted by a Seattle Seahawks fan (@NotLikeRuss) reacting to an @NFL highlight clip during a November 15, 2026 Chiefs vs. 49ers game, with replies calling out 'chain dangling aura' and hyping a potential Super Bowl rematch.",
    tweetURL: "https://x.com/NotLikeRuss/status/2122071528338776198",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning:
      "Having a low temperature or lacking warmth/emotion.",
    sociolectMeaning:
      "Effortlessly skilled, composed under pressure, and stylish during a big play.",
    pragmatics: {
      primaryMechanism: "In-group signaling",
      secondaryMechanisms: ["Speech Act", "Conversational Implicature"],
      analysis:
        "Here, 'fuck he so cold' is a straight-up speech act of praise—even though @NotLikeRuss is a Seahawks fan, they're giving props to a Chiefs play against Seattle's division rival, the 49ers. " +
        "Replies adding 'chain dangling aura' and 'See you in the bowl' lean into shared Sports Twitter slang where 'aura' means cool presence and swagger, while temporary Seahawks–Chiefs solidarity against San Francisco sets up banter around a possible Super Bowl matchup.",
    },
    nlpComparison: {
      standardLabel: "Negative",
      actualIntent: "Positive",
      whyNLPFails:
        "Standard sentiment tools flag 'fuck' and read 'cold' as negative or literal temperature, missing the slang shift to 'smooth/skilled' and the cross-fanbase hype against a rival team.",
    },
  },

  {
    id: "nfl-05",
    community: "NFL",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },
  {
    id: "nfl-06",
    community: "NFL",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },
  {
    id: "nfl-07",
    community: "NFL",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },
  {
    id: "nfl-08",
    community: "NFL",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },
  {
    id: "nfl-09",
    community: "NFL",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },
  {
    id: "nfl-10",
    community: "NFL",
    tweetText: "",
    targetExpression: "",
    context: "",
    tweetURL: "",
    category: "Lexical Ambiguity (Polysemy)",
    literalMeaning: "",
    sociolectMeaning: "",
    pragmatics: {
      primaryMechanism: "Speech Act",
      analysis: "",
    },
    nlpComparison: {
      standardLabel: "Neutral",
      actualIntent: "Positive",
      whyNLPFails: "",
    },
  },

  */
];
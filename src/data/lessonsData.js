/**
 * Stage and Level definitions for the 300+ Curriculum
 */
export const LESSON_STAGES = [
  {
    id: 1,
    title: "Stage 1: Home Row Foundations",
    badge: "Home Row",
    range: "Lessons 1 – 40",
    startId: 1,
    endId: 40,
    description: "Anchor your fingers on ASDF and JKL;. Master tactile F and J bumps and thumb spacebar.",
    color: "from-pink-500 to-rose-500",
    kawaiiIcon: "🎀",
    icon: "KeyRound"
  },
  {
    id: 2,
    title: "Stage 2: Top Row & Upper Reaches",
    badge: "Top Row",
    range: "Lessons 41 – 85",
    startId: 41,
    endId: 85,
    description: "Reach upward to QWERTYUIOP without floating your wrists off the baseline.",
    color: "from-rose-400 to-pink-500",
    kawaiiIcon: "🌸",
    icon: "ArrowUpRight"
  },
  {
    id: 3,
    title: "Stage 3: Bottom Row Mastery",
    badge: "Bottom Row",
    range: "Lessons 86 – 130",
    startId: 86,
    endId: 130,
    description: "Downward finger curls to ZXCVBNM, commas, periods, and slashes.",
    color: "from-fuchsia-500 to-pink-600",
    kawaiiIcon: "🍓",
    icon: "ArrowDownRight"
  },
  {
    id: 4,
    title: "Stage 4: Capital Letters & Shift Keys",
    badge: "Shift & Caps",
    range: "Lessons 131 – 170",
    startId: 131,
    endId: 170,
    description: "Opposite pinky Shift key coordination for capitalizing letters smoothly.",
    color: "from-purple-500 to-pink-500",
    kawaiiIcon: "👑",
    icon: "Sparkles"
  },
  {
    id: 5,
    title: "Stage 5: Numbers, Punctuation & Symbols",
    badge: "Symbols",
    range: "Lessons 171 – 215",
    startId: 171,
    endId: 215,
    description: "Top number row reaches 1-0 and essential symbols (!, ?, #, $, %, @, &).",
    color: "from-amber-400 to-pink-500",
    kawaiiIcon: "⭐",
    icon: "Hash"
  },
  {
    id: 6,
    title: "Stage 6: Word Frequency & Muscle Memory",
    badge: "Conditioning",
    range: "Lessons 216 – 255",
    startId: 216,
    endId: 255,
    description: "Top 100 English words, common digrams (th, er, in), and rhythm consistency.",
    color: "from-emerald-400 to-teal-500",
    kawaiiIcon: "🍎",
    icon: "Zap"
  },
  {
    id: 7,
    title: "Stage 7: Real-World Fluency & Cute Stories",
    badge: "Fluency",
    range: "Lessons 256 – 285",
    startId: 256,
    endId: 285,
    description: "Adorable Hello Kitty friendship tales, tea party notes, and professional writing.",
    color: "from-pink-400 to-rose-500",
    kawaiiIcon: "🐱",
    icon: "Heart"
  },
  {
    id: 8,
    title: "Stage 8: Coding Syntax & Mastery Challenge",
    badge: "Mastery",
    range: "Lessons 286 – 310",
    startId: 286,
    endId: 310,
    description: "HTML tags, JavaScript syntax, brackets {}, and Grand Master certification sprints.",
    color: "from-indigo-500 to-purple-600",
    kawaiiIcon: "🏆",
    icon: "Award"
  }
];

// Helper to generate procedural lesson items
function generateAllLessons() {
  const lessons = [];

  // ==========================================
  // STAGE 1: HOME ROW FOUNDATIONS (1 - 40)
  // ==========================================
  const stage1Exercises = [
    { title: "Finding F and J Tactile Anchors", focus: ["f", "j", " "], text: "f j f j fj jf ff jj fj jf f j f j ff jj fj jf", desc: "Feel the small raised bumps on F and J with your index fingers." },
    { title: "Left Index Finger: F Drills", focus: ["f", " "], text: "f f ff fff f f ff fff f ff fff f ff f ff fff", desc: "Train your left index finger to strike F with relaxed pressure." },
    { title: "Right Index Finger: J Drills", focus: ["j", " "], text: "j j jj jjj j j jj jjj j jj jjj j jj j jj jjj", desc: "Train your right index finger to strike J cleanly." },
    { title: "Alternating F and J Rhythm", focus: ["f", "j", " "], text: "fj jf ff jj fj jf ff jj f j fj jf f j fj jf", desc: "Switch smoothly between left and right index fingers." },
    { title: "Thumb Spacebar Integration", focus: ["f", "j", " "], text: "f j f j  fj jf  ff jj  f j  jf fj  ff jj  f j", desc: "Use whichever thumb rests most naturally above the spacebar." },
    { title: "Left Middle Finger: D Key", focus: ["d", "f", " "], text: "d f d f df fd dd ff df fd d f df fd dd ff", desc: "Position your left middle finger directly on D next to F." },
    { title: "Right Middle Finger: K Key", focus: ["k", "j", " "], text: "k j k j kj jk kk jj kj jk k j kj jk kk jj", desc: "Position your right middle finger on K next to J." },
    { title: "Combining D and K Harmony", focus: ["d", "k", " "], text: "d k d k dk kd dd kk d k dk kd dd kk dk kd", desc: "Both middle fingers working together in alternating beats." },
    { title: "Core 4-Key Drill (D, F, J, K)", focus: ["d", "f", "j", "k"], text: "df jk fd kj dfjk jkdf dk fj kf jd dkfj jkfd", desc: "Master the central four home row keys." },
    { title: "Left Ring Finger: S Key", focus: ["s", "d", "f"], text: "s d f s df sd ss ff ss dd ss ff sdf fds", desc: "Place left ring finger on S without moving wrist." },
    { title: "Right Ring Finger: L Key", focus: ["l", "k", "j"], text: "l k j l kj lk ll jj ll kk ll jj lkj jkl", desc: "Place right ring finger on L and keep finger curved." },
    { title: "Combining S and L Ring Agility", focus: ["s", "l", " "], text: "s l s l sl ls ss ll s l sl ls ss ll sl ls", desc: "Ring fingers require deliberate conditioning to build independence." },
    { title: "6-Key Home Flow (S, D, F, J, K, L)", focus: ["s", "d", "f", "j", "k", "l"], text: "sdf jkl fds lkj sdl fjk sl dk sk dl sdf jkl", desc: "Flow smoothly across three fingers on each hand." },
    { title: "Left Pinky Anchor: A Key", focus: ["a", "s", "d", "f"], text: "a s d f asdf fdsa a s d f aa ss dd ff asdf", desc: "Left pinky anchors on A — the outer home row pillar." },
    { title: "Right Pinky Anchor: Semicolon ;", focus: [";", "l", "k", "j"], text: "; l k j ;l l; ;; ll kk ;; ;lkj jkl; ;lkj", desc: "Right pinky anchors gently on the semicolon key." },
    { title: "The Complete 8-Key Home Row", focus: ["a", "s", "d", "f", "j", "k", "l", ";"], text: "asdf jkl; fdsa ;lkj asdf ;lkj a s d f j k l ;", desc: "All ten fingers now have their resting positions established." },
    { title: "Home Row 2-Letter Syllables", focus: ["a", "s", "d", "f", "j", "k", "l"], text: "as ad al fa da ka la ja sa fa da la ka as", desc: "Simple syllables build foundational finger memory." },
    { title: "Word Practice: As, Ask, All", focus: ["a", "s", "k", "l"], text: "as ask all as ask all ask all as all ask as", desc: "Real English words using only the home row." },
    { title: "Word Practice: Sad, Lad, Fad", focus: ["s", "a", "d", "l", "f"], text: "sad lad fad sad lad fad lad fad sad fad lad", desc: "Short 3-letter home row words." },
    { title: "Word Practice: Dad, Flash, Fall", focus: ["d", "a", "f", "l", "s"], text: "dad fall fad lad sad fall dad fall lad sad", desc: "Double letter timing on home row keys." },
    { title: "Word Practice: Salad, Flask", focus: ["s", "a", "l", "d", "f", "k"], text: "salad flask salad flask flask salad salad flask", desc: "5-letter words with alternating hand strokes." },
    { title: "Word Practice: Glad, Flak, Dallas", focus: ["g", "l", "a", "d", "s", "f", "k"], text: "glad flak glad flak alfalfa dallas salad glad", desc: "Expand rhythm across longer home combinations." },
    { title: "Home Row Rhythm Workout 1", focus: ["a", "s", "d", "f", "j", "k", "l", ";"], text: "all dads ask a lad; a sad lad falls; all salads fall;", desc: "First complete home row sentence drill." },
    { title: "Home Row Rhythm Workout 2", focus: ["a", "s", "d", "f", "j", "k", "l", ";"], text: "a flask falls; a glad lad asks; salad falls as a lad asks;", desc: "Focus on zero typos and steady keystrokes." },
    { title: "Home Row Speed Sprint 1", focus: ["a-l"], text: "ask all dads; fall as a lad asks; a sad lad falls; flask falls;", desc: "Pick up pace while maintaining relaxed hands." },
    { title: "Home Row Speed Sprint 2", focus: ["a-l"], text: "glad lads fall; all dads ask; salad falls; ask a sad lad;", desc: "Effortless home row coordination." },
    { title: "Double Letter Precision: LL, SS, FF", focus: ["l", "s", "f"], text: "all fall lass fall all lass fall lass all fall", desc: "Double taps without locking your fingers." },
    { title: "Home Row Symmetry Test", focus: ["a-;", " "], text: "asdf ;lkj asdf ;lkj fdsa jkl; fdsa jkl; asdf ;lkj", desc: "Mirror transitions between left and right hands." },
    { title: "Home Row Endurance Drill A", focus: ["all-home"], text: "a lad asks all dads; a salad falls; all lads ask for a flask;", desc: "Sustain focus across multi-clause home row phrases." },
    { title: "Home Row Endurance Drill B", focus: ["all-home"], text: "fall fall all all ask ask sad sad lad lad glad glad;", desc: "Repetition cements muscle memory pathways." },
    { title: "Home Row Finger Independence 1", focus: ["s", "k", "d", "l"], text: "sk dl sk dl skdl dlsk sdk lkd sk dl sk dl", desc: "Isolate ring and middle fingers." },
    { title: "Home Row Finger Independence 2", focus: ["a", ";", "f", "j"], text: "af ;j af ;j af;j ;jaf a f ; j af ;j af ;j", desc: "Isolate pinky and index finger reaches." },
    { title: "Home Row Micro-Words", focus: ["home"], text: "fad fas laf sal kas dal fal las sas kas das", desc: "Nonsense syllables train pure mechanical dexterity." },
    { title: "Home Row Common Patterns", focus: ["home"], text: "al la as sa ad da af fa ak ka aj ja al la", desc: "Reversible patterns condition both directions." },
    { title: "Home Row Paragraph Flow", focus: ["home"], text: "a sad lad ask all glad dads; a salad falls as all lads ask;", desc: "Flow like water without pausing between words." },
    { title: "Home Row Milestone Sprint A", focus: ["home"], text: "ask a lad; salad falls; all dads fall; glad lads ask;", desc: "Target 20+ WPM with 95%+ accuracy." },
    { title: "Home Row Milestone Sprint B", focus: ["home"], text: "a glad lad asks all dads; a sad flask falls; all salads fall;", desc: "Target 22+ WPM with 96%+ accuracy." },
    { title: "Home Row Precision Check", focus: ["home"], text: "all falls ask glad salad alfalfa flask fall sad lad dallas", desc: "Zero backspaces challenge." },
    { title: "Home Row Master Drill", focus: ["home"], text: "a lad asks all glad dads for a salad; a sad lad falls as a flask falls;", desc: "Long uninterrupted home row composition." },
    { title: "Stage 1 Graduation Challenge", focus: ["home"], text: "congratulations on mastering the home row! your fingers are now anchored and ready to reach up.", desc: "Graduation milestone for Stage 1." }
  ];

  stage1Exercises.forEach((ex, idx) => {
    lessons.push({
      id: idx + 1,
      stage: 1,
      level: 1,
      title: `Lesson ${idx + 1}: ${ex.title}`,
      shortDesc: ex.desc,
      instructions: "Keep your wrists floating gently. Curved fingers, relaxed shoulders.",
      focusKeys: ex.focus,
      text: ex.text,
      targetAccuracy: 95,
      minWpmTarget: Math.min(22, 10 + Math.floor(idx / 4))
    });
  });

  // ==========================================
  // STAGE 2: TOP ROW & UPPER REACHES (41 - 85)
  // ==========================================
  const stage2Exercises = [
    { title: "Reaching Up to E (Left Middle)", focus: ["e", "d"], text: "de ed de ed ded ede de ed see deed feed seed", desc: "Reach left middle finger up from D to E." },
    { title: "Reaching Up to I (Right Middle)", focus: ["i", "k"], text: "ki ik ki ik kik iki ki ik ill kill silk fill", desc: "Reach right middle finger up from K to I." },
    { title: "Combining E and I Vowels", focus: ["e", "i"], text: "side like life file slide dial idea like silk", desc: "The two most essential middle-finger top row vowels." },
    { title: "Reaching Up to R (Left Index)", focus: ["r", "f"], text: "fr rf fr rf frf rfr free red fire dark fear", desc: "Reach left index finger up from F to R." },
    { title: "Reaching Up to U (Right Index)", focus: ["u", "j"], text: "ju uj ju uj juj uju full dull duel junk fuel", desc: "Reach right index finger up from J to U." },
    { title: "Top Row Index Flow: R and U", focus: ["r", "u"], text: "run fur sure rule rush rust rural fluid fruit", desc: "Coordination between left index R and right index U." },
    { title: "Reaching Up to T (Left Index)", focus: ["t", "f"], text: "ft tf ft tf ftf tft tell take fast little tail", desc: "Left index reaches up and slightly inward to T." },
    { title: "Reaching Up to Y (Right Index)", focus: ["y", "j"], text: "jy yj jy yj jyj yjy day say play lady stay dry", desc: "Right index reaches up and inward to Y." },
    { title: "Combining T and Y Cross-Reaches", focus: ["t", "y"], text: "they stay city pretty party dirty yesterday trust", desc: "Inward top row reaches." },
    { title: "Reaching Up to W (Left Ring)", focus: ["w", "s"], text: "sw ws sw ws sws wsw wall will wait wish drew", desc: "Reach left ring finger up from S to W." },
    { title: "Reaching Up to O (Right Ring)", focus: ["o", "l"], text: "lo ol lo ol lol olo look took solo food cold", desc: "Reach right ring finger up from L to O." },
    { title: "Combining W and O Ring Agility", focus: ["w", "o"], text: "slow wood work wool blow flow grow snow show", desc: "Ring fingers coordinating top row reaches." },
    { title: "Reaching Up to Q (Left Pinky)", focus: ["q", "a"], text: "aq qa aq qa qaq quick quit quiet queen squad", desc: "Left pinky extends up from A to Q." },
    { title: "Reaching Up to P (Right Pinky)", focus: ["p", ";"], text: ";p p; ;p p; pl lp people keep part play deep", desc: "Right pinky reaches up from semicolon to P." },
    { title: "Combining Q and P Pinky Bounds", focus: ["q", "p"], text: "equip pique qualify purple equip pique prompt", desc: "Pinky reaches on the upper keyboard rim." },
    { title: "Top Row Vowels: A, E, I, O, U", focus: ["vowels"], text: "idea equal out loud queue adult auto house guide", desc: "Vowel flow is the engine of English typing." },
    { title: "Words with ER Digram", focus: ["e", "r"], text: "her river water under after silver father letter", desc: "The 'er' combination appears in thousands of words." },
    { title: "Words with IN Digram", focus: ["i", "n"], text: "in find line rain train winter shine spring", desc: "Smooth index and middle finger sequence." },
    { title: "Words with TH Digram", focus: ["t", "h"], text: "the that with this there thank think three", desc: "The single most common digram in English." },
    { title: "Words with OU Digram", focus: ["o", "u"], text: "out our your four cloud proud house sound", desc: "Right ring to right index roll." },
    { title: "Words with EA Digram", focus: ["e", "a"], text: "eat read team real dream clear peace clean", desc: "Middle to pinky roll on left hand." },
    { title: "Top Row Left Hand Only: QWERT", focus: ["qwert"], text: "tree water treat straw trade rewrite sweet", desc: "Left hand upper dexterity." },
    { title: "Top Row Right Hand Only: YUIOP", focus: ["yuiop"], text: "you pour poly lily puppy joy pool loop pill", desc: "Right hand upper dexterity." },
    { title: "Alternating Left and Right Top Words", focus: ["top"], text: "type wipe your wire tour root port pure quit", desc: "Hand alternation creates rapid typing velocity." },
    { title: "Combining Top and Home Rows 1", focus: ["top", "home"], text: "we write reports today for our people to read", desc: "Natural English sentence construction." },
    { title: "Combining Top and Home Rows 2", focus: ["top", "home"], text: "yellow flowers grow fast after early spring rain", desc: "Notice how your hands naturally glide back home." },
    { title: "Combining Top and Home Rows 3", focus: ["top", "home"], text: "quiet waters reflect tall trees beside great walls", desc: "Maintain rhythmic cadence across all words." },
    { title: "Top Row Double Letters: EE and OO", focus: ["ee", "oo"], text: "see tree keep deep foot look cool door wool", desc: "Double letter stability." },
    { title: "Prefix Practice: RE and PRE", focus: ["re", "pre"], text: "repeat review preview prepare return rebuild", desc: "Common grammatical prefixes." },
    { title: "Suffix Practice: ED and ING", focus: ["ed", "ing"], text: "walked looked worked playing talking running", desc: "Common verb endings." },
    { title: "Suffix Practice: TION and SION", focus: ["tion"], text: "action station nation option portion edition", desc: "Right hand top row rhythm." },
    { title: "Common 4-Letter Top Row Words", focus: ["top"], text: "time year week life part work tell true pure", desc: "Essential everyday vocabulary." },
    { title: "Common 5-Letter Top Row Words", focus: ["top"], text: "water write power earth point right world house", desc: "5-letter building blocks." },
    { title: "Common 6-Letter Top Row Words", focus: ["top"], text: "people report little street flower letter winter", desc: "Stamina across longer words." },
    { title: "Short Phrase Flow Drill", focus: ["top"], text: "it is true that we wish to write well today", desc: "Breathe evenly while typing." },
    { title: "Speed Burst on Top Row A", focus: ["top"], text: "quite true people write polite reports after we start", desc: "Target 25+ WPM." },
    { title: "Speed Burst on Top Row B", focus: ["top"], text: "you will see yellow flowers grow after every light rain", desc: "Target 26+ WPM." },
    { title: "Top Row Accuracy Challenge 1", focus: ["top"], text: "sweet fruits grow where tall trees protect wild deer", desc: "Zero errors goal." },
    { title: "Top Row Accuracy Challenge 2", focus: ["top"], text: "write three polite letters to your team leaders today", desc: "Smooth transitions." },
    { title: "Upper Keyboard Dexterity Marathon", focus: ["top"], text: "every polite person wants to work quietly while yellow leaves fall", desc: "Endurance paragraph." },
    { title: "Top Row Micro-Transitions", focus: ["top"], text: "qw er ty ui op po iu yt re wq qwert yuiop", desc: "Sequential ladder runs." },
    { title: "Top Row Precision Test", focus: ["top"], text: "quality equipment produces proud people with great power", desc: "Accuracy milestone." },
    { title: "Stage 2 Fluency Check", focus: ["top"], text: "the whole world waits for your true ideas to take flight", desc: "Fluency review." },
    { title: "Stage 2 Speed Sprint", focus: ["top"], text: "write fast with great care and proud speed every single day", desc: "Sprint before graduation." },
    { title: "Stage 2 Graduation Challenge", focus: ["top"], text: "you have conquered both the home row and top row with flying colors!", desc: "Stage 2 mastery badge." }
  ];

  stage2Exercises.forEach((ex, idx) => {
    lessons.push({
      id: 40 + idx + 1,
      stage: 2,
      level: 2,
      title: `Lesson ${40 + idx + 1}: ${ex.title}`,
      shortDesc: ex.desc,
      instructions: "Snap your fingers back to the home row resting keys after every reach.",
      focusKeys: ex.focus,
      text: ex.text,
      targetAccuracy: 95,
      minWpmTarget: Math.min(28, 16 + Math.floor(idx / 4))
    });
  });

  // ==========================================
  // STAGE 3: BOTTOM ROW MASTERY (86 - 130)
  // ==========================================
  const stage3Exercises = [
    { title: "Reaching Down to C (Left Middle)", focus: ["c", "d"], text: "dc cd dc cd dcd cdc cat call calm race place", desc: "Curl left middle finger down from D to C." },
    { title: "Reaching Down to Comma , (Right Middle)", focus: [",", "k"], text: "k, ,k k, ,k yes, no, come, stay, well, cool,", desc: "Curl right middle finger down from K to comma." },
    { title: "Reaching Down to V (Left Index)", focus: ["v", "f"], text: "fv vf fv vf fvf vfv very view voice brave cave", desc: "Left index curls down to V." },
    { title: "Reaching Down to M (Right Index)", focus: ["m", "j"], text: "jm mj jm mj jmj mjm man moon make calm meet", desc: "Right index curls down to M." },
    { title: "Reaching Down to B (Left Index)", focus: ["b", "f"], text: "fb bf fb bf fbf bfb back book baby blue bird", desc: "Left index extends down and inward to B." },
    { title: "Reaching Down to N (Right Index)", focus: ["n", "j"], text: "jn nj jn nj jnj njn name noon next rain night", desc: "Right index extends down and inward to N." },
    { title: "Center Bottom Transition: B and N", focus: ["b", "n"], text: "bn nb bn nb bank bond born blend brain brown", desc: "Both index fingers coordinating on the bottom row." },
    { title: "Reaching Down to X (Left Ring)", focus: ["x", "s"], text: "sx xs sx xs sxs xsx box fox six next exam excel", desc: "Left ring finger curls down to X." },
    { title: "Reaching Down to Period . (Right Ring)", focus: [".", "l"], text: "l. .l l. .l end. stop. wait. look. done. fast.", desc: "Right ring finger curls down to the period key." },
    { title: "Reaching Down to Z (Left Pinky)", focus: ["z", "a"], text: "az za az za zaz aza zero zone zebra size buzz", desc: "Left pinky extends down to Z." },
    { title: "Reaching Down to Slash / (Right Pinky)", focus: ["/", ";"], text: ";/ /; ;/ /; a/b c/d yes/no and/or in/out", desc: "Right pinky reaches down to the slash key." },
    { title: "Bottom Row Vowels and Nasals: M and N", focus: ["m", "n"], text: "man name moon main many mind menu mountain", desc: "M and N index finger precision." },
    { title: "Bottom Row Consonant Blends: BL and BR", focus: ["b", "l", "r"], text: "blue black blow blend brave bright bring", desc: "Dynamic reaching across rows." },
    { title: "Bottom Row Consonant Blends: CL and CR", focus: ["c", "l", "r"], text: "clear clean climb crab crazy cross crowd", desc: "Middle finger to index finger coordination." },
    { title: "The Classic Pangram Drill 1", focus: ["all-26"], text: "the quick brown fox jumps over the lazy dog.", desc: "Uses every single letter of the alphabet." },
    { title: "The Classic Pangram Drill 2", focus: ["all-26"], text: "pack my box with five dozen liquor jugs.", desc: "Second famous complete alphabet pangram." },
    { title: "The Classic Pangram Drill 3", focus: ["all-26"], text: "jackdaws love my big sphinx of quartz.", desc: "Compact full keyboard pangram." },
    { title: "The Classic Pangram Drill 4", focus: ["all-26"], text: "how razorback-jumping frogs can level six piqued gymnasts.", desc: "Varied multisyllabic pangram." },
    { title: "Punctuation Flow: Commas and Periods", focus: [",", "."], text: "one, two, three. four, five, six. ready, set, go.", desc: "Natural rhythm with sentence separators." },
    { title: "Bottom Row Words: C and V Mix", focus: ["c", "v"], text: "cave civic voice vector curve brave cover", desc: "Left hand middle and index lower dexterity." },
    { title: "Bottom Row Words: B and M Mix", focus: ["b", "m"], text: "bomb balm bloom amber timber marble ember", desc: "Both hands working bottom keys." },
    { title: "Bottom Row Words: Z and X Mix", focus: ["z", "x"], text: "exact zero exit puzzle pixel matrix boxing", desc: "Ring and pinky precision on lower row." },
    { title: "All 3 Rows: Left Hand Balance", focus: ["left-3-rows"], text: "we crave fast cars and sweet water after work", desc: "Left hand mobility across all three tiers." },
    { title: "All 3 Rows: Right Hand Balance", focus: ["right-3-rows"], text: "you look in my opinion like only joy in life", desc: "Right hand mobility across all three tiers." },
    { title: "Cross-Keyboard Alternation 1", focus: ["all"], text: "the boy met my mother by the calm blue lake", desc: "Balance hands like a pianist." },
    { title: "Cross-Keyboard Alternation 2", focus: ["all"], text: "many small birds flew over the green hills today", desc: "Keep typing without pausing." },
    { title: "Cross-Keyboard Alternation 3", focus: ["all"], text: "clean water flows from deep mountains into rivers", desc: "Smooth continuous flow." },
    { title: "Double Letter Lower Drills: MM, NN, CC", focus: ["mm", "nn", "cc"], text: "summer common tunnel connect accept account occur", desc: "Double strikes on lower tier." },
    { title: "Short Sentences with Commas", focus: ["commas"], text: "come here, sit down, take a breath, and relax.", desc: "Punctuation rhythm." },
    { title: "Short Sentences with Periods", focus: ["periods"], text: "we walk. we run. we learn. we win. we celebrate.", desc: "Short bursts with stops." },
    { title: "Bottom Row Speed Burst 1", focus: ["bottom"], text: "black cats climb over brown boxes and sleep calmly", desc: "Target 26+ WPM." },
    { title: "Bottom Row Speed Burst 2", focus: ["bottom"], text: "brave men make great moves when chances appear", desc: "Target 28+ WPM." },
    { title: "Bottom Row Speed Burst 3", focus: ["bottom"], text: "every victory begins with small daily habits and focus", desc: "Target 30+ WPM." },
    { title: "Endurance Paragraph with Lower Keys", focus: ["all"], text: "music can calm the mind and bring joy to many people across the world.", desc: "Endurance paragraph." },
    { title: "3-Row Mastery Test 1", focus: ["all"], text: "calm breeze moves green branches under clear blue skies.", desc: "Zero errors goal." },
    { title: "3-Row Mastery Test 2", focus: ["all"], text: "five big boxes arrived by train from the northern valley.", desc: "High precision test." },
    { title: "3-Row Mastery Test 3", focus: ["all"], text: "pack your travel bag with warm coats, books, and apples.", desc: "All finger zones." },
    { title: "Alphabet Ladder A to Z", focus: ["a-z"], text: "a b c d e f g h i j k l m n o p q r s t u v w x y z", desc: "Linear alphabet progression." },
    { title: "Reverse Alphabet Ladder Z to A", focus: ["z-a"], text: "z y x w v u t s r q p o n m l k j i h g f e d c b a", desc: "Reverse alphabet agility." },
    { title: "Pangram Velocity Sprint", focus: ["pangrams"], text: "the quick onyx goblin jumps over the lazy dwarf.", desc: "Speed benchmark." },
    { title: "Full Keyboard Rhythm A", focus: ["all"], text: "every day brings new chances to become better and faster.", desc: "Smooth cadence." },
    { title: "Full Keyboard Rhythm B", focus: ["all"], text: "practice creates permanent muscle memory in your fingers.", desc: "Confidence drill." },
    { title: "Stage 3 Precision Audit", focus: ["all"], text: "six brave firefighters climbed through dense black smoke calmly.", desc: "Audit your error rate." },
    { title: "Stage 3 Sprint Milestone", focus: ["all"], text: "you now command all twenty-six letters across three full rows!", desc: "Pre-graduation celebration." },
    { title: "Stage 3 Graduation Challenge", focus: ["all"], text: "flawless touch typing across all three rows is now officially yours!", desc: "Stage 3 graduation." }
  ];

  stage3Exercises.forEach((ex, idx) => {
    lessons.push({
      id: 85 + idx + 1,
      stage: 3,
      level: 3,
      title: `Lesson ${85 + idx + 1}: ${ex.title}`,
      shortDesc: ex.desc,
      instructions: "Do not collapse your wrists onto the desk when curling fingers down.",
      focusKeys: ex.focus,
      text: ex.text,
      targetAccuracy: 95,
      minWpmTarget: Math.min(32, 20 + Math.floor(idx / 4))
    });
  });

  // ==========================================
  // STAGE 4: CAPITAL LETTERS & SHIFT (131 - 170)
  // ==========================================
  const stage4Exercises = [
    { title: "Left Shift + Right Index (J, U, M, N)", focus: ["ShiftLeft", "J", "U", "M", "N"], text: "John July June Monday May November United Japan", desc: "Hold Left Shift with left pinky while striking right hand keys." },
    { title: "Left Shift + Right Middle (K, I)", focus: ["ShiftLeft", "K", "I"], text: "Korea King India Italy Island Kansas Kentucky", desc: "Hold Left Shift while middle finger reaches I and K." },
    { title: "Left Shift + Right Ring (L, O)", focus: ["ShiftLeft", "L", "O"], text: "London Ohio Oregon October November Lake Lake", desc: "Hold Left Shift while right ring strikes L and O." },
    { title: "Left Shift + Right Pinky (P)", focus: ["ShiftLeft", "P"], text: "Paris Poland Peru Pacific Portugal Princeton", desc: "Hold Left Shift while right pinky strikes P." },
    { title: "Right Shift + Left Index (F, R, T, V, B)", focus: ["ShiftRight", "F", "R", "T", "V", "B"], text: "France Rome Tokyo Texas Vienna Berlin Boston", desc: "Hold Right Shift with right pinky while left index strikes." },
    { title: "Right Shift + Left Middle (D, E, C)", focus: ["ShiftRight", "D", "E", "C"], text: "Denver Europe Canada Denmark Egypt Chicago", desc: "Hold Right Shift while left middle strikes D, E, C." },
    { title: "Right Shift + Left Ring (S, W, X)", focus: ["ShiftRight", "S", "W", "X"], text: "Spain Washington Sweden Seattle Xavier Wales", desc: "Hold Right Shift while left ring strikes S, W, X." },
    { title: "Right Shift + Left Pinky (A, Q, Z)", focus: ["ShiftRight", "A", "Q", "Z"], text: "America Asia Arizona Quebec Zurich Austin Qatar", desc: "Hold Right Shift while left pinky strikes A, Q, Z." },
    { title: "Capitalizing Days of the Week", focus: ["Shift"], text: "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.", desc: "Proper nouns in sequence." },
    { title: "Capitalizing Months of the Year 1", focus: ["Shift"], text: "January, February, March, April, May, June.", desc: "Spring and winter months." },
    { title: "Capitalizing Months of the Year 2", focus: ["Shift"], text: "July, August, September, October, November, December.", desc: "Summer and autumn months." },
    { title: "Common First Names 1", focus: ["Shift"], text: "Emma, Liam, Olivia, Noah, Sophia, James, Mia, Oliver.", desc: "Frequent English given names." },
    { title: "Common First Names 2", focus: ["Shift"], text: "Lucas, Charlotte, Henry, Amelia, Ethan, Harper, Benjamin.", desc: "Two-hand alternating capitalization." },
    { title: "World Capitals 1", focus: ["Shift"], text: "London, Tokyo, Washington, Paris, Berlin, Rome, Ottawa.", desc: "Global cities." },
    { title: "World Capitals 2", focus: ["Shift"], text: "Madrid, Cairo, Beijing, New Delhi, Canberra, Brasilia.", desc: "Global capitals." },
    { title: "Proper Sentences: The First Word", focus: ["Shift"], text: "The morning sun shines. A new day begins. Every moment matters.", desc: "Capitalizing initial sentence letters." },
    { title: "Proper Sentences: People and Places", focus: ["Shift"], text: "Sarah traveled to New York to visit her cousin Michael.", desc: "Multiple capital letters per sentence." },
    { title: "Famous Acronyms 1: Space & Tech", focus: ["Shift", "ALL-CAPS"], text: "NASA, ESA, MIT, IBM, CPU, RAM, GPU, HTML, CSS, API.", desc: "All capital acronyms require rapid shift control." },
    { title: "Famous Acronyms 2: Global Organizations", focus: ["Shift", "ALL-CAPS"], text: "UN, WHO, UNESCO, UNICEF, NATO, EU, OECD, IMF.", desc: "Global institutions." },
    { title: "Alternating Shift Keys Challenge", focus: ["Shift"], text: "Alice in Boston met Bob in London, while Carol flew to Tokyo.", desc: "Rapid alternation between Left Shift and Right Shift." },
    { title: "Book Titles and Headings 1", focus: ["Shift"], text: "The Great Gatsby, To Kill a Mockingbird, Pride and Prejudice.", desc: "Title case typography." },
    { title: "Book Titles and Headings 2", focus: ["Shift"], text: "The Old Man and the Sea, Brave New World, 1984.", desc: "Literary classics." },
    { title: "Capitalization Stamina Drill 1", focus: ["Shift"], text: "Dr. Watson and Mr. Holmes met at 221B Baker Street in London.", desc: "Honorifics and names." },
    { title: "Capitalization Stamina Drill 2", focus: ["Shift"], text: "Professor Higgins taught Eliza Doolittle proper English diction.", desc: "Complex capitalization flow." },
    { title: "The Hello Kitty Friends Roll Call 🎀", focus: ["Shift"], text: "Hello Kitty, Dear Daniel, My Melody, Kuromi, Cinnamoroll, Pompompurin, Keroppi!", desc: "Adorable Sanrio character names." },
    { title: "Cute Hello Kitty World Tour 🌸", focus: ["Shift"], text: "Hello Kitty flew from London to Tokyo and then visited New York and Paris.", desc: "Cute story sentences with capitals." },
    { title: "Opposite Shift Reflex Drill A", focus: ["Shift"], text: "Apple, Banana, Cherry, Date, Elderberry, Fig, Grape, Honeydew.", desc: "Alphabetical capital fruits." },
    { title: "Opposite Shift Reflex Drill B", focus: ["Shift"], text: "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.", desc: "Solar system planets." },
    { title: "Titles of Honor & Courtesy", focus: ["Shift"], text: "Mr. Davis, Mrs. Adams, Dr. Miller, Prof. Baker, President Lincoln.", desc: "Formal titles." },
    { title: "Mixed Case Accuracy Workout", focus: ["Shift"], text: "JavaScript, TypeScript, ReactJS, Node.js, GitHub, OpenSource.", desc: "CamelCase and technical casing." },
    { title: "Shift Key Speed Sprint 1", focus: ["Shift"], text: "Queen Victoria ruled Great Britain during the Victorian Era.", desc: "Target 30+ WPM." },
    { title: "Shift Key Speed Sprint 2", focus: ["Shift"], text: "Mount Everest is the highest mountain in Asia and the world.", desc: "Target 32+ WPM." },
    { title: "Shift Key Speed Sprint 3", focus: ["Shift"], text: "Leonardo da Vinci painted the Mona Lisa in Florence, Italy.", desc: "Target 34+ WPM." },
    { title: "Capitalization Paragraph A", focus: ["Shift"], text: "In July 1969, Apollo 11 landed Commander Neil Armstrong on the Moon.", desc: "Historic achievement paragraph." },
    { title: "Capitalization Paragraph B", focus: ["Shift"], text: "William Shakespeare wrote Hamlet, Macbeth, and Romeo and Juliet.", desc: "Dramatic classics." },
    { title: "Dual Shift Precision Test", focus: ["Shift"], text: "Zack from Zimbabwe and Xavier from Greece met Quentin in Qatar.", desc: "Rare letter capitals." },
    { title: "Rapid Acronym Sprint", focus: ["Shift"], text: "HTTP, HTTPS, URL, DOM, JSON, REST, SQL, GUI, CLI, SDK.", desc: "Developer acronym sprint." },
    { title: "Formal Letter Salutation & Sign-off", focus: ["Shift"], text: "Dear Mr. Thompson, Sincerely yours, Captain Robert Falcon Scott.", desc: "Business style." },
    { title: "Stage 4 Sprint Milestone", focus: ["Shift"], text: "Great Job! You have mastered both Shift keys and capital letters.", desc: "Pre-graduation." },
    { title: "Stage 4 Graduation Challenge", focus: ["Shift"], text: "Congratulations on completing Stage 4 with outstanding capitalization precision!", desc: "Stage 4 mastery." }
  ];

  stage4Exercises.forEach((ex, idx) => {
    lessons.push({
      id: 130 + idx + 1,
      stage: 4,
      level: 4,
      title: `Lesson ${130 + idx + 1}: ${ex.title}`,
      shortDesc: ex.desc,
      instructions: "Always use the opposite pinky to hold Shift while striking the letter.",
      focusKeys: ex.focus,
      text: ex.text,
      targetAccuracy: 95,
      minWpmTarget: Math.min(34, 22 + Math.floor(idx / 4))
    });
  });

  // ==========================================
  // STAGE 5: NUMBERS, PUNCTUATION & SYMBOLS (171 - 215)
  // ==========================================
  const stage5Exercises = [
    { title: "Number Row: 1 and 2 Reaches", focus: ["1", "2"], text: "1 2 12 21 11 22 121 212 1 2 12 21", desc: "Left pinky reaches to 1; left ring reaches to 2." },
    { title: "Number Row: 3 and 4 Reaches", focus: ["3", "4"], text: "3 4 34 43 33 44 343 434 3 4 34 43", desc: "Left middle reaches to 3; left index reaches to 4." },
    { title: "Number Row: 5 and 6 Reaches", focus: ["5", "6"], text: "5 6 56 65 55 66 565 656 5 6 56 65", desc: "Left index reaches to 5; right index reaches to 6." },
    { title: "Number Row: 7 and 8 Reaches", focus: ["7", "8"], text: "7 8 78 87 77 88 787 878 7 8 78 87", desc: "Right index reaches to 7; right middle reaches to 8." },
    { title: "Number Row: 9 and 0 Reaches", focus: ["9", "0"], text: "9 0 90 09 99 00 909 090 9 0 90 09", desc: "Right ring reaches to 9; right pinky reaches to 0." },
    { title: "Full Number Row Ladder: 1 to 0", focus: ["0-9"], text: "1 2 3 4 5 6 7 8 9 0 0 9 8 7 6 5 4 3 2 1", desc: "Ascending and descending number sequences." },
    { title: "Historic Years and Dates", focus: ["numbers"], text: "1776, 1789, 1865, 1914, 1945, 1969, 2000, 2026.", desc: "Four-digit calendar years." },
    { title: "Time Formats: Hours and Minutes", focus: ["numbers", ":"], text: "8:00 AM, 9:30 AM, 12:15 PM, 3:45 PM, 6:00 PM, 11:59 PM.", desc: "Clock times with colons." },
    { title: "Phone Numbers & Hyphens", focus: ["numbers", "-"], text: "+1-800-555-0199, +44-20-7946-0919, +81-3-1234-5678.", desc: "Telephone patterns with dashes." },
    { title: "Currency: Dollar and Cents", focus: ["$", "numbers", "."], text: "$5.00, $12.50, $49.99, $99.00, $250.75, $1,000.00.", desc: "Price tags with dollar symbols and decimals." },
    { title: "Percentages: % Symbol", focus: ["%", "numbers"], text: "10%, 25%, 50%, 75%, 95%, 99.9%, 100% accuracy.", desc: "Shift + 5 percentage signs." },
    { title: "Exclamation Mark: ! Symbol", focus: ["!"], text: "Great job! Keep going! Fantastic! Wow! Amazing speed! Yes!", desc: "Shift + 1 punctuation excitement." },
    { title: "Question Mark: ? Symbol", focus: ["?"], text: "Who? What? Where? When? Why? How? Are you ready?", desc: "Shift + slash inquiry marks." },
    { title: "Quotation Marks: Double Quotes", focus: ['"'], text: '"Hello," she said. "Touch typing is fun," replied Kitty.', desc: "Shift + quote speech marks." },
    { title: "Apostrophe: Single Quotes & Contractions", focus: ["'"], text: "don't, can't, won't, it's, you're, they're, Kitty's ribbon.", desc: "Common English contractions." },
    { title: "Parentheses: ( and )", focus: ["(", ")"], text: "(first), (second), (third), (note: accuracy comes first).", desc: "Shift + 9 and 0 enclosing thoughts." },
    { title: "Hyphens and Underscores", focus: ["-", "_"], text: "well-known, top-tier, state-of-the-art, user_name, file_id.", desc: "Connecting words and code identifiers." },
    { title: "Mathematical Operators: +, -, =, *", focus: ["+", "-", "=", "*"], text: "2 + 2 = 4, 10 - 3 = 7, 5 * 5 = 25, 100 / 10 = 10.", desc: "Elementary math equations." },
    { title: "Hash and At Symbols: # and @", focus: ["#", "@"], text: "Order #4092 for user@example.com was processed today.", desc: "Hashtags and email addresses." },
    { title: "Ampersand and Asterisk: & and *", focus: ["&", "*"], text: "Smith & Sons, Salt & Pepper, Rock & Roll, **important**.", desc: "Shift + 7 and Shift + 8." },
    { title: "Mixed Recipe Instructions 🍎", focus: ["numbers", "fractions"], text: "Recipe: 2 cups flour, 1/2 cup sugar, 3 eggs, 1 tsp vanilla.", desc: "Cooking measurements." },
    { title: "Hello Kitty Bakery Order 🍰", focus: ["numbers", "symbols"], text: "Order #77: 3 Apple Pies ($15.00 each) + 2 Strawberry Milks ($4.50).", desc: "Cute retail transaction." },
    { title: "Scientific Measurements", focus: ["numbers", "units"], text: "Boiling point is 100°C (212°F); Earth is 93 million miles away.", desc: "Science facts." },
    { title: "Statistical Reports", focus: ["numbers", "%"], text: "In 2026, 95% of students showed a 40% increase in typing speed.", desc: "Analytics prose." },
    { title: "Dates with Slashes and Dashes", focus: ["dates"], text: "10/22/2026, 12/31/2025, 2026-10-22, 1999-12-31.", desc: "Standard calendar formats." },
    { title: "Addresses and Postal Codes", focus: ["numbers", "caps"], text: "42 Wallaby Way, Sydney NSW 2000; 10 Downing Street, London SW1A 2AA.", desc: "Mailing addresses." },
    { title: "Serial Numbers and Model IDs", focus: ["numbers", "letters"], text: "Model: KT-2026-X; Serial: #9948-AB-77; Part: REV-3.0.", desc: "Hardware labeling." },
    { title: "Punctuation Harmony Drill", focus: ["all-punct"], text: "Wait! Did you check item #12? Yes (it's 100% verified), thanks!", desc: "Multi-symbol sentence." },
    { title: "Number Sprint: 10 to 100", focus: ["numbers"], text: "10 20 30 40 50 60 70 80 90 100 110 120", desc: "Ten-count intervals." },
    { title: "Prime Numbers Challenge", focus: ["numbers"], text: "2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.", desc: "First fifteen prime numbers." },
    { title: "Special Characters Rhythm A", focus: ["symbols"], text: "! @ # $ % ^ & * ( ) _ + { } | : \" < > ?", desc: "Upper row shifted sequence." },
    { title: "Special Characters Rhythm B", focus: ["symbols"], text: "` ~ 1 ! 2 @ 3 # 4 $ 5 % 6 ^ 7 & 8 * 9 ( 0 )", desc: "Paired number and symbol sequence." },
    { title: "Financial Balance Sheet Excerpt", focus: ["$", "%"], text: "Revenue: $1,250,000 (+15.4%); Net Profit: $320,500 (25.6%).", desc: "Financial summary." },
    { title: "Weather Forecast Summary", focus: ["numbers", "symbols"], text: "High: 72°F (22°C), Low: 55°F (13°C), Humidity: 45%, Wind: 8 mph.", desc: "Meteorological report." },
    { title: "Cute Hello Kitty Birthday Invitation 🎀", focus: ["mixed"], text: "You're invited! Date: Nov 1st @ 3:00 PM; RSVP to kitty@sanrio.com!", desc: "Cute celebration invite." },
    { title: "Symbols & Numbers Sprint 1", focus: ["mixed"], text: "Item #890 costs $45.99 (discount: 10%); call 1-800-555-0100 today!", desc: "Target 28+ WPM." },
    { title: "Symbols & Numbers Sprint 2", focus: ["mixed"], text: "Flight #UA402 departs at 10:45 AM from Gate 24B (Boarding: 10:15).", desc: "Target 30+ WPM." },
    { title: "Symbols & Numbers Sprint 3", focus: ["mixed"], text: "Version 2.5.1 resolved bug #304; performance increased by 18.2%!", desc: "Target 32+ WPM." },
    { title: "Number Row Precision Workout", focus: ["numbers"], text: "90210, 10001, 30301, 60601, 75001, 94102, 98101.", desc: "Zip codes." },
    { title: "Complex Mixed String Drill", focus: ["mixed"], text: "Key=A19-B42-C77; Hash=#eef2ff; Count=350; Status=OK (100%).", desc: "Mixed configuration format." },
    { title: "Stage 5 Speed Sprint", focus: ["mixed"], text: "Speed + accuracy = excellence! Reach for the stars every day.", desc: "Sprint before graduation." },
    { title: "Stage 5 Audit Test", focus: ["mixed"], text: "On 07/04/1776, 56 delegates signed: 'All men are created equal.'", desc: "Quotation + dates audit." },
    { title: "Stage 5 Master Challenge", focus: ["mixed"], text: "Total bill: $128.50 for 5 items (#42, #99, #108, #215, #300); tip: 20%.", desc: "Complete numerical fluency." },
    { title: "Stage 5 Milestone Achievement", focus: ["mixed"], text: "Tremendous accomplishment! Numbers and symbols are now second nature.", desc: "Pre-graduation." },
    { title: "Stage 5 Graduation Challenge", focus: ["mixed"], text: "Congratulations on mastering the entire keyboard: letters, numbers, and symbols!", desc: "Stage 5 mastery." }
  ];

  stage5Exercises.forEach((ex, idx) => {
    lessons.push({
      id: 170 + idx + 1,
      stage: 5,
      level: 5,
      title: `Lesson ${170 + idx + 1}: ${ex.title}`,
      shortDesc: ex.desc,
      instructions: "Reach with your finger while keeping your other fingers resting on the home row.",
      focusKeys: ex.focus,
      text: ex.text,
      targetAccuracy: 95,
      minWpmTarget: Math.min(35, 24 + Math.floor(idx / 4))
    });
  });

  // ==========================================
  // STAGE 6: WORD FREQUENCY & MUSCLE MEMORY (216 - 255)
  // ==========================================
  const stage6Exercises = [
    { title: "Top 10 English Words", focus: ["common"], text: "the be to of and a in that have I", desc: "The ten words that make up 25% of all English text." },
    { title: "Words 11 to 20", focus: ["common"], text: "it for not on with he as you do at", desc: "Extremely high frequency function words." },
    { title: "Words 21 to 30", focus: ["common"], text: "this but his by from they we say her she", desc: "Pronouns and prepositions." },
    { title: "Words 31 to 40", focus: ["common"], text: "or an will my one all would there their what", desc: "Conditionals and determiners." },
    { title: "Words 41 to 50", focus: ["common"], text: "so up out if about who get which go me", desc: "Everyday conversational words." },
    { title: "Words 51 to 60", focus: ["common"], text: "when make can like time no just him know take", desc: "Core verbs and nouns." },
    { title: "Words 61 to 70", focus: ["common"], text: "people into year your good some could them see other", desc: "Frequent vocabulary." },
    { title: "Words 71 to 80", focus: ["common"], text: "than then now look only come its over think", desc: "Temporal and directional words." },
    { title: "Words 81 to 90", focus: ["common"], text: "also back after use two how our work first well", desc: "Descriptive adverbs." },
    { title: "Words 91 to 100", focus: ["common"], text: "way even new want because any these give day most", desc: "Top 100 completion." },
    { title: "Digram Drill: TH, HE, IN", focus: ["digrams"], text: "the their then thin them he here hero inside into line find", desc: "Frequent two-letter letter combinations." },
    { title: "Digram Drill: ER, AN, RE", focus: ["digrams"], text: "water river paper answer plan land return report react", desc: "Smooth letter sequences." },
    { title: "Digram Drill: ED, ND, ON", focus: ["digrams"], text: "walked looked friend stand sound upon second London beyond", desc: "Word endings." },
    { title: "Digram Drill: EN, AT, ES", focus: ["digrams"], text: "open seven water catch path glasses boxes dishes wishes", desc: "Plurals and verb forms." },
    { title: "Digram Drill: OF, OR, TI", focus: ["digrams"], text: "often soft corner storm action station nation option", desc: "Vowel-consonant transitions." },
    { title: "Trigram Drill: THE, AND, THA", focus: ["trigrams"], text: "the there them and stand band that thank thatch", desc: "Three-letter sequences." },
    { title: "Trigram Drill: ING, ION, ENT", focus: ["trigrams"], text: "singing looking thinking nation passion silent moment event", desc: "Continuous suffixes." },
    { title: "Trigram Drill: NCE, TIS, MEN", focus: ["trigrams"], text: "chance dance notice artist mention moment mentalimen", desc: "Syllabic rhythm." },
    { title: "Double Consonants: TT, PP, RR", focus: ["doubles"], text: "little butter apple happen happy sorry marry carry arrow", desc: "Double letter cadence." },
    { title: "Double Consonants: LL, SS, FF", focus: ["doubles"], text: "yellow follow grass glass coffee effect traffic offer", desc: "Double letter stability." },
    { title: "High-Frequency 3-Word Chunks", focus: ["chunks"], text: "one of the, out of the, some of the, part of the, as well as", desc: "Multi-word units." },
    { title: "Conversational Phrasings 1", focus: ["chunks"], text: "as a matter of fact, on the other hand, at the same time", desc: "Idiomatic cadence." },
    { title: "Conversational Phrasings 2", focus: ["chunks"], text: "in order to, as soon as possible, thank you very much", desc: "Common idioms." },
    { title: "Conversational Phrasings 3", focus: ["chunks"], text: "for the first time, in the meantime, it seems to me that", desc: "Complex expressions." },
    { title: "Rhythm Consistency Workout 1", focus: ["flow"], text: "keep your pace steady and smooth without any sudden stops", desc: "Continuous rhythm." },
    { title: "Rhythm Consistency Workout 2", focus: ["flow"], text: "fast typists think in complete words rather than single letters", desc: "Whole-word recognition." },
    { title: "Rhythm Consistency Workout 3", focus: ["flow"], text: "read one or two words ahead of what your fingers are striking", desc: "Look-ahead strategy." },
    { title: "Short Word Sprint: 3-Letter Words", focus: ["sprint"], text: "cat dog fox sun moon sky sea air bed cup red blue", desc: "Target 35+ WPM." },
    { title: "Medium Word Sprint: 5-Letter Words", focus: ["sprint"], text: "apple bread chair dream earth flame grass heart light water", desc: "Target 36+ WPM." },
    { title: "Long Word Sprint: 8-Letter Words", focus: ["sprint"], text: "sunshine mountain elephant computer strength kindness", desc: "Target 38+ WPM." },
    { title: "Alternating Hands Speed Sprint", focus: ["sprint"], text: "problem formal visual island signals enrich balance", desc: "Target 40+ WPM." },
    { title: "Same Hand Word Flow Drill", focus: ["left-right"], text: "stewardesses sweater vest million monopoly minimum", desc: "Unilateral stamina." },
    { title: "Typing Stamina Challenge A", focus: ["endurance"], text: "every minute of deliberate practice compounds into permanent dexterity over time", desc: "Endurance sentence." },
    { title: "Typing Stamina Challenge B", focus: ["endurance"], text: "relax your wrists, breathe gently, and let your fingers fly across the keys", desc: "Relaxation technique." },
    { title: "Accuracy Lock: 98% Target", focus: ["accuracy"], text: "precision is the mother of speed; never sacrifice accuracy for velocity", desc: "Strict accuracy milestone." },
    { title: "Muscle Memory Sprint 1", focus: ["speed"], text: "the quick brown fox jumped gracefully over the sleeping lazy dog", desc: "Sprint test 1." },
    { title: "Muscle Memory Sprint 2", focus: ["speed"], text: "practice each exercise with calm patience and delightful joy", desc: "Sprint test 2." },
    { title: "Stage 6 Rhythm Audit", focus: ["audit"], text: "smooth typing rhythm produces fewer typos and greater overall speed", desc: "Audit milestone." },
    { title: "Stage 6 Velocity Milestone", focus: ["velocity"], text: "you are now typing with the ease and rhythm of an accomplished pianist", desc: "Pre-graduation." },
    { title: "Stage 6 Graduation Challenge", focus: ["mastery"], text: "congratulations on mastering English word frequency and rhythmic flow!", desc: "Stage 6 mastery." }
  ];

  stage6Exercises.forEach((ex, idx) => {
    lessons.push({
      id: 215 + idx + 1,
      stage: 6,
      level: 6,
      title: `Lesson ${215 + idx + 1}: ${ex.title}`,
      shortDesc: ex.desc,
      instructions: "Keep your eyes moving ahead of your hands. Think in syllables and words.",
      focusKeys: ex.focus,
      text: ex.text,
      targetAccuracy: 96,
      minWpmTarget: Math.min(42, 28 + Math.floor(idx / 3))
    });
  });

  // ==========================================
  // STAGE 7: REAL-WORLD FLUENCY & CUTE STORIES (256 - 285)
  // ==========================================
  const stage7Exercises = [
    { title: "Hello Kitty's Profile 🎀", focus: ["kitty"], text: "Hello Kitty was born in the suburbs of London. She lives with her parents and her twin sister, Mimmy.", desc: "Cute Hello Kitty biography." },
    { title: "Hello Kitty's Apple Facts 🍎", focus: ["kitty"], text: "Did you know? Hello Kitty is as tall as five apples and weighs exactly three apples! Her favorite food is warm mama's apple pie.", desc: "Fun Sanrio trivia." },
    { title: "The Red Bow Meaning 🎀", focus: ["kitty"], text: "Hello Kitty wears a bright red bow on her left ear. Her twin sister Mimmy wears a yellow bow on her right ear so friends can tell them apart!", desc: "The story of the iconic bow." },
    { title: "Friendship Motto 💖", focus: ["kitty"], text: "Hello Kitty's golden rule is: 'You can never have too many friends!' Kindness and sharing make every day bright and wonderful.", desc: "Heartwarming friendship quote." },
    { title: "Tea Party Invitation ☕", focus: ["kitty"], text: "Dear Friends, please join us for a delightful afternoon tea party this Saturday at 2:00 PM! There will be warm strawberry scones and fresh tea.", desc: "Cute tea party invitation." },
    { title: "Baking Apple Pie with Mama 🥧", focus: ["kitty"], text: "First, slice five sweet red apples. Mix with cinnamon, sugar, and butter. Bake in the oven until golden brown and delicious!", desc: "Cute apple pie recipe." },
    { title: "A Day in the Sunny Garden 🌸", focus: ["kitty"], text: "In the garden, colorful butterflies flutter around blooming pink roses. Hello Kitty waters the sunflowers while humming a cheerful tune.", desc: "Sunny garden tale." },
    { title: "My Melody's Sweet Note 🐰", focus: ["sanrio"], text: "My Melody loves baking almond pound cakes with her grandmother. Her pink hood was made with love by her dear grandmother!", desc: "My Melody story." },
    { title: "Cinnamoroll's Cloud Flight ☁️", focus: ["sanrio"], text: "Cinnamoroll is a chubby white puppy with long ears that enable him to fly like a bird through fluffy pastel clouds.", desc: "Cinnamoroll story." },
    { title: "Pompompurin's Golden Beret 🍮", focus: ["sanrio"], text: "Pompompurin is a friendly Golden Retriever who loves eating soft pudding and wearing his beloved brown beret every day.", desc: "Pompompurin story." },
    { title: "Workplace Email: Project Update", focus: ["email"], text: "Hi team, please find attached the revised timeline for our quarterly release. Let me know if you have feedback before our meeting tomorrow.", desc: "Professional office email." },
    { title: "Workplace Email: Client Follow-up", focus: ["email"], text: "Dear Ms. Davis, thank you for taking the time to speak with us today. We are thrilled to partner with your team on this new initiative.", desc: "Client correspondence." },
    { title: "Workplace Email: Meeting Agenda", focus: ["email"], text: "Agenda for 10:00 AM: 1. Review performance metrics. 2. Discuss customer feedback. 3. Finalize Q4 strategic roadmap.", desc: "Meeting minutes format." },
    { title: "Journalism: Space Exploration", focus: ["article"], text: "Astronomers recently discovered three Earth-sized planets orbiting a calm red dwarf star forty light-years from our solar system.", desc: "Science news excerpt." },
    { title: "Journalism: Renewable Energy", focus: ["article"], text: "Solar and wind energy installations reached record highs this year, providing clean sustainable electricity to millions of homes worldwide.", desc: "Environmental article." },
    { title: "Literature: The Secret Garden", focus: ["literature"], text: "If you look the right way, you can see that the whole world is a garden. Fresh air and blooming flowers bring hope to every heart.", desc: "Classic literary prose." },
    { title: "Literature: Alice in Wonderland", focus: ["literature"], text: "'Begin at the beginning,' the King said gravely, 'and go on till you come to the end: then stop.'", desc: "Lewis Carroll quote." },
    { title: "Philosophical Thought on Practice", focus: ["philosophy"], text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit cultivated through daily dedication and patience.", desc: "Aristotle wisdom." },
    { title: "The Power of Focus", focus: ["mindset"], text: "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a single sharp focus.", desc: "Productivity wisdom." },
    { title: "Hello Kitty's Rainy Day Books 📚", focus: ["kitty"], text: "When raindrops patter gently against the windowpane, Hello Kitty curls up with a warm blanket, hot cocoa, and her favorite storybook.", desc: "Cozy rainy day paragraph." },
    { title: "Dear Daniel's Travel Letter 💌", focus: ["kitty"], text: "Dearest Kitty, greetings from Africa! The safaris are breathtaking. I took photos of giraffes and lions to show you when I return home.", desc: "Travel postcard." },
    { title: "Sanrio Friendship Festival 🎈", focus: ["sanrio"], text: "Confetti rained down as Hello Kitty and all her friends gathered in the town square to celebrate kindness, laughter, and unity.", desc: "Celebration parade." },
    { title: "Speed Endurance: 40 WPM Sprint", focus: ["sprint"], text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle you may face.", desc: "Target 40+ WPM." },
    { title: "Speed Endurance: 42 WPM Sprint", focus: ["sprint"], text: "The future belongs to those who believe in the beauty of their dreams. Keep practicing every day with confidence and joy.", desc: "Target 42+ WPM." },
    { title: "Speed Endurance: 45 WPM Sprint", focus: ["sprint"], text: "Success is not final, failure is not fatal: it is the courage to continue that counts in every worthwhile pursuit.", desc: "Target 45+ WPM." },
    { title: "Long-Form Narrative Flow", focus: ["narrative"], text: "Early morning mist drifted across the quiet valley as golden sunlight illuminated the ancient pine forest. A gentle breeze rustled the autumn leaves.", desc: "Atmospheric narrative." },
    { title: "Hello Kitty's Sweet Goodbye 💖", focus: ["kitty"], text: "Thank you for practicing with me! Remember to always smile, be kind to everyone you meet, and cherish your wonderful friends.", desc: "Sweet message from Kitty." },
    { title: "Stage 7 Fluency Benchmark", focus: ["mastery"], text: "You can now effortlessly type natural dialogue, business correspondence, and creative storytelling with remarkable precision.", desc: "Pre-graduation audit." },
    { title: "Stage 7 Speed Milestone", focus: ["mastery"], text: "Your hands glide gracefully across the keyboard with the speed and accuracy of a seasoned professional writer.", desc: "Speed milestone." },
    { title: "Stage 7 Graduation Challenge", focus: ["mastery"], text: "Congratulations on completing Stage 7! Your real-world touch typing fluency is absolutely extraordinary!", desc: "Stage 7 graduation." }
  ];

  stage7Exercises.forEach((ex, idx) => {
    lessons.push({
      id: 255 + idx + 1,
      stage: 7,
      level: 7,
      title: `Lesson ${255 + idx + 1}: ${ex.title}`,
      shortDesc: ex.desc,
      instructions: "Immerse yourself in the story. Type with relaxed poise and steady breathing.",
      focusKeys: ex.focus,
      text: ex.text,
      targetAccuracy: 96,
      minWpmTarget: Math.min(46, 32 + Math.floor(idx / 3))
    });
  });

  // ==========================================
  // STAGE 8: CODING SYNTAX & MASTERY (286 - 310)
  // ==========================================
  const stage8Exercises = [
    { title: "HTML Basics: Tags and Elements", focus: ["<", ">", "/"], text: "<div className=\"container\"><h1>Hello World</h1><p>Welcome!</p></div>", desc: "Angle brackets and forward slashes." },
    { title: "HTML Attributes and Quotes", focus: ['"', "=", "<", ">"], text: "<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener\">Link</a>", desc: "HTML links and properties." },
    { title: "CSS Declarations: Braces & Colons", focus: ["{", "}", ":", ";"], text: ".card { display: flex; align-items: center; padding: 16px; border-radius: 8px; }", desc: "CSS styling syntax." },
    { title: "CSS Gradients & Colors", focus: ["#", ":", ";"], text: ".badge { background: linear-gradient(135deg, #ff4d88, #ff85a2); color: #fff; }", desc: "Hex colors and CSS gradients." },
    { title: "JavaScript Variables & Types", focus: ["const", "let", ";"], text: "const maxScore = 100; let currentSpeed = 45.5; const isPassed = true;", desc: "JS variable declarations." },
    { title: "JavaScript Arrow Functions", focus: ["=>", "{", "}"], text: "const calculateWpm = (chars, seconds) => { return Math.round((chars / 5) / (seconds / 60)); };", desc: "Arrow syntax and formula." },
    { title: "JavaScript Array Methods: map()", focus: ["()", "[]", "=>"], text: "const doubled = numbers.map((n) => n * 2).filter((n) => n > 10);", desc: "Chained array operations." },
    { title: "JavaScript Array Methods: reduce()", focus: ["reduce", "{}"], text: "const sum = items.reduce((total, item) => total + item.price, 0);", desc: "Accumulator syntax." },
    { title: "JSON Data Structure", focus: ["{}", "[]", ":"], text: '{"id": 300, "name": "Hello Kitty", "level": 8, "skills": ["speed", "accuracy"]}', desc: "JSON object notation." },
    { title: "Python Function & Docstring", focus: ["def", ":", '"""'], text: 'def greet(name: str) -> str:\n    """Return a warm greeting."""\n    return f"Hello, {name}!"', desc: "Python indentation and type hints." },
    { title: "Python List Comprehension", focus: ["[]", "for", "in"], text: "squares = [x ** 2 for x in range(1, 11) if x % 2 == 0]", desc: "Python list syntax." },
    { title: "SQL Query Syntax", focus: ["SELECT", "WHERE"], text: "SELECT user_id, email, score FROM typing_scores WHERE accuracy >= 95 ORDER BY score DESC;", desc: "Database query language." },
    { title: "Git Terminal Commands", focus: ["git", "-"], text: "git checkout -b feature/cute-theme && git commit -m 'Add Hello Kitty cute mode' && git push", desc: "Common CLI commands." },
    { title: "React Component Hook: useState", focus: ["useState", "[]"], text: "const [accuracy, setAccuracy] = useState(100); const [wpm, setWpm] = useState(0);", desc: "React state hook syntax." },
    { title: "React Component Hook: useEffect", focus: ["useEffect", "()"], text: "useEffect(() => { const timer = setInterval(tick, 1000); return () => clearInterval(timer); }, []);", desc: "React effect cleanup." },
    { title: "Technical Markdown Formatting", focus: ["#", "*", "`"], text: "# Project Readme\n\n- Feature 1: **Fast Typing**\n- Feature 2: `Zero Latency` audio", desc: "Markdown symbols." },
    { title: "Regular Expression Patterns", focus: ["regex", "/"], text: "const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;", desc: "RegEx syntax." },
    { title: "Async / Await Promise Handling", focus: ["async", "await"], text: "async function fetchData(url) { try { const res = await fetch(url); return await res.json(); } catch (err) { console.error(err); } }", desc: "Asynchronous JavaScript." },
    { title: "Keyboard Speed Sprint 45 WPM", focus: ["sprint"], text: "The greatest discovery of all time is that a person can transform their future by merely changing their attitude.", desc: "Sprint 45 WPM." },
    { title: "Keyboard Speed Sprint 50 WPM", focus: ["sprint"], text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", desc: "Sprint 50 WPM." },
    { title: "Keyboard Speed Sprint 55 WPM", focus: ["sprint"], text: "Continuous effort, not strength or intelligence, is the key to unlocking our full potential in typing.", desc: "Sprint 55 WPM." },
    { title: "Keyboard Speed Sprint 60 WPM", focus: ["sprint"], text: "Champions do not become champions when they win the event, but in the hours, weeks, and months spent preparing for it.", desc: "Sprint 60 WPM." },
    { title: "The 300-Lesson Milestone Sprint! 🎀", focus: ["celebration"], text: "You have conquered 300 typing lessons! All ten fingers move in effortless harmony with sublime speed and accuracy.", desc: "300 lessons milestone!" },
    { title: "Grand Master Typing Championship A", focus: ["championship"], text: "Mastery is not a distant destination; it is a continuous journey of focused practice, graceful rhythm, and relentless precision.", desc: "Championship test." },
    { title: "Grand Master Certification (Lesson 310)", focus: ["graduation"], text: "Congratulations Grand Master! You have successfully completed all 310 typing tutor lessons with exceptional mastery. You are now in the top tier of touch typists worldwide!", desc: "The ultimate 310th graduation lesson." }
  ];

  stage8Exercises.forEach((ex, idx) => {
    lessons.push({
      id: 285 + idx + 1,
      stage: 8,
      level: 8,
      title: `Lesson ${285 + idx + 1}: ${ex.title}`,
      shortDesc: ex.desc,
      instructions: "Train your pinky and ring fingers on brackets and code operators without hesitation.",
      focusKeys: ex.focus,
      text: ex.text,
      targetAccuracy: 95,
      minWpmTarget: Math.min(50, 35 + Math.floor(idx / 3))
    });
  });

  return lessons;
}

export const LESSONS = generateAllLessons();

// Maintain legacy LESSON_LEVELS export for backwards compatibility
export const LESSON_LEVELS = LESSON_STAGES;

export const SPEED_TEST_PROMPTS = [
  {
    id: "quote-1",
    category: "Inspirational Quotes",
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall. Success is not final, failure is not fatal: it is the courage to continue that counts."
  },
  {
    id: "kitty-1",
    category: "Hello Kitty & Friends 🎀",
    text: "Hello Kitty says: You can never have too many friends! Always be kind, share warm smiles, enjoy sweet apple pies, and celebrate every day with love and happiness in your heart."
  },
  {
    id: "tech-1",
    category: "Technology & Code",
    text: "Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate, and brilliant. Together, they create wonders beyond our wildest imagination."
  },
  {
    id: "words-1",
    category: "Common English Words",
    text: "time person year way day thing man world life hand part child eye woman place work week case point government company number group problem fact"
  }
];

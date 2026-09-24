const questions = [

  // ─── KPIs & METRICS ───────────────────────────────────────────────────────

  {
    id: 1,
    category: "KPIs & Metrics",
    difficulty: "junior",
    type: "single",
    question: "What does CPI stand for, and how is it calculated?",
    options: [
      "Cost Per Install — Total Spend ÷ Number of Installs",
      "Click Performance Index — Clicks ÷ Impressions × 100",
      "Customer Purchase Intent — a survey-based brand metric",
      "Campaign Profit Index — Revenue ÷ Ad Spend"
    ],
    correct: 0,
    explanation: "CPI (Cost Per Install) = Total Ad Spend ÷ Number of Installs. Example: $2,000 spend ÷ 500 installs = $4.00 CPI. It's the primary efficiency metric for UA campaigns in mobile gaming."
  },

  {
    id: 2,
    category: "KPIs & Metrics",
    difficulty: "junior",
    type: "single",
    question: "You spent $3,000 on ads and received 750 installs. What is your CPI?",
    options: [
      "$2.25",
      "$4.00",
      "$0.25",
      "$22.50"
    ],
    correct: 1,
    explanation: "CPI = $3,000 ÷ 750 = $4.00. Always divide total spend by total installs to get your cost per install."
  },

  {
    id: 3,
    category: "KPIs & Metrics",
    difficulty: "junior",
    type: "single",
    question: "What does ROAS stand for, and what does a 300% ROAS mean?",
    options: [
      "Rate of Ad Spending — you spent 300% of your budget",
      "Revenue over Average Sales — revenue is 300% above average",
      "Return on Ad Spend — you earned $3 for every $1 spent",
      "Real-time Output Analytics Score — 300% above baseline"
    ],
    correct: 2,
    explanation: "ROAS = Revenue ÷ Ad Spend × 100%. A 300% ROAS means you earned $3 for every $1 spent. Break-even is 100%. Most studios target 300%+ to ensure profitability after operational costs."
  },

  {
    id: 4,
    category: "KPIs & Metrics",
    difficulty: "junior",
    type: "single",
    question: "What is CTR and what does a strong CTR indicate in casual game advertising?",
    options: [
      "Cost-to-Revenue ratio — measures if the ad is profitable",
      "Campaign Tracking Rate — percentage of users tracked post-install",
      "Creative Test Result — a quality score assigned by Meta",
      "Click-Through Rate — clicks ÷ impressions; a high CTR means the ad hook is compelling"
    ],
    correct: 3,
    explanation: "CTR = Clicks ÷ Impressions. For casual games on Meta, 2–5% is a solid benchmark. High CTR means your hook is grabbing attention — but CTR alone doesn't guarantee quality installs. Always pair with install rate and D7 ROAS."
  },

  {
    id: 5,
    category: "KPIs & Metrics",
    difficulty: "junior",
    type: "single",
    question: "What does IPM measure?",
    options: [
      "Installs Per Mille — number of installs per 1,000 impressions",
      "In-app Purchase Multiplier — ratio of paying users to total users",
      "Impression Performance Metric — overall ad quality score",
      "Interest Per Month — audience engagement over time"
    ],
    correct: 0,
    explanation: "IPM = Installs per 1,000 impressions. It combines reach and conversion into one number, making it easy to compare creative efficiency across formats and platforms without needing to normalize for spend."
  },

  {
    id: 6,
    category: "KPIs & Metrics",
    difficulty: "mid",
    type: "single",
    question: "Your CTR drops from 5.1% to 3.8% over 7 days while impressions keep increasing. What is the most likely cause?",
    options: [
      "Audience targeting has become too narrow",
      "Creative fatigue — the same audience has seen the ad too many times",
      "The ad account has reached its spending limit",
      "A seasonal audience dip unrelated to the creative"
    ],
    correct: 1,
    explanation: "Declining CTR + rising impressions = classic creative fatigue. The network keeps serving the ad to generate spend, but the audience has already seen it too many times and stopped clicking. Time to introduce fresh creatives."
  },

  {
    id: 7,
    category: "KPIs & Metrics",
    difficulty: "mid",
    type: "single",
    question: "What does D7 ROAS represent, and what is a typical target for a casual game?",
    options: [
      "Revenue from users who installed on Day 7 of the campaign",
      "Daily average ROAS across a 7-day campaign window",
      "Return on ad spend measured 7 days after install, for the install cohort — target 15–25%",
      "ROAS calculated on the 7th iteration of a creative test"
    ],
    correct: 2,
    explanation: "D7 ROAS = total revenue earned by users in an install cohort, measured at Day 7 post-install, divided by the spend to acquire them. It's an early indicator of user quality. Typical targets: D7 ROAS 15–25%, D30 ROAS 40–60%."
  },

  {
    id: 8,
    category: "KPIs & Metrics",
    difficulty: "mid",
    type: "single",
    question: "A casual puzzle game has an LTV of $6.00 and a current CPI of $5.50. Should you aggressively scale this campaign?",
    options: [
      "Yes — LTV is above CPI so it's profitable by definition",
      "No — CPI must always be below $3 for casual games to scale",
      "Scale immediately — any positive margin means you should maximize spend",
      "Proceed cautiously — the $0.50 margin is thin; validate D30 ROAS and payback period first"
    ],
    correct: 3,
    explanation: "LTV $6.00 vs CPI $5.50 leaves only $0.50 margin before payback. Operational costs, ad network fees, and store commissions can easily wipe that out. Validate the full cohort D30 ROAS and payback period before committing to aggressive scaling."
  },

  {
    id: 9,
    category: "KPIs & Metrics",
    difficulty: "mid",
    type: "single",
    question: "A campaign has $5,000 spend, 1,250 installs, and generated $18,000 in revenue at D30. Calculate CPI and D30 ROAS.",
    options: [
      "CPI = $4.00, D30 ROAS = 360%",
      "CPI = $0.28, D30 ROAS = 360%",
      "CPI = $4.00, D30 ROAS = 72%",
      "CPI = $14.40, D30 ROAS = 280%"
    ],
    correct: 0,
    explanation: "CPI = $5,000 ÷ 1,250 = $4.00. D30 ROAS = $18,000 ÷ $5,000 × 100% = 360%. A 360% D30 ROAS is strong — it means you earned $3.60 for every $1 spent, well above the 100% break-even."
  },

  {
    id: 10,
    category: "KPIs & Metrics",
    difficulty: "senior",
    type: "single",
    question: "Two creatives have identical CTR (4.2%). Creative A has a 35% install rate and D7 ROAS of 18%. Creative B has a 28% install rate and D7 ROAS of 26%. Which do you scale and why?",
    options: [
      "Creative A — higher install rate means more installs per dollar spent",
      "Creative B — higher D7 ROAS means better user quality, which matters more at scale",
      "Neither — CTR is the same so performance is identical",
      "Both equally — split the scaling budget 50/50"
    ],
    correct: 1,
    explanation: "Creative B wins. D7 ROAS 26% vs 18% means B attracts users who monetize significantly better. At scale, user quality (downstream revenue) is more valuable than install volume. High-install/low-ROAS creatives can drain budget while appearing efficient on surface metrics."
  },

  // ─── CREATIVE FORMATS ─────────────────────────────────────────────────────

  {
    id: 11,
    category: "Creative Formats",
    difficulty: "junior",
    type: "single",
    question: "What is a playable ad and why is it effective for casual games?",
    options: [
      "A video ad longer than 30 seconds that shows full gameplay",
      "A static image ad that shows the game's highest-rated review",
      "An interactive mini-game ad that lets users experience the core mechanic before downloading",
      "An ad format exclusive to TikTok for gaming content"
    ],
    correct: 2,
    explanation: "Playable ads are interactive mini-games (15–60 seconds) where users experience the game's core loop before downloading. They can reduce CPI by 20–40% for mechanics-heavy games like match-3, puzzle, and idle games because the self-selection effect — users who install have already 'played' and know they enjoy it."
  },

  {
    id: 12,
    category: "Creative Formats",
    difficulty: "junior",
    type: "single",
    question: "What does UGC stand for, and why does it outperform branded content in casual game ads?",
    options: [
      "Universal Game Content — standardized formats approved by app stores",
      "User Growth Conversion — a metric for tracking organic installs",
      "Unified Growth Campaign — a Meta ad type for app installs",
      "User-Generated Content — ads created by real players; outperforms branded because it feels authentic and trustworthy"
    ],
    correct: 3,
    explanation: "UGC = content created by real players or creators. It feels unscripted and authentic. Data shows UGC achieves ~4x higher CTR, ~20% lower CPI, and ~50% lower cost-per-click vs branded content. 83% of consumers trust brands that share real customer content."
  },

  {
    id: 13,
    category: "Creative Formats",
    difficulty: "junior",
    type: "single",
    question: "On iOS, real gameplay footage in video ads typically achieves what CTR compared to cinematic trailers?",
    options: [
      "Higher CTR — ~4.27% vs ~3.34% for cinematic trailers",
      "The same CTR — format matters more than content type",
      "Lower CTR — cinematic trailers are more visually impressive",
      "Higher CTR only on Android, not iOS"
    ],
    correct: 0,
    explanation: "Real gameplay footage achieves ~4.27% CTR on iOS vs ~3.34% for cinematic trailers. Authenticity and mechanical clarity outperform cinematic polish — users want to see what the game actually plays like, not a movie trailer."
  },

  {
    id: 14,
    category: "Creative Formats",
    difficulty: "mid",
    type: "single",
    question: "Which creative format should you prioritize for a match-3 puzzle game where the core satisfaction comes from the matching mechanic itself?",
    options: [
      "Static image showing colorful game characters and a star rating",
      "Playable ad letting users match tiles and feel the mechanic",
      "UGC video of a player reacting to the game",
      "Long-form video showing 10 levels of gameplay progression"
    ],
    correct: 1,
    explanation: "Playable ads are purpose-built for mechanics-driven satisfaction. Match-3 games derive their appeal from the tactile act of matching — a playable ad lets users experience that dopamine loop before downloading. This is why playables reduce CPI 20–40% for this genre."
  },

  {
    id: 15,
    category: "Creative Formats",
    difficulty: "mid",
    type: "single",
    question: "What is the maximum recommended file size for a playable ad, and why does it matter?",
    options: [
      "Under 500KB — any larger causes approval delays",
      "Under 5MB — the standard for most ad networks",
      "Under 2MB — performance drops sharply beyond 3MB due to mobile load time",
      "Under 10MB — only limited by device storage"
    ],
    correct: 2,
    explanation: "Playable ads should be under 2MB. Beyond 3MB, load time on mobile networks causes significant drop-off before the ad even starts — users scroll away. Keeping it under 2MB ensures fast load on 4G/LTE and maximizes engagement rate."
  },

  {
    id: 16,
    category: "Creative Formats",
    difficulty: "mid",
    type: "single",
    question: "Your game just launched with no creative assets ready. You need to start testing immediately. Which format do you prioritize first and why?",
    options: [
      "Playable ad — it will give the most complete picture of user quality",
      "UGC — recruit players immediately even though it takes 2–3 weeks",
      "Full video production — quality is always worth the 1–2 week wait",
      "Static image ads — can be produced and tested within hours to validate concept directions"
    ],
    correct: 3,
    explanation: "Static ads can be created in hours, making them the fastest way to validate hooks, visual angles, and concepts before investing in expensive video or playable production. Test the concept cheaply first, then build the winning idea into higher-production formats."
  },

  {
    id: 17,
    category: "Creative Formats",
    difficulty: "mid",
    type: "single",
    question: "A competitor runs playable ads for their bubble shooter game. You have the same genre. What's your creative format strategy?",
    options: [
      "Run playable ads but test a unique mechanic angle or moment they haven't shown",
      "Avoid playables entirely since the competitor already owns that space",
      "Copy their playable ad approach to stay competitive in the same format",
      "Shift entirely to UGC to differentiate from the competitor on format"
    ],
    correct: 0,
    explanation: "Don't copy or flee — differentiate within the format. Use playable ads (proven for the genre) but test a unique angle: a different level moment, emotional hook, or difficulty curve that creates a distinct reason to prefer your game over theirs."
  },

  {
    id: 18,
    category: "Creative Formats",
    difficulty: "senior",
    type: "single",
    question: "You're evaluating whether to move from video ads to playable ads. Which set of signals would most justify the switch?",
    options: [
      "CTR is strong, D7 ROAS is high, and CPI is below category average",
      "CPI is 40% above category average, install rate is low, and the game mechanic is the primary fun driver",
      "The creative team prefers building playables over editing video",
      "TikTok introduced a new playable ad format that looks interesting"
    ],
    correct: 1,
    explanation: "Switch to playables when: CPI is elevated (meaning current creatives aren't converting efficiently), install rate is low (users don't understand what they're getting), and the mechanic is the core hook. Playables let users self-select by experiencing the mechanic — this combination specifically is what playables solve."
  },

  // ─── CREATIVE TESTING & STRATEGY ──────────────────────────────────────────

  {
    id: 19,
    category: "Testing & Strategy",
    difficulty: "junior",
    type: "single",
    question: "What is the purpose of A/B testing in creative production?",
    options: [
      "To run the same ad on two different platforms simultaneously",
      "To test the technical quality of an ad before it goes live",
      "To compare two or more creative variations under the same conditions to identify which performs better based on data",
      "To split the audience between App Store and Play Store users"
    ],
    correct: 2,
    explanation: "A/B testing is hypothesis-driven experimentation: you create a controlled test where one variable differs between versions, then use performance data to determine which is superior. The goal is replacing opinion with evidence in creative decisions."
  },

  {
    id: 20,
    category: "Testing & Strategy",
    difficulty: "junior",
    type: "single",
    question: "How many new creative concepts should a well-resourced casual game studio ideally test per week?",
    options: [
      "1–2 high-quality concepts per week",
      "3–5 concepts per week",
      "50+ concepts per week",
      "10–20 concepts per week"
    ],
    correct: 3,
    explanation: "Industry leaders like Voodoo and Playrix test 10–20 new concepts weekly. Creative fatigue sets in within 5–10 days at scale, so you need a constant pipeline of new material. This isn't 10–20 full productions — it's a mix of statics (hours), video hook variants (days), and playable iterations."
  },

  {
    id: 21,
    category: "Testing & Strategy",
    difficulty: "mid",
    type: "single",
    question: "What budget range is recommended for a micro-test to validate a new creative concept before scaling?",
    options: [
      "$200–500 per concept",
      "$50–100 per concept",
      "$2,000–5,000 per concept",
      "$10,000 minimum to reach statistical significance"
    ],
    correct: 0,
    explanation: "Micro-tests at $200–500 per concept quickly reveal directional signal — is this concept worth investing in? — without risking large budgets on unproven ideas. Once a concept shows promising CTR and install rate in micro-test, then invest in scaling budget."
  },

  {
    id: 22,
    category: "Testing & Strategy",
    difficulty: "mid",
    type: "single",
    question: "When A/B testing creative hooks, what is the most critical principle to follow?",
    options: [
      "Test as many variables as possible simultaneously to learn faster",
      "Change only one variable at a time so you can attribute performance differences correctly",
      "Always use a 50/50 budget split regardless of early performance signals",
      "Run tests for exactly 14 days for statistically valid results"
    ],
    correct: 1,
    explanation: "Isolate one variable per test. If you change the hook AND the character AND the music simultaneously, you can't know which change caused the performance difference. Single-variable testing is slower but produces actionable, reliable insights."
  },

  {
    id: 23,
    category: "Testing & Strategy",
    difficulty: "mid",
    type: "single",
    question: "A creative has excellent CTR (4.8%) but install rate is 22% below benchmark. What does this signal?",
    options: [
      "Strong performance — CTR is the primary metric that matters",
      "CPI is likely very low — scale immediately regardless of install rate",
      "The hook is compelling but misrepresents the game, attracting users who lose interest post-click",
      "A technical tracking issue — check attribution settings"
    ],
    correct: 2,
    explanation: "High CTR + low install rate = 'clickbait' creative. The ad generates curiosity (people click) but the actual game store page or gameplay doesn't match the expectation set by the ad. Fix: ensure the creative honestly represents the core game experience."
  },

  {
    id: 24,
    category: "Testing & Strategy",
    difficulty: "mid",
    type: "single",
    question: "By how much should you increase daily budget when scaling a winning creative to avoid disrupting algorithm optimization?",
    options: [
      "2x daily — move fast and maximize early traction",
      "Duplicate the campaign instead of raising budget on the original",
      "10x in week one to establish dominance in the auction",
      "20–30% daily increase to maintain algorithm stability"
    ],
    correct: 3,
    explanation: "Aggressive budget increases (2x+) force ad network algorithms to reset their optimization, causing performance instability. Gradual 20–30% daily increases allow the algorithm to adapt while maintaining the optimization momentum you've already built."
  },

  {
    id: 25,
    category: "Testing & Strategy",
    difficulty: "mid",
    type: "single",
    question: "You have $5,000 to validate 5 new creative concepts. What budget allocation strategy is most effective?",
    options: [
      "$1,000 per concept in equal micro-tests; scale winners with performance data",
      "Put all $5,000 on the concept you're most confident in",
      "$2,500 each on the top 2 concepts — too risky to spread thin",
      "$500 each and give the remaining $2,500 to the leader after 2 days"
    ],
    correct: 0,
    explanation: "Equal micro-testing removes bias. You cannot reliably predict which concept will win before testing — that's the entire point of testing. Equal allocation lets data decide. The $1,000 per concept gives enough signal to identify clear winners before committing scaling budget."
  },

  {
    id: 26,
    category: "Testing & Strategy",
    difficulty: "senior",
    type: "single",
    question: "What statistical threshold should a creative test reach before you act on the results with confidence?",
    options: [
      "ROAS above 100% — if profitable, the creative is validated",
      "95% statistical significance — only a 5% chance the result is due to random variation",
      "CTR above 3% — industry-standard minimum for casual games",
      "Test must run for exactly 7 days regardless of data"
    ],
    correct: 1,
    explanation: "Statistical significance at 95% confidence means there's only a 5% probability the performance difference is due to chance. Acting on results before reaching significance means you may be scaling a creative that only appeared to win due to random noise."
  },

  {
    id: 27,
    category: "Testing & Strategy",
    difficulty: "senior",
    type: "single",
    question: "Your best creative (CTR 4.5%, CPI $3.20) has been running 12 days. CTR is now 3.1%, CPI is $4.60. What is your next action?",
    options: [
      "Keep running — 3.1% CTR is still within acceptable range",
      "Reduce daily budget by 10% and monitor for another week",
      "Pause the creative and deploy replacement creatives that already passed micro-testing",
      "Duplicate the campaign to force an algorithm reset"
    ],
    correct: 2,
    explanation: "CTR dropped 31%, CPI rose 44% — clear creative fatigue. Pause and replace. Critical rule: never pause a creative without tested replacements ready to go. Proactive pipeline management means you always have pre-tested creatives queued up for exactly this moment."
  },

  {
    id: 28,
    category: "Testing & Strategy",
    difficulty: "senior",
    type: "multi",
    question: "Your casual game's CPI is $3.80 vs a category average of $2.50. Which creative strategies could realistically close that gap? (Select all that apply)",
    options: [
      "Introduce UGC creative — authentic content typically achieves ~20% lower CPI",
      "Test playable ads — can reduce CPI by 20–40% for mechanics-driven games",
      "Increase total campaign budget — higher spend improves algorithm optimization",
      "A/B test new video hooks using real gameplay footage instead of cinematic"
    ],
    correct: [0, 1, 3],
    explanation: "UGC, playables, and real gameplay hooks are proven CPI-reduction tactics. Option C (increase budget) without fixing creative efficiency addresses symptoms, not the root cause. More spend on underperforming creatives just amplifies the inefficiency."
  },

  // ─── CREATIVE FATIGUE ─────────────────────────────────────────────────────

  {
    id: 29,
    category: "Creative Fatigue",
    difficulty: "junior",
    type: "single",
    question: "What is creative fatigue in mobile game advertising?",
    options: [
      "When the creative team is overworked and productivity declines",
      "When the ad budget is depleted before the campaign goal is met",
      "When an ad fails platform review due to content policy violations",
      "When ad performance deteriorates because the same audience has seen the ad too many times"
    ],
    correct: 3,
    explanation: "Creative fatigue = performance decline caused by audience overexposure. The same users keep seeing the same creative and stop responding. CTR drops, CPI rises, but the network keeps spending. It's not a platform issue — it's an audience saturation issue."
  },

  {
    id: 30,
    category: "Creative Fatigue",
    difficulty: "junior",
    type: "single",
    question: "Which combination of signals most clearly indicates creative fatigue?",
    options: [
      "Decreasing CTR + Increasing CPI + Increasing impressions — fatigue pattern",
      "Increasing CTR + Decreasing CPI — strong performance signal",
      "Stable CTR + Increasing CPI — targeting issue, not creative fatigue",
      "Decreasing impressions + Stable CTR — delivery problem"
    ],
    correct: 0,
    explanation: "The classic fatigue pattern: CTR falls (audience stops engaging), CPI rises (less efficient per dollar), but impressions keep climbing (the network serves it more to hit spend targets). This trifecta confirms the creative has worn out its welcome with the audience."
  },

  {
    id: 31,
    category: "Creative Fatigue",
    difficulty: "mid",
    type: "single",
    question: "At scale on Meta, how quickly does creative fatigue typically set in?",
    options: [
      "1–2 days — audiences are very small",
      "5–10 days — at high spend, audiences see the same creative repeatedly",
      "3–4 weeks — Meta's algorithm protects against fatigue",
      "Only after 2–3 months of continuous running"
    ],
    correct: 1,
    explanation: "At high spend levels on Meta, audiences encounter the same creative multiple times within 5–10 days. Smaller budgets or niche audiences may stretch longer, but at meaningful UA scale, 5–10 days is the reliable benchmark to plan refreshes around."
  },

  {
    id: 32,
    category: "Creative Fatigue",
    difficulty: "mid",
    type: "single",
    question: "At what CTR decline threshold should you proactively trigger a creative refresh?",
    options: [
      "Any decline — refresh immediately if CTR dips at all",
      "5% decline — minor dips are normal variance",
      "15–20% decline — meaningful signal paired with CPI rising 25%+",
      "Only when CTR drops below 1% absolute"
    ],
    correct: 2,
    explanation: "A 15–20% CTR decline signals meaningful fatigue worth acting on. Waiting for larger drops wastes spend on inefficient creatives. Pair with CPI monitoring: if CPI rises 25%+ alongside the CTR drop, that's a two-signal confirmation — refresh immediately."
  },

  {
    id: 33,
    category: "Creative Fatigue",
    difficulty: "senior",
    type: "single",
    question: "Which approach BEST prevents creative fatigue at a scaling casual game studio?",
    options: [
      "Running one proven, high-quality creative as long as possible to maximize its value",
      "Changing audience targeting to expose the same creative to new users",
      "Reducing budget during suspected fatigue periods to slow impression delivery",
      "Maintaining a 2+ week inventory of pre-tested concepts ready to deploy at any time"
    ],
    correct: 3,
    explanation: "Proactive pipeline management is the professional answer. Always having 2+ weeks of tested replacements queued means you never pause in a panic. Reactive fixes (cutting budget, changing targeting) are band-aids. The real solution is a continuous testing machine that never runs dry."
  },

  // ─── TOOLS & PLATFORMS ────────────────────────────────────────────────────

  {
    id: 34,
    category: "Tools & Platforms",
    difficulty: "junior",
    type: "single",
    question: "What is AppsFlyer and why is it essential for a Creative Producer?",
    options: [
      "A Mobile Measurement Partner (MMP) that tracks installs, attribution, ROAS, and cohort data across all ad networks",
      "A video editing tool for creating mobile game ad creatives",
      "A platform for designing playable ads without coding",
      "An AI tool that generates creative variations automatically"
    ],
    correct: 0,
    explanation: "AppsFlyer is the industry-standard MMP — it sits between your ad networks and your game, tracking where every install came from and how those users monetize. Without an MMP, you can't accurately calculate ROAS, compare network performance, or make data-driven creative decisions."
  },

  {
    id: 35,
    category: "Tools & Platforms",
    difficulty: "junior",
    type: "single",
    question: "Meta Advantage+ Creative supports how many video/image assets per campaign?",
    options: [
      "1 video and 1 image",
      "Up to 10 images/videos with 5 headlines, 5 texts, 5 CTAs",
      "3 videos or images",
      "Unlimited assets — Meta optimizes automatically"
    ],
    correct: 1,
    explanation: "Meta Advantage+ Creative supports up to 10 images/videos, 5 headlines, 5 primary texts, 5 descriptions, and 5 CTA buttons in one campaign. Meta's algorithm automatically combines these elements and optimizes toward the highest-performing combinations."
  },

  {
    id: 36,
    category: "Tools & Platforms",
    difficulty: "mid",
    type: "single",
    question: "What is a Creative Management Platform (CMP) and when should a game studio invest in one?",
    options: [
      "A scheduling tool for managing the creative team's work calendar",
      "A platform for reviewing and approving ad designs before launch",
      "Software that automates creation of ad variations, resizes assets for all platforms, and manages publishing — valuable when running 10+ creatives across 3+ networks",
      "A social media management tool for community content"
    ],
    correct: 2,
    explanation: "CMPs (like Layer AI, Smartly.io, Bannerflow) automate the creation of hundreds of creative variations from one concept and handle multi-platform resizing and publishing. The ROI threshold: once you're managing 10+ live creatives across 3+ networks, manual work becomes a bottleneck — that's when a CMP pays for itself."
  },

  {
    id: 37,
    category: "Tools & Platforms",
    difficulty: "mid",
    type: "single",
    question: "How does Google UAC (Universal App Campaigns) fundamentally differ from Meta Ads in creative management?",
    options: [
      "Google UAC only supports static images, not video",
      "Google UAC only works for Android apps, not iOS",
      "Google UAC requires manual bidding and creative selection",
      "Google UAC is inherently programmatic/DCO — you supply assets and Google automatically optimizes across Search, Display, YouTube, and Discover"
    ],
    correct: 3,
    explanation: "Google UAC is DCO (Dynamic Creative Optimization) by design. You supply up to 20 images, 20 videos, 10 headlines, and 5 descriptions, and Google automatically assembles and optimizes combinations across all its surfaces. You can't manually select which creative runs where — Google does it."
  },

  {
    id: 38,
    category: "Tools & Platforms",
    difficulty: "mid",
    type: "single",
    question: "What is SKAdNetwork (SKAN) and why does every iOS UA campaign need to account for it?",
    options: [
      "Apple's privacy-preserving attribution framework (post-iOS 14.5) that limits individual tracking but provides campaign-level conversion data",
      "A creative quality scoring system used by Apple's App Store",
      "A tool for scanning ad creatives for Apple's content policy compliance",
      "A network for sharing SKU-level ad performance data with partners"
    ],
    correct: 0,
    explanation: "SKAN (SKAdNetwork) is Apple's response to ATT (App Tracking Transparency). After iOS 14.5, individual user-level attribution was restricted. SKAN provides aggregated, delayed, anonymized conversion signals instead. Understanding SKAN is essential because iOS campaigns require fundamentally different measurement strategies than Android."
  },

  {
    id: 39,
    category: "Tools & Platforms",
    difficulty: "senior",
    type: "single",
    question: "What is a postback in MMP attribution, and why does it matter for creative optimization?",
    options: [
      "A performance report sent to stakeholders after a campaign ends",
      "A server-to-server signal from the MMP (e.g. AppsFlyer) to ad networks confirming installs and in-app events, enabling network algorithms to optimize toward real conversions",
      "A refund mechanism for invalid or fraudulent clicks",
      "Feedback from the creative team after reviewing campaign performance"
    ],
    correct: 1,
    explanation: "Postbacks are the data pipe between your MMP and your ad networks. When AppsFlyer confirms an install or purchase event, it sends that signal back to Meta/TikTok/Google so their algorithms can optimize toward actual installs — not just clicks. Without properly configured postbacks, networks optimize toward the wrong signals and creative performance suffers."
  },

  {
    id: 40,
    category: "Tools & Platforms",
    difficulty: "senior",
    type: "single",
    question: "Your studio runs 18 live creatives across Meta, TikTok, and Google UAC simultaneously. What is the strongest case for adopting a CMP?",
    options: [
      "CMPs make creatives look more professional and polished",
      "CMPs are required by Meta when running more than 10 creatives",
      "Manual management of 18 creatives across 3 platforms with different specs creates version control chaos, resizing bottlenecks, and human error — a CMP eliminates all three",
      "CMPs automatically improve creative performance through AI optimization"
    ],
    correct: 2,
    explanation: "At 18+ creatives across 3 platforms, each with different specs, the operational complexity becomes unmanageable manually — mismatched sizes, version errors, delayed launches, inconsistent naming. A CMP (Layer AI, Smartly.io) solves version control, auto-resizing, and multi-platform publishing in one system."
  },

  // ─── PRODUCTION WORKFLOW ──────────────────────────────────────────────────

  {
    id: 41,
    category: "Production Workflow",
    difficulty: "junior",
    type: "single",
    question: "What is a creative brief and what must it include?",
    options: [
      "A short video ad under 15 seconds",
      "A summary of campaign performance sent to stakeholders",
      "A legal agreement for using licensed music in ads",
      "A document that aligns the team before production: objective, target audience, key message, format specs, and success metrics"
    ],
    correct: 3,
    explanation: "A creative brief is the alignment document that comes before any production begins. Without it, designers and video editors make assumptions that waste time and budget. A good brief includes: campaign objective, target audience, core message, formats/specs required, tone, and what 'success' looks like."
  },

  {
    id: 42,
    category: "Production Workflow",
    difficulty: "mid",
    type: "single",
    question: "What is the typical production timeline for a fully tested and network-compliant playable ad?",
    options: [
      "7–10 days: prototype in 3–5 days, QA and optimization in 5–7 days",
      "1–2 days for a simple prototype",
      "2–4 hours with the right tools",
      "4–6 weeks including full QA across all target devices"
    ],
    correct: 0,
    explanation: "Playable ad production: concept and art (1–2 days) → development (2–3 days prototype, 3–5 days full build) → QA on emulators and touch testing → network spec compliance → 7–10 days total for a production-ready asset. Plan this into your creative calendar."
  },

  {
    id: 43,
    category: "Production Workflow",
    difficulty: "mid",
    type: "single",
    question: "You have budget to produce one playable ad (7 days, $8K) OR five static concept tests (2 days, $2K total). No other constraints. Which do you choose?",
    options: [
      "The playable — quality always wins over quantity",
      "The five statics — validate the concept direction first, then invest in the proven playable",
      "The playable — it will outperform statics for any casual game regardless of concept",
      "Neither — wait until budget allows for both simultaneously"
    ],
    correct: 1,
    explanation: "Never invest in expensive production before validating the concept. Static tests can prove which hook, visual angle, or mechanic moment resonates before committing $8K to a playable. Build the playable version of the proven static winner. Speed of learning > production quality at early stages."
  },

  {
    id: 44,
    category: "Production Workflow",
    difficulty: "mid",
    type: "single",
    question: "In a casual game UA team, who is primarily responsible for analyzing creative performance data and translating it into new test hypotheses?",
    options: [
      "The graphic designer — they create the assets and understand visual performance best",
      "The UA Manager — they control the budget and platform settings",
      "The Creative Producer — they bridge creative execution and performance data",
      "The game developer — they understand the mechanics that should be showcased"
    ],
    correct: 2,
    explanation: "The Creative Producer sits at the intersection of creative execution and performance data. They own the analysis → hypothesis → test → scale loop. Designers execute, UA Managers run the platforms, but the Creative Producer is responsible for the strategic insight that drives what gets made and tested next."
  },

  {
    id: 45,
    category: "Production Workflow",
    difficulty: "senior",
    type: "single",
    question: "A creative team member says: 'We can't produce 20 new concepts per week — that's completely unrealistic.' How should a Creative Producer respond?",
    options: [
      "Agree and lower the target — pushing the team will hurt quality",
      "Insist on 20 — competitors do it, so you must too",
      "Outsource all production to an external agency to hit the number",
      "Break down the mix by format: static tests (hours), video hook iterations (1–2 days), playable tweaks (3–5 days) — then calculate an achievable weekly volume and identify the bottleneck"
    ],
    correct: 3,
    explanation: "20 concepts isn't 20 full video productions — it's a deliberate mix: 6–8 static variants (hours each), 8–10 video hook iterations (days each), 2–3 playable tweaks (3–5 days each). Breaking it down by format type reveals what's actually achievable and where the real bottleneck is: production tools, team size, or brief quality."
  },

  // ─── STRATEGY & SCENARIOS ─────────────────────────────────────────────────

  {
    id: 46,
    category: "Strategy & Scenarios",
    difficulty: "mid",
    type: "single",
    question: "A word puzzle game is spending $50K/month on UA with CPI $4.20 but LTV of only $4.80. What is the most effective intervention?",
    options: [
      "Optimize creative to lower CPI AND collaborate with product on retention and monetization improvements simultaneously",
      "Stop all UA immediately until LTV improves",
      "Scale spend to $100K/month — the margin is positive so scaling always helps",
      "Switch entirely to playable ads — they always lower CPI to acceptable levels"
    ],
    correct: 0,
    explanation: "$0.60 margin is unsustainable at scale. You must attack both sides simultaneously: reduce CPI through better creative testing (formats, hooks, audiences), AND improve LTV through product changes (onboarding, monetization flow, session length). Single-sided fixes are insufficient — the math requires improvement on both variables."
  },

  {
    id: 47,
    category: "Strategy & Scenarios",
    difficulty: "mid",
    type: "single",
    question: "You're launching a hypercasual game on Meta with a $10,000 test budget and 5 creative concepts. What is the optimal testing approach?",
    options: [
      "Put all $10K behind the concept you believe is strongest",
      "Micro-test all 5 concepts at $1,000 each; scale the top 2 performers with the remaining $5,000",
      "Run 3 campaigns at $3,333 each with different audience targeting",
      "Hold the entire $10K until you have at least 10 concepts ready to test"
    ],
    correct: 1,
    explanation: "Best practice: micro-test all 5 equally ($1K each = $5K) to identify data-backed winners, then concentrate the remaining $5,000 on proven performers. This is the explore-then-exploit model — you gather signal wide before committing capital deep. Never skip the validation phase."
  },

  {
    id: 48,
    category: "Strategy & Scenarios",
    difficulty: "senior",
    type: "single",
    question: "Tripledot Studios has no single game exceeding 10% of total revenue. What does this require of their Creative Production approach?",
    options: [
      "Focus 90% of creative resources on the top-performing game at all times",
      "Avoid investing heavily in any single game's creative to stay flexible",
      "Scalable, systematic creative production processes and testing frameworks that work consistently across an entire portfolio of games",
      "Outsource all creative production to minimize fixed team costs"
    ],
    correct: 2,
    explanation: "Portfolio diversification at Tripledot's scale requires systemized creative operations — not bespoke custom processes for each title. Their success comes from applying consistent UA frameworks, testing methodologies, and creative tooling across the entire portfolio. The system is the competitive advantage, not individual creative genius."
  },

  {
    id: 49,
    category: "Strategy & Scenarios",
    difficulty: "senior",
    type: "single",
    question: "Voodoo tests hundreds of game prototypes yearly and validates them through UA creative performance benchmarks. What does this mean for the Creative Producer role at a company like Voodoo?",
    options: [
      "Creative Producers focus exclusively on visual polish and brand aesthetics",
      "Creative Producers focus on brand building over performance metrics",
      "Creative Producers manage long production timelines with large teams and ample budgets",
      "Creative Producers must operate at high speed with exceptional data intuition — creatives are the validation instrument that decides if a game lives or dies"
    ],
    correct: 3,
    explanation: "At Voodoo, games are validated — or killed — by their creative CPI benchmarks. This elevates the Creative Producer role: your work isn't just marketing, it's product validation. Speed, data intuition, and the ability to make confident decisions with limited data are the defining skills."
  },

  {
    id: 50,
    category: "Strategy & Scenarios",
    difficulty: "senior",
    type: "multi",
    question: "You're building the creative strategy for a new match-3 game entering a crowded market. Which approaches reflect senior-level thinking? (Select all that apply)",
    options: [
      "Analyze top competitors' creative libraries to identify white space — angles they haven't tested",
      "Start with a static-first testing sprint to validate hooks before investing in video or playable production",
      "Assume the strongest mechanic is the best hook without testing alternatives",
      "Build a 3-month creative calendar with fatigue prevention built in — rotate every 7 days minimum",
      "Track D7 and D30 ROAS from day one to ensure creative is attracting quality users, not just installs"
    ],
    correct: [0, 1, 3, 4],
    explanation: "Senior strategy: competitive analysis reveals white space (A), static-first validation saves budget (B), pre-planned rotation prevents fatigue at scale (D), and downstream ROAS tracking ensures creative quality over vanity metrics (E). Option C is a common trap — even the 'obvious' hook must be validated against alternatives."
  },

  // ─── BIDDING & ALGORITHMS ─────────────────────────────────────────────────

  {
    id: 51,
    category: "Bidding & Algorithms",
    difficulty: "junior",
    type: "single",
    question: "What is tROAS bidding and when is it preferred over tCPI?",
    options: [
      "Target Return on Ad Spend — preferred when users have meaningfully different revenue values, so the algorithm can prioritize high-value installs",
      "Target Rate of Ad Spend — preferred when the game has no monetization yet",
      "Total Reach on Ad Sets — preferred when you want maximum impressions regardless of cost",
      "Tracked Revenue on Ad Spend — only used for retargeting campaigns"
    ],
    correct: 0,
    explanation: "tROAS tells the algorithm to optimize for revenue value per install, not just cost per install. It's the right choice when user monetization varies significantly — for example, a game where top 5% of users generate 70% of revenue. For hypercasual games with flat IAA value, tCPI is simpler and often equally effective."
  },

  {
    id: 52,
    category: "Bidding & Algorithms",
    difficulty: "junior",
    type: "single",
    question: "How many daily purchase/conversion events does a campaign typically need before tROAS bidding can optimize reliably?",
    options: [
      "At least 5 conversions per day",
      "At least 60 conversions per day",
      "At least 15 conversions per day",
      "At least 500 conversions per day"
    ],
    correct: 1,
    explanation: "Most platforms require 50–60 conversion events per day before their algorithm has enough signal to optimize tROAS reliably. Below this threshold, the algorithm is essentially guessing. Under 30 daily conversions, tCPI is more appropriate. Under 15, even tCPI may struggle — focus on volume first."
  },

  {
    id: 53,
    category: "Bidding & Algorithms",
    difficulty: "mid",
    type: "single",
    question: "You launch a tROAS campaign. After 3 days, performance looks inconsistent — ROAS spikes one day, drops the next. Your team wants to change the bid target. What should you do?",
    options: [
      "Reduce the tROAS target immediately to give the algorithm more room",
      "Switch to tCPI to stabilize performance faster",
      "Do nothing — the campaign is in its learning phase; wait the full 21-day runway before evaluating",
      "Pause and restart the campaign to reset the algorithm"
    ],
    correct: 2,
    explanation: "tROAS campaigns require a 21-day learning period minimum. The algorithm is collecting win/loss auction data and calibrating bids to hit your target. Early instability is expected and normal. Making changes mid-learning resets the clock and can permanently disrupt optimization. Patience in the learning phase is one of the clearest separators between junior and senior UA operators."
  },

  {
    id: 54,
    category: "Bidding & Algorithms",
    difficulty: "mid",
    type: "single",
    question: "What is the fundamental difference between value-based bidding and standard tCPI bidding?",
    options: [
      "Value-based bidding spends more budget — tCPI is more cost-efficient",
      "Value-based bidding is the same as tROAS but applied to video ads only",
      "tCPI is only available on Meta; value-based bidding works across all platforms",
      "Value-based bidding adjusts bids in real-time based on predicted user LTV, while tCPI targets a flat cost regardless of user quality"
    ],
    correct: 3,
    explanation: "Value-based bidding uses ML to predict each user's lifetime value before winning the auction and bids higher for users predicted to spend more. tCPI treats every potential install as equally valuable and bids to hit a flat cost target. The difference matters enormously for games with high LTV variance — value-based bidding finds whales; tCPI finds installs."
  },

  {
    id: 55,
    category: "Bidding & Algorithms",
    difficulty: "mid",
    type: "single",
    question: "A tROAS campaign on Google UAC has been running for 25 days and is consistently hitting 280% ROAS against a 300% target. What is the appropriate next action?",
    options: [
      "Make a small downward adjustment to the tROAS target (e.g., 280%) to align with actual performance and monitor for one more week",
      "Switch to tCPI immediately — tROAS is clearly failing",
      "Pause the campaign — it is not meeting target",
      "Double the daily budget to force more conversions and improve performance"
    ],
    correct: 0,
    explanation: "After the learning period (21 days), you can make informed adjustments. If the campaign consistently lands at 280% while targeting 300%, the target is slightly too aggressive. A modest target reduction (to ~280–290%) gives the algorithm more room to scale volume without abandoning performance. Aggressive changes (doubling budget or scrapping the campaign) are reactive, not strategic."
  },

  {
    id: 56,
    category: "Bidding & Algorithms",
    difficulty: "senior",
    type: "single",
    question: "You're launching UA for a hypercasual game with pure IAA (in-app advertising) monetization, ARPDAU of $0.45, and flat user value. Which bidding strategy is most appropriate?",
    options: [
      "tROAS — it will find the highest-value users and maximize revenue",
      "tCPI — all users have roughly equal value in IAA, so optimizing for flat install cost is most efficient",
      "Value-based bidding — automatically optimizes for top spenders",
      "Manual CPC bidding — gives you full control over individual auction bids"
    ],
    correct: 1,
    explanation: "For pure IAA games, every retained user generates similar ad revenue — there are no whales. Value-based and tROAS strategies are designed for revenue variance. When user value is flat, tCPI is the correct bidding strategy: it drives volume efficiently without over-complicating signal collection. Applying tROAS to IAA games often produces noisy, unstable campaigns."
  },

  {
    id: 57,
    category: "Bidding & Algorithms",
    difficulty: "senior",
    type: "single",
    question: "A tROAS campaign on Meta has been live for 8 days. Performance is 20% below target. Your manager wants to switch to tCPI. What is the correct recommendation?",
    options: [
      "Agree — tCPI will stabilize performance faster and give cleaner data",
      "Agree, but only switch if CPI is also above benchmark",
      "Disagree — switching bidding strategies mid-learning phase resets the algorithm's optimization progress and often worsens overall performance",
      "Suggest pausing for 48 hours, then restarting tROAS with a lower target"
    ],
    correct: 2,
    explanation: "Switching bidding strategies mid-learning is one of the most common and costly UA mistakes. At day 8, the algorithm is still in its calibration window (21-day runway). Each bid win/loss is training data — switching discards all of it and starts a new learning curve. The correct move is to stay the course through day 21, then evaluate. If the campaign genuinely cannot reach its learning threshold, address that first (creative performance, audience size, budget)."
  },

  {
    id: 58,
    category: "Bidding & Algorithms",
    difficulty: "senior",
    type: "multi",
    question: "Which conditions must be met before a mobile game UA campaign is ready to use value-based (tROAS) bidding effectively? (Select all that apply)",
    options: [
      "60+ purchase/revenue events per day to provide sufficient algorithm signal",
      "Proven LTV variance in the game — some users genuinely spend significantly more than others",
      "At least 12 months of campaign history on the same account",
      "Reliable MMP attribution passing revenue values back to the ad network",
      "A daily budget at least 5x the average CPI to allow the algorithm room to explore"
    ],
    correct: [0, 1, 3, 4],
    explanation: "Value-based bidding needs: sufficient conversion volume (60+/day), meaningful revenue variance (no point optimizing for value if all users spend the same), clean revenue postbacks from your MMP to the network (so the algorithm knows which installs generated revenue), and enough budget headroom (5x CPI minimum) for the algorithm to test different user segments. 12 months of account history is helpful but not a hard requirement — the campaign-level learning matters more."
  },

  // ─── iOS ATTRIBUTION ──────────────────────────────────────────────────────

  {
    id: 59,
    category: "iOS Attribution",
    difficulty: "junior",
    type: "single",
    question: "What is SKAdNetwork (SKAN) and what triggered its widespread adoption in mobile UA?",
    options: [
      "A creative testing framework developed by Apple for A/B testing ad formats",
      "A Meta advertising API that replaced pixel tracking after GDPR",
      "A third-party analytics SDK that replaced IDFA for Android and iOS simultaneously",
      "Apple's privacy-preserving attribution framework adopted after iOS 14.5's App Tracking Transparency (ATT) restricted individual user tracking"
    ],
    correct: 3,
    explanation: "SKAN (SKAdNetwork) is Apple's privacy-first attribution system. When iOS 14.5 introduced ATT in April 2021, users had to opt-in to tracking — and most didn't. IDFA-based attribution collapsed. SKAN fills the gap: it provides aggregated, privacy-safe conversion data at the campaign level without exposing individual user identity. Every iOS UA team must now understand it."
  },

  {
    id: 60,
    category: "iOS Attribution",
    difficulty: "junior",
    type: "single",
    question: "SKAN 4.0 uses three postback windows. What is the measurement period covered by Postback 1?",
    options: [
      "Day 0–2 (0 to 48 hours post-install)",
      "Day 0 only (install day)",
      "Day 0–7",
      "Day 8–35"
    ],
    correct: 0,
    explanation: "SKAN 4.0 Postback 1 covers D0–D2 (0–48 hours post-install) and is the most valuable window — it's the only one that supports fine-grained conversion values (0–63). Postback 2 covers D3–D7 and Postback 3 covers D8–D35, but both return coarse values only (low/medium/high). Earlier SKAN versions only had one postback window; 4.0's three-window model gives significantly more longitudinal data."
  },

  {
    id: 61,
    category: "iOS Attribution",
    difficulty: "mid",
    type: "single",
    question: "In SKAN 4.0, what are 'coarse-grained' conversion values and when do you receive them?",
    options: [
      "Detailed numeric values (0–63) available in all three postback windows",
      "Three broad revenue tiers — 'low', 'medium', 'high' — returned in Postbacks 2 and 3 when volume doesn't meet the fine-grain privacy threshold",
      "A quality score Apple assigns to creatives based on user engagement",
      "A deprecated SKAN 3.0 format replaced by fine-grained values in SKAN 4.0"
    ],
    correct: 1,
    explanation: "Coarse values are SKAN 4.0's privacy compromise. When campaign volume is below Apple's threshold for fine-grained data, you get only three buckets: low / medium / high. This still provides signal — you can map 'low' to tutorial completion, 'medium' to first purchase, 'high' to whale threshold — but it's less precise than the 0–63 fine-grained scale in Postback 1."
  },

  {
    id: 62,
    category: "iOS Attribution",
    difficulty: "mid",
    type: "single",
    question: "What is a 'privacy threshold' in SKAN 4.0 and what happens when your campaign falls below it?",
    options: [
      "A minimum ROAS floor below which Apple blocks your ad from running",
      "A content rating system that restricts which audiences can see your ad",
      "A minimum install volume per campaign per 24-hour window; below it, Apple withholds fine-grained data, source IDs, or the postback entirely",
      "A maximum frequency cap Apple enforces to prevent creative fatigue"
    ],
    correct: 2,
    explanation: "Apple's privacy threshold is about install volume per campaign per 24-hour window. It determines what data tier you receive: Tier 4 (highest volume) = full fine-grain data + source ID; Tier 1 (lowest) = coarse values only, no source ID, possibly no postback at all. The implication: consolidating ad spend under fewer campaigns increases volume per campaign and unlocks higher data tiers."
  },

  {
    id: 63,
    category: "iOS Attribution",
    difficulty: "mid",
    type: "single",
    question: "Your iOS campaign produces strong installs, but SKAN postbacks are returning 'null' for conversion values on most installs. What is the most likely cause?",
    options: [
      "Your MMP SDK is outdated and not reading SKAN postbacks correctly",
      "Meta is blocking SKAN postbacks on new accounts under 6 months old",
      "SKAN conversion values only work for games with IAP — IAA games always return null",
      "The campaign is fragmented across too many ad sets, falling below Apple's privacy threshold for each, so postbacks are withheld"
    ],
    correct: 3,
    explanation: "Null conversion values almost always mean volume is too fragmented. Apple calculates the privacy threshold per campaign per 24-hour window. If you're running 20 small campaigns each driving 10 installs/day, each one falls below the threshold and postbacks return no data. The fix: consolidate into fewer, larger campaigns so each one crosses the threshold and earns higher data tiers."
  },

  {
    id: 64,
    category: "iOS Attribution",
    difficulty: "senior",
    type: "single",
    question: "How should a Creative Producer strategically map SKAN conversion values to game monetization milestones?",
    options: [
      "Map values to a small set of high-signal milestones — tutorial complete, first session end, first purchase tier, whale threshold — that predict LTV at D2 and proxy retention at D7",
      "Use all 63 fine-grained values to track every possible in-app action for maximum data granularity",
      "Leave conversion values at default settings and let the MMP auto-configure them",
      "Map values exclusively to purchase amounts and ignore retention signals"
    ],
    correct: 0,
    explanation: "Trying to track every action wastes the limited 0–63 range and makes optimization noisy. The smart approach: identify 4–6 milestones that are strong LTV predictors (tutorial completion = early retention proxy; first purchase = monetization signal; day-3 re-engagement = retention health; whale-tier purchase = high-LTV signal). These map to coarse values (low/mid/high) in Postbacks 2 and 3 as well, so you maintain signal across all three windows."
  },

  {
    id: 65,
    category: "iOS Attribution",
    difficulty: "senior",
    type: "single",
    question: "What does Media Mix Modeling (MMM) add that SKAN cannot provide?",
    options: [
      "Campaign-level precision on which creative drove which install",
      "Incremental contribution of each channel to overall installs — the true causal impact of spend, not just last-touch credit",
      "Real-time daily optimization signals for bid adjustment",
      "Postback window coverage beyond Day 35 for LTV modeling"
    ],
    correct: 1,
    explanation: "SKAN tells you what conversions happened within a campaign. MMM tells you how much of your total growth was actually caused by that campaign vs. what would have happened organically. SKAN is good for campaign-level pacing and creative optimization. MMM is good for answering 'if we paused this channel entirely, how much would we lose?' — which SKAN fundamentally cannot answer. Best practice: use both in parallel."
  },

  {
    id: 66,
    category: "iOS Attribution",
    difficulty: "senior",
    type: "multi",
    question: "Your iOS SKAN 4.0 campaigns are getting Tier 1 postbacks (coarse values only, no source ID) across all ad sets. Which actions would move you to higher data tiers? (Select all that apply)",
    options: [
      "Consolidate fragmented campaigns into fewer, higher-volume campaigns to increase installs-per-campaign per 24h window",
      "Increase daily budget to drive more installs per campaign and cross the privacy threshold",
      "Switch from SKAN to probabilistic attribution entirely — Tier 1 data is not actionable",
      "Refine your SKAN conversion value schema to capture higher-frequency early events (e.g., tutorial step 1) rather than rare events (first purchase)"
    ],
    correct: [0, 1, 3],
    explanation: "Tier 1 happens when volume is too low. Fix it by: consolidating campaigns (fewer buckets = more installs each), scaling budget to drive volume, and mapping conversion values to events that happen more frequently in D0–D2 (e.g., tutorial completion rather than first purchase, which many users never reach). Abandoning SKAN entirely (option C) is the wrong move — Tier 1 data with coarse values still provides directional signal, and higher tiers are achievable with structural fixes."
  },

  // ─── CREATIVE METRICS ─────────────────────────────────────────────────────

  {
    id: 67,
    category: "Creative Metrics",
    difficulty: "junior",
    type: "single",
    question: "What is 'hook rate' (also called thumb-stop ratio) in video ad creative?",
    options: [
      "The percentage of users who click the CTA button at the end of a video",
      "The ratio of installs to video views — how many viewers become players",
      "The percentage of impressions where the user watches at least 3 seconds of the video instead of scrolling past",
      "The number of times a creative is reused across different campaigns"
    ],
    correct: 2,
    explanation: "Hook rate = (3-second views) / (total impressions). It measures your ad's ability to stop a scrolling user. A hook rate of 30–40% is a solid baseline; 50%+ is excellent. It's the first gate in the creative funnel — if you can't stop the scroll, nothing else matters. High hook rate alone doesn't mean a great ad, but low hook rate guarantees a poor one."
  },

  {
    id: 68,
    category: "Creative Metrics",
    difficulty: "junior",
    type: "single",
    question: "What does 'hold rate' measure in a video ad?",
    options: [
      "How long the ad is held in the creative approval queue before going live",
      "How many users 'hold' (save) the ad to their bookmarks or shares",
      "The percentage of the budget held back by the platform's pacing algorithm",
      "The percentage of users who watched the first 3 seconds and continued watching to 15 seconds"
    ],
    correct: 3,
    explanation: "Hold rate = (15-second viewers) / (3-second viewers). It measures whether your ad keeps viewers engaged after the hook. A 40–50% hold rate is average; 60%+ is strong. Hook rate captures attention — hold rate captures interest. An ad with high hook but low hold usually has a strong visual opening but a weak or misleading middle that fails to sustain curiosity."
  },

  {
    id: 69,
    category: "Creative Metrics",
    difficulty: "mid",
    type: "single",
    question: "A video ad has a 58% hook rate but only a 1.8% CTR. What does this pattern most likely indicate?",
    options: [
      "The ad stops the scroll effectively but fails to create desire or motivation to install — the middle and CTA are weak",
      "The ad is performing very well — hook rate is the most important metric",
      "The CTR benchmark for this platform is lower than 2%, so performance is normal",
      "A technical error — high hook rate and low CTR cannot coexist in a well-served ad"
    ],
    correct: 0,
    explanation: "High hook rate + low CTR = the ad grabs attention but loses the user before the call-to-action. The opening works. The content between second 3 and the end doesn't build enough desire to install. This is a creative structure problem: the AIDA framework (Attention → Interest → Desire → Action) breaks down at Interest or Desire. Fix: rework the middle section to better show the game's core satisfaction loop."
  },

  {
    id: 70,
    category: "Creative Metrics",
    difficulty: "mid",
    type: "single",
    question: "Using the AIDA framework for a casual mobile game video ad, what is the primary goal of the first 3 seconds?",
    options: [
      "Clearly explain all game features so users can make an informed install decision",
      "Create immediate Attention — stop the scroll with a visual conflict, surprising moment, or relatable problem before the user can swipe away",
      "Show the download button and CTA as early as possible to maximize click-through rate",
      "Establish the game's brand identity and logo for awareness"
    ],
    correct: 1,
    explanation: "In the AIDA model, the first 3 seconds own Attention entirely. This is the thumb-stop window. Effective hooks in casual games: an unsolvable puzzle, a character in crisis, a counter-intuitive gameplay moment, or a relatable frustration. Brand logos, feature lists, and CTAs in the first 3 seconds are the biggest hook killers — they give users zero reason to stop scrolling."
  },

  {
    id: 71,
    category: "Creative Metrics",
    difficulty: "mid",
    type: "single",
    question: "A 'fake game' ad shows gameplay that doesn't exist in the actual game. It achieves 45% hook rate and $0.40 CPI — far better than your honest creative. Why should you NOT scale it?",
    options: [
      "Fake ads are illegal and will result in app store removal immediately",
      "Platform algorithms detect fake ads and automatically reduce their delivery over time",
      "The low CPI is misleading — fake ads attract users who find a different game than advertised, driving D7 retention as low as 1.5% vs 11% for honest ads, collapsing LTV and making unit economics unprofitable",
      "Fake ads work well short-term but are only a problem if your game has IAP monetization"
    ],
    correct: 2,
    explanation: "Fake ads create a user expectation mismatch. The low CPI is real — but the installed users immediately find a different game. D7 retention collapses to ~1.5% vs ~11% for honest ads (7x difference). LTV drops to ~$0.05 vs ~$0.25. App store ratings tank (users leave 'fake ad' reviews). The unit economics look profitable at install and are catastrophically unprofitable by day 7. Low CPI from fake ads is not a competitive advantage — it's a trap."
  },

  {
    id: 72,
    category: "Creative Metrics",
    difficulty: "mid",
    type: "single",
    question: "What is the correct relationship between hook rate, hold rate, and purchase intent in a mobile game ad?",
    options: [
      "They are independent metrics — each can be optimized separately without affecting the others",
      "Hold rate automatically increases when hook rate increases, so only one needs to be optimized",
      "Hook rate is the only metric that correlates with installs; hold rate only matters for brand awareness campaigns",
      "Hook rate gets users to 3s; hold rate gets them to 15s; together they determine what percentage of impressions reach the CTA with genuine interest — high scores on both are needed for strong conversion"
    ],
    correct: 3,
    explanation: "Hook and hold are sequential gates in the creative funnel. If hook rate is 40% and hold rate is 50%, then 20% of all impressions reach the 15-second mark with real engagement — that's the audience that the CTA actually speaks to. Optimizing hook without hold means you stop scrollers who leave quickly. Optimizing hold without hook means you engage a tiny fraction of passersby. Both gates must be strong for conversion to follow."
  },

  {
    id: 73,
    category: "Creative Metrics",
    difficulty: "senior",
    type: "single",
    question: "Creative A: 32% hook rate, 62% hold rate, 4.1% CTR. Creative B: 56% hook rate, 19% hold rate, 2.9% CTR. Same spend, same audience. Which do you prioritize for scaling?",
    options: [
      "Creative A — high hold rate and CTR indicate users who engage are genuinely interested; the creative sustains attention and drives action, producing higher-quality traffic",
      "Creative B — higher hook rate means more people are engaging with the ad",
      "Neither — both need to be reworked before scaling",
      "Run equal spend on both and let the platform decide automatically"
    ],
    correct: 0,
    explanation: "Creative A wins on quality signal. While B stops more scrollers, 81% of those users leave within 3–15 seconds — only 19% hold. A stops fewer, but 62% of those who pause stay engaged, and 4.1% click. The downstream users from A are more likely to install and monetize. High hook + low hold + lower CTR = 'clickbait-lite' pattern. High hold + higher CTR = genuine interest and intent. Scale A. Use B's hook as an element to test on future creatives."
  },

  {
    id: 74,
    category: "Creative Metrics",
    difficulty: "senior",
    type: "single",
    question: "DCO (Dynamic Creative Optimization) on TikTok causes ad sets to fatigue 40% faster than standard creative. What is the root cause, and how do you operationally compensate?",
    options: [
      "DCO produces lower-quality ads that users find annoying; compensate by reducing DCO usage",
      "DCO's algorithm concentrates spend on the highest-performing combinations, burning them out rapidly; compensate by refreshing at least 2 component variants (new hook, new CTA, new gameplay clip) every 2 weeks",
      "TikTok's shorter video format causes faster fatigue regardless of DCO; compensate by switching to Meta for DCO campaigns",
      "DCO fatigue only affects static image ads, not video; no operational compensation needed for video-based games"
    ],
    correct: 1,
    explanation: "DCO accelerates fatigue because it finds the winning combination fast — then delivers it at high frequency until the audience is fully saturated. The efficiency that makes DCO powerful also concentrates exposure on a narrow set of combinations. The fix is a proactive refresh cadence: introduce new component variants (new hook video, new gameplay clip, new CTA text) every 2 weeks. You don't need to rebuild the entire creative — swapping one or two components resets the combination space and extends campaign life significantly."
  },

  // ─── INCREMENTALITY ───────────────────────────────────────────────────────

  {
    id: 75,
    category: "Incrementality",
    difficulty: "junior",
    type: "single",
    question: "What does incrementality testing measure in mobile UA?",
    options: [
      "How much each ad creative incrementally improves CTR compared to the previous version",
      "The incremental cost of each additional install as budgets scale",
      "The true causal impact of advertising — how many additional installs happened because of the ad, versus installs that would have occurred organically anyway",
      "How much campaign performance improved after a creative refresh"
    ],
    correct: 2,
    explanation: "Incrementality answers the question: 'What would have happened if we hadn't run this ad?' The difference between the world with the ad and the world without it is the true incremental contribution. Last-click attribution takes credit for any install that clicked an ad — including users who would have found the game organically anyway. Incrementality testing separates real causation from coincidental correlation."
  },

  {
    id: 76,
    category: "Incrementality",
    difficulty: "mid",
    type: "single",
    question: "What is a geo holdout test in incrementality measurement?",
    options: [
      "A test where certain geographic regions are excluded from a game's launch to measure organic growth patterns",
      "A test that measures which geographic market has the highest LTV to determine where to scale spend",
      "A holdout test where a single geography receives all budget to maximize statistical significance",
      "A test where two groups of geographies receive different ad spend levels; the difference in installs between test and control geos reveals true incremental impact"
    ],
    correct: 3,
    explanation: "Geo holdout is the gold standard for incrementality: split similar geographies into a test group (receive ads) and a control group (no ads or reduced spend). Measure organic installs in the control geo as your baseline. The installs in the test geo above that baseline are the incremental ones your ads actually drove. It's privacy-safe, channel-agnostic, and doesn't require user-level data."
  },

  {
    id: 77,
    category: "Incrementality",
    difficulty: "mid",
    type: "single",
    question: "Why does last-click attribution typically overstate the true performance of a campaign?",
    options: [
      "It assigns full credit to the last ad a user clicked before installing, including users who were already planning to install organically — meaning it takes credit for conversions it didn't cause",
      "Last-click attribution counts clicks from bots and invalid traffic, inflating install numbers",
      "Last-click attribution only tracks paid installs and misses organic installs, causing an imbalanced comparison",
      "Last-click attribution uses estimated data rather than real install counts"
    ],
    correct: 0,
    explanation: "Last-click attribution's flaw is causation vs correlation. A user who was going to search for and install a game anyway might click an ad first — and last-click gives the ad 100% of the credit. Retargeting is especially prone to this: warm users who were about to return to the game see a retargeting ad, click it, re-engage, and last-click calls it a re-acquisition success. Incrementality testing reveals how much of that would have happened without the ad."
  },

  {
    id: 78,
    category: "Incrementality",
    difficulty: "mid",
    type: "single",
    question: "What is a PSA (Public Service Announcement) test in incrementality measurement?",
    options: [
      "A public announcement made to users explaining how their data is used for ad targeting",
      "A test where the control group sees a neutral non-branded ad (PSA) instead of no ad, isolating the effect of ad exposure vs the effect of the specific creative",
      "A test that measures ad performance across public social media platforms vs private channels",
      "An audit process where platforms publicly share their attribution methodology"
    ],
    correct: 1,
    explanation: "PSA tests refine geo holdout by addressing 'mere exposure effect' — just seeing any ad can change behavior. In a PSA test, the control group sees a neutral public service announcement that looks like an ad but promotes an unrelated cause. The difference between the PSA group and the actual ad group isolates the effect of your specific creative and message, not just ad presence. It's more expensive (you pay for control impressions) but produces cleaner causal signal."
  },

  {
    id: 79,
    category: "Incrementality",
    difficulty: "senior",
    type: "single",
    question: "Your retargeting campaign shows 420% ROAS on last-click MMP data. A geo holdout test reveals true incremental ROAS is 135%. What conclusion do you draw and what action do you take?",
    options: [
      "The geo holdout test is wrong — 135% is too low to be real; trust the MMP data",
      "Immediately pause the campaign — 135% incremental ROAS is below the 300% industry standard",
      "The campaign is profitable (135% > 100% breakeven) but last-click is crediting it for ~310% worth of organic re-engagement; reduce retargeting budget to the level where incremental ROAS justifies the spend, not the inflated last-click figure",
      "Keep the budget the same — 135% incremental ROAS is still positive, so all spend is justified"
    ],
    correct: 2,
    explanation: "This is a classic retargeting inflation scenario. 420% last-click vs 135% incremental means ~310% of the credited ROAS was organic re-engagement the users were going to do anyway. The campaign IS profitable at 135% incremental ROAS — but you're massively overspending for that result. The right action: recalibrate the retargeting budget downward to the level where incremental ROAS justifies the cost. Use retargeting as a margin booster, not a growth lever."
  },

  {
    id: 80,
    category: "Incrementality",
    difficulty: "senior",
    type: "multi",
    question: "Which patterns in campaign data are red flags suggesting last-click ROAS is significantly overstated? (Select all that apply)",
    options: [
      "View-through conversions represent more than 5% of total attributed installs for cold audiences",
      "Organic install rates drop sharply whenever paid campaigns are paused",
      "ROAS is consistently 2–3x higher than industry benchmarks with no obvious creative or product advantage",
      "Retargeting campaigns show very high ROAS on small audiences who were already highly engaged before the campaign started"
    ],
    correct: [0, 1, 2, 3],
    explanation: "All four are red flags: VTC above 5% on cold audiences means the attribution window is too broad (crediting ads that users saw but didn't act on). Organic dropping when paid pauses suggests paid is cannibalizing organic, not adding on top of it. Outperforming industry benchmarks by 2–3x without clear reason means you're likely over-attributing. High retargeting ROAS on already-engaged audiences is the textbook example of last-click credit for organic re-engagement. Any one of these warrants an incrementality test."
  },

  {
    id: 81,
    category: "Incrementality",
    difficulty: "senior",
    type: "single",
    question: "How should a senior Creative Producer use MMM (Media Mix Modeling) and SKAN together for iOS UA measurement?",
    options: [
      "Choose one — using both creates conflicting data that confuses optimization decisions",
      "Use SKAN for iOS and MMM only for Android, where privacy restrictions are less severe",
      "Use MMM exclusively — SKAN data is too incomplete to be actionable",
      "Use SKAN for day-to-day campaign pacing and creative optimization; use MMM quarterly to validate true incremental ROAS per channel and recalibrate budget allocation accordingly"
    ],
    correct: 3,
    explanation: "SKAN and MMM serve complementary purposes at different time horizons. SKAN provides campaign-level, near-real-time signal for creative decisions and bid adjustments — it tells you which ads are working this week. MMM provides channel-level, aggregated causal inference over months — it tells you which channels are truly driving growth vs. attributing organic. Running MMM quarterly recalibrates your understanding of where each channel's budget should sit, catching over-attribution that SKAN's last-touch model can't reveal."
  },

  // ─── MONETIZATION & LTV ───────────────────────────────────────────────────

  {
    id: 82,
    category: "Monetization & LTV",
    difficulty: "junior",
    type: "single",
    question: "What is the difference between IAP and IAA monetization in mobile games, and how does it affect UA strategy?",
    options: [
      "IAP (In-App Purchases) generates revenue from user spending; IAA (In-App Advertising) generates revenue from ad views. IAP requires targeting high-intent, willing-to-pay users; IAA requires targeting volume and retention",
      "IAP and IAA are the same model — both are in-app revenue streams that work identically for UA targeting",
      "IAA (In-App Advertising) generates revenue from user purchases; IAP (In-App Ads) generates revenue from showing ads to non-paying users",
      "IAP is used for console games; IAA is specific to mobile games only"
    ],
    correct: 0,
    explanation: "IAP and IAA are fundamentally different revenue models with different UA implications. IAP games need users who will spend real money (whale-targeting, tROAS bidding, higher acceptable CPI). IAA games monetize every retained user through ad views (volume-targeting, tCPI bidding, flat LTV). Hybrid games use both and require segmenting UA to find the right mix of spenders and high-retention players."
  },

  {
    id: 83,
    category: "Monetization & LTV",
    difficulty: "junior",
    type: "single",
    question: "What does ARPDAU measure and why does it matter for UA budgeting?",
    options: [
      "Average Revenue Per Download — total revenue divided by total downloads since launch",
      "Average Revenue Per Daily Active User — revenue divided by DAU on a given day; sets the ceiling on how much you can pay per retained user",
      "Annual Revenue Per DAU — a 12-month projection used for long-term financial planning only",
      "Ad Revenue Per DAU — only counts in-app advertising revenue, not IAP"
    ],
    correct: 1,
    explanation: "ARPDAU = Total daily revenue / Daily active users. It tells you how much each daily active user is worth on average. This is critical for UA: if ARPDAU is $0.50 and D30 retention is 10%, your LTV ceiling at 30 days is roughly $1.50. If CPI exceeds that, the math doesn't work. ARPDAU is the foundational input to LTV modeling and therefore to every CPI target you set."
  },

  {
    id: 84,
    category: "Monetization & LTV",
    difficulty: "mid",
    type: "single",
    question: "A hypercasual game has ARPDAU of $0.40, D30 retention of 8%, and current CPI of $0.65. Is this scalable at the current CPI?",
    options: [
      "Yes — ARPDAU is positive, so every install generates profit",
      "Yes — hypercasual games always achieve payback within 7 days, making $0.65 CPI acceptable regardless of LTV",
      "No — approximate 30-day LTV is ~$0.96, but after accounting for the payback period and operational costs, $0.65 CPI leaves dangerously thin margin; CPI needs to come down or retention needs to improve",
      "Cannot be determined — ARPDAU and retention are not sufficient inputs to evaluate CPI viability"
    ],
    correct: 2,
    explanation: "Rough LTV calculation: $0.40 ARPDAU × 30 days × 8% avg retention ≈ $0.96 estimated D30 LTV. Against $0.65 CPI, the margin is $0.31 — less than 50% of CPI. Operational costs, store fees (30%), and ad network margins typically consume that gap. This is marginally scalable at best and fragile to any performance dip. The goal should be reducing CPI (better creative) or improving retention (product), not scaling aggressively at current economics."
  },

  {
    id: 85,
    category: "Monetization & LTV",
    difficulty: "mid",
    type: "single",
    question: "What is pLTV (predicted Lifetime Value) and why is it valuable for early UA decision-making?",
    options: [
      "pLTV is a fixed LTV figure set by the studio at launch, used to cap bidding across all campaigns",
      "pLTV is only calculated after a user has been active for 30 days; it has no use in early campaign optimization",
      "pLTV is the maximum LTV a platform will accept for tROAS campaign bids",
      "pLTV is a machine-learning prediction of a user's total future revenue, generated from early behavior signals (D2–D7) so UA teams can make bidding and scaling decisions without waiting 30–90 days for actual LTV to materialize"
    ],
    correct: 3,
    explanation: "pLTV solves a fundamental timing problem in UA: actual LTV takes 30–90+ days to materialize, but campaign decisions need to happen in days. Modern ML models (from MMPs like AppsFlyer, Adjust, or Tenjin) analyze D2–D7 behavior signals — purchase frequency, session depth, progression speed — and predict total LTV with ~90% accuracy. This allows UA teams to tune bids and allocate budget toward high-value users weeks before their actual revenue is confirmed."
  },

  {
    id: 86,
    category: "Monetization & LTV",
    difficulty: "mid",
    type: "single",
    question: "A casual game shows D7 retention of 9% across all cohorts. What does this signal about the game's LTV potential at scale?",
    options: [
      "A warning sign — games with D7 retention below 10% rarely achieve profitable LTV at scale unless CPI is extremely low (hypercasual-level)",
      "Strong LTV potential — 9% D7 retention is above the casual game benchmark",
      "No signal — D7 retention is irrelevant; only D30 retention predicts LTV",
      "Acceptable LTV potential if the game is IAA-monetized; problematic only for IAP games"
    ],
    correct: 0,
    explanation: "D7 retention below 10% is a yellow-to-red flag for LTV viability. It means most users churn before they've had a chance to significantly monetize, regardless of model. The exception is pure hypercasual games where extremely low CPI ($0.20–0.40) makes even 8% D7 retention profitable. For hybrid or IAP-focused casual games, D7 retention below 10% typically means unit economics will never close at meaningful scale."
  },

  {
    id: 87,
    category: "Monetization & LTV",
    difficulty: "senior",
    type: "single",
    question: "A mid-core RPG has ARPPU of $48 and D30 retention of 35%. You're running tROAS campaigns. What type of user should your creative strategy specifically target to maximize profitability?",
    options: [
      "The broadest possible audience to maximize install volume and let the algorithm find spenders",
      "High-intent 'whale' segments — users who spend on similar genre games, have high device value, and engage deeply with narrative or progression content — since top 5% of users likely generate 70%+ of revenue",
      "Lapsed players from similar games who are likely to reinstall for a new title in the genre",
      "Users with high D1 retention signals, regardless of their spending history in other games"
    ],
    correct: 1,
    explanation: "In mid-core RPGs with high ARPPU, the monetization is whale-driven. The top 5% of spenders typically generate over 70% of revenue. Creative strategy must reflect this: use high-quality cinematic content, deep progression teases, and narrative hooks that resonate with players who invest money and time in games. Broad acquisition of casual users who churn by D7 destroys unit economics even if CPI looks acceptable — because those users never reach the whale conversion threshold."
  },

  {
    id: 88,
    category: "Monetization & LTV",
    difficulty: "senior",
    type: "single",
    question: "A hybrid-monetization casual game (IAP + IAA) is scaling UA aggressively. The UA team treats all installs as equal value for bidding purposes. What is the core strategic risk?",
    options: [
      "Platform algorithms will penalize hybrid games for mixed revenue signals",
      "No risk — hybrid games always outperform single-model games in ROAS regardless of targeting",
      "Treating equal-value installs overspends on IAA-only users (lower LTV) and underspends on IAP users (higher LTV), misallocating budget and capping overall profitability",
      "The risk is only significant for games with ARPDAU below $1.00"
    ],
    correct: 2,
    explanation: "Hybrid monetization creates user segments with very different LTV profiles. An IAP spender might be worth $15 over 30 days; an IAA-only user might be worth $1.20. Treating both as a $3.00 average LTV install means: you're bidding too high for IAA users (overpaying) and too low for IAP users (leaving value on the table). Senior approach: segment UA by predicted monetization path, use value-based bidding for IAP user acquisition, and standard tCPI for volume-driven IAA cohorts."
  },

  {
    id: 89,
    category: "Monetization & LTV",
    difficulty: "senior",
    type: "single",
    question: "pLTV models achieve approximately 90% accuracy vs actual LTV. When is it appropriate to make major budget scaling decisions based on pLTV alone, and when must you wait for actual LTV?",
    options: [
      "Always use pLTV — 90% accuracy is sufficient for all decisions at any scale",
      "Use pLTV only if your MMP is AppsFlyer; other MMPs produce unreliable predictions",
      "Never use pLTV — 10% error rate is too high for financial decisions in UA",
      "Use pLTV for directional decisions within the D0–D14 window (bid tuning, budget pacing, creative scoring); wait for actual D30+ LTV before committing to major scale increases (10x+ budget, new market entry, or changing monetization strategy)"
    ],
    correct: 3,
    explanation: "pLTV's 90% accuracy is excellent for early optimization but contains enough uncertainty for major financial commitments. For daily bid tuning and campaign pacing, pLTV is the best available signal. For 10x budget increases, entering new markets, or restructuring monetization — decisions with potentially large downside — wait for D30 actual LTV to validate the model's prediction. The cost of waiting 3–4 weeks for validation is far lower than the cost of scaling a flawed pLTV estimate at 10x budget."
  },

  // ─── ADVANCED PLATFORMS ───────────────────────────────────────────────────

  {
    id: 90,
    category: "Advanced Platforms",
    difficulty: "junior",
    type: "single",
    question: "What is AppLovin MAX and why is it significant for mobile game publishers?",
    options: [
      "AppLovin's ad mediation platform that manages multiple ad networks in one SDK, optimizing which network fills each ad impression to maximize publisher revenue",
      "AppLovin's user acquisition platform for running performance campaigns",
      "AppLovin's creative testing tool for A/B testing ad formats",
      "A premium subscription tier for AppLovin advertisers with higher budget limits"
    ],
    correct: 0,
    explanation: "MAX is AppLovin's mediation platform — it sits in your game's SDK and manages multiple ad networks simultaneously, holding real-time auctions to find the highest-paying ad for every impression. By 2025, 73% of top-200 grossing games use MAX. Its dominance means it has become the de facto standard for mobile game ad monetization, giving AppLovin significant leverage over both publishers and advertisers."
  },

  {
    id: 91,
    category: "Advanced Platforms",
    difficulty: "mid",
    type: "single",
    question: "As of mid-2025, AppLovin MAX ended support for a specific type of ad serving. What was deprecated and what replaced it?",
    options: [
      "Banner ads were deprecated in favor of interstitial and rewarded video formats",
      "Waterfall-based ad serving (sequential network calling) was deprecated; all instances now use real-time bidding where networks compete simultaneously for each impression",
      "Third-party MMP tracking was deprecated; MAX now requires native AppLovin attribution",
      "Android ad serving was deprecated pending Privacy Sandbox implementation"
    ],
    correct: 1,
    explanation: "On July 16, 2025, MAX ended support for waterfall ad instances. In the waterfall model, ad networks were called in a fixed priority order — often benefiting whoever negotiated the top position, not necessarily the highest bidder. Real-time bidding (RTB) replaced it: all networks bid simultaneously for every impression, creating genuine competition. The result: typically 5–15% higher publisher revenue and a much simpler setup (no waterfall position tuning needed)."
  },

  {
    id: 92,
    category: "Advanced Platforms",
    difficulty: "mid",
    type: "single",
    question: "What is the key difference between TikTok AEO (App Event Optimization) and TikTok VBO (Value-Based Optimization)?",
    options: [
      "AEO runs on TikTok's feed; VBO runs on TikTok's search and discovery surfaces",
      "AEO is for new user acquisition; VBO is exclusively for retargeting lapsed users",
      "AEO optimizes for users likely to complete a specific in-app event (e.g., any purchase); VBO optimizes for users likely to generate higher purchase value — it finds spenders, not just converters",
      "They are the same optimization type with different names across campaign objectives"
    ],
    correct: 2,
    explanation: "AEO and VBO target different outcome types. AEO finds users likely to complete an event — including low-value purchases or free actions. VBO specifically targets users predicted to spend more money. For a game with IAP, AEO might find players who make a $0.99 purchase, while VBO is more likely to find players who spend $20+. VBO is the TikTok equivalent of value-based bidding on Meta — designed for profitability, not just volume."
  },

  {
    id: 93,
    category: "Advanced Platforms",
    difficulty: "mid",
    type: "single",
    question: "AppLovin ROAS campaigns — its user acquisition product — are restricted to publishers using which platform?",
    options: [
      "Any mobile game with 50,000+ daily active users",
      "Publishers who have spent $100,000+ on AppLovin UA campaigns in the previous 6 months",
      "Only games published through AppLovin's own publishing arm",
      "Only publishers using AppLovin MAX mediation, creating a direct link between monetization and user acquisition on the platform"
    ],
    correct: 3,
    explanation: "AppLovin ROAS campaigns are exclusively available to MAX mediation users. This is a deliberate strategic lock-in: by making ROAS campaigns conditional on MAX adoption, AppLovin captures both the supply side (publisher ad monetization via MAX) and demand side (advertiser UA spend via ROAS campaigns) margins simultaneously. Understanding this dynamic is important when evaluating AppLovin as a UA partner — it's a platform play, not just an ad network."
  },

  {
    id: 94,
    category: "Advanced Platforms",
    difficulty: "senior",
    type: "single",
    question: "A game publisher using AppLovin MAX wants to switch to a competitor mediation platform. What are the primary operational risks?",
    options: [
      "SDK re-integration (new ad placement code throughout the game), potential eCPM dip during transition as new platform learns your inventory, loss of access to AppLovin ROAS campaigns, and renegotiating fill rates with individual networks",
      "There are no real risks — mediation platforms are interchangeable and switching is straightforward",
      "The only risk is regulatory — switching mediation requires notifying Apple and Google",
      "Loss of SKAN attribution data for the 30 days surrounding the switch"
    ],
    correct: 0,
    explanation: "Switching mediation platforms is technically and commercially complex: engineering must re-integrate all ad placements with a new SDK (weeks of work), the new platform needs time to learn your inventory and build fill relationships (temporary eCPM dip of 10–20% common), and you lose access to AppLovin ROAS campaigns entirely. This is precisely why AppLovin's MAX lock-in is so effective — the switching cost is real and substantial, even when the competitor's terms may be better."
  },

  {
    id: 95,
    category: "Advanced Platforms",
    difficulty: "senior",
    type: "single",
    question: "Your TikTok VBO (Value-Based Optimization) campaign is in its third day and performance looks poor — high CPAs, low purchase values. Your team wants to intervene. What is the correct action?",
    options: [
      "Switch to AEO immediately — VBO is underperforming",
      "Do nothing — VBO requires a minimum 7-day learning window; adjustments in the first 3 days destabilize optimization and should be avoided unless spend is critically overpacing",
      "Pause and restart the campaign to reset the algorithm",
      "Reduce the daily budget by 50% to reduce wasted spend during the learning phase"
    ],
    correct: 1,
    explanation: "VBO on TikTok needs a 7-day minimum learning window. The algorithm is collecting purchase value data and calibrating which user signals correlate with higher spend. Day 3 data is noise, not signal. The single most common mistake is making changes during the learning phase — it resets the optimization clock and often produces worse long-term results than simply letting the campaign stabilize. The exception: if daily spend is dramatically overpacing budget, a budget cap adjustment is acceptable."
  },

  {
    id: 96,
    category: "Advanced Platforms",
    difficulty: "senior",
    type: "single",
    question: "TikTok's Broad Audience targeting frequently outperforms custom audience targeting (lookalikes, interest segments). What explains this?",
    options: [
      "TikTok's custom audience tools are technically broken and produce poor results",
      "Broad targeting is cheaper on TikTok because it avoids premium CPM audiences",
      "TikTok's recommendation algorithm is strong enough to find the right users without audience constraints — adding custom audiences narrows reach in ways that limit the algorithm's ability to explore and optimize",
      "Broad targeting works only for hypercasual games; mid-core games still require custom audiences"
    ],
    correct: 2,
    explanation: "TikTok's core algorithm was built for content recommendation, not ad targeting — and its user modeling is exceptionally strong as a result. When you apply custom audiences (lookalikes, interests), you're constraining an already-powerful signal engine. Broad targeting lets TikTok's algorithm find the optimal audience without your assumptions limiting the search space. The counter-intuitive professional move: trust the platform, remove manual targeting layers, and let the algorithm explore. Custom audiences should be tested but rarely win against Broad on TikTok."
  },

  {
    id: 97,
    category: "Advanced Platforms",
    difficulty: "senior",
    type: "single",
    question: "At scale, TikTok DCO ad sets fatigue approximately 40% faster than Meta. What does this mean operationally for a Creative Producer managing campaigns on both platforms simultaneously?",
    options: [
      "Allocate 40% less budget to TikTok to reduce exposure speed and extend creative life",
      "Run fewer creative variations on TikTok to avoid overwhelming the algorithm",
      "Treat creative fatigue identically across platforms since total impression volume is the key variable, not platform-specific fatigue speed",
      "Operate a faster creative refresh cadence on TikTok (2-week component rotation) than on Meta (7–10 day full rotation), maintaining separate creative calendars and production pipelines per platform"
    ],
    correct: 3,
    explanation: "Platform-specific creative cadences are a mark of operational maturity. TikTok's DCO burns combinations fast — 2-week component refreshes are the minimum. Meta's algorithm is somewhat more conservative, but at scale still requires 7–10 day rotation. Managing both simultaneously means separate creative calendars, separate production queues, and platform-specific asset specs. A single creative calendar for both platforms will always result in one platform being over- or under-served."
  },

  // ─── ADVANCED ANALYTICS ───────────────────────────────────────────────────

  {
    id: 98,
    category: "Advanced Analytics",
    difficulty: "mid",
    type: "single",
    question: "What is probabilistic attribution in mobile measurement, and when is it used?",
    options: [
      "An ML-based statistical approach that infers user identity and install source without deterministic device IDs, used as a fallback when IDFA/GAID is unavailable — typically on iOS post-ATT",
      "A method of attributing installs based on probability that the user saw your ad at least once in the past 30 days",
      "A randomized attribution method where credit is distributed equally across all channels a user touched",
      "A fraud detection technique that flags installs with a low probability of being genuine"
    ],
    correct: 0,
    explanation: "Probabilistic attribution uses device signals (IP address, user agent, screen resolution, timestamp patterns) and ML to make statistically informed guesses about install sources when individual device IDs aren't available. On iOS post-ATT, where most users don't grant tracking permission, probabilistic attribution fills the gap — but with inherent uncertainty. It's best used for directional insights (is this channel driving installs?) rather than precision decisions (exactly how much ROAS per creative)."
  },

  {
    id: 99,
    category: "Advanced Analytics",
    difficulty: "mid",
    type: "single",
    question: "What is a data clean room in mobile marketing, and what problem does it solve?",
    options: [
      "A tool for removing fraudulent installs and bot traffic from MMP attribution reports",
      "A privacy-safe environment where two parties (e.g., advertiser and platform) can analyze overlapping data sets together without either party exposing raw user-level data to the other",
      "A data warehouse solution for storing historical campaign data securely",
      "A compliance tool that automatically redacts PII from creative performance reports"
    ],
    correct: 1,
    explanation: "Data clean rooms allow advertisers and platforms to answer joint questions — 'How many of my customers also saw this Meta campaign?' — without either side sharing raw user data. The computation happens inside the secure environment; only aggregated results come out. In a post-ATT, post-cookie world where user-level tracking is restricted, clean rooms provide a privacy-safe way to get audience overlap insights that SKAN or MMPs alone can't provide. Adoption among enterprise mobile marketers reached 90% of CMOs by 2025."
  },

  {
    id: 100,
    category: "Advanced Analytics",
    difficulty: "senior",
    type: "single",
    question: "What is the fundamental difference between using last-touch MMP data and incrementality data when evaluating a retargeting campaign's true contribution to revenue?",
    options: [
      "Last-touch MMP data is more accurate because it tracks individual users; incrementality data only provides estimates",
      "They measure the same outcome — the difference is only in reporting format and attribution window length",
      "Last-touch MMP data measures what happened after an ad interaction; incrementality measures what happened because of the ad — the difference reveals how much revenue would have occurred organically without the campaign",
      "Incrementality data is only valid for prospecting campaigns; for retargeting, last-touch MMP data is the correct measurement methodology"
    ],
    correct: 2,
    explanation: "This is the single most important conceptual distinction in modern UA measurement. Last-touch MMP: user sees retargeting ad → clicks → re-engages → MMP credits ad with re-engagement value. Incrementality: compare a group of similar users who didn't see the ad — if they re-engaged at 80% the rate of the exposed group, only 20% of re-engagements were actually caused by the ad. The gap between last-touch ROAS and incremental ROAS (often 2–4x for retargeting) is the over-attribution you're paying for. Senior UA operators run incrementality tests precisely because they refuse to budget based on a measurement framework that systematically overstates results."
  }

];

window.questions = questions;

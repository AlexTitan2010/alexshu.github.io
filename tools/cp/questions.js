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
      "Return on Ad Spend — you earned $3 for every $1 spent",
      "Revenue over Average Sales — revenue is 300% above average",
      "Real-time Output Analytics Score — 300% above baseline"
    ],
    correct: 1,
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
      "Click-Through Rate — clicks ÷ impressions; a high CTR means the ad hook is compelling",
      "Creative Test Result — a quality score assigned by Meta",
      "Campaign Tracking Rate — percentage of users tracked post-install"
    ],
    correct: 1,
    explanation: "CTR = Clicks ÷ Impressions. For casual games on Meta, 2–5% is a solid benchmark. High CTR means your hook is grabbing attention — but CTR alone doesn't guarantee quality installs. Always pair with install rate and D7 ROAS."
  },

  {
    id: 5,
    category: "KPIs & Metrics",
    difficulty: "junior",
    type: "single",
    question: "What does IPM measure?",
    options: [
      "In-app Purchase Multiplier — ratio of paying users to total users",
      "Installs Per Mille — number of installs per 1,000 impressions",
      "Impression Performance Metric — overall ad quality score",
      "Interest Per Month — audience engagement over time"
    ],
    correct: 1,
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
      "Return on ad spend measured 7 days after install, for the install cohort — target 15–25%",
      "Daily average ROAS across a 7-day campaign window",
      "ROAS calculated on the 7th iteration of a creative test"
    ],
    correct: 1,
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
      "Proceed cautiously — the $0.50 margin is thin; validate D30 ROAS and payback period first",
      "Scale immediately — any positive margin means you should maximize spend",
      "No — CPI must always be below $3 for casual games to scale"
    ],
    correct: 1,
    explanation: "LTV $6.00 vs CPI $5.50 leaves only $0.50 margin before payback. Operational costs, ad network fees, and store commissions can easily wipe that out. Validate the full cohort D30 ROAS and payback period before committing to aggressive scaling."
  },

  {
    id: 9,
    category: "KPIs & Metrics",
    difficulty: "mid",
    type: "single",
    question: "A campaign has $5,000 spend, 1,250 installs, and generated $18,000 in revenue at D30. Calculate CPI and D30 ROAS.",
    options: [
      "CPI = $0.28, D30 ROAS = 360%",
      "CPI = $4.00, D30 ROAS = 360%",
      "CPI = $4.00, D30 ROAS = 72%",
      "CPI = $14.40, D30 ROAS = 280%"
    ],
    correct: 1,
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
      "An interactive mini-game ad that lets users experience the core mechanic before downloading",
      "A static image ad that shows the game's highest-rated review",
      "An ad format exclusive to TikTok for gaming content"
    ],
    correct: 1,
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
      "User-Generated Content — ads created by real players; outperforms branded because it feels authentic and trustworthy",
      "Unified Growth Campaign — a Meta ad type for app installs",
      "User Growth Conversion — a metric for tracking organic installs"
    ],
    correct: 1,
    explanation: "UGC = content created by real players or creators. It feels unscripted and authentic. Data shows UGC achieves ~4x higher CTR, ~20% lower CPI, and ~50% lower cost-per-click vs branded content. 83% of consumers trust brands that share real customer content."
  },

  {
    id: 13,
    category: "Creative Formats",
    difficulty: "junior",
    type: "single",
    question: "On iOS, real gameplay footage in video ads typically achieves what CTR compared to cinematic trailers?",
    options: [
      "Lower CTR — cinematic trailers are more visually impressive",
      "The same CTR — format matters more than content type",
      "Higher CTR — ~4.27% vs ~3.34% for cinematic trailers",
      "Higher CTR only on Android, not iOS"
    ],
    correct: 2,
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
      "UGC video of a player reacting to the game",
      "Playable ad letting users match tiles and feel the mechanic",
      "Long-form video showing 10 levels of gameplay progression"
    ],
    correct: 2,
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
      "Under 2MB — performance drops sharply beyond 3MB due to mobile load time",
      "Under 5MB — the standard for most ad networks",
      "Under 10MB — only limited by device storage"
    ],
    correct: 1,
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
      "Static image ads — can be produced and tested within hours to validate concept directions",
      "Full video production — quality is always worth the 1–2 week wait",
      "UGC — recruit players immediately even though it takes 2–3 weeks"
    ],
    correct: 1,
    explanation: "Static ads can be created in hours, making them the fastest way to validate hooks, visual angles, and concepts before investing in expensive video or playable production. Test the concept cheaply first, then build the winning idea into higher-production formats."
  },

  {
    id: 17,
    category: "Creative Formats",
    difficulty: "mid",
    type: "single",
    question: "A competitor runs playable ads for their bubble shooter game. You have the same genre. What's your creative format strategy?",
    options: [
      "Copy their playable ad approach to stay competitive in the same format",
      "Avoid playables entirely since the competitor already owns that space",
      "Run playable ads but test a unique mechanic angle or moment they haven't shown",
      "Shift entirely to UGC to differentiate from the competitor on format"
    ],
    correct: 2,
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
      "To compare two or more creative variations under the same conditions to identify which performs better based on data",
      "To test the technical quality of an ad before it goes live",
      "To split the audience between App Store and Play Store users"
    ],
    correct: 1,
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
      "10–20 concepts per week",
      "50+ concepts per week"
    ],
    correct: 2,
    explanation: "Industry leaders like Voodoo and Playrix test 10–20 new concepts weekly. Creative fatigue sets in within 5–10 days at scale, so you need a constant pipeline of new material. This isn't 10–20 full productions — it's a mix of statics (hours), video hook variants (days), and playable iterations."
  },

  {
    id: 21,
    category: "Testing & Strategy",
    difficulty: "mid",
    type: "single",
    question: "What budget range is recommended for a micro-test to validate a new creative concept before scaling?",
    options: [
      "$50–100 per concept",
      "$200–500 per concept",
      "$2,000–5,000 per concept",
      "$10,000 minimum to reach statistical significance"
    ],
    correct: 1,
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
      "The hook is compelling but misrepresents the game, attracting users who lose interest post-click",
      "CPI is likely very low — scale immediately regardless of install rate",
      "A technical tracking issue — check attribution settings"
    ],
    correct: 1,
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
      "20–30% daily increase to maintain algorithm stability",
      "10x in week one to establish dominance in the auction",
      "Duplicate the campaign instead of raising budget on the original"
    ],
    correct: 1,
    explanation: "Aggressive budget increases (2x+) force ad network algorithms to reset their optimization, causing performance instability. Gradual 20–30% daily increases allow the algorithm to adapt while maintaining the optimization momentum you've already built."
  },

  {
    id: 25,
    category: "Testing & Strategy",
    difficulty: "mid",
    type: "single",
    question: "You have $5,000 to validate 5 new creative concepts. What budget allocation strategy is most effective?",
    options: [
      "Put all $5,000 on the concept you're most confident in",
      "$1,000 per concept in equal micro-tests; scale winners with performance data",
      "$2,500 each on the top 2 concepts — too risky to spread thin",
      "$500 each and give the remaining $2,500 to the leader after 2 days"
    ],
    correct: 1,
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
      "CTR above 3% — industry-standard minimum for casual games",
      "95% statistical significance — only a 5% chance the result is due to random variation",
      "Test must run for exactly 7 days regardless of data"
    ],
    correct: 2,
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
      "When ad performance deteriorates because the same audience has seen the ad too many times",
      "When an ad fails platform review due to content policy violations",
      "When the ad budget is depleted before the campaign goal is met"
    ],
    correct: 1,
    explanation: "Creative fatigue = performance decline caused by audience overexposure. The same users keep seeing the same creative and stop responding. CTR drops, CPI rises, but the network keeps spending. It's not a platform issue — it's an audience saturation issue."
  },

  {
    id: 30,
    category: "Creative Fatigue",
    difficulty: "junior",
    type: "single",
    question: "Which combination of signals most clearly indicates creative fatigue?",
    options: [
      "Increasing CTR + Decreasing CPI — strong performance signal",
      "Decreasing CTR + Increasing CPI + Increasing impressions — fatigue pattern",
      "Stable CTR + Increasing CPI — targeting issue, not creative fatigue",
      "Decreasing impressions + Stable CTR — delivery problem"
    ],
    correct: 1,
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
      "Maintaining a 2+ week inventory of pre-tested concepts ready to deploy at any time",
      "Reducing budget during suspected fatigue periods to slow impression delivery",
      "Changing audience targeting to expose the same creative to new users"
    ],
    correct: 1,
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
      "A video editing tool for creating mobile game ad creatives",
      "A Mobile Measurement Partner (MMP) that tracks installs, attribution, ROAS, and cohort data across all ad networks",
      "A platform for designing playable ads without coding",
      "An AI tool that generates creative variations automatically"
    ],
    correct: 1,
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
      "3 videos or images",
      "Up to 10 images/videos with 5 headlines, 5 texts, 5 CTAs",
      "Unlimited assets — Meta optimizes automatically"
    ],
    correct: 2,
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
      "Software that automates creation of ad variations, resizes assets for all platforms, and manages publishing — valuable when running 10+ creatives across 3+ networks",
      "A platform for reviewing and approving ad designs before launch",
      "A social media management tool for community content"
    ],
    correct: 1,
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
      "Google UAC is inherently programmatic/DCO — you supply assets and Google automatically optimizes across Search, Display, YouTube, and Discover",
      "Google UAC requires manual bidding and creative selection",
      "Google UAC only works for Android apps, not iOS"
    ],
    correct: 1,
    explanation: "Google UAC is DCO (Dynamic Creative Optimization) by design. You supply up to 20 images, 20 videos, 10 headlines, and 5 descriptions, and Google automatically assembles and optimizes combinations across all its surfaces. You can't manually select which creative runs where — Google does it."
  },

  {
    id: 38,
    category: "Tools & Platforms",
    difficulty: "mid",
    type: "single",
    question: "What is SKAdNetwork (SKAN) and why does every iOS UA campaign need to account for it?",
    options: [
      "A creative quality scoring system used by Apple's App Store",
      "Apple's privacy-preserving attribution framework (post-iOS 14.5) that limits individual tracking but provides campaign-level conversion data",
      "A tool for scanning ad creatives for Apple's content policy compliance",
      "A network for sharing SKU-level ad performance data with partners"
    ],
    correct: 1,
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
      "Manual management of 18 creatives across 3 platforms with different specs creates version control chaos, resizing bottlenecks, and human error — a CMP eliminates all three",
      "CMPs are required by Meta when running more than 10 creatives",
      "CMPs automatically improve creative performance through AI optimization"
    ],
    correct: 1,
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
      "A document that aligns the team before production: objective, target audience, key message, format specs, and success metrics",
      "A legal agreement for using licensed music in ads",
      "A summary of campaign performance sent to stakeholders"
    ],
    correct: 1,
    explanation: "A creative brief is the alignment document that comes before any production begins. Without it, designers and video editors make assumptions that waste time and budget. A good brief includes: campaign objective, target audience, core message, formats/specs required, tone, and what 'success' looks like."
  },

  {
    id: 42,
    category: "Production Workflow",
    difficulty: "mid",
    type: "single",
    question: "What is the typical production timeline for a fully tested and network-compliant playable ad?",
    options: [
      "2–4 hours with the right tools",
      "1–2 days for a simple prototype",
      "7–10 days: prototype in 3–5 days, QA and optimization in 5–7 days",
      "4–6 weeks including full QA across all target devices"
    ],
    correct: 2,
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
      "Break down the mix by format: static tests (hours), video hook iterations (1–2 days), playable tweaks (3–5 days) — then calculate an achievable weekly volume and identify the bottleneck",
      "Outsource all production to an external agency to hit the number"
    ],
    correct: 2,
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
      "Scale spend to $100K/month — the margin is positive so scaling always helps",
      "Stop all UA immediately until LTV improves",
      "Optimize creative to lower CPI AND collaborate with product on retention and monetization improvements simultaneously",
      "Switch entirely to playable ads — they always lower CPI to acceptable levels"
    ],
    correct: 2,
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
      "Scalable, systematic creative production processes and testing frameworks that work consistently across an entire portfolio of games",
      "Avoid investing heavily in any single game's creative to stay flexible",
      "Outsource all creative production to minimize fixed team costs"
    ],
    correct: 1,
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
      "Creative Producers must operate at high speed with exceptional data intuition — creatives are the validation instrument that decides if a game lives or dies",
      "Creative Producers manage long production timelines with large teams and ample budgets",
      "Creative Producers focus on brand building over performance metrics"
    ],
    correct: 1,
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
  }

];

window.questions = questions;

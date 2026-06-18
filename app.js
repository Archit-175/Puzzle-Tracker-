/* =========================================================================
   Puzzle Tracker — application logic
   Loaded at the end of <body>, so the DOM is ready when this runs.
   ========================================================================= */
/* =========================================================================
   DATA  — deduplicated GeeksforGeeks interview puzzles.
   To add puzzles: append objects to this array. Existing saved ticks & notes
   are keyed by URL and remain intact.
   ========================================================================= */
const PUZZLES = [
  {"title":"The Burning Ropes / Candles","url":"https://www.geeksforgeeks.org/gfg-academy/puzzle-the-burning-candles/","category":"Logical","companies":["Wipro","IBM","TCS"]},
  {"title":"Find the fastest 3 horses (25 Horses)","url":"https://www.geeksforgeeks.org/aptitude/puzzle-9-find-the-fastest-3-horses/","category":"Logical","companies":["Accolite","Goldman Sachs","MakeMyTrip","Oracle"]},
  {"title":"Torch and Bridge (Bridge Crossing)","url":"https://www.geeksforgeeks.org/aptitude/puzzle-18-torch-and-bridge/","category":"Mathematical/Analytical","companies":["Google","Microsoft"]},
  {"title":"Poison and Rat","url":"https://www.geeksforgeeks.org/aptitude/puzzle-19-poison-and-rat/","category":"Mathematical/Analytical","companies":["Amazon"]},
  {"title":"2 Eggs and 100 Floors","url":"https://www.geeksforgeeks.org/aptitude/puzzle-set-35-2-eggs-and-100-floors/","category":"Mathematical/Analytical","companies":["VMWare"]},
  {"title":"Water Jug Problem (Four Gallon)","url":"https://www.geeksforgeeks.org/aptitude/puzzle-water-jug-problem/","category":"Logical","companies":["Wells Fargo"]},
  {"title":"Number of Legs in the Palace","url":"https://www.geeksforgeeks.org/aptitude/puzzle-number-of-legs-in-palace/","category":"Logical","companies":["UnitedLex"]},
  {"title":"Six Houses P, Q, R, S, T, and U","url":"https://www.geeksforgeeks.org/aptitude/puzzle-six-houses-p-q-r-s-t-and-u/","category":"Logical","companies":["CAT Quiz"]},
  {"title":"8 Balls Problem","url":"https://www.geeksforgeeks.org/aptitude/puzzle-8-balls-problem/","category":"Logical","companies":["Microsoft","Siemens"]},
  {"title":"100 Prisoners with Red/Black Hats","url":"https://www.geeksforgeeks.org/aptitude/puzzle-13-100-prisoners-with-redblack-hats/","category":"Logical","companies":["Google","Microsoft"]},
  {"title":"Find ages of daughters","url":"https://www.geeksforgeeks.org/aptitude/puzzle-2-find-ages-of-daughters/","category":"Mathematical/Analytical","companies":["Google","Microsoft"]},
  {"title":"Calculate total distance travelled by bee","url":"https://www.geeksforgeeks.org/aptitude/puzzle-3-calculate-total-distance-travelled-by-bee/","category":"Mathematical/Analytical","companies":["Yahoo"]},
  {"title":"6x6 Grid - Ways to Reach Bottom Right","url":"https://www.geeksforgeeks.org/aptitude/puzzle-6x6-grid-how-many-ways/","category":"Mathematical/Analytical","companies":["Amazon","Zoho"]},
  {"title":"Monty Hall Problem","url":"https://www.geeksforgeeks.org/aptitude/puzzle-6-monty-hall-problem/","category":"Mathematical/Analytical","companies":["VMWare"]},
  {"title":"Maximize the probability of White Ball","url":"https://www.geeksforgeeks.org/aptitude/puzzle-12-maximize-probability-of-white-ball/","category":"Mathematical/Analytical","companies":["Amazon"]},
  {"title":"Hourglasses Puzzle","url":"https://www.geeksforgeeks.org/aptitude/puzzle-27-hourglasses-puzzle/","category":"Mathematical/Analytical","companies":["Bank of America","Yahoo"]},
  {"title":"Ratio of Boys and Girls in a Country where people want only boys","url":"https://www.geeksforgeeks.org/aptitude/puzzle-17-ratio-of-boys-and-girls-in-a-country-where-people-want-only-boys/","category":"Mathematical/Analytical","companies":["Google","Goldman Sachs"]},
  {"title":"Car Wheel Puzzle","url":"https://www.geeksforgeeks.org/aptitude/puzzle-29-car-wheel-puzzle/","category":"Mathematical/Analytical","companies":["MakeMyTrip"]},
  {"title":"Maximum Chocolates","url":"https://www.geeksforgeeks.org/aptitude/puzzle-22-maximum-chocolates/","category":"Mathematical/Analytical","companies":["Infosys","MakeMyTrip"]},
  {"title":"Splitting a Cake with a Missing Piece in two equal portion","url":"https://www.geeksforgeeks.org/aptitude/puzzle-splitting-a-cake-with-a-missing-piece-in-two-equal-portion/","category":"Mathematical/Analytical","companies":["Alcatel-Lucent","Cognizant","SAP"]},
  {"title":"Rs 500 Note Puzzle","url":"https://www.geeksforgeeks.org/aptitude/puzzle-33-rs-500-note-puzzle/","category":"Mathematical/Analytical","companies":["CAT","UPSC"]},
  {"title":"Girl or Boy","url":"https://www.geeksforgeeks.org/aptitude/puzzle-44-girl-or-boy/","category":"Mathematical/Analytical","companies":["Amazon"]},
  {"title":"Know Average Salary without Disclosing Individual Salaries","url":"https://www.geeksforgeeks.org/maths/puzzle-26-know-average-salary-without-disclosing-individual-salaries/","category":"Mathematical/Analytical","companies":["Infosys","Bloomberg"]},
  {"title":"Maximum run in cricket","url":"https://www.geeksforgeeks.org/aptitude/puzzle-37-maximum-run-in-cricket/","category":"Mathematical/Analytical","companies":["FAANG"]},
  {"title":"Completion of Task","url":"https://www.geeksforgeeks.org/aptitude/puzzle-32-completion-of-task/","category":"Mathematical/Analytical","companies":["Reflexis Systems"]},
  {"title":"Find missing Row in Excel","url":"https://www.geeksforgeeks.org/aptitude/puzzle-40-find-missing-row-in-excel/","category":"Mathematical/Analytical","companies":["Philips"]},
  {"title":"Four People on a Rickety Bridge","url":"https://www.geeksforgeeks.org/aptitude/four-people-rickety-bridge/","category":"Mathematical/Analytical","companies":["Jumbotail","SAP"]},
  {"title":"Man fell in well Puzzle","url":"https://www.geeksforgeeks.org/aptitude/puzzle-man-fell-in-well-puzzle/","category":"Mathematical/Analytical","companies":["American Express"]},
  {"title":"50 red marbles and 50 blue marbles","url":"https://www.geeksforgeeks.org/aptitude/puzzle-50-red-marbles-and-50-blue-marbles/","category":"Mathematical/Analytical","companies":["Google","Microsoft","JP Morgan Chase"]},
  {"title":"Form Three Equilateral Triangles","url":"https://www.geeksforgeeks.org/aptitude/puzzle-form-three-equilateral-triangles/","category":"Mathematical/Analytical","companies":["Google"]},
  {"title":"10 identical bottles of pills","url":"https://www.geeksforgeeks.org/aptitude/puzzle-10-identical-bottles-pills/","category":"Mathematical/Analytical","companies":["ZS Associates"]},
  {"title":"Maximum pieces from a Circle using 6 straight lines","url":"https://www.geeksforgeeks.org/aptitude/puzzle-maximum-pieces-that-can-be-cut-from-a-circle-using-6-straight-lines/","category":"Mathematical/Analytical","companies":["TCS"]},
  {"title":"Chain Link Puzzle","url":"https://www.geeksforgeeks.org/aptitude/puzzle-85-chain-link-puzzle/","category":"Mathematical/Analytical","companies":["Cognizant"]},
  {"title":"Shopkeeper and the lady - Rs 200 fake note","url":"https://www.geeksforgeeks.org/gfg-academy/interview-puzzle-the-shopkeeper-and-the-lady-who-made-a-purchase-of-rs-200-with-fake-note/","category":"Mathematical/Analytical","companies":["Persistent Systems"]},
  {"title":"Egg Dropping Puzzle with 2 Eggs and K Floors","url":"https://www.geeksforgeeks.org/dsa/egg-dropping-puzzle-dp-11/","category":"Mathematical/Analytical","companies":["Google","Microsoft"]},
  {"title":"Min Apples to guarantee M red apples","url":"https://www.geeksforgeeks.org/dsa/minimum-number-of-apples-to-be-collected-from-trees-to-guarantee-m-red-apples/","category":"Mathematical/Analytical","companies":["Leetcode"]},
  {"title":"Snail and Wall","url":"https://www.geeksforgeeks.org/aptitude/puzzle-snail-and-wall/","category":"Mathematical/Analytical","companies":["TCS"]},
  {"title":"1000 light bulbs switched on/off by 1000 people","url":"https://www.geeksforgeeks.org/dsa/puzzle-1000-light-bulbs-switched-on-off-by-1000-persons-passing-by/","category":"Mathematical/Analytical","companies":["UK University Interview"]},
  {"title":"Four Alternating Knights","url":"https://www.geeksforgeeks.org/aptitude/puzzle-four-alternating-knights/","category":"Mathematical/Analytical","companies":["Amazon","Google"]},
  {"title":"TCS Digital Puzzle - Lateral Thinking 2 (Nine Dots)","url":"https://www.geeksforgeeks.org/interview-experiences/tcs-digital-puzzle-lateral-thinking-2/","category":"Mathematical/Analytical","companies":["TCS"]},
  {"title":"100 Cows And Milk","url":"https://www.geeksforgeeks.org/aptitude/puzzle-100-cows-and-milk/","category":"Mathematical/Analytical","companies":["ZS"]},
  {"title":"One Mile on the Globe","url":"https://www.geeksforgeeks.org/aptitude/puzzle-one-mile-on-the-globe-mcq/","category":"Mathematical/Analytical","companies":["Microsoft"]},
  {"title":"TCS Digital Puzzle - Lateral Thinking (Three Matchsticks to Three Squares)","url":"https://www.geeksforgeeks.org/aptitude/tcs-digital-puzzle-lateral-thinking/","category":"Mathematical/Analytical","companies":["TCS"]},
  {"title":"The Counters and Board","url":"https://www.geeksforgeeks.org/aptitude/puzzle-the-counters-and-board/","category":"Mathematical/Analytical","companies":["JP Morgan"]},
  {"title":"Camel and Banana Puzzle","url":"https://www.geeksforgeeks.org/aptitude/puzzle-15-camel-and-banana-puzzle/","category":"Logical","companies":["Amazon","Yahoo"]},
  {"title":"Six Matches, Right Foot Forward","url":"https://www.geeksforgeeks.org/aptitude/puzzle-six-matches-right-foot-forward/","category":"Mathematical/Analytical","companies":["TCS"]},
  {"title":"How much he had initially?","url":"https://www.geeksforgeeks.org/aptitude/puzzle-how-much-he-had-initially/","category":"Mathematical/Analytical","companies":["IAS Interview"]},
  {"title":"3 cuts to cut round cake into 8 equal pieces","url":"https://www.geeksforgeeks.org/aptitude/puzzle-3-cuts-cut-round-cake-8-equal-pieces/","category":"Shape","companies":["Adobe","CitiusTech","Cognizant","Blackrock"]},
  {"title":"Two Creepers Climbing a Tree","url":"https://www.geeksforgeeks.org/aptitude/puzzle-two-creepers-climbing-a-tree/","category":"Mathematical/Analytical","companies":["Adobe","Google","Microsoft"]},
  {"title":"Pay an employee using a gold rod of 7 units","url":"https://www.geeksforgeeks.org/aptitude/puzzle-4-pay-an-employee-using-a-gold-rod-of-7-units/","category":"Logical","companies":["FAANG","Ola cabs"]},
  {"title":"Finding the injection for Anesthesia","url":"https://www.geeksforgeeks.org/aptitude/puzzle-5-finding-the-injection-for-anesthesia/","category":"Logical","companies":["Google","Yahoo"]},
  {"title":"3 Bulbs and 3 Switches","url":"https://www.geeksforgeeks.org/aptitude/puzzle-7-3-bulbs-and-3-switches/","category":"Logical","companies":["MakeMyTrip","Qualcomm"]},
  {"title":"Find the Jar with contaminated pills","url":"https://www.geeksforgeeks.org/aptitude/puzzle-7-find-the-jar-with-contaminated-pills/","category":"Logical","companies":["MakeMyTrip"]},
  {"title":"10 Coins Puzzle","url":"https://www.geeksforgeeks.org/aptitude/puzzle-24-10-coins-puzzle/","category":"Logical","companies":["Google","Yahoo"]},
  {"title":"Strategy for a 2-Player Coin Game","url":"https://www.geeksforgeeks.org/aptitude/puzzle-14-strategy-for-a-2-player-coin-game/","category":"Logical","companies":["TCS"]},
  {"title":"5 Pirates and 100 Gold Coins","url":"https://www.geeksforgeeks.org/aptitude/puzzle-20-5-pirates-and-100-gold-coins/","category":"Logical","companies":["Microsoft"]},
  {"title":"Minimum cut Puzzle","url":"https://www.geeksforgeeks.org/aptitude/puzzle-31-minimum-cut-puzzle/","category":"Logical","companies":["Amazon"]},
  {"title":"Prisoner and Policeman Puzzle","url":"https://www.geeksforgeeks.org/aptitude/puzzle-34-prisoner-and-policeman-puzzle/","category":"Logical","companies":["Microsoft"]},
  {"title":"Cheating Husband / Guess the Victim","url":"https://www.geeksforgeeks.org/gfg-academy/guess-the-victim/","category":"Logical","companies":["Microsoft","Google"]},
  {"title":"Blind Games","url":"https://www.geeksforgeeks.org/aptitude/puzzle-blind-games/","category":"Logical","companies":["Bloomberg"]},
  {"title":"Chameleons go on a date","url":"https://www.geeksforgeeks.org/aptitude/puzzle-chameleons-go-on-a-date/","category":"Logical","companies":["Amazon"]},
  {"title":"Heaven and Hell","url":"https://www.geeksforgeeks.org/aptitude/puzzle-heaven-hell/","category":"Logical","companies":["Amazon","Infosys"]},
  {"title":"Mislabeled Jars","url":"https://www.geeksforgeeks.org/aptitude/puzzle-mislabeled-jars/","category":"Logical","companies":["Google","Microsoft"]},
  {"title":"Cheryl's Birthday Puzzle","url":"https://www.geeksforgeeks.org/aptitude/cheryls-birthday-puzzle-and-solution/","category":"Logical","companies":["Facebook","Whatsapp","Singapore Math Olympic"]},
  {"title":"The Lion and the Unicorn","url":"https://www.geeksforgeeks.org/aptitude/puzzle-the-lion-and-the-unicorn/","category":"Logical","companies":["The Access Group (UK)","TCS"]},
  {"title":"Farmer, Goat, Wolf, and Cabbage","url":"https://www.geeksforgeeks.org/aptitude/puzzle-farmer-goat-wolf-cabbage/","category":"Logical","companies":["Infosys"]},
  {"title":"Blind man and Pills","url":"https://www.geeksforgeeks.org/aptitude/puzzle-blind-man-and-pills/","category":"Logical","companies":["Mentor Graphics"]},
  {"title":"Rat and Poisonous Milk Bottles","url":"https://www.geeksforgeeks.org/aptitude/puzzle-rat-and-poisonous-milk-bottles/","category":"Logical","companies":["Google"]},
  {"title":"Measuring 6L water from 4L and 9L buckets","url":"https://www.geeksforgeeks.org/aptitude/measuring-6l-water-4l-9l-buckets/","category":"Logical","companies":["Microsoft"]},
  {"title":"Melting Candles","url":"https://www.geeksforgeeks.org/gfg-academy/melting-candles-puzzle/","category":"Logical","companies":["FAANG"]},
  {"title":"Red Hat vs Blue Hat","url":"https://www.geeksforgeeks.org/aptitude/puzzle-47-red-hat-vs-blue-hat/","category":"Logical","companies":["Microsoft"]},
  {"title":"Joint family of seven persons (L, M, N, O, P, Q, R)","url":"https://www.geeksforgeeks.org/aptitude/puzzle-joint-family-of-seven-persons-l-m-n-o-p-q-and-r/","category":"Logical","companies":["TCS"]},
  {"title":"The Circle of Lights","url":"https://www.geeksforgeeks.org/aptitude/puzzle-the-circle-of-lights/","category":"Logical","companies":["Microsoft","Bloomberg"]},
  {"title":"9 Students and Red Black Hats","url":"https://www.geeksforgeeks.org/aptitude/puzzle-9-students-and-red-black-hats/","category":"Logical","companies":["Google"]},
  {"title":"Light all the bulbs","url":"https://www.geeksforgeeks.org/dsa/puzzle-light-all-the-bulbs/","category":"Logical","companies":["Microsoft","Bloomberg"]},
  {"title":"Distribute the Water","url":"https://www.geeksforgeeks.org/aptitude/puzzle-distribute-the-water/","category":"Logical","companies":["Microsoft"]},
  {"title":"Can 2 persons have same number of hairs on their heads?","url":"https://www.geeksforgeeks.org/aptitude/puzzle-can-2-persons-be-with-same-number-of-hairs-on-their-heads/","category":"Logical","companies":["OPPO","inflame"]},
  {"title":"Weight of Heavy Ball","url":"https://www.geeksforgeeks.org/dsa/weight-heavy-ball/","category":"Logical","companies":["IBM"]},
  {"title":"Days of the month using 2 dice","url":"https://www.geeksforgeeks.org/aptitude/puzzle-23-days-of-month-using-2-dice/","category":"Arrangement","companies":["Microsoft"]},
  {"title":"Tic Tac Toe Puzzle","url":"https://www.geeksforgeeks.org/aptitude/puzzle-38-tic-tac-toe-puzzle/","category":"Arrangement","companies":["Amazon"]},
  {"title":"Matchstick Puzzle","url":"https://www.geeksforgeeks.org/aptitude/puzzle-36-matchstick-puzzle/","category":"Arrangement","companies":["Kirloskar Brothers","SLB"]},
  {"title":"Last Palindrome Date Before 10/02/2001","url":"https://www.geeksforgeeks.org/aptitude/puzzle-30-last-palindrome-data/","category":"Arrangement","companies":["Amazon"]},
  {"title":"10 Balls in 5 Lines","url":"https://www.geeksforgeeks.org/aptitude/puzzle-10-balls-in-5-lines/","category":"Arrangement","companies":["Publicis Sapient"]},
  {"title":"Round table coin game","url":"https://www.geeksforgeeks.org/aptitude/puzzle-round-table-coin-game/","category":"Arrangement","companies":["ElectrifAi"]},
  {"title":"Chessboard and dominos","url":"https://www.geeksforgeeks.org/aptitude/puzzle-25chessboard-and-dominos/","category":"Shape","companies":["Google"]},
  {"title":"3 Ants and Triangle","url":"https://www.geeksforgeeks.org/aptitude/puzzle-21-3-ants-and-triangle/","category":"Shape","companies":["Intuit","ZS Associates","EXL"]},
  {"title":"Algorithm to solve Rubik's Cube","url":"https://www.geeksforgeeks.org/blogs/algorithm-to-solve-rubiks-cube/","category":"Mechanical","companies":[]},
  {"title":"Crossword Puzzle Of The Week #1 (for DSA)","url":"https://www.geeksforgeeks.org/dsa/crossword-puzzle-of-the-week-1-for-dsa/","category":"Mechanical","companies":[]},
  {"title":"Crossword Puzzle Of The Week #2 (Computer Science)","url":"https://www.geeksforgeeks.org/aptitude/crossword-puzzle-of-the-week-2-for-computer-science-and-applications/","category":"Mechanical","companies":[]},
  {"title":"Crossword Puzzle Of The Week #3 (Database)","url":"https://www.geeksforgeeks.org/aptitude/crossword-puzzle-of-the-week-3-for-database-and-queries/","category":"Mechanical","companies":[]},
  {"title":"Crossword Puzzle Of The Week #4 (OOP)","url":"https://www.geeksforgeeks.org/aptitude/crossword-puzzle-of-the-week-4-for-object-oriented-programming/","category":"Mechanical","companies":[]},
  {"title":"How to Measure 45 minutes using two identical wires","url":"https://www.geeksforgeeks.org/aptitude/puzzle-1-how-to-measure-45-minutes-using-two-identical-wires/","category":"Other","companies":["MakeMyTrip"]},
  {"title":"Elevator Puzzle","url":"https://www.geeksforgeeks.org/aptitude/puzzle-elevator-puzzle/","category":"Other","companies":["FAANG"]},
  {"title":"Find the last ball to remain after the entire process","url":"https://www.geeksforgeeks.org/aptitude/puzzle-find-last-ball-remain-entire-process/","category":"Other","companies":["Times Internet","EXL Service"]},
  {"title":"100 people in a circle with a gun","url":"https://www.geeksforgeeks.org/aptitude/puzzle-100-people-in-a-circle-with-gun-puzzle/","category":"Other","companies":["IgniWorld"]}
];

const CATEGORY_ORDER = ["Logical","Mathematical/Analytical","Arrangement","Shape","Mechanical","Other"];
const PROFILE_NAME   = "Archit Savaliya";

/* =========================================================================
   STATE  (localStorage)
   Shape: { v:1, solved:{[url]:true}, collapsed:{[cat]:true},
            notes:{[url]:string}, solvedAt:{[url]:"YYYY-MM-DD"} }
   ========================================================================= */
const STORAGE_KEY = "puzzleTracker.v1";
let state = { v:1, solved:{}, collapsed:{}, notes:{}, solvedAt:{} };

/* ---- Edit lock (view-only public site; PIN unlocks editing) -------------
   This is a SOFT lock / showcase guard, not real security: on a public,
   static site the code is readable and a determined visitor can bypass a
   client-side check. We store only a SHA-256 hash of the PIN, never the PIN. */
const PIN_HASH = "4401dfbd4b7faaf470f94888cca5b473f0590e10c3799088be66cef7da7238f5";
let editMode = false;
try{ editMode = sessionStorage.getItem("pt.edit") === "1"; }catch(e){}

function loadState(){
  // 1) Baseline = the published snapshot shipped with the site (progress.js)
  const pub = window.PUBLISHED_PROGRESS || {};
  state.solved   = (pub.solved   && typeof pub.solved   === "object") ? { ...pub.solved }   : {};
  state.notes    = (pub.notes    && typeof pub.notes    === "object") ? { ...pub.notes }    : {};
  state.solvedAt = (pub.solvedAt && typeof pub.solvedAt === "object") ? { ...pub.solvedAt } : {};
  state.collapsed = {};
  // 2) The owner's working copy (localStorage on their own device) overrides it
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){
      const p = JSON.parse(raw);
      state.solved    = (p && typeof p.solved    === "object" && p.solved)    || {};
      state.collapsed = (p && typeof p.collapsed === "object" && p.collapsed) || {};
      state.notes     = (p && typeof p.notes     === "object" && p.notes)     || {};
      state.solvedAt  = (p && typeof p.solvedAt  === "object" && p.solvedAt)  || {};
    }
  }catch(e){ console.warn("Could not read saved state:", e); }
}
function saveState(){
  if(!editMode) return;                       // view-only: never write to storage
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch(e){ console.warn("Could not save:", e); toast("Storage full or blocked — couldn't save"); }
  schedulePush();
}

/* SHA-256 hex of a string (for verifying the PIN without storing it) */
async function sha256Hex(str){
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2,"0")).join("");
}

/* ---- PIN-encrypted token (cross-browser sync without re-entering the token)
   The GitHub token is encrypted with the owner's PIN (PBKDF2 + AES-GCM) and the
   ciphertext is committed in progress.js. Any browser that knows the PIN can
   decrypt it — the plaintext token is never stored in the repo or localStorage
   in the clear. Security rests on the PIN's strength: use a long, non-trivial
   PIN (the published PIN hash is brute-forceable for short numeric PINs). */
const PIN_KDF_ITERS = 250000;
function _b64(buf){ return btoa(String.fromCharCode(...new Uint8Array(buf))); }
function _unb64(s){ return Uint8Array.from(atob(s), c => c.charCodeAt(0)); }

async function deriveAesKey(pin, salt){
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pin), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey(
    { name:"PBKDF2", salt, iterations:PIN_KDF_ITERS, hash:"SHA-256" },
    base, { name:"AES-GCM", length:256 }, false, ["encrypt","decrypt"]
  );
}
async function encryptToken(token, pin){
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv   = crypto.getRandomValues(new Uint8Array(12));
  const key  = await deriveAesKey(pin, salt);
  const ct   = await crypto.subtle.encrypt({ name:"AES-GCM", iv }, key, new TextEncoder().encode(token));
  return { v:1, salt:_b64(salt), iv:_b64(iv), ct:_b64(ct) };
}
async function decryptToken(blob, pin){
  const key = await deriveAesKey(pin, _unb64(blob.salt));
  const pt  = await crypto.subtle.decrypt({ name:"AES-GCM", iv:_unb64(blob.iv) }, key, _unb64(blob.ct));
  return new TextDecoder().decode(pt);
}

/* PIN held in memory after unlock (never persisted) + a pending encrypted
   token blob waiting to be written into the next saved snapshot. */
let currentPin       = null;
let pendingCloudBlob = null;

/* Apply the current lock state to the whole UI */
function applyEditMode(){
  document.body.classList.toggle("edit-mode", editMode);
  document.body.classList.toggle("view-mode", !editMode);
  const lbl = $(".lock-label");
  if(lbl) lbl.textContent = editMode ? "Editing" : "View only";
  const lb = $("#lockBtn");
  if(lb) lb.setAttribute("aria-label", editMode ? "Lock editing" : "Unlock editing with PIN");
  // Disable ticks + make notes read-only when viewing
  for(const [, rec] of rowByUrl){
    rec.input.disabled = !editMode;
    rec.noteTextarea.readOnly = !editMode;
  }
  // Sync daily puzzle ticks
  document.querySelectorAll(".daily-card input[type='checkbox']").forEach(cb => {
    cb.disabled = !editMode;
  });
}

async function toggleLock(){
  if(editMode){
    editMode = false;
    currentPin = null;                        // forget the PIN on lock
    try{ sessionStorage.removeItem("pt.edit"); }catch(e){}
    applyEditMode();
    toast("Locked — back to view-only");
    return;
  }
  const entry = prompt("Enter PIN to unlock editing:");
  if(entry == null) return;                   // cancelled
  const pin = entry.trim();
  let ok = false;
  try{ ok = (await sha256Hex(pin)) === PIN_HASH; }
  catch(e){ ok = false; }
  if(ok){
    editMode = true;
    currentPin = pin;                         // keep in memory for token encrypt/decrypt
    try{ sessionStorage.setItem("pt.edit","1"); }catch(e){}
    applyEditMode();
    toast("Editing unlocked");
    maybeAutoConnectCloud(pin);               // PIN-unlock cloud sync if a token was published
  } else {
    toast("Wrong PIN");
  }
}

/* Show a locked warning toast */
function showLockWarning(){
  const t = document.getElementById("toast");
  t.classList.add("locked");
  toast("Locked — click the lock icon and enter PIN to edit");
  setTimeout(() => t.classList.remove("locked"), 3600);
}

/* Download the current progress as progress.js to publish to the public site */
function saveSnapshot(){
  // Carry forward the PIN-encrypted sync token: a freshly set one, else the
  // one already published with the site. Safe to commit — useless without the PIN.
  const cloudBlob = pendingCloudBlob || (window.PUBLISHED_PROGRESS && window.PUBLISHED_PROGRESS.cloud) || null;
  const snap = {
    app:"puzzle-tracker", profile:PROFILE_NAME,
    solved:state.solved, notes:state.notes, solvedAt:state.solvedAt,
    cloud:cloudBlob
  };
  const body = "/* Published progress snapshot — commit this file to update the public site. */\n"
             + "window.PUBLISHED_PROGRESS = " + JSON.stringify(snap, null, 2) + ";\n";
  const blob = new Blob([body], { type:"application/javascript" });
  const url  = URL.createObjectURL(blob);
  const a = el("a"); a.href = url; a.download = "progress.js";
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
  toast(cloudBlob
    ? "progress.js downloaded — commit it to enable PIN-unlock sync everywhere"
    : "progress.js downloaded — commit it to publish");
}

/* =========================================================================
   DOM HELPERS
   ========================================================================= */
const $  = (sel, el=document) => el.querySelector(sel);
const svgNS = "http://www.w3.org/2000/svg";

function el(tag, cls, text){
  const n = document.createElement(tag);
  if(cls)  n.className   = cls;
  if(text != null) n.textContent = text;
  return n;
}
/* Accepts one path string or an array of path strings */
function svg(paths, attrs={}){
  const s = document.createElementNS(svgNS,"svg");
  s.setAttribute("viewBox","0 0 24 24"); s.setAttribute("fill","none");
  s.setAttribute("stroke","currentColor"); s.setAttribute("stroke-width","2.6");
  s.setAttribute("stroke-linecap","round"); s.setAttribute("stroke-linejoin","round");
  for(const k in attrs) s.setAttribute(k, attrs[k]);
  const arr = Array.isArray(paths) ? paths : [paths];
  for(const d of arr){
    const p = document.createElementNS(svgNS,"path"); p.setAttribute("d",d); s.appendChild(p);
  }
  return s;
}
function htmlEsc(s){ return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

/* =========================================================================
   BUILD  — group + render all puzzle rows once
   ========================================================================= */
const RING_CIRC = 2 * Math.PI * 18;
const listEl    = $("#list");
const sections  = [];          // { category, total, rows, els }
const rowByUrl  = new Map();   // url -> rec

/* Note timers for debounced auto-save */
const noteTimers = {};
/* Track which note panels are open (not persisted) */
const openNotes  = new Set();

function buildGroups(){
  const map = new Map();
  for(const p of PUZZLES){
    if(!map.has(p.category)) map.set(p.category,[]);
    map.get(p.category).push(p);
  }
  const ordered = [];
  for(const c of CATEGORY_ORDER) if(map.has(c)) ordered.push(c);
  for(const c of map.keys())     if(!ordered.includes(c)) ordered.push(c);
  return ordered.map(c => ({ category:c, puzzles:map.get(c) }));
}

function render(){
  const groups = buildGroups();

  groups.forEach((group, gi) => {
    const sec = el("section","section");
    sec.dataset.cat = group.category;
    sec.style.animationDelay = (gi*55) + "ms";
    if(state.collapsed[group.category]) sec.classList.add("collapsed");

    /* Section header */
    const head = el("button","sec-head");
    head.type = "button";
    head.setAttribute("aria-expanded", state.collapsed[group.category] ? "false" : "true");

    const chev = svg("M6 9l6 6 6-6", {class:"chev","stroke-width":"2.4"});
    head.appendChild(chev);

    const titleWrap = el("div","sec-title");
    titleWrap.appendChild(el("div","name", group.category));
    const meta = el("div","meta"); titleWrap.appendChild(meta);
    head.appendChild(titleWrap);

    const done = el("span","sec-done");
    done.appendChild(svg("M20 6 9 17l-5-5",{"stroke-width":"2.6"}));
    done.appendChild(el("span",null,"All solved"));
    head.appendChild(done);

    const prog = el("div","sec-prog");
    const count = el("span","sec-count");
    const secBar = el("div","sec-bar"); const secFill = el("i"); secBar.appendChild(secFill);
    prog.appendChild(count); prog.appendChild(secBar);
    head.appendChild(prog);
    sec.appendChild(head);

    /* Section body */
    const body = el("div","sec-body");
    const ul = el("ul");
    const rows = [];

    for(const p of group.puzzles){
      const li = el("li","puzzle");
      li.dataset.url = p.url;

      /* --- Horizontal row: tick + p-main + note-btn --- */
      const row = el("div","puzzle-row");

      // Tick
      const label = el("label","tick");
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = !!state.solved[p.url];
      input.setAttribute("aria-label", 'Mark "'+p.title+'" as solved');
      const box = el("span","tick-box");
      box.appendChild(svg("M20 6 9 17l-5-5"));
      label.appendChild(input); label.appendChild(box);
      row.appendChild(label);
      label.addEventListener("click", () => { if(!editMode) showLockWarning(); });

      // Title + tags
      const main = el("div","p-main");
      const a = el("a","p-title");
      a.href = p.url; a.target = "_blank"; a.rel = "noopener";
      a.appendChild(document.createTextNode(p.title));
      const extIco = svg(
        ["M14 4h6v6","M20 4l-9 9","M9 5H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4"],
        {class:"ext","stroke-width":"2"}
      );
      a.appendChild(extIco);
      main.appendChild(a);

      const tags = el("div","tags");
      const catTag = el("span","tag cat", p.category);
      catTag.dataset.cat = p.category;
      tags.appendChild(catTag);
      for(const co of p.companies) tags.appendChild(el("span","tag co", co));
      main.appendChild(tags);
      row.appendChild(main);

      // Note toggle button (pencil)
      const noteBtn = el("button","note-btn");
      noteBtn.type = "button";
      noteBtn.title = "Add / view notes";
      noteBtn.setAttribute("aria-label", "Toggle notes for "+p.title);
      noteBtn.setAttribute("aria-expanded","false");
      noteBtn.appendChild(svg("M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",{"stroke-width":"2"}));
      if(state.notes[p.url]) noteBtn.classList.add("has-note");
      row.appendChild(noteBtn);

      li.appendChild(row);

      /* --- Note expand area --- */
      const noteArea = el("div","note-area");
      if(openNotes.has(p.url)) noteArea.classList.add("open");

      const noteInner = el("div","note-inner");
      const noteWrap  = el("div","note-wrap");

      const textarea = document.createElement("textarea");
      textarea.placeholder = "Write your approach, insights, key formula…";
      textarea.value = state.notes[p.url] || "";
      textarea.setAttribute("aria-label", "Notes for "+p.title);
      textarea.rows = 3;
      noteWrap.appendChild(textarea);

      const noteFoot   = el("div","note-foot");
      const noteChars  = el("span","note-chars", textarea.value.length + " chars");
      const noteSaved  = el("span","note-saved");
      noteSaved.appendChild(svg("M20 6 9 17l-5-5",{"stroke-width":"3"}));
      noteSaved.appendChild(document.createTextNode(" Saved"));
      noteFoot.appendChild(noteChars);
      noteFoot.appendChild(noteSaved);
      noteWrap.appendChild(noteFoot);
      noteInner.appendChild(noteWrap);
      noteArea.appendChild(noteInner);
      li.appendChild(noteArea);

      if(input.checked) li.classList.add("solved");

      // Wire note button
      noteBtn.addEventListener("click", (e) => { e.stopPropagation(); toggleNote(p.url); });

      // Warn on keydown when locked
      textarea.addEventListener("keydown", () => { if(!editMode) showLockWarning(); });
      // Auto-save on input (debounced)
      textarea.addEventListener("input", () => {
        noteChars.textContent = textarea.value.length + " chars";
        debounceSaveNote(p.url, textarea.value, noteBtn, noteSaved);
      });

      // Wire tick
      input.addEventListener("change", () => toggleSolved(p.url, input.checked));

      const rec = {
        puzzle:p, li, input, title:a, titleText:p.title,
        haystack:(p.title+" "+p.companies.join(" ")).toLowerCase(),
        noteBtn, noteArea, noteTextarea:textarea, noteSaved, noteChars
      };
      rowByUrl.set(p.url, rec);
      rows.push(rec);
      ul.appendChild(li);
    }

    body.appendChild(ul);
    sec.appendChild(body);
    listEl.appendChild(sec);

    const secRec = { category:group.category, total:group.puzzles.length, rows,
                     els:{ sec, head, meta, done, count, secFill } };
    sections.push(secRec);
    head.addEventListener("click", () => toggleCollapse(secRec));
  });

  document.getElementById("totalN").textContent = PUZZLES.length;
}

/* =========================================================================
   ACTIONS
   ========================================================================= */
function toggleSolved(url, solved){
  if(!editMode){ showLockWarning(); return; } // view-only guard
  if(solved){
    state.solved[url] = true;
    if(!state.solvedAt[url]) state.solvedAt[url] = todayStr();   // stamp the day it was solved
  } else {
    delete state.solved[url];
    delete state.solvedAt[url];
  }
  const rec = rowByUrl.get(url);
  if(rec) rec.li.classList.toggle("solved", solved);
  // Sync daily card if this puzzle appears there
  document.querySelectorAll(".daily-card").forEach(c => {
    if(c.dataset.url === url){
      c.classList.toggle("solved", solved);
      const cb = c.querySelector("input[type='checkbox']");
      if(cb) cb.checked = solved;
    }
  });
  saveState();
  updateProgress();
  applyFilter();
  if(document.body.classList.contains("view-profile")) renderAnalytics();
}

function toggleCollapse(secRec){
  const collapsed = !secRec.els.sec.classList.contains("collapsed");
  secRec.els.sec.classList.toggle("collapsed", collapsed);
  secRec.els.head.setAttribute("aria-expanded", collapsed ? "false" : "true");
  if(collapsed) state.collapsed[secRec.category] = true;
  else delete state.collapsed[secRec.category];
  saveState();
}

/* Toggle note panel open/close */
function toggleNote(url){
  const rec = rowByUrl.get(url);
  if(!rec) return;
  const isOpen = openNotes.has(url);
  if(isOpen){
    openNotes.delete(url);
    rec.noteArea.classList.remove("open");
    rec.noteBtn.setAttribute("aria-expanded","false");
  } else {
    openNotes.add(url);
    rec.noteArea.classList.add("open");
    rec.noteBtn.setAttribute("aria-expanded","true");
    // Focus textarea after the expand animation
    setTimeout(() => rec.noteTextarea.focus(), 320);
  }
}

/* Debounced note auto-save */
function debounceSaveNote(url, text, noteBtn, noteSaved){
  clearTimeout(noteTimers[url]);
  noteTimers[url] = setTimeout(() => {
    if(text.trim()) state.notes[url] = text;
    else delete state.notes[url];
    saveState();
    noteBtn.classList.toggle("has-note", !!text.trim());
    noteSaved.classList.add("show");
    clearTimeout(noteTimers[url+"_hide"]);
    noteTimers[url+"_hide"] = setTimeout(() => noteSaved.classList.remove("show"), 1800);
  }, 700);
}

/* =========================================================================
   PROGRESS
   ========================================================================= */
function solvedCount(){ let n=0; for(const u in state.solved) if(state.solved[u]) n++; return n; }

function updateProgress(){
  const total  = PUZZLES.length;
  const solved = Math.min(solvedCount(), total);
  const pct    = total ? Math.round(solved/total*100) : 0;

  document.documentElement.style.setProperty("--overall", pct + "%");
  $("#solvedN").textContent   = solved;
  $("#pctN").textContent      = pct;
  $("#ringPct").textContent   = pct + "%";
  $("#ringFill").setAttribute("stroke-dashoffset", String(RING_CIRC * (1 - pct/100)));
  document.body.classList.toggle("complete", solved === total && total > 0);

  $("#cAll").textContent      = total;
  $("#cSolved").textContent   = solved;
  $("#cUnsolved").textContent = total - solved;

  for(const sec of sections){
    let s=0; for(const r of sec.rows) if(state.solved[r.puzzle.url]) s++;
    const cpct = sec.total ? Math.round(s/sec.total*100) : 0;
    sec.els.count.textContent = s + " / " + sec.total;
    sec.els.meta.textContent  = s===sec.total ? "Complete" : (s + " of " + sec.total + " solved");
    sec.els.secFill.style.width = cpct + "%";
    sec.els.sec.classList.toggle("full", s===sec.total && sec.total>0);
  }
}

/* =========================================================================
   SEARCH + FILTER
   ========================================================================= */
let query = "";
let filterMode = "all";

function escapeReg(s){ return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"); }

function highlightTitle(rec){
  const a = rec.title;
  const ext = a.querySelector(".ext");
  a.textContent = "";
  if(query){
    const re = new RegExp("("+escapeReg(query)+")","ig");
    for(const part of rec.titleText.split(re)){
      if(!part) continue;
      if(part.toLowerCase() === query.toLowerCase()) a.appendChild(el("mark",null,part));
      else a.appendChild(document.createTextNode(part));
    }
  } else {
    a.appendChild(document.createTextNode(rec.titleText));
  }
  if(ext) a.appendChild(ext);
}

function rowMatches(rec){
  if(query && !rec.haystack.includes(query)) return false;
  const isSolved = !!state.solved[rec.puzzle.url];
  if(filterMode === "solved"   && !isSolved) return false;
  if(filterMode === "unsolved" &&  isSolved) return false;
  return true;
}

function applyFilter(){
  let anyVisible = false;
  const searching = query.length > 0;
  for(const sec of sections){
    let vis = 0;
    for(const rec of sec.rows){
      const show = rowMatches(rec);
      rec.li.hidden = !show;
      if(show){ vis++; anyVisible = true; }
    }
    sec.els.sec.hidden = (vis === 0);
    if(searching){
      sec.els.sec.classList.toggle("collapsed", vis === 0);
    } else {
      sec.els.sec.classList.toggle("collapsed", !!state.collapsed[sec.category]);
    }
  }
  document.body.classList.toggle("no-results", !anyVisible);
}

function setQuery(q){
  query = q.trim().toLowerCase();
  $("#searchWrap").classList.toggle("has-value", q.length>0);
  for(const sec of sections) for(const rec of sec.rows) highlightTitle(rec);
  applyFilter();
}

function setFilter(mode){
  filterMode = mode;
  document.querySelectorAll(".segmented button").forEach(b=>{
    b.setAttribute("aria-pressed", String(b.dataset.filter===mode));
  });
  applyFilter();
}

/* =========================================================================
   EXPORT / IMPORT / RESET
   ========================================================================= */
function exportProgress(){
  const payload = {
    app:"puzzle-tracker", version:1, profile:PROFILE_NAME,
    exportedAt:new Date().toISOString(),
    solved:state.solved, notes:state.notes, solvedAt:state.solvedAt
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type:"application/json" });
  const url  = URL.createObjectURL(blob);
  const a = el("a"); a.href = url; a.download = "puzzle-tracker-progress.json";
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
  toast("Progress & notes exported");
}

function importProgress(file){
  const reader = new FileReader();
  reader.onload = () => {
    try{
      const data     = JSON.parse(reader.result);
      const incoming = data && (data.solved || (data.app ? null : data));
      if(!incoming || typeof incoming !== "object") throw new Error("No solved map");
      let added = 0;
      for(const url in incoming){
        if(incoming[url]){ if(!state.solved[url]) added++; state.solved[url] = true; }
      }
      // Import solve dates if present
      if(data.solvedAt && typeof data.solvedAt === "object"){
        for(const url in data.solvedAt){
          if(state.solved[url] && !state.solvedAt[url]) state.solvedAt[url] = data.solvedAt[url];
        }
      }
      // Import notes if present
      if(data.notes && typeof data.notes === "object"){
        for(const url in data.notes){
          if(data.notes[url]) state.notes[url] = data.notes[url];
        }
        // Reflect loaded notes in UI
        for(const [url, rec] of rowByUrl){
          if(state.notes[url]){
            rec.noteTextarea.value = state.notes[url];
            rec.noteChars.textContent = state.notes[url].length + " chars";
            rec.noteBtn.classList.add("has-note");
          }
        }
      }
      for(const [url, rec] of rowByUrl){
        const on = !!state.solved[url];
        rec.input.checked = on;
        rec.li.classList.toggle("solved", on);
      }
      saveState(); updateProgress(); applyFilter();
      if(document.body.classList.contains("view-profile")) renderAnalytics();
      toast("Imported — " + added + " puzzle"+(added===1?"":"s")+" marked solved");
    }catch(e){
      console.warn(e); toast("Import failed — not valid progress JSON");
    }
  };
  reader.onerror = () => toast("Couldn't read that file");
  reader.readAsText(file);
}

function resetProgress(){
  const n = solvedCount();
  if(!confirm("Reset all progress?\n\nThis will clear "+n+" solved puzzle"+(n===1?"":"s")+
    " and all notes from this browser.\n\nThis can't be undone (Export first if you want a backup).")) return;
  state.solved = {}; state.notes = {}; state.solvedAt = {};
  try{ localStorage.removeItem(STORAGE_KEY); }catch(e){}
  saveState();
  for(const [, rec] of rowByUrl){
    rec.input.checked = false;
    rec.li.classList.remove("solved");
    rec.noteTextarea.value = "";
    rec.noteChars.textContent = "0 chars";
    rec.noteBtn.classList.remove("has-note");
  }
  updateProgress(); applyFilter();
  if(document.body.classList.contains("view-profile")) renderAnalytics();
  toast("Progress & notes reset");
}

/* =========================================================================
   NOTES PDF
   Builds a print-ready HTML document in a new tab and triggers print.
   In Chrome/Edge/Safari the print dialog has "Save as PDF".
   ========================================================================= */
function exportNotesPDF(){
  const withNotes = PUZZLES.filter(p => state.notes[p.url] && state.notes[p.url].trim());
  if(!withNotes.length){
    toast("No notes yet — open a puzzle row, click the pencil, write something");
    return;
  }

  // Group by category preserving display order
  const groups = {};
  for(const p of withNotes){
    if(!groups[p.category]) groups[p.category] = [];
    groups[p.category].push(p);
  }
  const allCats = [
    ...CATEGORY_ORDER,
    ...Object.keys(groups).filter(c => !CATEGORY_ORDER.includes(c))
  ];

  const solved   = solvedCount();
  const total    = PUZZLES.length;
  const dateStr  = new Date().toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"});
  const noteCount = withNotes.length;

  let body = "";
  for(const cat of allCats){
    if(!groups[cat]) continue;
    body += `<div class="cat-head">${htmlEsc(cat)}</div>\n`;
    for(const p of groups[cat]){
      const note    = (state.notes[p.url]||"").trim();
      const isSolved = !!state.solved[p.url];
      const cos     = p.companies.length ? htmlEsc(p.companies.join(" · ")) : "—";
      body += `<div class="entry">
  <div class="entry-title">
    ${isSolved ? '<span class="badge">&#10003; Solved</span>' : '<span class="badge unsolved">Unsolved</span>'}
    ${htmlEsc(p.title)}
  </div>
  <div class="entry-meta">${cos}</div>
  <div class="entry-note">${htmlEsc(note)}</div>
</div>\n`;
    }
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Puzzle Notes &mdash; ${htmlEsc(PROFILE_NAME)}</title>
<style>
*{ box-sizing:border-box; margin:0; padding:0; }
body{ font-family:Georgia,serif; font-size:11pt; line-height:1.6; color:#1c2a1f; }
.cover{
  page-break-after:always; min-height:100vh;
  display:flex; flex-direction:column; justify-content:center; padding:10% 12%;
  background:#edf7f0; border-left:8px solid #2d7a50;
  -webkit-print-color-adjust:exact; print-color-adjust:exact;
}
.cover-name{ font-size:28pt; font-weight:700; letter-spacing:-0.01em; color:#1a3d2b; }
.cover-sub { font-size:13pt; color:#2d7a50; margin-top:6px; }
.cover-rule{ width:48px; height:3px; background:#2d7a50; border-radius:2px; margin:28px 0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
.cover-meta{ font-family:"Courier New",monospace; font-size:9pt; color:#5a7260; line-height:1.9; }

.cat-head{
  margin:28px 0 12px; padding:7px 12px;
  border-left:4px solid #2d7a50; background:#edf7f0;
  font-family:Georgia,serif; font-size:12.5pt; font-weight:700; color:#1a3d2b;
  page-break-after:avoid;
  -webkit-print-color-adjust:exact; print-color-adjust:exact;
}
.entry{
  margin-bottom:18px; padding:14px 16px;
  border:1px solid #c0dfc9; border-radius:6px;
  page-break-inside:avoid;
}
.entry-title{ font-size:11.5pt; font-weight:700; color:#1a3d2b; margin-bottom:5px; line-height:1.35; }
.badge{
  display:inline-block; font-size:7.5pt; font-weight:700; padding:2px 7px;
  border-radius:99px; margin-right:7px; vertical-align:middle;
  background:#2d7a50; color:#fff;
  -webkit-print-color-adjust:exact; print-color-adjust:exact;
}
.badge.unsolved{ background:#8a9e8e; }
.entry-meta{ font-family:"Courier New",monospace; font-size:8pt; color:#7a9a80; margin-bottom:8px; padding-bottom:8px; border-bottom:1px solid #deeee3; }
.entry-note{ font-family:ui-sans-serif,system-ui,-apple-system,Arial,sans-serif; font-size:10.5pt; line-height:1.7; color:#2c3a2f; white-space:pre-wrap; }
.footer{ margin-top:32px; padding-top:12px; border-top:1px solid #c0dfc9; font-size:8pt; color:#9ab09e; text-align:center; }
@page{ margin:14mm 18mm; }
</style>
</head>
<body>
<div class="cover">
  <div class="cover-name">${htmlEsc(PROFILE_NAME)}</div>
  <div class="cover-sub">Puzzle Notes &mdash; GeeksforGeeks Interview Preparation</div>
  <div class="cover-rule"></div>
  <div class="cover-meta">
    Generated: ${dateStr}<br>
    Puzzles with notes: ${noteCount} of ${total}<br>
    Solved: ${solved} of ${total} (${Math.round(solved/total*100)}%)
  </div>
</div>
${body}
<div class="footer">Generated by Puzzle Tracker &mdash; ${htmlEsc(PROFILE_NAME)}</div>
</body>
</html>`;

  const w = window.open("","_blank");
  if(!w){ toast("Pop-up blocked — allow pop-ups for this page and try again"); return; }
  w.document.write(html);
  w.document.close();
  // Small delay lets the page render before print dialog opens
  setTimeout(() => w.print(), 700);
}

/* =========================================================================
   TOAST
   ========================================================================= */
let toastTimer;
function toast(msg){
  const t = $("#toast"); $("#toastMsg").textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 3400);
}

/* =========================================================================
   DATE HELPERS
   ========================================================================= */
function pad2(n){ return String(n).padStart(2,"0"); }
function ymd(d){ return d.getFullYear()+"-"+pad2(d.getMonth()+1)+"-"+pad2(d.getDate()); }
function todayStr(){ return ymd(new Date()); }
function parseYmd(s){ const a = s.split("-").map(Number); return new Date(a[0], a[1]-1, a[2]); }
function addDays(d, n){ const x = new Date(d); x.setDate(x.getDate()+n); return x; }
function startOfToday(){ const d = new Date(); d.setHours(0,0,0,0); return d; }
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function niceCeil(n){
  if(n <= 5)  return 5;
  if(n <= 10) return 10;
  if(n <= 20) return 20;
  if(n <= 50) return Math.ceil(n/10)*10;
  return Math.ceil(n/25)*25;
}

/* =========================================================================
   ANALYTICS
   ========================================================================= */
function computeAnalytics(){
  const byDate = {};                        // "YYYY-MM-DD" -> count solved that day
  for(const url in state.solvedAt){
    if(!state.solved[url]) continue;        // ignore any stale dates
    const d = state.solvedAt[url];
    byDate[d] = (byDate[d] || 0) + 1;
  }
  const dates       = Object.keys(byDate).sort();
  const total       = PUZZLES.length;
  const solvedTotal = solvedCount();
  const datedTotal  = dates.reduce((s,d) => s + byDate[d], 0);
  const undated     = Math.max(0, solvedTotal - datedTotal);

  // Current streak: consecutive days with ≥1 solve, ending today (or yesterday)
  let streak = 0;
  let probe  = todayStr();
  if(!byDate[probe]) probe = ymd(addDays(startOfToday(), -1));
  while(byDate[probe]){ streak++; probe = ymd(addDays(parseYmd(probe), -1)); }

  const bestDay     = dates.reduce((m,d) => Math.max(m, byDate[d]), 0);
  const daysActive  = dates.length;
  let notesCount = 0;
  for(const u in state.notes){ if(state.notes[u] && state.notes[u].trim()) notesCount++; }

  return { byDate, dates, total, solvedTotal, datedTotal, undated, streak, bestDay, daysActive, notesCount };
}

/* Cumulative "progress over time" line+area chart (inline SVG) */
function buildCumulativeSVG(a){
  if(a.datedTotal === 0){
    return '<div class="chart-empty">No dated solves yet — tick puzzles as you solve them and your progress curve will grow here.</div>';
  }
  const first = parseYmd(a.dates[0]);
  const today = startOfToday();
  const days  = Math.max(1, Math.round((today - first) / 86400000));

  // Daily cumulative series
  const pts = []; let cum = 0;
  for(let i=0; i<=days; i++){
    const ds = ymd(addDays(first, i));
    cum += a.byDate[ds] || 0;
    pts.push({ i, cum });
  }

  const W = 720, H = 240, padL = 36, padR = 16, padT = 14, padB = 30;
  const maxY = niceCeil(Math.max(a.datedTotal, 4));
  const X = i => padL + (W - padL - padR) * (days === 0 ? 0 : i / days);
  const Y = v => padT + (H - padT - padB) * (1 - v / maxY);

  // Y gridlines (0, mid, max)
  let grid = "";
  [0, maxY/2, maxY].forEach(v => {
    const y = Y(v);
    grid += `<line class="chart-grid" x1="${padL}" y1="${y.toFixed(1)}" x2="${W-padR}" y2="${y.toFixed(1)}"/>`;
    grid += `<text class="chart-label" x="${padL-7}" y="${(y+3.5).toFixed(1)}" text-anchor="end">${Math.round(v)}</text>`;
  });

  // Area + line
  let line = pts.map((p,k) => (k===0 ? "M" : "L") + X(p.i).toFixed(1) + " " + Y(p.cum).toFixed(1)).join(" ");
  const area = "M" + X(0).toFixed(1) + " " + Y(0).toFixed(1) + " " +
               pts.map(p => "L" + X(p.i).toFixed(1) + " " + Y(p.cum).toFixed(1)).join(" ") +
               " L" + X(days).toFixed(1) + " " + Y(0).toFixed(1) + " Z";

  // X date labels (start, mid, end)
  const xl = [0, Math.round(days/2), days];
  let xlabels = "";
  xl.forEach((i,idx) => {
    const ds = ymd(addDays(first, i));
    const d  = parseYmd(ds);
    const anchor = idx===0 ? "start" : idx===xl.length-1 ? "end" : "middle";
    xlabels += `<text class="chart-label" x="${X(i).toFixed(1)}" y="${H-9}" text-anchor="${anchor}">${d.getDate()} ${MONTHS[d.getMonth()]}</text>`;
  });

  // End dot
  const last = pts[pts.length-1];
  const dot = `<circle class="chart-dot" cx="${X(last.i).toFixed(1)}" cy="${Y(last.cum).toFixed(1)}" r="3.5"/>`;

  return `<svg class="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Cumulative puzzles solved over time">
    <defs><linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="oklch(0.60 0.13 162)" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="oklch(0.60 0.13 162)" stop-opacity="0.02"/>
    </linearGradient></defs>
    ${grid}
    <path class="chart-area" d="${area}"/>
    <path class="chart-line" d="${line}"/>
    ${dot}${xlabels}
  </svg>`;
}

/* GitHub-style contribution heatmap (inline SVG) */
function buildHeatmapSVG(a){
  const WEEKS = 27, cell = 13, gap = 3, leftLabel = 26, topLabel = 16;
  const today = startOfToday();
  let start = addDays(today, -((WEEKS-1)*7));
  start = addDays(start, -start.getDay());        // align to Sunday

  const hmColor = n =>
    n <= 0 ? "oklch(0.945 0.012 165)" :
    n === 1 ? "oklch(0.85 0.06 162)" :
    n === 2 ? "oklch(0.72 0.10 162)" :
    n === 3 ? "oklch(0.60 0.13 162)" :
              "oklch(0.47 0.145 162)";

  let rects = "", months = "", lastMonth = -1;
  for(let c=0; c<WEEKS; c++){
    for(let r=0; r<7; r++){
      const d = addDays(start, c*7 + r);
      if(d > today) continue;
      const ds = ymd(d);
      const n  = a.byDate[ds] || 0;
      const x  = leftLabel + c*(cell+gap);
      const y  = topLabel + r*(cell+gap);
      const nice = parseYmd(ds).getDate() + " " + MONTHS[parseYmd(ds).getMonth()] + " " + parseYmd(ds).getFullYear();
      rects += `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" rx="3" fill="${hmColor(n)}"><title>${n} solved · ${nice}</title></rect>`;
    }
    const m = addDays(start, c*7).getMonth();
    if(m !== lastMonth){ lastMonth = m; months += `<text class="hm-mlabel" x="${leftLabel + c*(cell+gap)}" y="11">${MONTHS[m]}</text>`; }
  }
  const wd = [[1,"Mon"],[3,"Wed"],[5,"Fri"]].map(([r,t]) =>
    `<text class="hm-wlabel" x="0" y="${topLabel + r*(cell+gap) + cell - 3}">${t}</text>`).join("");

  const W = leftLabel + WEEKS*(cell+gap);
  const H = topLabel + 7*(cell+gap);
  return `<svg class="chart heatmap" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMinYMid meet" style="min-width:${W*0.62}px" role="img" aria-label="Daily solving activity heatmap">${months}${wd}${rects}</svg>`;
}

/* Per-category breakdown bars */
function buildCategoryBars(){
  const totals = {}, solved = {};
  for(const p of PUZZLES){
    totals[p.category] = (totals[p.category] || 0) + 1;
    if(state.solved[p.url]) solved[p.category] = (solved[p.category] || 0) + 1;
  }
  const order = [
    ...CATEGORY_ORDER.filter(c => totals[c]),
    ...Object.keys(totals).filter(c => !CATEGORY_ORDER.includes(c))
  ];
  return order.map(c => {
    const t = totals[c], s = solved[c] || 0, pct = Math.round(s/t*100);
    return `<div class="cat-row ${s===t ? "done" : ""}" data-cat="${c}">
      <span class="cname" title="${c}">${c}</span>
      <span class="ctrack"><i style="width:${pct}%"></i></span>
      <span class="cnum">${s}/${t}</span>
    </div>`;
  }).join("");
}

function statCard(svgPath, key, value){
  return `<div class="stat">
    <div class="stat-top">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${svgPath}</svg>
      <span class="k">${key}</span>
    </div>
    <div class="v">${value}</div>
  </div>`;
}

function renderAnalytics(){
  const a = computeAnalytics();
  const pct = a.total ? Math.round(a.solvedTotal/a.total*100) : 0;

  // Hero
  $("#pPct").textContent    = pct;
  $("#pSolved").textContent = a.solvedTotal;
  $("#pTotal").textContent  = a.total;
  $("#pBar").style.width    = pct + "%";

  // Stat cards
  $("#statGrid").innerHTML = [
    statCard('<path d="M20 6 9 17l-5-5"/>', "Solved", `${a.solvedTotal}<small> / ${a.total}</small>`),
    statCard('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', "Completion", `${pct}<small>%</small>`),
    statCard('<path d="M12 3l2.5 5 5.5.8-4 3.9 1 5.5L12 21l-5-2.9 1-5.5-4-3.9L9.5 8z"/>', "Current streak", `${a.streak}<small> ${a.streak===1?"day":"days"}</small>`),
    statCard('<path d="M3 17l5-5 4 4 8-8"/><path d="M21 8v4h-4"/>', "Best day", `${a.bestDay}<small> solved</small>`),
    statCard('<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>', "Active days", `${a.daysActive}`),
    statCard('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>', "Notes written", `${a.notesCount}`)
  ].join("");

  // Charts
  $("#cumChart").innerHTML     = buildCumulativeSVG(a);
  $("#heatChart").innerHTML    = buildHeatmapSVG(a);
  $("#catBreakdown").innerHTML = buildCategoryBars();

  // Undated note
  $("#undatedNote").innerHTML = a.undated > 0
    ? `<div class="undated-note">+${a.undated} puzzle${a.undated===1?"":"s"} marked solved before date-tracking began — counted in totals, but not plotted on the timeline.</div>`
    : "";
}

/* =========================================================================
   ROUTER  (#profile ⇄ puzzles)
   ========================================================================= */
function route(){
  const onProfile = location.hash.replace(/^#/, "") === "profile";
  document.body.classList.toggle("view-profile", onProfile);
  document.body.classList.toggle("view-puzzles", !onProfile);
  $("#profile").hidden = !onProfile;
  $("#list").hidden    = onProfile;
  if(onProfile){ renderAnalytics(); }
  window.scrollTo(0, 0);
}

/* =========================================================================
   DAILY PUZZLES  — 3 random questions per day, no repeats until all done
   ========================================================================= */
const DAILY_KEY = "puzzleTracker.daily";

function shuffle(arr){
  const a = [...arr];
  for(let i = a.length-1; i > 0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getDailyPicks(){
  const today = todayStr();
  const allUrls = PUZZLES.map(p => p.url);
  let ds = null;
  try{ const raw = localStorage.getItem(DAILY_KEY); if(raw) ds = JSON.parse(raw); }catch(e){}

  // Return today's existing picks if still valid
  if(ds && ds.date === today && Array.isArray(ds.picks) && ds.picks.length === 3){
    const valid = ds.picks.filter(u => allUrls.includes(u));
    if(valid.length === 3) return valid;
  }

  // Build / continue the queue (filter out any stale URLs after puzzle list changes)
  let queue = (ds && Array.isArray(ds.queue)) ? ds.queue.filter(u => allUrls.includes(u)) : [];
  if(queue.length < 3){
    const inQueue = new Set(queue);
    queue.push(...shuffle(allUrls.filter(u => !inQueue.has(u))));
  }

  const picks = queue.splice(0, 3);
  try{ localStorage.setItem(DAILY_KEY, JSON.stringify({ date:today, picks, queue })); }catch(e){}
  return picks;
}

function renderDailySection(){
  const picks = getDailyPicks();
  const formatted = new Date().toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"});

  const wrap = el("div","daily-section");

  // Header
  const head = el("div","daily-head");
  const tw = el("div","daily-title-wrap");
  const calIcon = svg(
    ["M8 2v4M16 2v4","M3 8h18","M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"],
    {"class":"daily-cal-ico","stroke-width":"2"}
  );
  const tt = el("div","daily-title-text");
  const h = el("h2",null,"Today's Puzzles");
  const sub = el("p","daily-sub", formatted + "  ·  " + picks.length + " of " + PUZZLES.length);
  tt.appendChild(h); tt.appendChild(sub);
  tw.appendChild(calIcon); tw.appendChild(tt);
  head.appendChild(tw);
  head.appendChild(el("span","daily-refresh","Refreshes tomorrow"));
  wrap.appendChild(head);

  // Cards
  const cards = el("div","daily-cards");
  picks.forEach((url, i) => {
    const p = PUZZLES.find(x => x.url === url);
    if(!p) return;
    const card = el("div","daily-card");
    card.dataset.url = url;
    if(state.solved[url]) card.classList.add("solved");

    // Tick
    const tickLabel = el("label","tick");
    const tickInput = document.createElement("input");
    tickInput.type = "checkbox";
    tickInput.checked = !!state.solved[url];
    tickInput.disabled = !editMode;
    tickInput.setAttribute("aria-label", 'Mark "'+p.title+'" as solved');
    const tickBox = el("span","tick-box");
    tickBox.appendChild(svg("M20 6 9 17l-5-5"));
    tickLabel.appendChild(tickInput); tickLabel.appendChild(tickBox);
    tickLabel.addEventListener("click", () => { if(!editMode) showLockWarning(); });
    tickInput.addEventListener("change", () => toggleSolved(url, tickInput.checked));

    const num = el("span","daily-num", String(i+1));
    const link = el("a","daily-info");
    link.href = url; link.target = "_blank"; link.rel = "noopener";
    const title = el("div","daily-card-title", p.title);
    const tags = el("div","daily-card-tags");
    const dailyCatTag = el("span","tag cat",p.category);
    dailyCatTag.dataset.cat = p.category;
    tags.appendChild(dailyCatTag);
    for(const co of p.companies.slice(0,3)) tags.appendChild(el("span","tag co",co));
    link.appendChild(title); link.appendChild(tags);
    const extIco = svg(
      ["M14 4h6v6","M20 4l-9 9","M9 5H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4"],
      {"class":"daily-ext","stroke-width":"2"}
    );
    card.appendChild(tickLabel); card.appendChild(num); card.appendChild(link); card.appendChild(extIco);
    cards.appendChild(card);
  });
  wrap.appendChild(cards);
  return wrap;
}

/* =========================================================================
   CLOUD SYNC  — GitHub Gist as cross-browser storage
   ========================================================================= */
const CLOUD_KEY  = "puzzleTracker.cloud";
const GIST_FILE  = "puzzle-tracker-progress.json";
let cloudCfg     = null; // { token, gistId, lastSync }
let cloudPushTimer = null;

function loadCloudCfg(){
  try{ const r = localStorage.getItem(CLOUD_KEY); if(r) cloudCfg = JSON.parse(r); }catch(e){}
}
function saveCloudCfg(){
  try{
    if(cloudCfg) localStorage.setItem(CLOUD_KEY, JSON.stringify(cloudCfg));
    else         localStorage.removeItem(CLOUD_KEY);
  }catch(e){}
}

async function ghFetch(method, path, body){
  const res = await fetch("https://api.github.com" + path, {
    method,
    headers:{
      "Authorization": "token " + cloudCfg.token,
      "Accept": "application/vnd.github+json",
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : undefined
  });
  if(!res.ok) throw new Error("GitHub " + res.status + " " + res.statusText);
  return res.json();
}

/* Merge remote state into local (union solved, keep notes if local empty) */
function mergeRemote(remote){
  let changed = false;
  for(const url in (remote.solved||{})){
    if(remote.solved[url] && !state.solved[url]){
      state.solved[url] = true;
      if(remote.solvedAt?.[url] && !state.solvedAt[url]) state.solvedAt[url] = remote.solvedAt[url];
      changed = true;
    }
  }
  for(const url in (remote.notes||{})){
    if(remote.notes[url] && !state.notes[url]){
      state.notes[url] = remote.notes[url];
      changed = true;
    }
  }
  if(changed){
    for(const [u, rec] of rowByUrl){
      const on = !!state.solved[u];
      rec.input.checked = on;
      rec.li.classList.toggle("solved", on);
      if(state.notes[u]){
        rec.noteTextarea.value = state.notes[u];
        rec.noteChars.textContent = state.notes[u].length + " chars";
        rec.noteBtn.classList.add("has-note");
      }
    }
    // Also update daily cards solved state
    document.querySelectorAll(".daily-card").forEach(c => {
      const on = !!state.solved[c.dataset.url];
      c.classList.toggle("solved", on);
      const cb = c.querySelector("input[type='checkbox']");
      if(cb) cb.checked = on;
    });
    if(editMode) saveState();
    updateProgress(); applyFilter();
    if(document.body.classList.contains("view-profile")) renderAnalytics();
  }
}

async function cloudPushNow(){
  if(!cloudCfg?.gistId) return;
  const snap = { app:"puzzle-tracker", solved:state.solved, notes:state.notes, solvedAt:state.solvedAt };
  await ghFetch("PATCH", "/gists/" + cloudCfg.gistId, {
    files:{ [GIST_FILE]:{ content: JSON.stringify(snap, null, 2) } }
  });
  cloudCfg.lastSync = new Date().toISOString();
  saveCloudCfg();
  setCloudUI("ok");
}

async function cloudSync(){
  if(!cloudCfg?.gistId) return;
  setCloudUI("syncing");
  try{
    const gist = await ghFetch("GET", "/gists/" + cloudCfg.gistId);
    const raw = gist.files?.[GIST_FILE]?.content;
    if(raw) mergeRemote(JSON.parse(raw));
    await cloudPushNow();
    toast("Cloud synced");
  }catch(e){
    console.warn("Cloud sync error:", e);
    setCloudUI("error");
    toast("Cloud sync failed — check token or network");
  }
}

function schedulePush(){
  if(!cloudCfg?.gistId) return;
  clearTimeout(cloudPushTimer);
  cloudPushTimer = setTimeout(() =>
    cloudPushNow().catch(() => setCloudUI("error")), 2500);
}

/* Locate the sync Gist for the current token, creating it if absent.
   Assumes cloudCfg.token is set; populates cloudCfg.gistId. */
async function resolveGist(){
  const gists = await ghFetch("GET", "/gists");
  const existing = gists.find(g => g.files?.[GIST_FILE]);
  if(existing){
    cloudCfg.gistId = existing.id;
  } else {
    const snap = { app:"puzzle-tracker", solved:state.solved, notes:state.notes, solvedAt:state.solvedAt };
    const created = await ghFetch("POST", "/gists", {
      description:"Puzzle Tracker — synced progress",
      public: false,
      files:{ [GIST_FILE]:{ content: JSON.stringify(snap, null, 2) } }
    });
    cloudCfg.gistId = created.id;
  }
}

async function cloudConnect(){
  const input = document.getElementById("cloudTokenInput");
  const token = input ? input.value.trim() : "";
  if(!token){ toast("Paste your GitHub PAT first"); return; }

  setCloudUI("syncing");
  cloudCfg = { token, gistId: null, lastSync: null };

  try{
    // Validate token
    const res = await fetch("https://api.github.com/user", {
      headers:{ "Authorization":"token "+token, "Accept":"application/vnd.github+json" }
    });
    if(!res.ok) throw new Error("Invalid token (status " + res.status + ")");

    await resolveGist();
    saveCloudCfg();
    setCloudUI("ok");
    if(input) input.value = "";
    await cloudSync();

    // Offer one-time, cross-browser setup: encrypt the token with the PIN so
    // every other browser can connect just by unlocking — no token re-entry.
    await enableCrossBrowser(token);
  }catch(e){
    console.warn("Cloud connect error:", e);
    cloudCfg = null;
    setCloudUI("off");
    toast("Connect failed — " + e.message);
  }
}

/* Encrypt the token with the owner's PIN and stage it for the next snapshot. */
async function enableCrossBrowser(token){
  let pin = currentPin;
  if(!pin){
    const entry = prompt("Enter your edit PIN to enable PIN-unlock sync on all browsers\n(Cancel = keep sync on this browser only):");
    if(entry == null) return;
    pin = entry.trim();
    if((await sha256Hex(pin)) !== PIN_HASH){ toast("Wrong PIN — sync stays on this browser only"); return; }
    currentPin = pin;
  }
  try{
    pendingCloudBlob = await encryptToken(token, pin);
    toast("Sync ready — click “Save snapshot” & commit progress.js to enable PIN-unlock everywhere");
  }catch(e){ console.warn("Could not encrypt token:", e); }
}

/* On a fresh browser: if a PIN-encrypted token was published, decrypt it with
   the just-entered PIN and connect automatically. */
async function maybeAutoConnectCloud(pin){
  if(cloudCfg?.gistId) return;                          // already connected here
  const blob = window.PUBLISHED_PROGRESS && window.PUBLISHED_PROGRESS.cloud;
  if(!blob) return;                                     // nothing published yet
  setCloudUI("syncing");
  try{
    const token = await decryptToken(blob, pin);
    cloudCfg = { token, gistId:null, lastSync:null };
    await resolveGist();
    saveCloudCfg();
    setCloudUI("ok");
    await cloudSync();
    toast("Cloud sync connected via PIN");
  }catch(e){
    console.warn("PIN auto-connect failed:", e);
    cloudCfg = null;
    setCloudUI("off");
  }
}

function cloudDisconnect(){
  if(!confirm("Disconnect cloud sync?\n\nYour local progress is kept. The remote Gist is not deleted.")) return;
  clearTimeout(cloudPushTimer);
  cloudCfg = null;
  saveCloudCfg();
  setCloudUI("off");
  toast("Disconnected from cloud sync");
}

function setCloudUI(status){
  const badge     = document.getElementById("cloudBadge");
  const tokenRow  = document.getElementById("cloudTokenRow");
  const connRow   = document.getElementById("cloudConnectedRow");
  const lastSync  = document.getElementById("cloudLastSync");
  if(!badge) return;

  const connected = !!cloudCfg?.gistId;
  badge.className = "cloud-badge " + (connected
    ? (status === "error" ? "err" : status === "syncing" ? "sync" : "ok")
    : "off");
  badge.textContent = connected
    ? (status === "error" ? "Error" : status === "syncing" ? "Syncing…" : "Synced")
    : "Not connected";

  if(tokenRow)  tokenRow.hidden  = connected;
  if(connRow)   connRow.hidden   = !connected;
  if(lastSync){
    if(connected && cloudCfg.lastSync){
      const d = new Date(cloudCfg.lastSync);
      lastSync.textContent = "Last synced " + d.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"});
    } else {
      lastSync.textContent = "";
    }
  }
}

/* =========================================================================
   WIRING
   ========================================================================= */
loadState();
loadCloudCfg();
render();
listEl.insertBefore(renderDailySection(), listEl.firstChild);
applyEditMode();
updateProgress();
applyFilter();
route();

$("#lockBtn").addEventListener("click", toggleLock);
$("#snapshotBtn").addEventListener("click", saveSnapshot);
$("#profileChip").addEventListener("click", () => { location.hash = "profile"; });
$("#backBtn").addEventListener("click",    () => { location.hash = "puzzles"; });
window.addEventListener("hashchange", route);

$("#search").addEventListener("input", e => setQuery(e.target.value));
$("#searchClear").addEventListener("click", () => { const i=$("#search"); i.value=""; setQuery(""); i.focus(); });
$("#search").addEventListener("keydown", e => { if(e.key==="Escape" && e.target.value){ e.target.value=""; setQuery(""); } });

document.querySelectorAll(".segmented button").forEach(b=>{
  b.addEventListener("click", () => setFilter(b.dataset.filter));
});

$("#notesPdfBtn").addEventListener("click", exportNotesPDF);
$("#exportBtn").addEventListener("click",   exportProgress);
$("#importBtn").addEventListener("click",   () => $("#importFile").click());
$("#importFile").addEventListener("change", e => {
  if(e.target.files && e.target.files[0]) importProgress(e.target.files[0]);
  e.target.value = "";
});
$("#resetBtn").addEventListener("click", resetProgress);

// Compact sticky header on scroll
const headerEl  = $("header.app");
let scrollTick  = false;

/* Chrome restores file:// scroll positions AFTER the load event even when
   history.scrollRestoration = 'manual'. Guard: any scroll that fires within
   500 ms of load is assumed to be Chrome's restoration — reset it to 0 so
   the header title stays visible on every page load. */
let _loadGuard = true;
window.addEventListener("load", () => {
  setTimeout(() => { _loadGuard = false; }, 500);
});

window.addEventListener("scroll", () => {
  if (_loadGuard) { window.scrollTo(0, 0); return; }
  if(scrollTick) return;
  scrollTick = true;
  requestAnimationFrame(() => {
    headerEl.classList.toggle("scrolled", window.scrollY > 60);
    scrollTick = false;
  });
}, { passive:true });

// Cloud sync wiring
document.getElementById("cloudConnectBtn")?.addEventListener("click", cloudConnect);
document.getElementById("cloudSyncNowBtn")?.addEventListener("click", () => cloudSync());
document.getElementById("cloudDisconnectBtn")?.addEventListener("click", cloudDisconnect);
document.getElementById("cloudTokenInput")?.addEventListener("keydown", e => {
  if(e.key === "Enter") cloudConnect();
});
// Init cloud UI and auto-sync on load
setCloudUI("off");
if(cloudCfg?.gistId) setTimeout(() => cloudSync(), 800);

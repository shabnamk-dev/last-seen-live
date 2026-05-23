/* =========================
   GAME RESET
========================= */

if (
    window.location.pathname.includes("index.html") ||
    window.location.pathname.endsWith("/")
) {

    localStorage.removeItem("progress");
    localStorage.removeItem("solvedCards");
    localStorage.removeItem("gameCompleted");

}

/* =========================
   STORAGE
========================= */

let progress =
    parseInt(localStorage.getItem("progress")) || 0;

let solvedCards =
    JSON.parse(localStorage.getItem("solvedCards")) || [];

/* =========================
   LOCKED PAGE PROTECTION
========================= */

if(
    window.location.pathname.includes("locked.html")
) {

    if(solvedCards.length < 5) {

        window.location.href = "archives.html";

    }

}

/* =========================
   UPDATE UI
========================= */

function updateProgressBar() {

    const progressFill =
        document.getElementById("progressFill");

    const progressText =
        document.getElementById("progressText");

    if(progressFill) {

        progressFill.style.width = `${progress}%`;

    }

    if(progressText) {

        progressText.innerText =
        `INVESTIGATION UNDERSTANDING: ${progress}%`;

    }

    const finalTruthBtn = 
        document.getElementById("finalTruthBtn");
    
    if(finalTruthBtn){
        if(progress >=100){
            finalTruthBtn.style.display = "block";
        }

        else{
            finalTruthBtn.style.display="none";
        }
    }

}

updateProgressBar();

/* =========================
   SAVE GAME
========================= */

function saveGame() {

    localStorage.setItem(
        "progress",
        progress
    );

    localStorage.setItem(
        "solvedCards",
        JSON.stringify(solvedCards)
    );

}

/* =========================
   NAVIGATION
========================= */

function openPage(page) {

    window.location.href = page;

}

/* =========================
   START GAME
========================= */

const accessBtn =
    document.getElementById("accessBtn");

if(accessBtn) {

    accessBtn.addEventListener("click", () => {

        accessBtn.innerText = "ACCESSING...";

        setTimeout(() => {

            openPage("archives.html");

        }, 2000);

    });

}

/* =========================
   STREAM COMMENTS
========================= */

const streamComments = [

    [
        "ghostgirl22: why is he still online?",
        "K1NGVOID: bro just end the stream 😭",
        "angelbyte: i think he's waiting for someone",
        "sleeprot: he's literally just sitting there now",
        "VOIDSTATIC: everyone already left",
        "pixelghost: no... one person stayed",
        "UNKNOWN_USER: waiting for someone hurts"
    ],

    [
        "ghostgirl22: he keeps checking the chat",
        "K1NGVOID: why won't he leave?",
        "angelbyte: maybe he's waiting",
        "sleeprot: this stream should've ended already",
        "VOIDSTATIC: he said 'wait' before going silent",
        "pixelghost: he looks disappointed every time someone leaves",
        "UNKNOWN_USER: some people wait forever"
    ]

];

function loadRandomComments() {

    const chatMessages =
        document.getElementById("chatMessages");

    if(!chatMessages) return;

    const randomSet =
        streamComments[
            Math.floor(
                Math.random() * streamComments.length
            )
        ];

    chatMessages.innerHTML = "";

    randomSet.forEach(comment => {

        const p =
            document.createElement("p");

        if(comment.includes("UNKNOWN_USER")) {

            p.classList.add("red-chat");

        }

        const splitComment =
            comment.split(":");

        p.innerHTML = `
            <span>${splitComment[0]}:</span>
            ${splitComment[1]}
        `;

        chatMessages.appendChild(p);

    });

}

loadRandomComments();

/* =========================
   CHAT LOGS
========================= */

const chatLogSets = [

    [
        "ghostgirl22: how does jinxed remember everyone?",
        "K1NGVOID: they never forget usernames",
        "angelbyte: they remembered me after months 😭",
        "sleeprot: jinxed notices when people disappear",
        "VOIDSTATIC: they remember every regular viewer",
        "pixelghost: they asked where i was yesterday",
        "UNKNOWN_USER: some people are impossible to forget"
    ],

    [
        "ghostgirl22: they instantly noticed someone missing",
        "K1NGVOID: jinxed remembers literally everything",
        "angelbyte: these streams feel way too personal now",
        "sleeprot: they keep bringing up old viewers",
        "VOIDSTATIC: they hate forgetting people",
        "pixelghost: jinxed remembers who stays",
        "UNKNOWN_USER: remembering someone can become dangerous"
    ]

];

function loadChatLogs() {

    const chatLogBox =
        document.getElementById("chatLogBox");

    if(!chatLogBox) return;

    const randomLogs =
        chatLogSets[
            Math.floor(
                Math.random() * chatLogSets.length
            )
        ];

    chatLogBox.innerHTML = "";

    randomLogs.forEach(message => {

        const div =
            document.createElement("div");

        div.classList.add("chat-message");

        if(message.includes("UNKNOWN_USER")) {

            div.classList.add("strange");

        }

        const splitMessage =
            message.split(":");

        div.innerHTML = `
            <span class="user">
                ${splitMessage[0]}:
            </span>
            ${splitMessage[1]}
        `;

        chatLogBox.appendChild(div);

    });

}

loadChatLogs();

/* =========================
   STREAM PLAYER
========================= */

const playBtn =
    document.getElementById("playBtn");

if(playBtn) {

    playBtn.addEventListener("click", () => {

        const videoScreen =
            document.getElementById("videoScreen");

        playBtn.innerText = "PLAYING...";

        setTimeout(() => {

            videoScreen.innerHTML = `
                <p class="stream-text red-text">
                    CONNECTION LOST
                </p>
            `;
            playBtn.innerText = "ERROR"
            playBtn.style.backgroundColor = "red";

        }, 3000);

        setTimeout(() => {

            videoScreen.innerHTML = `
                <p class="stream-text">
                    Could Not retrieve the Stream Recording
                </p>
            `;

        }, 5000);

    });
}

/* =========================
   EMAILS
========================= */

function openEmail1() {

    const emailContent =
        document.getElementById("emailContent");

    emailContent.innerHTML = `

        <br>

        <p>TO: YOU</p>

        <br>

        <p>You watched every stream.</p>

        <p>You even stayed after they ended.</p>

        <p>I kept checking to see if you came back for the next one.</p>

        <br>

        <p>
            I don't know when I started expecting you to be there.
        </p>

        <br>

        <p class="red-text">
            Maybe that's the problem.
        </p>

    `;

}
function openEmail2() {

    const emailContent =
        document.getElementById("emailContent");

    emailContent.innerHTML = `

        <br>
        <p>TO: YOU</p>

        <p>Do you remember the last stream?</p>

        <p>
            I kept looking at the viewer list more than the game.
        </p>

        <p>
            Every time someone left,
            I noticed.
        </p>

        <p>
            But I knew you wouldn't.
        </p>

        <br>

        <p class="red-text">
            I think that's when I got too attached.
        </p>

    `;

}

/* =========================
   CLUE SYSTEM
========================= */

function checkClue(
    cardName,
    inputId,
    acceptedAnswers
) {

    const input =
        document.getElementById(inputId);

    const userAnswer =
        input.value
        .toLowerCase()
        .trim();

    if(solvedCards.includes(cardName)) {

        alert("Clue already solved.");
        return;

    }

    let correct = false;

    acceptedAnswers.forEach(answer => {

        if(userAnswer.includes(answer)) {

            correct = true;

        }

    });

    if(correct) {

        solvedCards.push(cardName);

        progress += 20;

        saveGame();

        updateProgressBar();

        alert("CLUE UNDERSTOOD");

        if(cardName === "streamClue"){
            window.location.href = "Chapters/chapter1.html"
        }

        else if(cardName === "chatClue"){
            window.location.href = "Chapters/chapter2.html"
        }

        else if(cardName === "draftClue"){
            window.location.href = "Chapters/chapter3.html"
        } 

        else if(cardName === "viewerClue"){
            window.location.href = "Chapters/chapter4.html"
        }

        else if(cardName === "emails"){
            window.location.href = "Chapters/chapter5.html"
        }
    }

    else {

        alert("Interpretation incomplete.");

    }
}

/* =========================
   PAGE FLOW
========================= */

const pages = [

    "finalstream.html",
    "chatlogs.html",
    "donotopen.html",
    "viewersLog.html",
    "emails.html"
];

/* =========================
   LOCKED ARCHIVE
========================= */

function openLockedFile() {

    if(solvedCards.length < 5) {

        alert(
            "ACCESS DENIED"
        );

        return;

    }

    openPage("locked.html");

}

/* =========================
   FINAL PASSWORD
========================= */

function checkFinalPassword() {

    const input =
        document.getElementById("passwordInput")
        .value
        .toLowerCase()
        .trim();

    const error =
        document.getElementById("errorMessage");

    const secretContent =
        document.getElementById("secretContent");
    
    const unlockBtn = 
        document.getElementById("unlockBtn");

    if(input === "jinxed") {

        unlockBtn.innerText = "SECRET UNLOCKED"
        secretContent.style.opacity = "1";
        secretContent.style.pointerEvents = "auto";

        error.innerText = "";

        localStorage.setItem(
            "gameCompleted",
            "true"
        );

    }

    else {

        error.innerText =
            "ACCESS DENIED";

    }

}
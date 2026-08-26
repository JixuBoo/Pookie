/* =====================================================================
   POOKIE'S BIRTHDAY SITE — SCRIPT
   =====================================================================
   You do NOT need to understand all of this file. Everything you are
   likely to want to change lives in the "CONFIG" object right below.

   To add more photos, change words/captions, or rename your song
   files — only edit inside CONFIG. Nothing else needs to change.
   ===================================================================== */

const CONFIG = {

  // Change this to the real date our relationship began.
  relationshipStart: {
    date: "2023-12-26", // YYYY-MM-DD
  },

  // ---------------------------------------------------------------
  // OPTIONAL LOCK SCREEN
  // Set enabled to false whenever you want to skip Screen 0.
  // ---------------------------------------------------------------
  lock: {
    enabled: true,
    passcode: "261223",
    prompt: "Enter our special date ♡",
    incorrectMessage: "Buddhu!! Did you forget our anniversary?",
  },

  // ---------------------------------------------------------------
  // SONGS
  // Put your 3 songs inside the "audio" folder using these exact
  // file names, OR change the names below to match your own files.
  // ---------------------------------------------------------------
  audio: {
    song1: "audio/song1.mp3", // plays on Screen 1 ("show me ♡")
    song2: "audio/song2.mp3", // plays during the photo memories
    song3: "audio/song3.mp3", // plays on the final "I love you" screen
    // Add a short sound file here (a few seconds, not a full song) to play once when the candles are blown out.
    chime: "audio/chime.mp3",
  },

  // ---------------------------------------------------------------
  // SCREEN 1 — Opening
  // ---------------------------------------------------------------
  screen1: {
    message: "Hey Baby! Happy Birthday, my love ♡ ⋆｡°✩. Some things are too big for words, so I made this instead — a small gift for a heart that means everything to me.",
    buttonText: "show meeeee ♡",
  },

  // ---------------------------------------------------------------
  // SCREEN 2 — Our Beginning
  // ---------------------------------------------------------------
  screen2: {
    message:
      "Our story began at school, dramatically, the way the best ones do. It never had to end there — and here we are, four years deep in something that still feels like the beginning, celebrating your 3rd birthday together.",
    buttonText: "HuiHui ♡",
  },

  // ---------------------------------------------------------------
  // SCREEN 3 — The Love we Have
  // ---------------------------------------------------------------
  screen3: {
    message: "I don't know if I say this enough, but you are the best person I have ever known. Hardworking, loving, sweet, responsible, endlessly mature — a man who has always shown up for me, loved me as fully as he knew how, and chased the moon just to hand me the stars. You taught me love. You taught me patience. You taught me how to be better simply by being who you are. I love you so much, Jahan ♡",
    buttonText: "I love you ♡",
  },

  // ---------------------------------------------------------------
  // SCREEN 4 — Before the Memories
  // ---------------------------------------------------------------
  screen4: {
    message: "I hope you love this chotu sa gift of mine. I poured everything I had into it — even a single smile from you would make it worth every second. Let each moment carry you back as you go. Think of it as a little pre-anniversary gift too. But before I celebrate you, let me show you why.",
    buttonText: "I'm excited, let's goo ♡",
  },

  // These are latitude/longitude coordinates. Search "my city latitude longitude" on Google to find your own.
  distance: {
    personA: { label: "Me", lat: 23.1818081, lng: 75.8017028 },
    personB: { label: "You", lat: 23.026255, lng: 75.893441 },
    introMessage: "However many kilometers apart, still this close.",
    unit: "km",
  },

  // ---------------------------------------------------------------
  // SCREEN 5 — Photo Memories
  // Add as many photos as you like! Just copy one of the lines
  // below (the part between the { and }) and change the image file
  // name and caption. The site will automatically handle any number
  // of photos — you don't need to change anything else.
  //
  // Put your photo files inside the "images" folder.
  // ---------------------------------------------------------------
  memories: [
    { image: "images/image1.jpg", caption: "The day we first saw each other — just a snap in time, but it still lives vivid and rent-free in my mind (I matched the clothes too, huihui).", polaroidNote: "the beginning" },
    { image: "images/image2.jpg", caption: "The computer lab coincidence. I could talk about it forever. Straight out of a rom-com — you, right beside me, while my heart refused to slow down.", polaroidNote: "a little coincidence" },
    { image: "images/image3.jpg", caption: "The chemistry lab incident. I don't think I've ever been more stunned by fate's sense of mischief. I was so, so nervous.", polaroidNote: "another coincidence?" },
    { image: "images/image4.jpg", caption: "The day we played badminton for the first and last time. Remember how you just stood there, admiring me for a whole minute? I was blushing for a week straight ♡", polaroidNote: "a sweet match" },
    { image: "images/image5.jpg", caption: "Our last day at school. I remember you adoring me uss din bhi, under the sunlight, checking if I was okay. I watched you drive away in your van — the last time, though we didn't know it yet.", polaroidNote: "our last day at school" },
    { image: "images/image6.jpg", caption: "We were so worried about what came next. But destiny had other plans — more moments, more years, all quietly waiting to make our love grow stronger.", polaroidNote: "Mr. & Mrs. Perfect" },
    { image: "images/image7.jpg", caption: "Long meets, late-night calls, sweet texts in between. Somehow, we've lived more together than either of us ever imagined.", polaroidNote: "wnh-keau-xmy" },
    { image: "images/image8.jpg", caption: "Dreams we thought would only ever stay dreams — checked off, one by one. Kisses. Hugs. Gifts. Love ♡", polaroidNote: "my sunshine, your moon" },
    { image: "images/image9.jpg", caption: "But this isn't about us. Today is about YOU. Every memory here exists to show how much you've shaped these years of mine — how much love you've poured into making me who I am today. Your girl. Your lady. Your woman.", polaroidNote: "the moon looks lovely tonight, isn't it?" },
    { image: "images/image10.jpg", caption: "Destiny kept giving us more, just when we thought it couldn't get any better. I want us to keep believing in it — in us. My love for you could never fit inside a simple website, but I hope it's evident enough how special this day is for me. The day my man came into this world.", polaroidNote: "I love you!" },
    // { image: "images/image11.jpg", caption: "add more like this" },
  ],

 screen6: {
    message: "I'm always here, whenever you need me — even if we're mid-fight (khikhi). May this year, and every one after it, bring you all the success, love, joy, and comfort it possibly can. May you always be the happiest, healthiest, most loved person in this world. I love you sooo much, Jahan ♡",
    buttonText: "♡",
  },

  // ---------------------------------------------------------------
  // SCREEN 7 — Birthday Cake
  // ---------------------------------------------------------------
  cake: {
    message: "Since I can't be there to celebrate with you, I built you this cake instead — the best I could do from this distance. Blow out the candles and make a wish, my love ♡",
    hint: "tap the cake ♡",
    celebrationMessage: "Happy Birthday, my love! Every candle was lit for you ♡",
    continueButtonText: "Next? ♡",
  },

  // ---------------------------------------------------------------
  // SCREEN 8 — Final Ending
  // ---------------------------------------------------------------
  ending: {
    message: "I love you.",
    replayText: "relive this ♡",
  },

  // ---------------------------------------------------------------
  // HIDDEN EASTER EGG
  // Click the configured word in any revealed message to unlock it.
  // Set image to "" if you want a message-only surprise.
  // ---------------------------------------------------------------
  easterEgg: {
    targetWord: "moon",
    message: "You found the little secret I tucked away for you. I love you to the moon and back ♡",
    image: "",
  },
};


/* =====================================================================
   Below this point is the code that makes everything run.
   You shouldn't need to edit it, but it's commented in case you're
   curious or want to make small tweaks.
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const easterEggOverlay = document.getElementById("easter-egg-overlay");
  const easterEggMessage = document.getElementById("easter-egg-message");
  const easterEggImage = document.getElementById("easter-egg-image");
  const easterEggClose = document.getElementById("easter-egg-close");
  let easterEggFound = false;

  function closeEasterEgg() {
    easterEggOverlay.classList.remove("is-visible");
    easterEggOverlay.setAttribute("aria-hidden", "true");
  }

  function unlockEasterEgg() {
    if (easterEggFound) return;
    easterEggFound = true;
    easterEggMessage.textContent = CONFIG.easterEgg.message;
    if (CONFIG.easterEgg.image) {
      easterEggImage.src = CONFIG.easterEgg.image;
      easterEggImage.alt = "A little extra memory for you";
      easterEggImage.hidden = false;
    } else {
      easterEggImage.hidden = true;
    }
    easterEggOverlay.classList.add("is-visible");
    easterEggOverlay.setAttribute("aria-hidden", "false");
  }

  easterEggClose.addEventListener("click", closeEasterEgg);
  easterEggOverlay.addEventListener("click", (event) => {
    if (event.target === easterEggOverlay) closeEasterEgg();
  });
  document.addEventListener("click", (event) => {
    const word = event.target.closest(".reveal-text .word");
    if (!word) return;
    const clickedWord = word.textContent.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
    const targetWord = String(CONFIG.easterEgg.targetWord).trim().toLowerCase().replace(/[^a-z0-9]/g, "");
    if (clickedWord === targetWord) unlockEasterEgg();
  });

  const lockForm = document.getElementById("lock-form");
  const lockPrompt = document.getElementById("lock-prompt");
  const lockInput = document.getElementById("lock-passcode");
  const lockMessage = document.getElementById("lock-message");

  /* --------------------------------------------------------------
     TEXT REVEAL HELPER
     Splits a sentence into words, fades each one in with a small
     delay after the previous, and calls onDone() once finished.
  ----------------------------------------------------------------- */
  function revealText(el, text, onDone) {
    el.innerHTML = "";
    const words = text.split(" ");

    // Spread the total reveal across a comfortable amount of time,
    // but don't let very long sentences take forever.
    const perWordDelay = Math.min(140, Math.max(55, 1800 / words.length));

    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.className = "word";
      span.textContent = word + (i < words.length - 1 ? "\u00A0" : ""); // non-breaking space
      span.style.transitionDelay = `${i * perWordDelay}ms`;
      el.appendChild(span);
    });

    // Trigger the fade-in on the next frame so the transition applies.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.querySelectorAll(".word").forEach((w) => w.classList.add("is-visible"));
      });
    });

    const totalTime = words.length * perWordDelay + 900;
    if (onDone) setTimeout(onDone, totalTime);
  }

  /* --------------------------------------------------------------
     SCREEN NAVIGATION
     Fades the current screen out and the next screen in.
  ----------------------------------------------------------------- */
  function goToScreen(id, options = {}) {
    const current = document.querySelector(".screen.is-active");
    const next = document.getElementById(id);
    if (!next) return;

    if (options.slow) next.classList.add("slow-fade");
    else next.classList.remove("slow-fade");

    if (current && current !== next) {
      current.classList.remove("is-active");
    }
    next.classList.add("is-active");
    updateScreenDots(id);
  }

  /* --------------------------------------------------------------
     AUDIO HELPERS
     fadeAudio() smoothly raises or lowers volume instead of an
     abrupt jump, so songs never cut in/out harshly.
  ----------------------------------------------------------------- */
  const audioEls = {
    song1: document.getElementById("audio-song1"),
    song2: document.getElementById("audio-song2"),
    song3: document.getElementById("audio-song3"),
    chime: document.getElementById("audio-chime"),
  };
  const muteToggle = document.getElementById("mute-toggle");
  const audioTargetVolumes = new Map();
  const muteFadeTimers = new Map();
  const muteFadeDuration = 350;
  let isMuted = false;
  let muteTransitionActive = false;

  function setAudioVolume(audioEl, volume) {
    audioEl.muted = isMuted && !muteTransitionActive;
    audioEl.volume = isMuted && !muteTransitionActive ? 0 : volume;
  }

  function fadeMuteState() {
    muteTransitionActive = true;
    Object.values(audioEls).forEach((audioEl) => {
      if (!audioEl) return;
      clearInterval(muteFadeTimers.get(audioEl));

      const startVolume = audioEl.volume;
      const targetVolume = isMuted ? 0 : audioTargetVolumes.get(audioEl) ?? 0.7;
      const startTime = performance.now();
      audioEl.muted = false;

      const timer = setInterval(() => {
        const progress = Math.min(1, (performance.now() - startTime) / muteFadeDuration);
        audioEl.volume = startVolume + (targetVolume - startVolume) * progress;

        if (progress >= 1) {
          clearInterval(timer);
          muteFadeTimers.delete(audioEl);
          if (isMuted) audioEl.muted = true;
        }
      }, 16);
      muteFadeTimers.set(audioEl, timer);
    });

    setTimeout(() => {
      muteTransitionActive = false;
      Object.values(audioEls).forEach((audioEl) => {
        if (!audioEl) return;
        setAudioVolume(audioEl, audioTargetVolumes.get(audioEl) ?? 0.7);
      });
    }, muteFadeDuration + 20);
  }

  function updateMuteToggle() {
    muteToggle.classList.toggle("is-muted", isMuted);
    muteToggle.textContent = isMuted ? "♡" : "♥";
    muteToggle.setAttribute("aria-label", isMuted ? "Unmute music" : "Mute music");
    muteToggle.setAttribute("aria-pressed", String(isMuted));
  }

  muteToggle.addEventListener("click", () => {
    isMuted = !isMuted;
    updateMuteToggle();
    fadeMuteState();
  });
  updateMuteToggle();

  Object.entries(audioEls).forEach(([song, audioEl]) => {
    if (!audioEl) return;
    audioEl.setAttribute("src", CONFIG.audio[song]);
    audioEl.load();
  });

  const screenOrder = [
    "screen-opening", "screen-beginning", "screen-before-memories", "screen-distance", "screen-gift",
    "screen-memories", "screen-always-here", "screen-cake", "screen-ending",
  ];
  const screenDots = document.getElementById("screen-dots");

  screenOrder.forEach((screenId, index) => {
    const dot = document.createElement("button");
    dot.className = "screen-dot";
    dot.type = "button";
    dot.dataset.screen = screenId;
    dot.setAttribute("aria-label", `Go to screen ${index + 1}`);
    dot.addEventListener("click", () => jumpToScreen(screenId));
    screenDots.appendChild(dot);
  });

  function updateScreenDots(activeId) {
    screenDots.querySelectorAll(".screen-dot").forEach((dot) => {
      const isActive = dot.dataset.screen === activeId;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", isActive ? "step" : "false");
    });
  }

  updateScreenDots("screen-opening");

  function unlockScreen() {
    lockMessage.textContent = "";
    lockMessage.classList.remove("is-visible");
    lockInput.value = "";
    goToScreen("screen-opening");
  }

  lockPrompt.textContent = CONFIG.lock.prompt;
  lockForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const enteredPasscode = lockInput.value.trim().toLowerCase();
    const configuredPasscode = String(CONFIG.lock.passcode).trim().toLowerCase();

    if (enteredPasscode === configuredPasscode) {
      lockInput.disabled = true;
      unlockScreen();
      return;
    }

    lockMessage.textContent = CONFIG.lock.incorrectMessage;
    lockMessage.classList.add("is-visible");
    lockInput.select();
  });

  if (!CONFIG.lock.enabled) {
    unlockScreen();
  } else {
    lockInput.focus();
  }

  function setAudioForScreen(screenId) {
    const audioKey = {
      "screen-beginning": "song1",
      "screen-before-memories": "song1",
      "screen-distance": "song1",
      "screen-gift": "song1",
      "screen-memories": "song2",
      "screen-ending": "song3",
    }[screenId];

    Object.values(audioEls).forEach((audioEl) => {
      if (!audioEl) return;
      audioEl.pause();
      audioEl.currentTime = 0;
      audioEl.volume = 0;
    });

    if (audioKey) {
      const destinationAudio = audioEls[audioKey];
      playAudio(destinationAudio, 0.7);
    }
  }

  function jumpToScreen(id) {
    clearTimeout(memorySwapTimeout);
    clearTimeout(cakeCelebrationTimeout);
    clearTimeout(endingReplayTimeout);
    setAudioForScreen(id);
    stopMemorySpotlight();

    if (id === "screen-opening") {
      screen2Started = false;
      screen3Started = false;
      screen4Started = false;
      distanceStarted = false;
      screen6Started = false;
      screen5Started = false;
      endingStarted = false;
      currentMemoryIndex = 0;
      cakeClicked = false;
      cakeEl.classList.remove("is-blown");
      btnCake.classList.remove("is-blown");
      textCelebration.textContent = "";
      textCelebration.classList.remove("is-visible");
      btnCakeContinue.classList.remove("is-visible");
      confettiLayer.replaceChildren();
      showTextInstant(textOpening, CONFIG.screen1.message);
      btnOpening.classList.add("is-visible");
    } else if (id === "screen-beginning") {
      startScreen2(true);
    } else if (id === "screen-before-memories") {
      startScreen3(true);
    } else if (id === "screen-distance") {
      startDistance(true);
    } else if (id === "screen-gift") {
      startScreen4(true);
    } else if (id === "screen-memories") {
      currentMemoryIndex = 0;
      startMemorySpotlight();
      showMemory(0, { instant: true });
    } else if (id === "screen-always-here") {
      startScreen6(true);
    } else if (id === "screen-cake") {
      cakeClicked = false;
      cakeEl.classList.remove("is-blown");
      btnCake.classList.remove("is-blown");
      textCelebration.textContent = "";
      textCelebration.classList.remove("is-visible");
      btnCakeContinue.classList.remove("is-visible");
      startScreen5(true);
    } else if (id === "screen-ending") {
      endingStarted = false;
      startEnding(true);
    }

    goToScreen(id);
  }

  function showTextInstant(el, text) {
    el.textContent = text;
    el.classList.add("is-visible");
  }

  function fadeAudio(audioEl, targetVolume, durationMs = 900, thenStop = false) {
    if (!audioEl) return Promise.resolve();
    audioTargetVolumes.set(audioEl, targetVolume);
    const startVolume = audioEl.volume;
    const steps = 30;
    const stepTime = durationMs / steps;
    let step = 0;

    return new Promise((resolve) => {
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setAudioVolume(audioEl, startVolume + (targetVolume - startVolume) * progress);
        if (step >= steps) {
          clearInterval(timer);
          setAudioVolume(audioEl, targetVolume);
          if (thenStop) {
            audioEl.pause();
            audioEl.currentTime = 0;
          }
          resolve();
        }
      }, stepTime);
    });
  }

  function playAudio(audioEl, volume = 0.7) {
    if (!audioEl) return;
    audioTargetVolumes.set(audioEl, volume);
    setAudioVolume(audioEl, 0);
    // .play() can be rejected by the browser if the file is missing
    // or not yet added — we quietly ignore that so the story still
    // continues even before you've added your songs.
    const playPromise = audioEl.play();
    
    if (playPromise !== undefined) {
      playPromise
        .catch((error) => {
          // Autoplay policy violation or other error
          // Still fade in case it somehow starts later
          if (error.name !== 'NotAllowedError') {
            console.error("Audio playback error:", error);
          }
        });
    }
    
    fadeAudio(audioEl, volume, 1200);
  }

  function stopAudio(audioEl) {
    return fadeAudio(audioEl, 0, 900, true);
  }

  /* ================================================================
     SCREEN 1 — Opening
  ================================================================= */
  const textOpening = document.getElementById("text-opening");
  const btnOpening = document.getElementById("btn-opening");

  btnOpening.textContent = CONFIG.screen1.buttonText;

  revealText(textOpening, CONFIG.screen1.message, () => {
    btnOpening.classList.add("is-visible");
  });

  btnOpening.addEventListener("click", () => {
    playAudio(audioEls.song1, 0.7);
    goToScreen("screen-beginning");
    startScreen2();
  });

  /* ================================================================
     SCREEN 2 — Our Beginning
  ================================================================= */
  const textBeginning = document.getElementById("text-beginning");
  const relationshipCounter = document.getElementById("relationship-counter");
  const btnBeginning = document.getElementById("btn-beginning");
  let screen2Started = false;

  btnBeginning.textContent = CONFIG.screen2.buttonText;

  function updateRelationshipCounter() {
    const [startYear, startMonth, startDay] = CONFIG.relationshipStart.date.split("-").map(Number);
    const today = new Date();
    const todayDate = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
    let years = today.getFullYear() - startYear;
    const anniversary = new Date(Date.UTC(today.getFullYear(), startMonth - 1, startDay));

    if (todayDate < anniversary) years--;

    const lastAnniversary = new Date(Date.UTC(today.getFullYear() - (todayDate < anniversary ? 1 : 0), startMonth - 1, startDay));
    const days = Math.floor((todayDate - lastAnniversary) / 86400000);
    relationshipCounter.textContent = `${years} years, ${days} days, and counting`;
  }

  function startScreen2(instant = false) {
    if (instant) {
      showTextInstant(textBeginning, CONFIG.screen2.message);
      updateRelationshipCounter();
      relationshipCounter.classList.add("is-visible");
      btnBeginning.classList.add("is-visible");
      screen2Started = true;
      return;
    }
    if (screen2Started) return;
    screen2Started = true;
    relationshipCounter.classList.remove("is-visible");
    revealText(textBeginning, CONFIG.screen2.message, () => {
      updateRelationshipCounter();
      relationshipCounter.classList.add("is-visible");
      btnBeginning.classList.add("is-visible");
    });
  }

  btnBeginning.addEventListener("click", () => {
    goToScreen("screen-before-memories");
    startScreen3();
  });

  /* ================================================================
     SCREEN 3 — Before the Memories
  ================================================================= */
  const textBeforeMemories = document.getElementById("text-before-memories");
  const btnBeforeMemories = document.getElementById("btn-before-memories");
  let screen3Started = false;

  btnBeforeMemories.textContent = CONFIG.screen3.buttonText;

  function startScreen3(instant = false) {
    if (instant) {
      showTextInstant(textBeforeMemories, CONFIG.screen3.message);
      btnBeforeMemories.classList.add("is-visible");
      screen3Started = true;
      return;
    }
    if (screen3Started) return;
    screen3Started = true;
    revealText(textBeforeMemories, CONFIG.screen3.message, () => {
      btnBeforeMemories.classList.add("is-visible");
    });
  }

  btnBeforeMemories.addEventListener("click", () => {
    goToScreen("screen-distance");
    startDistance();
  });

  /* ================================================================
     SCREEN 4 — The Distance Between Us
  ================================================================= */
  const textDistance = document.getElementById("text-distance");
  const distanceMapEl = document.getElementById("distance-map");
  const distanceLine = document.getElementById("distance-line");
  const btnDistance = document.getElementById("btn-distance");
  let distanceStarted = false;
  let distanceMap = null;
  let distanceMarkers = [];
  let distancePath = null;

  function haversineDistance(pointA, pointB) {
    const earthRadiusKm = 6371;
    const toRadians = (degrees) => degrees * Math.PI / 180;
    const latitudeDelta = toRadians(pointB.lat - pointA.lat);
    const longitudeDelta = toRadians(pointB.lng - pointA.lng);
    const a = Math.sin(latitudeDelta / 2) ** 2
      + Math.cos(toRadians(pointA.lat)) * Math.cos(toRadians(pointB.lat))
      * Math.sin(longitudeDelta / 2) ** 2;
    return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function formatDistance(distance, unit) {
    const convertedDistance = unit === "mi" ? distance * 0.621371 : distance;
    return `${Math.round(convertedDistance).toLocaleString("en-US")} ${unit}`;
  }

  // Count the displayed distance up from zero after the route has finished drawing.
  function countUpDistance(distance, unit, onDone) {
    const distanceNumber = distanceLine.querySelector(".distance-number");
    const duration = 1300;
    const startTime = performance.now();

    function updateNumber(timestamp) {
      const progress = Math.min(1, (timestamp - startTime) / duration);
      distanceNumber.textContent = formatDistance(distance * progress, unit).split(" ")[0];
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else if (onDone) {
        onDone();
      }
    }

    requestAnimationFrame(updateNumber);
  }

  // Draw the SVG route after Leaflet has finished positioning both map points.
  function animateDistancePath(distance) {
    if (!distancePath) {
      countUpDistance(distance, CONFIG.distance.unit);
      return;
    }

    const pathElement = distancePath.getElement();
    if (!pathElement || typeof pathElement.getTotalLength !== "function") {
      countUpDistance(distance, CONFIG.distance.unit);
      return;
    }

    const pathLength = pathElement.getTotalLength();
    pathElement.style.strokeDasharray = `${pathLength} ${pathLength}`;
    pathElement.style.strokeDashoffset = pathLength;
    pathElement.style.transition = "none";

    // Update every frame so Leaflet cannot interrupt the draw by resetting SVG styles.
    const drawDuration = 1400;
    const drawStartedAt = performance.now();
    function drawFrame(timestamp) {
      const progress = Math.min(1, (timestamp - drawStartedAt) / drawDuration);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      pathElement.style.strokeDashoffset = pathLength * (1 - easedProgress);
      if (progress < 1) {
        requestAnimationFrame(drawFrame);
      } else {
        pathElement.style.strokeDashoffset = "0";
        pathElement.style.strokeDasharray = "5 9";
        countUpDistance(distance, CONFIG.distance.unit);
      }
    }

    requestAnimationFrame(drawFrame);
  }

  function initializeDistanceMap() {
    if (distanceMap || !window.L) return;

    const { personA, personB } = CONFIG.distance;
    distanceMap = L.map(distanceMapEl, { zoomControl: true, scrollWheelZoom: false });
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19,
    }).addTo(distanceMap);

    const markerIcon = (className) => L.divIcon({
      className: `distance-marker ${className}`,
      html: "<span></span>",
      iconSize: [18, 18],
      iconAnchor: [9, 9],
    });
    // Add both markers hidden so they can enter one at a time after fitting the map.
    const markerA = L.marker([personA.lat, personA.lng], { icon: markerIcon("distance-marker-a") })
      .addTo(distanceMap).bindTooltip(personA.label);
    const markerB = L.marker([personB.lat, personB.lng], { icon: markerIcon("distance-marker-b") })
      .addTo(distanceMap).bindTooltip(personB.label);
    distanceMarkers = [markerA, markerB];
    distanceMarkers.forEach((marker) => marker.getElement()?.classList.remove("is-visible"));

    // Keep the route hidden until its SVG path can be measured for the draw effect.
    distancePath = L.polyline([[personA.lat, personA.lng], [personB.lat, personB.lng]], {
      color: "#e8adb6",
      dashArray: "5 9",
      opacity: 0.7,
      weight: 2,
    }).addTo(distanceMap);
    distanceMap.fitBounds([[personA.lat, personA.lng], [personB.lat, personB.lng]], { padding: [45, 45] });
  }

  function startDistance(instant = false) {
    if (distanceStarted) {
      if (distanceMap) distanceMap.invalidateSize();
      return;
    }
    distanceStarted = true;
    const distance = haversineDistance(CONFIG.distance.personA, CONFIG.distance.personB);
    distanceLine.innerHTML = `<span class="distance-number">0</span> <span class="distance-unit">${CONFIG.distance.unit}</span> <span>apart — but never far from my heart</span>`;
    initializeDistanceMap();
    if (distanceMap) {
      requestAnimationFrame(() => {
        distanceMap.invalidateSize();
        distanceMarkers[0]?.getElement()?.classList.add("is-visible");
        setTimeout(() => distanceMarkers[1]?.getElement()?.classList.add("is-visible"), 350);
        requestAnimationFrame(() => animateDistancePath(distance));
      });
    }

    if (instant) {
      showTextInstant(textDistance, CONFIG.distance.introMessage);
      btnDistance.classList.add("is-visible");
      return;
    }
    revealText(textDistance, CONFIG.distance.introMessage, () => {
      btnDistance.classList.add("is-visible");
    });
  }

  btnDistance.addEventListener("click", () => {
    goToScreen("screen-gift");
    startScreen4();
  });

  /* ================================================================
     SCREEN 4 — Before the Memories
  ================================================================= */
  const textGift = document.getElementById("text-gift");
  const btnGift = document.getElementById("btn-gift");
  let screen4Started = false;

  btnGift.textContent = CONFIG.screen4.buttonText;

  function startScreen4(instant = false) {
    if (instant) {
      showTextInstant(textGift, CONFIG.screen4.message);
      btnGift.classList.add("is-visible");
      screen4Started = true;
      return;
    }
    if (screen4Started) return;
    screen4Started = true;
    revealText(textGift, CONFIG.screen4.message, () => {
      btnGift.classList.add("is-visible");
    });
  }

  btnGift.addEventListener("click", () => {
    stopAudio(audioEls.song1);
    goToScreen("screen-memories");
    playAudio(audioEls.song2, 0.7);
    startMemorySpotlight();
    showMemory(0);
  });

  /* ================================================================
    SCREEN 5 — Photo Memories
  ================================================================= */
  const memoryPhotoWrap = document.querySelector(".memory-photo-wrap");
  const memoryPhoto = document.getElementById("memory-photo");
  const memoryPhotoFallback = document.getElementById("memory-photo-fallback");
  const memoryPolaroidNote = document.getElementById("memory-polaroid-note");
  const memoryCaption = document.getElementById("memory-caption");
  const memoryCount = document.getElementById("memory-count");
  const btnNextMemory = document.getElementById("btn-next-memory");
  const memoryScreen = document.getElementById("screen-memories");
  const memorySpotlight = document.getElementById("memory-spotlight");

  let currentMemoryIndex = 0;

  // Spotlight tuning: lower this value for a slower, floatier cursor trail.
  const spotlightFollowEase = 0.045;
  const spotlightIdlePeriodMs = 18000;
  const spotlightReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let spotlightFrame = null;
  let spotlightStartedAt = 0;
  let spotlightTouchActive = false;
  let spotlightTarget = { x: 0.5, y: 0.5 };
  let spotlightPosition = { x: 0.5, y: 0.5 };

  function setSpotlightTarget(clientX, clientY) {
    const bounds = memoryScreen.getBoundingClientRect();
    spotlightTarget = {
      x: Math.max(0, Math.min(1, (clientX - bounds.left) / bounds.width)),
      y: Math.max(0, Math.min(1, (clientY - bounds.top) / bounds.height)),
    };
  }

  function animateMemorySpotlight(timestamp) {
    spotlightFrame = null;
    if (!memoryScreen.classList.contains("is-active")) return;

    if (!spotlightTouchActive && window.matchMedia("(pointer: coarse)").matches) {
      const idleTime = timestamp - spotlightStartedAt;
      spotlightTarget = {
        x: 0.5 + Math.sin(idleTime / spotlightIdlePeriodMs * Math.PI * 2) * 0.25,
        y: 0.5 + Math.sin(idleTime / spotlightIdlePeriodMs * Math.PI * 2 + Math.PI / 2) * 0.18,
      };
    }

    spotlightPosition.x += (spotlightTarget.x - spotlightPosition.x) * spotlightFollowEase;
    spotlightPosition.y += (spotlightTarget.y - spotlightPosition.y) * spotlightFollowEase;
    memorySpotlight.style.setProperty("--spotlight-x", `${spotlightPosition.x * 100}%`);
    memorySpotlight.style.setProperty("--spotlight-y", `${spotlightPosition.y * 100}%`);
    spotlightFrame = requestAnimationFrame(animateMemorySpotlight);
  }

  function startMemorySpotlight() {
    if (spotlightReducedMotion || spotlightFrame) return;
    spotlightStartedAt = performance.now();
    spotlightFrame = requestAnimationFrame(animateMemorySpotlight);
  }

  function stopMemorySpotlight() {
    if (!spotlightFrame) return;
    cancelAnimationFrame(spotlightFrame);
    spotlightFrame = null;
  }

  if (!spotlightReducedMotion) {
    memoryScreen.addEventListener("pointermove", (event) => {
      spotlightTouchActive = event.pointerType === "touch";
      setSpotlightTarget(event.clientX, event.clientY);
    }, { passive: true });
    memoryScreen.addEventListener("pointerup", (event) => {
      if (event.pointerType === "touch") spotlightTouchActive = false;
    }, { passive: true });
    memoryScreen.addEventListener("pointercancel", () => {
      spotlightTouchActive = false;
    }, { passive: true });
    memoryScreen.addEventListener("pointerleave", (event) => {
      if (event.pointerType !== "touch") spotlightTarget = { x: 0.5, y: 0.5 };
    }, { passive: true });
  }

  // Photo tilt tuning: keep this effect gentle and let CSS ease it out.
  const maxPhotoTilt = 6;
  const mobileTiltIdleMs = 900;
  const tiltReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let tiltFrame = null;
  let tiltTarget = { x: 0, y: 0 };
  let mobileTiltTimer = null;

  function applyPhotoTilt() {
    tiltFrame = null;
    memoryPhoto.style.setProperty("--tilt-x", `${tiltTarget.x}deg`);
    memoryPhoto.style.setProperty("--tilt-y", `${tiltTarget.y}deg`);
    memoryPhoto.style.setProperty(
      "--tilt-shadow",
      `${-tiltTarget.y * 1.5}px ${10 + tiltTarget.x * 1.5}px 24px rgba(0, 0, 0, 0.32)`
    );
  }

  function schedulePhotoTilt(x, y, resetAfterIdle = false) {
    if (tiltReducedMotion) return;
    tiltTarget = { x, y };
    if (!tiltFrame) tiltFrame = requestAnimationFrame(applyPhotoTilt);

    if (resetAfterIdle) {
      clearTimeout(mobileTiltTimer);
      mobileTiltTimer = setTimeout(resetPhotoTilt, mobileTiltIdleMs);
    }
  }

  function resetPhotoTilt() {
    clearTimeout(mobileTiltTimer);
    if (tiltReducedMotion) return;
    tiltTarget = { x: 0, y: 0 };
    if (!tiltFrame) tiltFrame = requestAnimationFrame(applyPhotoTilt);
  }

  if (!tiltReducedMotion) {
    function handleDesktopTilt(event) {
      const bounds = memoryPhotoWrap.getBoundingClientRect();
      const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
      const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
      schedulePhotoTilt(-vertical * maxPhotoTilt, horizontal * maxPhotoTilt);
    }

    // mousemove covers desktop browsers that do not expose Pointer Events.
    memoryPhotoWrap.addEventListener("mousemove", handleDesktopTilt);
    memoryPhotoWrap.addEventListener("mouseleave", resetPhotoTilt);

    // Browsers that already allow orientation events need no permission prompt.
    window.addEventListener("deviceorientation", (event) => {
      if (event.gamma === null || event.beta === null) return;
      const x = Math.max(-maxPhotoTilt, Math.min(maxPhotoTilt, event.beta / 10));
      const y = Math.max(-maxPhotoTilt, Math.min(maxPhotoTilt, event.gamma / 5));
      schedulePhotoTilt(x, y, true);
    }, { passive: true });
  }

  let memorySwapTimeout;
  const memorySwapDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? 200
    : 1600;

  function preloadNextMemory(index) {
    const nextMemory = CONFIG.memories[index + 1];
    if (!nextMemory) return;

    const nextPhoto = new Image();
    nextPhoto.src = nextMemory.image;
  }

  function showMemory(index, options = {}) {
    const memory = CONFIG.memories[index];
    if (!memory) return;

    if (options.instant) memoryPhotoWrap.classList.add("is-jump");

    // Start the outgoing dissolve: photo/caption shrink to 0.96x and blur by 4px.
    resetPhotoTilt();
    clearTimeout(memorySwapTimeout);
    memoryPhotoWrap.classList.add("is-exiting");
    memoryCaption.classList.add("is-exiting");
    memoryPhotoWrap.classList.remove("is-visible");
    memoryCaption.classList.remove("is-visible");
    memoryPhotoWrap.classList.remove("show-fallback");

    // Keep each polaroid between -3 and 3 degrees, alternating the
    // direction so consecutive photos do not all lean the same way.
    const rotationMagnitude = 1 + Math.random() * 2;
    const rotation = (index % 2 === 0 ? 1 : -1) * rotationMagnitude;
    const rotationRadians = rotation * Math.PI / 180;
    memoryPhotoWrap.style.setProperty("--polaroid-rotation", `${rotation}deg`);
    memoryPhotoWrap.style.setProperty(
      "--polaroid-shadow",
      `${Math.sin(rotationRadians) * 7}px 14px 30px rgba(0, 0, 0, 0.44)`
    );

    // Wait for the dissolve to finish before swapping content. Reduced motion
    // uses the matching 0.2s opacity-only handoff from the CSS media query.
    // The single image element stays hidden during the swap, so photos never overlap.
    memorySwapTimeout = setTimeout(() => {
      memoryPhotoWrap.classList.remove("is-exiting");
      memoryCaption.classList.remove("is-exiting");
      memoryPhoto.src = memory.image;
      memoryCaption.textContent = memory.caption;
      memoryPolaroidNote.textContent = memory.polaroidNote || "";
      memoryCount.textContent = `${index + 1} / ${CONFIG.memories.length}`;

      requestAnimationFrame(() => {
        memoryPhotoWrap.classList.add("is-visible");
        memoryCaption.classList.add("is-visible");
        preloadNextMemory(index);
      });
    }, options.instant ? 0 : memorySwapDelay);

    if (options.instant) {
      requestAnimationFrame(() => memoryPhotoWrap.classList.remove("is-jump"));
    }
  }

  // If a photo file hasn't been added yet, show a soft placeholder
  // instead of a broken image icon.
  memoryPhoto.addEventListener("error", () => {
    memoryPhotoWrap.classList.add("show-fallback");
  });

  btnNextMemory.addEventListener("click", () => {
    const isLast = currentMemoryIndex === CONFIG.memories.length - 1;

    if (!isLast) {
      currentMemoryIndex++;
      showMemory(currentMemoryIndex);
    } else {
      // Final photo reached — a slightly slower, more emotional transition.
      stopAudio(audioEls.song2);
      stopMemorySpotlight();
      goToScreen("screen-always-here", { slow: true });
      startScreen6();
    }
  });

  /* ================================================================
     SCREEN 6 — A Little More For You
  ================================================================= */
  const textAlwaysHere = document.getElementById("text-always-here");
  const btnAlwaysHere = document.getElementById("btn-always-here");
  let screen6Started = false;

  btnAlwaysHere.textContent = CONFIG.screen6.buttonText;

  function startScreen6(instant = false) {
    if (instant) {
      showTextInstant(textAlwaysHere, CONFIG.screen6.message);
      btnAlwaysHere.classList.add("is-visible");
      screen6Started = true;
      return;
    }
    if (screen6Started) return;
    screen6Started = true;
    revealText(textAlwaysHere, CONFIG.screen6.message, () => {
      btnAlwaysHere.classList.add("is-visible");
    });
  }

  btnAlwaysHere.addEventListener("click", () => {
    goToScreen("screen-cake", { slow: true });
    startScreen5();
  });

  /* ================================================================
     SCREEN 7 — Birthday Cake
  ================================================================= */
  const textCake = document.getElementById("text-cake");
  const btnCake = document.getElementById("btn-cake");
  const cakeEl = document.querySelector(".cake");
  const cakeHint = document.getElementById("cake-hint");
  const textCelebration = document.getElementById("text-celebration");
  const btnCakeContinue = document.getElementById("btn-cake-continue");
  const confettiLayer = document.getElementById("confetti-layer");

  let screen5Started = false;
  let cakeClicked = false;
  let cakeCelebrationTimeout = null;

  cakeHint.textContent = CONFIG.cake.hint;
  btnCakeContinue.textContent = CONFIG.cake.continueButtonText;

  function startScreen5(instant = false) {
    if (instant) {
      showTextInstant(textCake, CONFIG.cake.message);
      return;
    }
    if (screen5Started) return;
    screen5Started = true;
    revealText(textCake, CONFIG.cake.message);
  }

  function spawnConfetti() {
    const colors = ["#d9b26c", "#e8adb6", "#f5ecdf"];
    const pieceCount = 36;

    for (let i = 0; i < pieceCount; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = `${2.4 + Math.random() * 1.6}s`;
      piece.style.animationDelay = `${Math.random() * 0.4}s`;
      piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      confettiLayer.appendChild(piece);

      // Clean up after the animation finishes so the page stays light.
      setTimeout(() => piece.remove(), 4500);
    }
  }

  btnCake.addEventListener("click", () => {
    if (cakeClicked) return;
    cakeClicked = true;

    cakeEl.classList.add("is-blown");
    btnCake.classList.add("is-blown");
    playAudio(audioEls.chime, 0.6);
    spawnConfetti();

    cakeCelebrationTimeout = setTimeout(() => {
      cakeCelebrationTimeout = null;
      textCelebration.classList.add("is-visible");
      revealText(textCelebration, CONFIG.cake.celebrationMessage, () => {
        btnCakeContinue.classList.add("is-visible");
      });
    }, 700);
  });
  btnCakeContinue.addEventListener("click", () => {
    goToScreen("screen-ending");
    startEnding();
  });

  /* ================================================================
     SCREEN 8 — Final Ending
  ================================================================= */
  const textEnding = document.getElementById("text-ending");
  const endingReplay = document.getElementById("ending-replay");
  let endingStarted = false;
  let endingReplayTimeout = null;
  const finalLineFadeMs = 2400;
  const endingStillnessMs = 4500;

  endingReplay.textContent = CONFIG.ending.replayText;

  // Reset every piece of story state in memory before returning to the opening.
  // Keep new screens and state variables in this checklist as the story grows.
  async function resetStory() {
    clearTimeout(endingReplayTimeout);
    endingReplayTimeout = null;
    clearTimeout(cakeCelebrationTimeout);
    cakeCelebrationTimeout = null;
    clearTimeout(memorySwapTimeout);
    memorySwapTimeout = null;

    stopMemorySpotlight();
    currentMemoryIndex = 0;
    screen2Started = false;
    screen3Started = false;
    screen4Started = false;
    distanceStarted = false;
    screen6Started = false;
    screen5Started = false;
    endingStarted = false;
    cakeClicked = false;

    cakeEl.classList.remove("is-blown");
    btnCake.classList.remove("is-blown");
    textCelebration.classList.remove("is-visible");
    btnCakeContinue.classList.remove("is-visible");
    confettiLayer.replaceChildren();

    document.querySelectorAll(".reveal-text, button, .replay-link").forEach((element) => {
      element.classList.remove("is-visible");
    });
    document.querySelectorAll(".reveal-text .word").forEach((word) => {
      word.classList.remove("is-visible");
    });
    textEnding.classList.remove("is-visible");
    endingReplay.classList.remove("is-visible");
    textEnding.textContent = "";
    textCelebration.textContent = "";
    textDistance.classList.remove("is-visible");
    btnDistance.classList.remove("is-visible");
    distanceLine.textContent = "";
    distanceMarkers.forEach((marker) => marker.getElement()?.classList.remove("is-visible"));
    const distancePathElement = distancePath?.getElement();
    distancePathElement?.style.removeProperty("stroke-dasharray");
    distancePathElement?.style.removeProperty("stroke-dashoffset");
    distancePathElement?.style.removeProperty("transition");
    memoryPhotoWrap.classList.remove("is-visible", "is-exiting", "show-fallback");
    memoryCaption.classList.remove("is-visible", "is-exiting");

    await Promise.all([
      stopAudio(audioEls.song3),
      stopAudio(audioEls.song2),
      stopAudio(audioEls.song1),
    ]);
    revealText(textOpening, CONFIG.screen1.message, () => {
      btnOpening.classList.add("is-visible");
    });
  }

  endingReplay.addEventListener("click", async (event) => {
    event.preventDefault();
    endingReplay.classList.remove("is-visible");
    await resetStory();
    goToScreen("screen-opening", { slow: true });
  });

  function startEnding(instant = false) {
    if (endingStarted) return;
    endingStarted = true;
    textEnding.textContent = CONFIG.ending.message;
    endingReplay.classList.remove("is-visible");
    if (instant) {
      textEnding.classList.add("is-visible");
      endingReplay.classList.add("is-visible");
      return;
    }
    playAudio(audioEls.song3, 0.7);
    requestAnimationFrame(() => {
      textEnding.classList.add("is-visible");
      endingReplayTimeout = setTimeout(() => {
        endingReplay.classList.add("is-visible");
      }, finalLineFadeMs + endingStillnessMs);
    });
  }

  /* ================================================================
     FLOATING PARTICLES (stars + hearts drifting like candlelight)
  ================================================================= */
  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  function makeParticle() {
    const isHeart = Math.random() < 0.35;
    return {
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 100,
      size: isHeart ? 8 + Math.random() * 8 : 1 + Math.random() * 2,
      speed: 0.15 + Math.random() * 0.35,
      drift: (Math.random() - 0.5) * 0.4,
      opacity: 0.15 + Math.random() * 0.35,
      isHeart,
      sway: Math.random() * Math.PI * 2,
    };
  }

  const particleCount = reduceMotion ? 0 : (window.innerWidth < 600 ? 22 : 38);
  for (let i = 0; i < particleCount; i++) {
    const p = makeParticle();
    p.y = Math.random() * canvas.height; // start scattered, not all at bottom
    particles.push(p);
  }

  function drawHeart(x, y, size, opacity, color) {
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.translate(x, y);
    ctx.scale(size / 16, size / 16);
    ctx.beginPath();
    ctx.moveTo(0, 4);
    ctx.bezierCurveTo(0, 0, -8, 0, -8, -4);
    ctx.bezierCurveTo(-8, -8, -3, -9, 0, -3);
    ctx.bezierCurveTo(3, -9, 8, -8, 8, -4);
    ctx.bezierCurveTo(8, 0, 0, 0, 0, 4);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.y -= p.speed;
      p.sway += 0.01;
      p.x += Math.sin(p.sway) * p.drift;

      if (p.y < -20) {
        Object.assign(p, makeParticle());
        p.y = canvas.height + 10;
      }

      if (p.isHeart) {
        drawHeart(p.x, p.y, p.size, p.opacity, "#e8adb6");
      } else {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "#f5ecdf";
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#f5ecdf";
        ctx.fill();
        ctx.restore();
      }
    });

    if (!reduceMotion) requestAnimationFrame(animateParticles);
  }

  if (!reduceMotion) animateParticles();

});

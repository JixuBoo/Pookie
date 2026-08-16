/* =====================================================================
   POOKIE'S BIRTHDAY SITE — SCRIPT
   =====================================================================
   You do NOT need to understand all of this file. Everything you are
   likely to want to change lives in the "CONFIG" object right below.

   To add more photos, change words/captions, or rename your song
   files — only edit inside CONFIG. Nothing else needs to change.
   ===================================================================== */

const CONFIG = {

  // ---------------------------------------------------------------
  // SONGS
  // Put your 3 songs inside the "audio" folder using these exact
  // file names, OR change the names below to match your own files.
  // ---------------------------------------------------------------
  audio: {
    song1: "audio/song1.mp3", // plays on Screen 1 ("show me ♡")
    song2: "audio/song2.mp3", // plays during the photo memories
    song3: "audio/song3.mp3", // plays after the cake / candles
  },

  // ---------------------------------------------------------------
  // SCREEN 1 — Opening
  // ---------------------------------------------------------------
  screen1: {
    message: "Hey Baby! Happy Birthday 🍰♡ ༘*.ﾟ🧸🎀. In an attempt to show you how much you mean to me, here's a small gift for my birthday boy.",
    buttonText: "show meeeee ♡",
  },

  // ---------------------------------------------------------------
  // SCREEN 2 — Our Beginning
  // ---------------------------------------------------------------
  screen2: {
    message:
      "Our journey began at school, very dramatically. But it never had to end there, and here we are running 4 years strong, celebrating your 3rd birthday together.",
    buttonText: "HuiHui ♡",
  },

  // ---------------------------------------------------------------
  // SCREEN 3 — The Love we Have
  // ---------------------------------------------------------------
  screen3: {
    message: "I don't know if I express it enough, but you're the bestest person I've ever met in my life. A hardworking, loving, sweet, cute, responsible and mature man, who's always been there for me when I needed him, loved me the best he could, chased the moon for me giving me stars. You taught me love, you taught me patience, you taught me to be a better person. I love you a lott Jahan!♡",
    buttonText: "I love you ♡",
  },

  // ---------------------------------------------------------------
  // SCREEN 4 — Before the Memories
  // ---------------------------------------------------------------
  screen4: {
    message: "I hope you like this chotu sa gift of mine. I put in the best of my efforts into this, even a smile would fulfill it's purpose. Picture the moments as you go by, treat this as a pre-anniversary gift too!",
    buttonText: "I'm excited, let's goo ♡",
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
    { image: "images/image1.jpg", caption: "The day we first saw each other, though a snap but lives vivid and rentfree in my mind (I matched the clothes too huihui)" },
    { image: "images/image2.jpg", caption: "The computer lab coincidence. I can never get tired talking about it. Just like in a rom-com, you were there beside me while my heart thumped tirelessly." },
    { image: "images/image3.jpg", caption: "The chemistry lab incident. I swear I could not be more stunned by such a mischievous alignment of spontaneity. I was soooo nervous!!!" },
    { image: "images/image4.jpg", caption: "The day we played badminton for the first and last time. Remember how you stood there admiring for a minute? I was blushing thatt whole week ♡" },
    { image: "images/image5.jpg", caption: "Our last day at school. I remember you adoring me uss din bhi, under the sunlight, checking if I was okay. I watched you go in your van, the last time." },
    { image: "images/image6.jpg", caption: "We were soo worried about what next. But destiny had many more moments for us to live together, years planned to grow our love stronger." },
    { image: "images/image7.jpg", caption: "Long meets, night calls, sweet texts. We've truly experienced more than we ever imagined." },
    { image: "images/image8.jpg", caption: "Checked in boxes, we only thought could be made true dreams. Kiss, Hugs, Gifts, Love ♡" },
    { image: "images/image9.jpg", caption: "But this isn't about us. Today is about YOU! All these memories are here to emphasize how much value you have added to all these years of mine. How much love you've showered on me to become the girl I am today. Your girl. Your lady. Your woman." },
    { image: "images/image10.jpg", caption: "Destiny had the best for us when we thought it couldn't get any better. I want us to keep believing in it, in our love. My love for you can't be measured into this simple website but it should be evident enough how special this day is for me. The day my man came into this world." },
    // { image: "images/image5.jpg", caption: "add more like this" },
  ],

 screen6: {
    message: "I'm always here whenever you'll need me. Regardless of if I am fighting you (khikhi). May this year and the upcoming ones, bring all the success, love, joy and comfort they can for you. May you always be the happiest, healthiest and the most loved person in this world. I love you a lotttttt Jahan! ♡",
    buttonText: "♡",
  },

  // ---------------------------------------------------------------
  // SCREEN 7 — Birthday Cake
  // ---------------------------------------------------------------
  cake: {
    message: "Since I can't be there to celebrate with you, I made this cake for you. I hope you like it! Blow the candles and make a wish, my love. ♡",
    hint: "tap the cake ♡",
    celebrationMessage: "Happy Birthday, my love! ♡",
    continueButtonText: "Next? ♡",
  },

  // ---------------------------------------------------------------
  // SCREEN 7 — Final Ending
  // ---------------------------------------------------------------
  ending: {
    message: "I love you.",
  },
};


/* =====================================================================
   Below this point is the code that makes everything run.
   You shouldn't need to edit it, but it's commented in case you're
   curious or want to make small tweaks.
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {

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
  };

  function fadeAudio(audioEl, targetVolume, durationMs = 900, thenStop = false) {
    if (!audioEl) return;
    const startVolume = audioEl.volume;
    const steps = 30;
    const stepTime = durationMs / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      audioEl.volume = startVolume + (targetVolume - startVolume) * progress;
      if (step >= steps) {
        clearInterval(timer);
        audioEl.volume = targetVolume;
        if (thenStop) {
          audioEl.pause();
          audioEl.currentTime = 0;
        }
      }
    }, stepTime);
  }

  function playAudio(audioEl, volume = 0.7) {
    if (!audioEl) return;
    audioEl.volume = 0;
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
    if (!audioEl) return;
    fadeAudio(audioEl, 0, 900, true);
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
  const btnBeginning = document.getElementById("btn-beginning");
  let screen2Started = false;

  btnBeginning.textContent = CONFIG.screen2.buttonText;

  function startScreen2() {
    if (screen2Started) return;
    screen2Started = true;
    revealText(textBeginning, CONFIG.screen2.message, () => {
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

  function startScreen3() {
    if (screen3Started) return;
    screen3Started = true;
    revealText(textBeforeMemories, CONFIG.screen3.message, () => {
      btnBeforeMemories.classList.add("is-visible");
    });
  }

  btnBeforeMemories.addEventListener("click", () => {
    stopAudio(audioEls.song1);
    goToScreen("screen-memories");
    playAudio(audioEls.song2, 0.7);
    showMemory(0);
  });

  /* ================================================================
     SCREEN 4 — Photo Memories
  ================================================================= */
  const memoryPhotoWrap = document.querySelector(".memory-photo-wrap");
  const memoryPhoto = document.getElementById("memory-photo");
  const memoryPhotoFallback = document.getElementById("memory-photo-fallback");
  const memoryCaption = document.getElementById("memory-caption");
  const memoryCount = document.getElementById("memory-count");
  const btnNextMemory = document.getElementById("btn-next-memory");

  let currentMemoryIndex = 0;

  function showMemory(index) {
    const memory = CONFIG.memories[index];
    if (!memory) return;

    // Reset animation state so it can fade in again cleanly.
    memoryPhoto.classList.remove("is-visible");
    memoryCaption.classList.remove("is-visible");
    memoryPhotoWrap.classList.remove("show-fallback");

    // Small delay lets the "old" image finish disappearing first,
    // so photos never overlap.
    setTimeout(() => {
      memoryPhoto.src = memory.image;
      memoryCaption.textContent = memory.caption;
      memoryCount.textContent = `${index + 1} / ${CONFIG.memories.length}`;

      requestAnimationFrame(() => {
        memoryPhoto.classList.add("is-visible");
        memoryCaption.classList.add("is-visible");
      });
    }, 350);
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
      goToScreen("screen-cake", { slow: true });
      startScreen5();
    }
  });

  /* ================================================================
     SCREEN 5 — Birthday Cake
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

  cakeHint.textContent = CONFIG.cake.hint;
  btnCakeContinue.textContent = CONFIG.cake.continueButtonText;

  function startScreen5() {
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
    spawnConfetti();
    playAudio(audioEls.song3, 0.7);

    setTimeout(() => {
      textCelebration.classList.add("is-visible");
      revealText(textCelebration, CONFIG.cake.celebrationMessage, () => {
        btnCakeContinue.classList.add("is-visible");
      });
    }, 700);
  });

  btnCakeContinue.addEventListener("click", () => {
    // Let the celebration song continue softly rather than cutting it off.
    fadeAudio(audioEls.song3, 0.35, 1500);
    goToScreen("screen-ending");
    startScreen6();
  });

  /* ================================================================
     SCREEN 6 — Final Ending
  ================================================================= */
  const textEnding = document.getElementById("text-ending");
  let screen6Started = false;

  function startScreen6() {
    if (screen6Started) return;
    screen6Started = true;
    textEnding.textContent = CONFIG.ending.message;
    requestAnimationFrame(() => {
      textEnding.classList.add("is-visible");
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

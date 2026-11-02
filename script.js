const openingText = "Heyyy... I made something for you 💖";

const heartfeltMessage = 
"On your special day, I just wanted to say — you are genuinely a really nice person 😊\n\nYour positivity and the way you carry yourself always stand out.\n\nThis is just a way of wishing you a very joyful birthday, NOTHING MORE 😄\n\nI hope this year brings you peace, laughter, and every little happiness you deserve ✨";const BIRTHDAY_AGE = 22;

const openingTextEl = document.getElementById("opening-text");
const continueBtn = document.getElementById("continue-btn");
const heartfeltEl = document.getElementById("heartfelt-typed");
const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
const giftBox = document.getElementById("gift-box");
const confettiLayer = document.getElementById("confetti-layer");
const balloonLayer = document.getElementById("balloon-layer");

const birthdayDateEl = document.getElementById("birthday-date");
const angelMessageEl = document.getElementById("angel-message");
const birthdayFriendNameEl = document.getElementById("birthday-friend-name");
const FRIEND_NAME = "Sania";

const birthdayDate = new Date(2004, 10, 19, 12, 0, 0); 
const birthdayDateText = new Intl.DateTimeFormat(undefined, {
  day: "numeric",
  month: "long",
  year: "numeric",
}).format(birthdayDate);
if (birthdayDateEl) birthdayDateEl.textContent = birthdayDateText;
if (angelMessageEl)
  angelMessageEl.textContent = `An angel was born ${BIRTHDAY_AGE} years back this day (${birthdayDateText})—and you’ve been shining ever since. 💖`;

const birthdayDayMonthText = new Intl.DateTimeFormat(undefined, {
  day: "numeric",
  month: "long",
}).format(birthdayDate);
const birthdayDateEndingEl = document.getElementById("birthday-date-ending");
if (birthdayDateEndingEl) birthdayDateEndingEl.textContent = `On ${birthdayDayMonthText}.`;
if (birthdayFriendNameEl) birthdayFriendNameEl.textContent = FRIEND_NAME;

const encodedNumber = "OTYzNDc5NzQ5OA=="; 
const number = atob(encodedNumber);

const link = document.getElementById("whatsapp-link");

link.addEventListener("click", () => {
  const url = `https://wa.me/${number}`;
  link.href = url;
});

function typeText(el, text, speed = 60, clear = true) {
  if (clear) el.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    if (text.charAt(i) === "\n") {
      el.innerHTML += "<br>";
    } else {
      el.innerHTML += text.charAt(i);
    }
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

function seedParticles() {
  const layer = document.getElementById("bg-particles");
  for (let i = 0; i < 40; i += 1) {
    const p = document.createElement("span");
    p.className = "particle";
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 100}%`;
    p.style.animationDelay = `${Math.random() * 5}s`;
    layer.appendChild(p);
  }
}

function seedHeartsAndLights() {
  const heartsLayer = document.getElementById("floating-hearts");
  const lightsLayer = document.getElementById("floating-lights");

  for (let i = 0; i < 14; i += 1) {
    const h = document.createElement("span");
    h.className = "heart";
    h.textContent = "❤";
    h.style.left = `${Math.random() * 100}%`;
    h.style.fontSize = `${16 + Math.random() * 22}px`;
    h.style.animationDuration = `${8 + Math.random() * 10}s`;
    h.style.animationDelay = `${Math.random() * 6}s`;
    heartsLayer.appendChild(h);
  }

  const icons = ["✨", "⭐", "💫", "🌟"];
  for (let i = 0; i < 18; i += 1) {
    const l = document.createElement("span");
    l.className = "light";
    l.textContent = icons[i % icons.length];
    l.style.left = `${Math.random() * 100}%`;
    l.style.fontSize = `${14 + Math.random() * 18}px`;
    l.style.animationDuration = `${10 + Math.random() * 10}s`;
    l.style.animationDelay = `${Math.random() * 8}s`;
    lightsLayer.appendChild(l);
  }
}

function observeRevealElements() {
  const reveals = document.querySelectorAll(".reveal");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.25 }
  );
  reveals.forEach((r) => obs.observe(r));
}

function startHeartfeltTyping() {
  const section = document.getElementById("message");
  let hasTyped = false;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasTyped) {
          hasTyped = true;
          typeText(heartfeltEl, heartfeltMessage, 34);
        }
      });
    },
    { threshold: 0.5 }
  );
  observer.observe(section);
}

function triggerSurprise() {
  document.body.classList.add("bright-flash");
  setTimeout(() => document.body.classList.remove("bright-flash"), 650);

  const confettiColors = ["#ff7dc5", "#ffd166", "#7ef3ff", "#ffffff", "#b997ff"];
  for (let i = 0; i < 140; i += 1) {
    const c = document.createElement("span");
    c.className = "confetti";
    c.style.left = `${50 + (Math.random() * 40 - 20)}%`;
    c.style.top = "42%";
    c.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    c.style.transform = `translateX(${Math.random() * 200 - 100}px)`;
    c.style.animationDelay = `${Math.random() * 220}ms`;
    confettiLayer.appendChild(c);
    setTimeout(() => c.remove(), 1800);
  }

  const balloons = ["🎈", "🎉", "✨", "🎊", "🍩", "🥂", "🍭"];
  for (let i = 0; i < 100; i += 1) {
    const b = document.createElement("span");
    b.className = "balloon";
    b.textContent = balloons[i % balloons.length];
    b.style.left = `${Math.random() * 100}%`;
    b.style.bottom = "-8vh";
    b.style.animationDuration = `${2.4 + Math.random() * 2.8}s`;
    balloonLayer.appendChild(b);
    setTimeout(() => b.remove(), 3600);
  }
}

function setupMusic() {
  music.volume = 0.32;
  music
    .play()
    .then(() => {
      musicToggle.textContent = "🔊 Music On";
    })
    .catch(() => {
      musicToggle.textContent = "🔈 Tap for Music";
    });

  musicToggle.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicToggle.textContent = "🔊 Music On";
    } else {
      music.pause();
      musicToggle.textContent = "🔈 Music Off";
    }
  });
}

continueBtn.addEventListener("click", () => {
  document.getElementById("story").scrollIntoView({ behavior: "smooth" });
  if (music.paused) {
    music.play();
    musicToggle.textContent = "🔊 Music On";
  }
});

giftBox.addEventListener("click", () => {
  triggerSurprise();
  giftBox.textContent = "🎂";
  const hint = document.getElementById("gift-hint");
  hint.textContent = "Surprise unlocked. Keep smiling, Birthday Queen ✨👑";
});

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  document.body.style.backgroundPosition = `50% ${y * 0.03}px`;
});

const teaseMessage =
  "You owe me a partyyy noww🥳😋\n\n Har saal 19 Nov pr CWC'23 haarne ka dukh rhta tha, bt iss saal wo thoda kam hoga, kyuki ek prty milne wli h very sooonn 😁 \n\n Anyways, you can personalize this web by using ur photos and memories. Will add u to the contributors under my github.  \n\nHope you liked this surprise, Enjoy your day! ✨";

let teaseStarted = false;

function startTeaseTyping() {
  if (teaseStarted) return;
  teaseStarted = true;

  let i = 0;
  const speed = 50;
  const target = document.getElementById("tease-typed");

  function type() {
    if (i < teaseMessage.length) {
      if (teaseMessage.charAt(i) === "\n") {
        target.innerHTML += "<br>";
      } else {
        target.innerHTML += teaseMessage.charAt(i);
      }
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}
const teaseSection = document.getElementById("tease");

window.addEventListener("scroll", () => {
  const rect = teaseSection.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.7) {
    startTeaseTyping();
  }
});
typeText(openingTextEl, openingText, 70);
seedParticles();
seedHeartsAndLights();
observeRevealElements();
startHeartfeltTyping();
setupMusic();

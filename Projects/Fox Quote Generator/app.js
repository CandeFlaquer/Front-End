const projectName = "Fox-Quotes";

const TEXTS = [
  {
    text: "“Ring-ding-ding-ding-dingeringeding!”",
    author: "The fox, maybe...?",
  },
  {
    text: "“Gering-ding-ding-ding-dingeringeding!”",
    author: "A fox, who knows...?",
  },
  { text: '"Wa-pa-pa-pa-pa-pa-pow!"', author: "That fox, could be...?" },
  { text: '"Hatee-hatee-hatee-ho!"', author: "This fox, I wonder...?" },
  {
    text: '"Joff-tchoff-tchoffo-tchoffo-tchoff!"',
    author: "Le fox, are you sure though?",
  },
  {
    text: '"Tchoff-tchoff-tchoffo-tchoffo-tchoff!"',
    author: "Le foxo, I'm not sure.",
  },
  { text: '"Jacha-chacha-chacha-chow!"', author: "El Zorro, quizás..." },
  { text: '"Chacha-chacha-chacha-chow!"', author: "Un zorro, tal vez." },
  { text: '"Fraka-kaka-kaka-kaka-kow!"', author: "Ese zorro, yo no lo se." },
  { text: '"A-hee-ahee ha-hee!"', author: "Another fox, plase confirm." },
  {
    text: '"Wa-wa-way-do, wub-wid-bid-dum-way-do, wa-wa-way-do"',
    author: "An angel in disguise",
  },
  {
    text: '"Bay-budabud-dum-bam"',
    author: "My guardian angel, hiding in the woods",
  },
  { text: '"Bay-budabud-dum-bam"', author: "Them foxes, possibly" },
  { text: '"Mama-dum-day-do"', author: "Baby fox, most likely" },
  { text: '"Abay-ba-da bum-bum bay-do"', author: "Fox, unconfirmed" },
];

/* To pick random orange tones from this list
const ORANGE = [
  "#ffa500",
  "#ff8c00",
  "#ffae42",
  "#fe5a1d",
  "#ff7518",
  "#ffa812",
  "#fe5a1d",
  "#fb9902",
  "#fd5800",
  "#ff6700",
  "#ff8c00",
  "#f77f00",
  "#f28500",
  "#ec5800",
  "#ffb347",
]; */

const easterEgg = { text: "Te amo, muah muah!", author: "El novio" };
const easterIcon = "fas fa-heart";

const newText = "";
const newAuthor = "";

function textGen() {
  return TEXTS[Math.floor(Math.random() * TEXTS.length)];
}
function orangeGen() {
  /* To pick random orange tones from above list:
   return ORANGE[Math.floor(Math.random() * ORANGE.length)]; */
  let r = Math.floor(Math.random() * 256) + 230;
  let g = Math.floor(Math.random() * 150) + 20;
  let b = Math.floor(Math.random() * 80);
  return `rgb(${r}, ${g}, ${b})`;
}

function gen() {
  let newQuote = textGen();
  let newOrange = orangeGen();
  var newText = newQuote.text;
  var newAuthor = newQuote.author;
  $("#text").text(newText);
  $("#author").text(newAuthor);
  $(".text").animate({ color: newOrange }, 1000);
  $("body").animate({ backgroundColor: newOrange }, 1000);
  $(".button").animate({ backgroundColor: newOrange }, 1000);
}

function loveYou() {
  var newText = easterEgg.text;
  var newAuthor = easterEgg.author;
  $("#text").text(newText);
  $("#author").text(newAuthor);
  $(".text i").attr("class", easterIcon);
  $(".text").animate({ color: "#ff4500" }, 1000);
  $("body").animate({ backgroundColor: "#ff4500" }, 1000);
  $(".button").animate({ backgroundColor: "#ff4500" }, 1000);
}

$(document).ready(gen);
$("#new-quote").click(gen);
$("#easter-egg").click(loveYou);
$("#tweet-quote").attr(
  "href",
  "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
    encodeURIComponent('"' + newText + '" ' + newAuthor)
);
$("#youtube-reference").click(function () {
  window.open("https://www.youtube.com/watch?v=jofNR_WkoCE");
});

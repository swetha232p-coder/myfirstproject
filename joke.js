// Array of jokes (minimum 10)
let jokes = [
  "Why don’t scientists trust atoms? Because they make up everything!",
  "I told my computer I needed a break, and it said 'No problem — I’ll go to sleep.'",
  "Why was the math book sad? It had too many problems.",
  "Parallel lines have so much in common… it’s a shame they’ll never meet.",
  "Why don’t programmers like nature? Too many bugs.",
  "I asked the librarian if the library had books on paranoia… she whispered, 'They’re right behind you.'",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "I told my Wi-Fi we should see other people… now it’s searching for connections.",
  "Why did the JavaScript developer go broke? Because he kept working for 'null'.",
  "I tried to catch fog yesterday… Mist!"
];

// Pick a random joke
let randomIndex = Math.floor(Math.random() * jokes.length);
let randomJoke = jokes[randomIndex];

// Display joke in the div
document.getElementById("jokeBox").innerHTML = randomJoke;

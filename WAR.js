// Define deck of cards
const deck = [ /* All 52 standard playing cards */ ];

// Define function to shuffle deck
function shuffleDeck(array) {
  const shuffledArray = [...array]; // Make a copy of the array to shuffle

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray; // Return the shuffled array
}


// Shuffle deck randomly
shuffleDeck(deck);

// Split deck into two equal halves
const player1Deck = deck.slice(0, 26);
const player2Deck = deck.slice(26);

// Define function to compare top cards and determine winner
function compareTopCards(player1Deck, player2Deck) {
  const player1Card = player1Deck.shift();
  const player2Card = player2Deck.shift();

  if (player1Card.value > player2Card.value) {
    player1Deck.push(player1Card, player2Card);
  } else if (player2Card.value > player1Card.value) {
    player2Deck.push(player1Card, player2Card);
  } else {
    // Tie - no points awarded
  }

  return [player1Deck, player2Deck];
}


// Play game until one player runs out of cards
while (player1Deck.length > 0 && player2Deck.length > 0) {
  compareTopCards(player1Deck, player2Deck);
}

// Declare winner based on number of won cards
if (player1Deck.length > player2Deck.length) {
  console.log("Player 1 wins!");
} else if (player2Deck.length > player1Deck.length) {
  console.log("Player 2 wins!");
} else {
  console.log("It's a tie!");
}

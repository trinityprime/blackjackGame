/* pre-requisites: 
- variables
- functions
- conditionals (if-else)
- arrays
- loops
- objects
*/

/* Requirements:
- Generate deck of 52 cards
- On start, "Dealer" and "Player" get dealt 2 random cards (no replacement)

1. Continue when neither player >= 21 points 
2. Player is dealt a random card
3. If Player > 21, Dealer wins. If Player = 21, Player wins
4. The dealer is dealt a random card
5. If Dealer > 21, Player wins. If Dealer = 21, Player wins
6. Repeat to step 1

Point breakdown:
2-10: Actual face value
Jack, Queen, King: 10 
Ace: 11 unless it gives a score > 21; in that case it is 1.

Deck:
Cards: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace
Suits: Hearts, Clubs, Diamonds, Spades 
13 x 4 = 52 cards

Logging:
- Starting hands
- Ending hands + who won + score
*/

// variables
const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
const cards = [
  "Ace",
  "King",
  "Queen",
  "Jack",
  "Ten",
  "Nine",
  "Eight",
  "Seven",
  "Six",
  "Five",
  "Four",
  "Three",
  "Two",
];

//-------------------------------

const deck = [];

// make each card have 1 of each suits eg. Hearts of Two, Clubs of Two, Diamonds of Two, Spades of Two.
// pushed into deck array
for (const suit of suits) {
  for (const key of cards) {
    deck.push({ suit: suit, cards: key });
  }
}

// get a random suit + card from the deck
const dealCards = () => {
  const randCards = Math.floor(Math.random() * deck.length);
  return deck.splice(randCards, 1)[0];
};

// give values for each card
const cardPoints = (card) => {
  switch (card.cards) {
    case "Nine":
      return 9;
    case "Eight":
      return 8;
    case "Seven":
      return 7;
    case "Six":
      return 6;
    case "Five":
      return 5;
    case "Four":
      return 4;
    case "Three":
      return 3;
    case "Two":
      return 2;
    case "Ace":
      return 1;
    default:
      return 10;
  }
};

// parameter: playerHand & dealerHand
const calculatePoints = (cardArray) => {
  let points = 0;
  let hasAce = false;

  // puts player & computer's hand into cardPoints for calculation
  for (let i = 0; i < cardArray.length; i++) {
    let cards = cardArray[i];
    points += cardPoints(cards);
    if (cards.cards === "Ace") {
      hasAce = true;
    }
  }

  // if total points with ace (1) <= 21, ace is changed to 11.
  if (hasAce === true && points + 10 <= 21) {
    return points + 10;
  }
  return points;
};

const startGame = () => {
  const playerHand = [dealCards(), dealCards()];
  const computerHand = [dealCards(), dealCards()];

  console.log("Player hand:", playerHand);
  console.log("Computer hand:", computerHand);
  console.log("Player points:", calculatePoints(playerHand));
  console.log("Computer points:", calculatePoints(computerHand));
};

startGame();

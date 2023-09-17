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

for (const suit of suits) {
  for (const key of cards) {
    deck.push({ suit: suit, cards: key });
  }
}

const dealCards = () => {
  const randCards = deck[Math.floor(Math.random() * deck.length)];
  return deck.splice(randCards, 1)[0];
};

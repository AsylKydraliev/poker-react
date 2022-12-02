import Card from './Card';

class CardDeck {
  cards: Card[] = [];

  public suits = ["hearts","spades","clubs","diams"];
  public ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

  constructor() {
    for(let suit = 0; suit < this.suits.length; suit++) {
      for(let rank = 0; rank < this.ranks.length; rank++) {
        const card: Card = {
          rank: this.ranks[rank],
          suit: this.suits[suit],
        }
        this.cards.push(card);
      }
    }
  }

  getCard(): Card {
    const randomCardIndex = Math.ceil(Math.random() * this.cards.length - 1);
    return this.cards[randomCardIndex];
  }

  getCards(howMany: number): Card[]{
    const cards: Card[] = [];

    while (howMany !== 0) {
      const card = this.getCard();
      if(!cards.includes(card)) {
        cards.push(card);
        howMany--;
      }
    }

    return cards;
  }
}

export default CardDeck;

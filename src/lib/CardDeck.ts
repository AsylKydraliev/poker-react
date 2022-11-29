import Card from './Card';

class CardDeck {
  cards: Card[] = [];

  suits = ["hearts","spades","clubs","diams"];
  ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

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
    //проверить следующий код
    const randomCardIndex = Math.ceil(Math.random() * this.cards.length - 1);
    this.cards.splice(randomCardIndex, 1);
    return this.cards[randomCardIndex];
  }

  getCards(howMany: number): Card[]{
    const cardsArr: Card[] = [];

    for (let i = 0; i < howMany; i++) {
      cardsArr.push(this.getCard());
    }

    return cardsArr;
  }
}

export default CardDeck;

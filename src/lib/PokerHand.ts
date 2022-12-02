import Card from './Card';

export class PokerHand {
  private ranks = {
    2: [] as string[],
    3: [] as string[],
    4: [] as string[],
    5: [] as string[],
    6: [] as string[],
    7: [] as string[],
    8: [] as string[],
    9: [] as string[],
    10: [] as string[],
    J: [] as string[],
    Q: [] as string[],
    K: [] as string[],
    A: [] as string[],
  };

  private suits = {
    diams: [] as string[],
    hearts: [] as string[],
    clubs: [] as string[],
    spades: [] as string[],
  };

  twoPairs = 0;

  constructor(public cards: Card[]) {}

  private initRanksAndSuits() {
    for (let i = 0; i < this.cards.length; i++) {
      const rankObj: Card = this.cards[i];
      switch (this.cards[i].rank) {
        case '2':
          this.ranks['2'].push(rankObj.rank);
          break;
        case '3':
          this.ranks['3'].push(rankObj.rank);
          break;
        case '4':
          this.ranks['4'].push(rankObj.rank);
          break;
        case '5':
          this.ranks['5'].push(rankObj.rank);
          break;
        case '6':
          this.ranks['6'].push(rankObj.rank);
          break;
        case '7':
          this.ranks['7'].push(rankObj.rank);
          break;
        case '8':
          this.ranks['8'].push(rankObj.rank);
          break;
        case '9':
          this.ranks['9'].push(rankObj.rank);
          break;
        case '10':
          this.ranks['10'].push(rankObj.rank);
          break;
        case 'J':
          this.ranks['J'].push(rankObj.rank);
          break;
        case 'Q':
          this.ranks['Q'].push(rankObj.rank);
          break;
        case 'K':
          this.ranks['K'].push(rankObj.rank);
          break;
        case 'A':
          this.ranks['A'].push(rankObj.rank);
          break;
        default:
          console.log('No ranks');
      }

      const suits = this.cards[i].suit;
      switch (this.cards[i].suit) {
        case 'diams':
          this.suits['diams'].push(suits);
          break;
        case 'hearts':
          this.suits['hearts'].push(suits);
          break;
        case 'clubs':
          this.suits['clubs'].push(suits);
          break;
        case 'spades':
          this.suits['spades'].push(suits);
          break;
        default:
          console.log('No suit');
      }
    }
  }

  getOutcome(): string | undefined {
    this.initRanksAndSuits();

    for (let key in this.ranks) {
      // @ts-ignore
      if (this.ranks[key].length === 2) {
        this.twoPairs++;
      }
      // @ts-ignore
      if (this.ranks[key].length === 3) {
        return 'Three of a kind';
      }
    }

    for (let key in this.suits) {
      //@ts-ignore
      if (this.suits[key].length === 5) {
        return 'Flush';
      }
    }

    if (this.twoPairs === 1) {
      return 'One pair';
    }

    if (this.twoPairs === 2) {
      return 'Two pairs';
    }
  }
}

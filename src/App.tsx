import React, { useState } from 'react';
import './App.css';
import CardView from './components/CardView';
import CardDeck from './lib/CardDeck';
import Card from './lib/Card';
import { PokerHand } from './lib/PokerHand';

function App() {
  let [cards, setCards] = useState<Card[]>([]);
  let [result, setResult] = useState<string | undefined>('');

  let newCards: Card[] | [] = [];

  const dealCards = () => {
    const cardDeck = new CardDeck();
    newCards = cardDeck.getCards(5);
    setCards(newCards);
    setResult(new PokerHand(newCards).getOutcome());
  }

  const button = <button onClick={dealCards} className='btn'>Раздать карты</button>;

  if (cards.length === 0) {
    return (
      <div>{button}</div>
    )
  }

  return (
    <div className="App">
      {button}
      {cards.map((card: Card, index: number) => {
        return (
          <CardView rank={card.rank} suit={card.suit} key={index} />
        )
      })
      }
      <p className="result">{result}</p>
    </div>
  );
}

export default App;

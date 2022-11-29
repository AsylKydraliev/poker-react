import React, { useState } from 'react';
import CardView from './components/CardView';
import CardDeck from './lib/CardDeck';
import Card from './lib/Card';

function App() {
  let [cards, setCards] = useState<Card[]>([]);

  const dealCards = () => {
    setCards(new CardDeck().getCards(5));
  }

  const button = <button onClick={dealCards}>Раздать карты</button>;

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
          <CardView rank={card.rank} suit={card.suit} key={index}/>
        )
      })}
    </div>
  );
}

export default App;

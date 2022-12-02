import React from 'react';

/**
 * diams (буби) символ - ♦
 * hearts (черви) символ - ♥
 * clubs (крести) символ - ♣
 * spades (пики) символ - ♠
 */
interface Card {
  rank: string,
  suit: string,
}

const CardView: React.FC<Card> = props => {
  const cardClass = `card rank-${props.rank.toLowerCase()} ${props.suit}`;
  let suitSymbol = '';

  switch (props.suit) {
    case 'diams':
      suitSymbol = '♦';
      break;
    case 'hearts':
      suitSymbol = '♥';
      break;
    case 'clubs':
      suitSymbol = '♣';
      break;
    case 'spades':
      suitSymbol = '♠';
      break;
    default:
      suitSymbol = '';
  }

  return (
    <div className="playingCards faceImages card">
      <span className={cardClass}>
        <span className="rank">{props.rank}</span>
        <span className="suit">{suitSymbol}</span>
      </span>
    </div>
  );
};

export default CardView;

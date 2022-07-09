import React from 'react';
import CardItem from "./CardItem";

const CardList = ({cards}) => {
    return (
        <div className="cardList">
            {cards.map(card =>
                <CardItem card={card}/>
            )}
        </div>
    );
};

export default CardList;
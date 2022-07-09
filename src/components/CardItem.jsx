import React from 'react';
import MyButton from './UI/button/MyButton'

const CardItem = (props) => {
    return (
        <div className="_card">
            <div style={{ height: '270px', background: 'grey'}} className="_card__img">

            </div>
            <div className="_card__body">
                <h2>{props.card.title}</h2>
                <p>{props.card.body}</p>
            </div>
            <div className="_card__btn">
                <MyButton>
                    Кнопка
                </MyButton>
            </div>
        </div>
    );
};

export default CardItem;
import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Wild Flower Writings</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/waterfall.jpeg" text="Blossom into your BEST self!" label="Spiritual" path="/spiritual" />
                        <CardItem src="images/waterfall.jpeg" text="Daily Affirmations: For a good day" label="Spiritual" path="/spiritual" />
                        <CardItem src="images/yoga-mountains.jpeg" text="Blossom into your BEST self!" label="Spiritual" path="/spiritual" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="images/yoga-mountains.jpeg" text="Blossom into your BEST self!" label="Spiritual" path="/spiritual" />
                        <CardItem src="images/yoga-mountains.jpeg" text="Daily Affirmations: For a good day" label="Spiritual" path="/spiritual" />
                        <CardItem src="images/yoga-mountains.jpeg" text="Daily Affirmations: For a good day" label="Spiritual" path="/spiritual" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

import React, { useState } from "react";
import quotes from '../Components/quotes.json';

console.log (quotes)

    const QuotesBox = ({quoteRandom, colorRandom, clickButton}) => {

    const buttonColor = {
        backgroundColor: colorRandom
    }
        
    return (

        <article className="Box" style={{color: colorRandom}} >
            <h2> {quoteRandom.quote} </h2>
            <p> {quoteRandom.author} </p> 
            <button 
                onClick={clickButton}
                style={buttonColor} 
                className="button">
                &#62;
            </button>
        </article>     
        
    );
};

export default QuotesBox;
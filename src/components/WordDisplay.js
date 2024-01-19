import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../actions/actions';
import './WordDisplay.css';

const WordDisplay = ({ word }) => {
    return (
        <div className="letter-row" >
            {word.split("").map((letter, index) => 
                <span 
                    className="letter-box" 
                    key={index}
                    name={'letter-'+index} 
                >{letter}</span>
            )}
         </div>
    );
};


export default WordDisplay;
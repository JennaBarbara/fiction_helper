import React,  { useState } from 'react';
import { connect } from 'react-redux';
import { addSecretWord } from '../actions/actions';
import './LiebrarianView.css';
import WordDisplay from './WordDisplay';
import WordInput from './WordInput';


class LiebrarianView extends React.Component {

    render() {
        return (
            <div>
                <WordDisplay
                    word={this.props.secret_word}
                />
      
            {this.props.guesses.map((guess,index) =>
                 <WordDisplay word={guess.text} key={'guess-'+index}
            />)} 
            
            <WordInput/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    secret_word: state.secret_word,
    guesses: state.guesses
});

const mapDispatchToProps = dispatch => ({
    onAddSecretWord: text => dispatch(addSecretWord(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LiebrarianView);
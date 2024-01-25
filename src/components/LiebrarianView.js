import React,  { useState } from 'react';
import { connect } from 'react-redux';
import { addSecretWord } from '../actions/actions';
import './LiebrarianView.css';
import WordDisplay from './WordDisplay';
import WordInput from './WordInput';
import LieSelector from './LieSelector';


class LiebrarianView extends React.Component {

    render() {
        return (
            <div>
                <WordDisplay
                    word={this.props.secret_word}
                />
  
            {this.props.guesses.map((guess,index) =>
                (this.props.status === 'select_lie' && index === (this.props.guesses.length-1))
                ? <LieSelector word = {guess.text}></LieSelector>
                : <WordDisplay word={guess.text} key={'guess-'+index}
            />)} 
            {this.props.status !== 'select_lie' && <WordInput/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    secret_word: state.secret_word,
    guesses: state.guesses,
    status: state.status
});

const mapDispatchToProps = dispatch => ({
    onAddSecretWord: text => dispatch(addSecretWord(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LiebrarianView);
import React,  { useState } from 'react';
import { connect } from 'react-redux';
import { addSecretWord } from '../actions/actions';
import './WordInput.css';


class WordInput extends React.Component {
    constructor(props) {
        super(props);
        this.onKeyDown = this.handleInput.bind(this);    
    }

    handleInput(e) {
        console.log(e.key);

        const hasValue = e.target.value !== "";
        const hasSibling = e.target.nextElementSibling;
        const hasSiblingInput = hasSibling && e.target.nextElementSibling.nodeName === "INPUT";
        const hasPreviousSibling = e.target.previousElementSibling;
        const hasPreviousSiblingInput = hasPreviousSibling && e.target.previousElementSibling.nodeName ==="INPUT";
      
        if ( hasValue && hasSiblingInput ){
      
          e.target.nextElementSibling.focus();
        
        } 

        if( !hasValue && hasPreviousSiblingInput && (e.key === 'Backspace') ){

            e.target.previousElementSibling.focus();

        }

      }

    render() {
        return(

        <div className="letter-row" >
            <input className="letter-box" type="text" name='letter-0' guess-input='0' required maxLength = '1' onKeyDown={e => this.onKeyDown(e)}/>
            <input className="letter-box" type="text" name='letter-1' guess-input='1' required maxLength = '1' onKeyDown={e => this.onKeyDown(e)} />
            <input className="letter-box" type="text" name='letter-2' guess-input='2' required maxLength = '1' onKeyDown={e => this.onKeyDown(e)} />
            <input className="letter-box" type="text" name='letter-3' guess-input='3' required maxLength = '1' onKeyDown={e => this.onKeyDown(e)} />
            <input className="letter-box" type="text" name='letter-4' guess-input='4' required maxLength = '1' onKeyDown={e => this.onKeyDown(e)} />
        </div>
        )
    }
}

const mapStateToProps = state => ({
    // todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onAddSecretWord: text => dispatch(addSecretWord(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WordInput);
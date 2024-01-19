import React,  { useState } from 'react';
import { connect } from 'react-redux';
import { addSecretWord, addGuess } from '../actions/actions';
import './WordInput.css';


class WordInput extends React.Component {    
    constructor(props) {
        super(props);
        this.onKeyDown = this.handleInput.bind(this);    
        this.onEnter = this.handleEnter.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            inputs: ['', '', '', '', '']
        }
       
    
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

      handleEnter(e) {
          console.log(this.state.inputs.join(""));
          if(!this.props.secret_word){
              this.props.onAddSecretWord(this.state.inputs.join("").toUpperCase());
          } else {
            this.props.onAddGuess(this.state.inputs.join("").toUpperCase());
          }
        this.setState({
                inputs: ['', '', '', '', '']
            });
      }

      handleChange(e, index) {
        let inputs = [...this.state.inputs];
        inputs[index] = e.target.value;
        this.setState({
            inputs: inputs
        });
    
    
    }

   
    render() {
        return(
        <div className="letter-row" >
            {this.state.inputs.map((input, index, inputs) => 
                <input 
                    className="letter-box"
                    type="text" 
                    value={input}
                    key={index}
                    name={'letter-'+index} 
                    guess-input={index}
                    required 
                    maxLength = '1' 
                    onKeyDown={e => this.onKeyDown(e)}
                    onChange={e => this.handleChange(e, index)}
                />
            )}

            <button className="enter-button" type="button" onClick={e => this.onEnter(e)}>Enter</button>
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
    onAddGuess: text => dispatch(addGuess(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(WordInput);
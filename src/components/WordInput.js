import React,  { useState } from 'react';
import { connect } from 'react-redux';
import { addSecretWord } from '../actions/actions';
import './WordInput.css';


class WordInput extends React.Component {    
    constructor(props) {
        super(props);
        this.onKeyDown = this.handleInput.bind(this);    
        this.onEnter = this.handleEnter.bind(this);
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
          console.log('jkhsdfkhjsfdkh');
          console.log(this.state.inputs);

      }

   
    render() {
        return(
        <div className="letter-row" >
            {this.state.inputs.map((input, index) => 
                <input 
                    className="letter-box"
                    type="text" 
                    defaultValue={input}
                    key={index}
                    name={'letter-'+index} 
                    guess-input={index}
                    required 
                    maxLength = '1' 
                    onKeyDown={e => this.onKeyDown(e)}
                    onChange={e =>{this.state.inputs[index] = e.target.value} }
                />
            )}

            <button className="enter-button" type="button" onClick={e => this.onEnter(e)}>Enter</button>
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
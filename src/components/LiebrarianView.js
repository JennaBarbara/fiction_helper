import React,  { useState } from 'react';
import { connect } from 'react-redux';
import { addSecretWord } from '../actions/actions';
import './LiebrarianView.css';
import WordInput from './WordInput';


class LiebrarianView extends React.Component {

    render() {
        return (
            <div>
                <WordInput/>
            </div>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    onAddSecretWord: text => dispatch(addSecretWord(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LiebrarianView);
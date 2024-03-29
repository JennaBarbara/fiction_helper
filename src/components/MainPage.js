import React,  { useState } from 'react';
import { connect } from 'react-redux';
import { addSecretWord } from '../actions/actions';
import LiebrarianView from './LiebrarianView';
import './MainPage.css';
import WordInput from './WordInput';


class MainPage extends React.Component {

    render() {
        return(
            <div>
                <LiebrarianView />
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
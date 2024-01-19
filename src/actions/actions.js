//view action
export const UPDATE_VIEW = 'UPDATE_VIEW';
export const updateView= text => ({
    type: UPDATE_VIEW,
    payload: { text },
});

//status actions
export const UPDATE_STATUS  = 'UPDATE_STATUS';
export const updateStatus= text => ({
    type: UPDATE_STATUS,
    payload: { text },
});

//secret word actions

export const ADD_SECRET_WORD = 'ADD_SECRET_WORD';
export const addSecretWord= text => ({
    type: ADD_SECRET_WORD,
    payload: { text },
});

//guess actions

export const ADD_GUESS  = 'ADD_GUESS';
export const addGuess = text => ({
    type: ADD_GUESS,
    payload: { text },
});

export const MARK_GUESS_LIE = 'MARK_GUESS_LIE';
export const markGuessLie = (index, condition)=> ({
    type: MARK_GUESS_LIE,
    payload: { index, condition},
});





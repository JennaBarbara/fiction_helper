import { UPDATE_VIEW, ADD_SECRET_WORD, ADD_GUESS, MARK_GUESS_LIE, UPDATE_STATUS} from '../actions/actions';

//view

export const view = (state = 'lie-brarian', action) => {
    const { type, payload } = action;

    switch (type) {
    case UPDATE_VIEW: {
        const { text } = payload;
        return text;
    }
    default:
        return state;
    }
}

//status

export const status = (state = 'secret_word_input', action) => {
    const { type, payload } = action;

    switch (type) {
    case UPDATE_STATUS: {
        const { text } = payload;
        return text;
    }
    default:
        return state;
    }
}

//secret word 

export const secret_word = (state = '', action) => {
    const { type, payload } = action;

    switch (type) {
    case ADD_SECRET_WORD: {
        const { text } = payload;
        return text;
    }
    default:
        return state;
    }
}


//guesses


export const guesses = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case ADD_GUESS : {
        const { text } = payload;
        const newTodo = {
            text: text,
            lie: {},
        };
        return state.concat(newTodo);
    }
    case MARK_GUESS_LIE: {
        const { index, condition } = payload;
        //this action will always be on the latest guess
        const length = state.length;
        state[length-1].lie = {
            index: index,
            conditions: condition
        }
        return state;
    }
    default:
        return state;
    }
}



import React, { useReducer } from 'react';

export default function UseReducerHook() {
    const initialState = 0
    const reducer = (state, action) => {
        if (action.type === 'Increment') {
            return state + 1;
        } else if (action.type === 'Decrement') {
            if (state > 0) {
                return state - 1;
            } else {
                return state;
            }
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Your shopping item : {state}</h1>
            <button
                type="submit"
                onClick={() => dispatch({ type: 'Increment' })}>
                Increment
            </button>{' '}
            <br />
            <button
                type="submit"
                onClick={() => dispatch({ type: 'Decrement' })}>
                Decrement
            </button>
        </div>
    );
}

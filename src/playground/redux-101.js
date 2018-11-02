import { createStore } from 'redux';
import { reset } from 'ansi-colors';

//Action generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy =
                typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return { count: state.count + incrementBy };

        case 'DECREMENT':
            const decrementBy =
                typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return { count: state.count - decrementBy };
        case 'SET':
            return { count: action.count };
        case 'RESET':
            return { count: 0 };
    }

    return state;
}


const initialState = {
    count: 0
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

// unsubscribe();

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));

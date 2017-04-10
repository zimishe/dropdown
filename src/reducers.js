/**
 * Created by eugene on 10.04.17.
 */

import initialState from './store/initialState'
import { createStore } from 'redux'

let reducer = function reducer(state = initialState, action) {
    switch (action.type) {
        case 'COUNTRY_CHOSEN' : return {
            selectedCountryId: action.selectedCountryId,
            countries: state.countries
        };

        default : return state
    }
};

let store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store

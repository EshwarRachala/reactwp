import {
  APP_NAME
} from '../actionTypes';


let initialState = {
    name: 'jason'
};


export function reducer (state = initialState, action) {
    switch (action.type) {
        case APP_NAME:
            return Object.assign({}, state, {
                name: action.name
            });
        default:
            return state;
    }
}

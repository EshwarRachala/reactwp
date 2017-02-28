// import fetch from 'isomorphic-fetch';
import {
  APP_NAME
} from '../actionTypes';


export function changeName (name) {
    return {
        type: APP_NAME,
        name
    };
}

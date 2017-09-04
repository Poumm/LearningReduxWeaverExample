import {FETCH_WEATHER} from '../actions/index';

export default function(state=[], action){
    console.log('Action reçue : ' , action.type);

    switch(action.type){

        case FETCH_WEATHER : 
            console.log('Here I am', action.payload);
            return [ action.payload.data, ...state ]; 
            
    }

    return state;
}
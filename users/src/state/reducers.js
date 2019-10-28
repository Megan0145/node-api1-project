import * as types from './actionTypes';

const initState = {
    users: []
}

export function userReducer(state = initState, action){
    switch(action.type){
        case types.GET_USERS: 
            return {users: action.payload}
            case types.DELETE_USER:
                return {...state.users, users: state.users.filter(user => {return user.id != action.payload})}
        default: 
        return state;
    }
}
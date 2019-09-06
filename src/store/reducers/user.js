import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT
} from '../actions/actionsTypes'

const initialize = {
    name: null,
    email: null
}

const reducer = (state = initialize, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email
            }
        case USER_LOGGED_OUT:
            return {
                ...state,
                name: null,
                email: null
            }
        default:
            return state
    }
}

export default reducer
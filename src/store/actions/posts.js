import { ADD_POST, ADD_COMMENT } from './actionsTypes'

export const addPost = post => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export const addComment = comment => {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}


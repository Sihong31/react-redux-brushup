import {
    FETCH_PUPPY,
    FETCH_PUPPIES,
    CREATE_PUPPY,
    EDIT_PUPPY,
    DELETE_PUPPY
} from './types';

export const fetchPuppy = (puppyId) => {
    return { type: FETCH_PUPPY, payload: puppyId }
}

export const fetchPuppies = () => {
    return { type: FETCH_PUPPIES }
}

export const createPuppy = (newPuppy) => {
    return { type: CREATE_PUPPY, payload: newPuppy }
}

export const editPuppy = (puppyId, updatedPuppy) => {
    return { type: EDIT_PUPPY, payload: {puppyId, updatedPuppy} }
}

export const deletePuppy = (puppyId) => {
    return { type: DELETE_PUPPY, payload: puppyId }
}
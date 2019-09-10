import {
    FETCH_PUPPY,
    FETCH_PUPPIES
} from './types';

export const fetchPuppy = (puppyId) => {
    return { type: FETCH_PUPPY, payload: puppyId }
}

export const fetchPuppies = () => {
    return { type: FETCH_PUPPIES }
}
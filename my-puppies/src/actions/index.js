import {
    FETCH_PUPPY,
    FETCH_PUPPIES
} from './types';

export const fetchPuppy = () => {
    return { type: FETCH_PUPPY }
}

export const fetchPuppies = () => {
    return { type: FETCH_PUPPIES }
}
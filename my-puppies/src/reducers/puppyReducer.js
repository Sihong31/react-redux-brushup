import {
    FETCH_PUPPIES,
    FETCH_PUPPY,
    CREATE_PUPPY,
    EDIT_PUPPY,
    DELETE_PUPPY
} from '../actions/types';

const MOCK_PUPPIES = {
    0: {
        name: 'Puppy 1',
        age: 1,
        weight: 25,
        price: 140,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_960_720.jpg'
    },
    1: {
        name: 'Puppy 2',
        age: 3,
        weight: 40,
        price: 150,
        imageUrl: 'https://cdn.pixabay.com/photo/2016/02/25/10/31/puppy-1221791_960_720.jpg'
    },
    2: {
        name: 'Puppy 3',
        age: 2,
        weight: 55,
        price: 125,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/07/31/11/43/rottweiler-869018_960_720.jpg'
    },
    3: {
        name: 'Puppy 4',
        age: 3,
        weight: 37,
        price: 110,
        imageUrl: 'https://cdn.pixabay.com/photo/2016/11/01/23/38/beach-1790049_960_720.jpg'
    },
}

export default (state = MOCK_PUPPIES, action) => {
    switch(action.type) {
        case FETCH_PUPPIES:
            return { ...state };
        case FETCH_PUPPY:
            const puppiesCopy = { ...state };
            return { ...state, [action.payload]: puppiesCopy[action.payload] };
        case CREATE_PUPPY:
            const currentCountIncrement = Object.keys({ ...state}).length;
            return { ...state, [currentCountIncrement]: action.payload };
        case EDIT_PUPPY:
            return { ...state};
        case DELETE_PUPPY:
            return { ...state};
        default:
            return state;
    }
}
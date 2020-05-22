import React, {createContext, useReducer} from 'react';
import { bookReducers } from '../reducers/bookReducers';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducers,[ ])
    
    return(
        <BookContext.Provider value = {{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
import React, {createContext, useReducer} from 'react';
import { bookReducers } from '../reducers/bookReducers';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducers,[
        { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
        { title: 'the final empire', author: 'brandon sanderson', id: 2 },
    ])
    
    return(
        <BookContext.Provider value = {{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
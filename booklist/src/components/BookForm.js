import React, {useContext, useState} from 'react';
import {BookContext} from '../contexts/BookContext';


const NewBookForm = () => {
    const { dispatch } = useContext(BookContext);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:"Add_Book", book:{title, author}});

        setTitle("");
        setAuthor("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder = "Add title" value={title}  onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder = "Add author" value={author} onChange={(e) => setAuthor(e.target.value)}required/>
            <input type="submit" value="Add a new book"/>
        </form>
    )
}

export default NewBookForm;
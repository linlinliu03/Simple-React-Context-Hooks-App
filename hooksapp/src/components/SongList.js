import React, {useState, useEffect} from 'react';
import NewSongForm from './NewSongForm';


const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'almost home', id: 1 },
        { title: 'memory gospel', id: 2 },
        { title: 'this wild darkness', id: 3 }
    ])

    const [age, setAge] = useState(20);

    const addSong = (title) => {
        setSongs([...songs, { title, id: Math.floor((Math.random() * 100) + 1)}])
    }
    
    useEffect(() => {
        console.log(songs)
    }, [songs])

    useEffect(() => {
        console.log(age)
    }, [age])

    const changeAge = () => {
        setAge(age + 1)
    }

    return(
       <div className="song-list">
          <ul>
            {songs.map(song => {
                return (<li key={song.id}>{song.title}</li>)
            })}
          </ul>
          <NewSongForm addSong={addSong}/>
          <button onClick={changeAge}>Add age</button>
       </div>
    )
}

export default SongList;


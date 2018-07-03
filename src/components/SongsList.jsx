import * as React from 'react'

export default function SongsList(props) {
  return (<div>
    <h1>Songs List</h1>
    <ul>
      { props.songs.map(song =>
        <li key={song.id} onClick={() => props.selectSong(song.id)}>
          { song.name && song.artist }
        </li>
      ) }
    </ul>
  </div>)
}

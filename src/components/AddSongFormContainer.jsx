import * as React from 'react'
import AddSongForm from './AddSongForm'
import { connect } from 'react-redux'

class AddSongFormContainer extends React.PureComponent {
  addSong = (song, targetPlaylist) => {
this.props.dispatch({
  type: 'ADD_SONG',
  payload: {
    playlist: targetPlaylist,
    id: Math.ceil(Math.random()*10000),
    ...song
    }
  })
}

  render() {

    return <AddSongForm addSong={this.addSong} />
  }
}

export default connect(null)(AddSongFormContainer)

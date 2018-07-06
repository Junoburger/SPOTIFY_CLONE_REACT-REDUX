import * as React from 'react'
import AddSongForm from './AddSongForm'
import { connect } from 'react-redux'

class AddSongFormContainer extends React.PureComponent {
  addSong = (song, targetPlaylist) => {
    console.log(song)
    const songId = Math.ceil(Math.random()*10000)
    this.props.dispatch({
      type: 'ADD_SONG',
      payload: {
        song: {id: songId, ...song },
        playlist: targetPlaylist,

        }
      })
}

  render() {

    return <AddSongForm addSong={this.addSong} />
  }
}
const mapStateToProps = (state) => {
console.log(state.playLists);
  return {
    playLists: state.playLists
  }
}

export default connect(mapStateToProps)(AddSongFormContainer)

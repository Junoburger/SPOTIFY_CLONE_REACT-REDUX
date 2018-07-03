import * as React from 'react'
import SongsList from './SongsList'
import { connect } from 'react-redux'

class SongsListContainer extends React.PureComponent {

  selectSong = (id) => {
  this.props.dispatch({
    type: 'SELECT_SONG',
    payload: id
  })
}
  selectSong(id) {
    console.log('selected song:', id)
  }

  render() {
    return <SongsList songs={this.props.songs} selectSong={this.selectSong} />
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state
  }
}

export default connect(mapStateToProps)(SongsListContainer)

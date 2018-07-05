import * as React from 'react'
import PlayList from './PlayList'
import { connect } from 'react-redux'

class PlayListsContainer extends React.PureComponent {


  selectSong = (id) => {
  this.props.dispatch({
    type: 'SELECT_SONG',
    payload: id
  })
}

  selectSong(id) {
    console.log('selected song:', id)
  }
  selectList = (id) => {
    this.props.dispatch({
      type: 'SELECT_LIST',
      payload: id
    })
  }

    selectList(id) {
      console.log('selected song:', id)
    }

    render() {
        const playlistsArray = this.props.playLists
        // console.log(playlistsArray)
        return (
            playlistsArray.map((playlist) => <PlayList
                playLists={playlist}
                selectSong={this.selectSong}
                selectList={this.selectList}
                key={playlist.id}
            />)

        )
    }








}

const mapStateToProps = (state) => {
// console.log(state.playLists);
  return {
    playLists: state.playLists



  }
}

export default connect(mapStateToProps)(PlayListsContainer)

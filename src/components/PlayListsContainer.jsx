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
      type: 'SELECT_SONG',
      payload: id
    })
  }

    selectList(id) {
      console.log('selected song:', id)
    }


  render() {
    return <PlayList
                          playLists={this.props.playLists}
                          selectSong={this.selectSong}
                          selectList={this.selectList}
                      />
  }
}

const mapStateToProps = (state) => {
// console.log(state.playLists);
  return {
    playLists: state.playLists



  }
}

export default connect(mapStateToProps)(PlayListsContainer)

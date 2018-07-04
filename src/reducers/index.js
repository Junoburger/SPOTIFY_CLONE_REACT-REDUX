import { combineReducers } from 'redux'
import songsList from './songsList'
import addSong from './addSong'
import addList from './addList'
import selectList from './selectList'
import selectedSong from './selectSongs'

export default combineReducers({
  addSong,
  addList,
songsList,
selectedSong,
selectList

})

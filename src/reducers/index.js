import { combineReducers } from 'redux'
import playLists from './playLists'
// import addSong from './addSong'
// import addList from './addList'
import selectList from './selectList'
import selectedSong from './selectSongs'

export default combineReducers({

playLists,
selectedSong,
selectList

})

import * as React from 'react'
import AddSongFormContainer from './AddSongFormContainer'


export default class SongsList extends React.Component{
  constructor() {
      super()

      this.state = {
        clicked: false
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState({
        clicked: !this.state.clicked
      })

    }

render(){
  // const newList = this.props.songsList.concat()
  // console.log(this.props.songsList[2]);
  // console.log(newList);
  return (<div>
    <button  onClick={this.handleClick}><h1>My Play Listno.1</h1></button>
{this.state.clicked ?   <ul>
      { this.props.songsList.map(song =>
        <li key={song.id} onClick={() => this.props.selectSong(song.id)}>
          <b>{song.title}</b><br/>
            By:
            <br/>
            <h3><b>{song.artist}</b></h3><br/>
             Appears on:
              <b>{song.album}</b><br/><br/>
        </li>
      ) }
      <AddSongFormContainer/>
    </ul>


     : null}

  </div>)
  }
}

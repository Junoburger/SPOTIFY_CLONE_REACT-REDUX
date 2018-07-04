import * as React from 'react'
import AddSongFormContainer from './AddSongFormContainer'


export default class PlayList extends React.Component{
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
      console.log(this.props.selectList.name)

    }


render(){
  console.log(this.props);
// console.log(this.props.playLists[0].data);
  return (<div>
    <button  onClick={this.handleClick}><h1>{this.props.playLists[0].title}</h1></button>
{this.state.clicked ?
  <ul>
      { this.props.playLists[0].data.map(song =>
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

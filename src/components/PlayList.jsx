import * as React from 'react'
import AddSongFormContainer from './AddSongFormContainer'

export default class PlayList extends React.Component {
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

  render() {
    console.log(this.props.selectList);

    return (<div>
      <button onClick={this.handleClick}>
        <h1>{this.props.playLists.title}</h1>
      </button>
      {
        this.state.clicked
          ? <ul>
              {
                this.props.selectList && this.props.playLists.data.map(song => <li key={song.id} onClick={() => this.props.selectSong(song.id)}>
                  <b>{song.title}</b><br/>
                  By:
                  <br/>

                  <h3>
                    <b>{song.artist}</b>
                  </h3><br/>
                  Appears on:
                  <b>{song.album}</b><br/><br/>
                  <hr/>

                </li>)
              }
              <AddSongFormContainer/>
            </ul>

          : null
      }

    </div>)
  }
}

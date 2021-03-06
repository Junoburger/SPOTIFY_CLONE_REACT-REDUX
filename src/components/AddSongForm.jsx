import * as React from 'react'

export default class AddSongForm extends React.PureComponent {
  constructor() {
      super();

      this.state = {
        clicked: false
      };

      this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      this.setState({
        clicked: !this.state.clicked
      })
    }

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
// console.log(name, value)
// console.log(this.state);
    this.setState({
      [name]: value
    })
  }
  handleSubmit = (event) => {
  event.preventDefault()

  if (this.state.title && this.state.artist) {

    let song = {
      title: this.state.title,
      artist: this.state.artist,
      album: this.state.album
    }
    let selectedPlayList = 1
    // this.state.playLists //Fix this later :)
    this.props.addSong(song, selectedPlayList)
  }
}

  render() {
    console.log(this.props.addSong);


    return (<div>
      <button onClick={this.handleClick}><h2>New Song+</h2></button>

  {this.state.clicked ?
     <form onSubmit={this.handleSubmit}>
        <label>
          Song Title:
          <input type="text" name="title" onChange={this.handleChange} />
        </label>
        <label>
        <br/>  Artist:
          <input type="text" name="artist" onChange={this.handleChange} />
        </label>
        <label>
        <br/>  Album:
          <input type="text" name="album" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      : null}
    </div>)
  }

}

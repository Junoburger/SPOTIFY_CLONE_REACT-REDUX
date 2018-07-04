import * as React from 'react'

export default class AddListForm extends React.PureComponent {
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
// console.log(value);
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.title) {
      this.props.addList({
        title: this.state.title
      })
    }
  }

  render() {
    return (<div>
      <button onClick={this.handleClick}><h2>New List+</h2></button>

  {this.state.clicked ?
     <form onSubmit={this.handleSubmit}>
        <label>
          Playlist Title:
          <input type="text" name="title" onChange={this.handleChange} />
        </label>


        <input type="submit" value="Submit" />
      </form>
      : null}
    </div>)
  }
  // add this to songsList Create here just one input for a name(of the playlist)
}

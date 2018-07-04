import React, {Component} from 'react';
import './App.css';
import SongsListContainer from './components/SongsListContainer'
import AddListFormContainer from './components/AddListFormContainer'


class App extends Component {
  render() {
    return (<div className="App">
      <SongsListContainer/>
      <AddListFormContainer/>
    </div>);
  }
}

export default App;

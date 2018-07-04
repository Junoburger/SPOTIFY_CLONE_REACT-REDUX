import React, {Component} from 'react';
import './App.css';
import PlayListsContainer from './components/PlayListsContainer'
import AddListFormContainer from './components/AddListFormContainer'


class App extends Component {

  render() {
    return (<div className="App">
        <header className="App-header"></header>
      <PlayListsContainer/>
      <AddListFormContainer/>
    </div>);
  }
}

export default App;

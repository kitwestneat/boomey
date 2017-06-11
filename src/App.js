import assert from 'assert';
import React, { Component } from 'react';
import NameForm from './NameForm';
import Page from './Page';
import book from './data/book';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      page: 'start',
    };

    this.setName = this.setName.bind(this);
    this.setPage = this.setPage.bind(this);

  }

  setName(name) {
    assert(typeof name == 'string');

    this.setState({
      name,
      page: this.state.page,
    });
  }

  setPage(page) {
    this.setState({
      name: this.state.name,
      page,
    });
  }

  displayPage() {
    return (
      <Page choose={this.setPage} page={book[this.state.page]} />
    );
  }

  getName() {
      return (<NameForm setName={this.setName} />);
  }

  render() {
    let frame;
    let welcome = 'Welcome to Boomey';

    if (this.state.name) {
      frame = this.displayPage();
      welcome += ', ' + this.state.name;
    } else {
      frame = this.getName();
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{welcome}</h2>
        </div>
        {frame}
      </div>
    );
  }
}

export default App;

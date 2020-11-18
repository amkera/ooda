import React, { Component } from 'react';
import SearchForm from './searchForm'
import Header from './Header';


class App extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     data: [],
  //   };
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm />
      </div>
    )
  }

}

export default App;

import React from 'react';
import SearchForm from './components/SearchForm'

class App extends React.Component {

  //  //https://cors-anywhere.herokuapp.com/https://npiregistry.cms.hhs.gov/api/?version=2.1&first_name=


  render() {
    return (
      <div className="App">
        <SearchForm />
      </div>
    )
  }
}

export default App;

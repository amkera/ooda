import React from 'react';

class SearchForm extends React.Component {
  // const api = 'https://npiregistry.cms.hhs.gov/api/?version=2.1'

  state = { searchInput: '' }

  handleChange = (event) => {
    debugger
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFirstNameSubmit = (event) => {

  }

  render() {

    return (
      <div>

        <form >
          <label>Search by provider first name</label>
           <input
              type="text"
              placeholder="First Name"
              name="searchInput"
              value={this.state.searchInput}
              onChange={this.handleChange}
            />
            <br/>
          <input type="submit" />
        </form>

        <form onSubmit={this.handleLastNameSubmit}>
          <label>Search by provider last name</label>

            <input
              type="text"
              placeholder="Last Name"
              name="searchInput"
              value={this.state.searchInput}
              onChange={this.handleChange}
            />
            <br/>
          <input type="submit" />
        </form>

        <form onSubmit={this.handleOrgSubmit}>
          <label>Search by provider organization name</label>
            <input
              type="text"
              placeholder="Organization Name"
              name="searchInput"
              value={this.state.searchInput}
              onChange={this.handleChange}
            />
            <br/>
          <input type="submit" />
        </form>

      </div>
    )
  }

}

export default SearchForm

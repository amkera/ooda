import React from 'react';

class SearchForm extends React.Component {

  // const API = 'https://npiregistry.cms.hhs.gov/api/?version=2.1'


  state = { searchInput: '' }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>

        <form>
          <label>Search by provider first name</label>
           <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.searchInput}
            />
            <br/>
          <input type="submit" />
        </form>

        <form>
          <label>Search by provider last name</label>

            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.searchInput}
            />
            <br/>
          <input type="submit" />
        </form>

        <form>
          <label>Search by provider organization name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.searchInput}
            />
            <br/>
          <input type="submit" />
        </form>

      </div>
    )
  }

}

export default SearchForm

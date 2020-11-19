import React from 'react';
import axios from 'axios'
import ProviderCard from './ProviderCard'
//sends JSON back

class Search extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      org: '',
      results: {},
      loading: false,
      message: ''
    }

    this.cancel = '';
  }

      //const searchAPI = `https://cors-anywhere.herokuapp.com/https://npiregistry.cms.hhs.gov/api/?version=2.1&first_name=${formData.firstName}&use_first_name_alias&last_name=${formData.lastName}&organization_name=${formData.org}`
      //https://npiregistry.cms.hhs.gov/api/?number=&enumeration_type=&taxonomy_description=&first_name=james&use_first_name_alias=&last_name=johnson&organization_name=&address_purpose=&city=&state=&postal_code=&country_code=&limit=&skip=&version=2.1

  fetchSearchResults = (event) => {
    event.preventDefault()
    const formData = {
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "org": this.state.org
    }
    const longSearchAPI = `https://cors-anywhere.herokuapp.com/https://npiregistry.cms.hhs.gov/api/?number=&enumeration_type=&taxonomy_description=&first_name=${formData.firstName}&use_first_name_alias=&last_name=${formData.lastName}&organization_name=${formData.org}&address_purpose=&city=&state=&postal_code=&country_code=&limit=&skip=&version=2.1`
    if ( this.cancel ) {
      this.cancel.cancel();
    }
    //cancel tokens help performance because state changes with every user input, slowing app down.
    //cancel tokenas cancel the previous request. If this.cancel has a value, I want to cancel prev req before making a new one.
    this.cancel = axios.CancelToken.source();
    //create a token
    axios.get(longSearchAPI, {
      cancelToken: this.cancel.token
    })
    .then(response => {
      this.setState({
        results: response.data.results,
        loading: false,
        message: 'data found'
      })
    })
  }
  //name / org name, npi number, addresses, and practice locations.

  //console.log(response.data.results)

  handleOnInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderSearchResults = () => {

    const results = this.state.results;
    console.log(results)

    if (Object.keys(results).length && results.length) {
      return (
        <div className="results-container">
          {results.map(result => {
            return (
              <ul key={result.number} className="provider-item">
                <h5>
                  <p> First Name: {result["basic"]["first_name"]} </p>
                  <p> Last Name: {result["basic"]["last_name"]}  </p>
                  <p> NPI Number: {result["number"]} </p>
                  <p> Addresses: {result["addresses"].forEach(address => (
                                <li> { address.country_code } </li>
                             ))}</p>

                  <p> Practice Locations: </p>
                  <p> URL: <a href={`https://npiregistry.cms.hhs.gov/registry/search-results-table?number=${result["number"]}&addressType=ANY`}>Link to NPI Registry</a> </p>

                </h5>
                <br/>
              </ul>
            )
          })}

        </div>
      )
    }

  }

  render() {

    return (
      <div className="container">
      <h2 className="heading">Search Providers</h2>
        <form onSubmit={this.fetchSearchResults}>

          <label>Provider First Name </label>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            id="firstName"
            value={this.state.firstName}
            onChange={this.handleOnInputChange}
          />
          <br/>

          <label>Provider Last Name </label>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            id="lastName"
            value={this.state.lastName}
            onChange={this.handleOnInputChange}
          />
          <br/>

          <label>Provider Organization </label>
          <input
            type="text"
            placeholder="Organization Name"
            name="org"
            id="org"
            value={this.state.org}
            onChange={this.handleOnInputChange}
          />
          <br/>

          <input type="submit" />

        </form>

        {this.renderSearchResults()}

      </div>
    )
  }

}

export default Search;

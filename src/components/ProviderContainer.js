import React from 'react';
import ProviderCard from './ProviderCard'
import SearchForm from './SearchForm'


class ProviderContainer extends React.Component {

  //  //https://cors-anywhere.herokuapp.com/https://npiregistry.cms.hhs.gov/api/?version=2.1&first_name=


  render() {
    return (
      <div className="provider-container">
        <SearchForm />
        <ProviderCard />
      </div>
    )
  }
}

export default ProviderContainer;

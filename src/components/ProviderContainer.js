import React from 'react';
import ProviderCard from './ProviderCard'
import SearchForm from './SearchForm'


class ProviderContainer extends React.Component {

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

//need to figure out how to get these two children components to talk to each other, or should
//I refactor so the majority of the functions from SearchForm are inside here
//and I pass them down as props?

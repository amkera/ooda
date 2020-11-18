// import React from 'react';
// import '../search.css'
// import axios from 'axios'
// //sends JSON back
//
// class Search extends React.Component {
//
//   constructor(props) {
//     super(props)
//
//     this.state = {
//
//       query: {
//         firstName: '',
//         lastName: '',
//         org: '',
//
//       },
//       results: {},
//       loading: false,
//       message: ''
//     }
//   }
//
//   fetchSearchResults = (query) => {
//     const searchAPI = `https://cors-anywhere.herokuapp.com/https://npiregistry.cms.hhs.gov/api/?version=2.1&first_name=${query}`
//     //https://npiregistry.cms.hhs.gov/api/?number=&enumeration_type=&taxonomy_description=&first_name=james&use_first_name_alias=&last_name=johnson&organization_name=&address_purpose=&city=&state=&postal_code=&country_code=&limit=&skip=&version=2.1
//
//
//   }
//
//   handleOnInputChange = (event) => {
//     // this.setState({
//     //   [event.target.name]: event.target.value
//     // })
//     // console.log(this.state)
//     debugger
//     const query = event.target.value
//     //debugger
//     // this.setState( state: {query: query, loading: true, message: ''})
//     this.setState( { query, results: {}, loading: true, message: '' } )
//   }
//
//   render() {
//     const query = this.state.query
//     console.log(this.state)
//     return (
//       <div className="container">
//       <h2 className="heading">Search Providers</h2>
//       <form>
//         <label className="search-label" htmlFor="search-input">
//           <input
//             type="text"
//             name="query"
//             value={query}
//             id="search-input"
//             onChange={this.handleOnInputChange}
//           />
//         </label>
//         <i className="fa fa-search search-icon" aria-hidden="true"/>
//       </form>
//
//
//       </div>
//     )
//   }
// }
//
// export default Search;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import getSearchResults from './services/wikiService';
import SearchResultComponent from './searchResultComponent.js'




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";


class SearchBar extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      search_input: '', 
      redirectToResults : false, 
      searchResults: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //console.log(getSearchResults('apple'));
  }

  handleChange(e)
  {
    this.setState({search_input: e.target.value})
  }

  handleSubmit(e) {
    alert('A search was submitted:' + this.state.search_input);
    e.preventDefault();
    fetch('http://en.wikipedia.org/w/api.php?' + '&origin=*' + '&action=query' + 
    '&list=search'+ '&srsearch='+ encodeURI(this.state.search_input) + '&format=json')
      .then(response => {
        console.log(response);
        return response.json()
      })
        .then(data => this.setState({
          searchResults : data
        }))

        console.log('results'  + this.state.searchResults);
    this.setState( {
      redirectToResults: true
      } 
    )


    }

  render()
  {
    if (this.state.redirectToResults === true) {
      return <Redirect to={{
        pathname:'/results',
        searchResults: this.state.searchResults}}
      />
    }
    return(
        <div>
          <h1>
            Wiki Viewer

          </h1>

          <form onSubmit={this.handleSubmit}>
            <input type = "text" 
            placeholder = "Search Wikipedia" 
            value = {this.state.search_input}
            onChange = {this.handleChange}
            />
              <input type="submit" value="Submit" />
          </form>
        </div>
    )

  }

}


function App() {
  return (
    <Router>
       
      <Switch>
        <Route exact path = "/">
          <SearchBar/>
        </Route>
        <Route exact path = "/results">
          <SearchResultComponent />
        </Route>
      </Switch>
     
    </Router>
   
  )

}

export default App;

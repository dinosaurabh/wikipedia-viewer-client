import React from 'react';
import logo from './logo.svg';
import './App.css';


class SearchBar extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {search_input: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e)
  {
    this.setState({search_input: e.target.value})
  }

  handleSubmit(e) {
    alert('A search was submitted: ' + this.state.search_input);
    e.preventDefault();
  }

  render()
  {
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
    <SearchBar />
  )

}

export default App;

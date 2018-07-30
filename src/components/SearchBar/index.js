import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

class Search extends Component {
  state = {
    query: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.setWeather(this.state.query);
  };

  render() {
    return (
      <form>
        <Input
          defaultValue="Hello world"
          value={this.state.query}
          name="query"
          onChange={this.handleInputChange}
        />
        <Button onClick={this.handleSubmit} variant="contained" color="primary">
          Search
        </Button>
      </form>
    );
  }
}

export default Search;

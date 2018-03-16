import React, { Component } from "react";
import axios from "axios";
import "./style.css";

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
    axios
      .get("https://swapi.co/api/people")
      .then(data => {
        this.setState({
          items: data.data.results,
          loading: false
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const things = this.state.items;
    return (
      <div>
        {this.state.loading && <div className="loader">Loading...</div>}
        {things.map(p => (
          <div key={`${p.name}`} className="item">
            <h2>{p.name}</h2>
            Birth year: {p.birth_year} <br />
            Eye color: {p.eye_color} <br />
            Hair color: {p.hair_color} <br />
          </div>
        ))}
      </div>
    );
  }
}

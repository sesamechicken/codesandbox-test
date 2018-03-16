import React, { Component } from "react";
import "./style.css";

export class Search extends Component {
  render() {
    return (
      <input
        className="search-input"
        type="search"
        placeholder="Searcharoo..."
      />
    );
  }
}

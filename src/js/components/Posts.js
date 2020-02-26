import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props)
    return (
      <ul>
        {this.props.articles.map(el => (
          <li key={el.name}>{el.name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return { articles: state.countries }
}

export default connect(
  mapStateToProps,
  { getData }
)(Post);
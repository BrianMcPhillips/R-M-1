import React, { Component } from 'react';
import PropTypes from 'prop-types';

const URL = process.env.REACT_APP_URL;
export default class DetailPage extends Component {
  state = {
    characterData: {}
  }
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidMount = () => {
    const id = this.props.match.params.id;
    fetch(`${URL}/api/character/${id}`)
      .then(res => res.json())
      .then(character => this.setState({ characterData: character }));
  }

  render() {
    const {
      characterData: {
        name,
        image,
        status
      }
    } = this.state;
    return (
      <div>
        <img src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{status}</p>
        </div>
      </div>
    );
  }
}

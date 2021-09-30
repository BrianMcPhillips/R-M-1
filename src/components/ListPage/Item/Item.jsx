import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Item extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired
  }
  render() {
    const {
      data: {
        name,
        image,
        status,
        location
      }
    } = this.props;
    return (
      <div>
        <img src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <h4>{location.name}</h4>
          <p>{status}</p>
        </div>
      </div>
    );
  }
}


import React from 'react';
import PropTypes from 'prop-types';

const Item = ({
  data: {
    name,
    image,
    status,
    location
  }
}) => (
  <div>
    <img src={image} alt={name} />
    <div>
      <h3>{name}</h3>
      <h4>{location.name}</h4>
      <p>{status}</p>
    </div>
  </div>
);

Item.propTypes = {
  data: PropTypes.object.isRequired,
  name: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string,
  location: PropTypes.object
};

export default Item;

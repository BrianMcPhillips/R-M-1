import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.css';

const Item = ({
  data: {
    name,
    image,
    status,
    location
  }
}) => (
  <div className={styles.card}>
    <img src={image} alt={name} />
    <div className={styles.info}>
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

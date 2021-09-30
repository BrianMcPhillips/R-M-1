import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.css';
import { Link } from 'react-router-dom';

const Item = ({
  data: {
    id,
    name,
    image,
    status,
    location
  }
}) => (
  <div className={styles.card}>
    <Link to={`/detail/${id}`}>
      <img src={image} alt={name} />
    </Link>
    <div className={styles.info}>
      <h3>{name}</h3>
      <h4>{location.name}</h4>
      <p>{status}</p>
    </div>
  </div>
);

Item.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string,
  location: PropTypes.object
};

export default Item;

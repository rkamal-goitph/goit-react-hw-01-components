import React from 'react';
import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';
import styles from './MenuItem.module.css'; // Ensure the stylesheet is imported

class MenuItem extends React.Component {
  getClassNameForAvailability(availability) {
    switch (availability) {
      case 'Available':
        return styles.available;
      case 'Few Left':
        return styles.fewLeft;
      case 'Not Available':
        return styles.notAvailable;
      case 'Seasonal':
        return styles.seasonal;
      default:
        return '';
    }
  }

  // Its invalid syntax for us to pass any parameter to the render method
  // For us to access props in the render method, we have to destructure them from this.props.

  render() {
    const { name, description, imageUrl, price, availability } = this.props;

    const availabilityClass = this.getClassNameForAvailability(availability);

    return (
      <div className={`${styles.menuItemContainer} ${availabilityClass}`}>
        <img src={imageUrl} alt={name} className={styles.menuItemImage} />
        <h2 className={styles.menuItemName}>
          <AiFillCheckCircle
            className={`${styles.menuItemIcon} ${availabilityClass}`}
          />
          {name}
        </h2>
        <p className={styles.menuItemDescription}>{description}</p>
        <p className={styles.menuItemPrice}>
          Price: ${price.individual.toFixed(2)}
        </p>
      </div>
    );
  }
}

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.shape({
    individual: PropTypes.number.isRequired,
  }).isRequired,
  availability: PropTypes.string.isRequired,
};

export default MenuItem;

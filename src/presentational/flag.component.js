import React from 'react';
import styles from '../country.css';

const CountryFlag = (props) => (
    <div className="country-logo-wrapper" style={styles}>
        <img className="country-logo" src={props.country.imageUrl} style={styles} alt="country pic" />
    </div>
);

export default CountryFlag;
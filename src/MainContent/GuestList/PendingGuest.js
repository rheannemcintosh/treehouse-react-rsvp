/**
 * PendingGuest.js
 * 
 * @file Manages the Pending Guest Component
 * @author Rheanne McIntosh <rheanne.mcintosh@outlook.com>
 */

// Import Statements
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Create the PendingGuest Component
 * 
 * @param {*} props 
 */
const PendingGuest = props => {
    if (props.name) {
        return (
            <li className="pending">
                <span>{props.name}</span>
            </li>
        );
    }
    return null;
};

// Set the PendingGuest Prop Types
PendingGuest.propTypes = {
    name: PropTypes.string.isRequired,
};

// Export the PendingGuest Component
export default PendingGuest;
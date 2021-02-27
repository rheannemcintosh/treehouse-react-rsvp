/**
 * ConfirmedFilter.js
 * 
 * @file Manages the ConfirmedFilter Component
 * @author Rheanne McIntosh <rheanne.mcintosh@outlook.com>
 */

// Import Statements
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Create the ConfirmedFilter Component
 * 
 * @param {*} props 
 */
const ConfirmedFilter = props =>
    <div>
        <h2>Invitees</h2>
        <label>
            <input 
                type     = "checkbox"
                onChange = {props.toggleFilter}
                checked  = {props.isFiltered}
            />{" "}
            Hide those who haven't responded
        </label>
    </div>

// Set the ConfirmedFilter Prop Types
ConfirmedFilter.propTypes = {
    toggleFilter: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
}

// Export the ConfirmedFilter Component
export default ConfirmedFilter;
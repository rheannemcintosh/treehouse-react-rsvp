/**
 * GuestName.js
 * 
 * @file Manages the Guest Name Component
 * @author Rheanne McIntosh <rheanne.mcintosh@outlook.com>
 */

// Import Statements
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Create the GuestName Component
 * 
 * @param {*} props 
 */
const GuestName = props => {
    if (props.isEditing) {
        return (
            <input 
                type="text"
                value={props.children}
                onChange={props.handleNameEdits}
            />
        );
    }
    return (
        <span>{props.children}</span>
    );
};

// Set the GuestName Prop Types
GuestName.propTypes = {
    isEditing:       PropTypes.bool.isRequired,
    handleNameEdits: PropTypes.func.isRequired,
}

// Export the GuestName Component
export default GuestName;
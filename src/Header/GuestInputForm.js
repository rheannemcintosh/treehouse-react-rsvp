/**
 * GuestInputForm.js
 * 
 * @file Manages the Guest Input Form Component
 * @author Rheanne McIntosh <rheanne.mcintosh@outlook.com>
 */

// Import Statements
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Create the GuestInputForm Component
 * 
 * @param {*} props 
 */
const GuestInputForm = props =>
    <form onSubmit={props.newGuestSubmitHandler}>
        <input 
            type        = "text"
            onChange    = {props.handleNameInput}
            value       = {props.pendingGuest}
            placeholder = "Invite Someone"
        />
        <button type="submit" name="submit" value="submit">Submit</button>
    </form>

// Set the GuestInputForm Prop Types
GuestInputForm.propTypes = {
    newGuestSubmitHandler: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired,
}

// Export the Header Component
export default GuestInputForm;
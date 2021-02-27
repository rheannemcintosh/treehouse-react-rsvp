/**
 * Header.js
 * 
 * @file Manages the Header Component
 * @author Rheanne McIntosh <rheanne.mcintosh@outlook.com>
 */

// Import Statements
import React from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from './GuestInputForm';

/**
 * Create the Header Component
 * 
 * @param {*} props 
 */
const Header = props =>
    <header>
        <h1>RSVP</h1>
        <p>Guest Monitoring System</p>
        <GuestInputForm
            newGuestSubmitHandler = {props.newGuestSubmitHandler}
            pendingGuest          = {props.pendingGuest}
            handleNameInput       = {props.handleNameInput}
        />
    </header>
	
// Set the Header Prop Types
Header.propTypes = {
    newGuestSubmitHandler: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired,
}

// Export the Header Component
export default Header;









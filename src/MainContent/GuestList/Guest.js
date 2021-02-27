/**
 * Guest.js
 * 
 * @file Manages the Guest Component
 * @author Rheanne McIntosh <rheanne.mcintosh@outlook.com>
 */

// Import Statements
import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName';

/**
 * Create the Guest Component
 * 
 * @param {*} props 
 */
const Guest = props =>
	<li>
		{/* Set the GuestName */}
		<GuestName 
			isEditing       = {props.isEditing}
			handleNameEdits = {e => props.setName(e.target.value)}
		>
			{props.name}
		</GuestName>

		{/* Set the Checkbox */}
		<label>
			<input 
				type     = "checkbox" 
				checked  = {props.isConfirmed}
				onChange = {props.handleConfirmation}
			/> Confirmed
		</label>

		{/* Change the button between save and edit */}
		<button onClick={props.handleEditing}>
			{props.isEditing ? "save" : "edit"}
		</button>

		{/* Button to remove a guest */}
		<button onClick={props.handleRemove}>remove</button>
	</li>

// Set the Guest Prop Types
Guest.propTypes = {
    name:               PropTypes.string.isRequired,
    isConfirmed:        PropTypes.bool.isRequired,
    isEditing:          PropTypes.bool.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    handleEditing:      PropTypes.func.isRequired,
    setName:            PropTypes.func.isRequired,
    handleRemove:       PropTypes.func.isRequired
}

// Export the Guest Component
export default Guest;
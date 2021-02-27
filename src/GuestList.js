/**
 * GuestList.js
 * 
 * @file Manages the GuestList Component
 * @author Rheanne McIntosh <rheanne.mcintosh@outlook.com>
 */

// Import Statements
import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest';

/**
 * Create the GuestList Component
 * 
 * @param {*} props 
 */
const GuestList = props =>
	<ul>
		{/* Set the PendingGuest Component */}
		<PendingGuest name={props.pendingGuest}/>

		{/* Filter and display the Guests */}
		{props.guests
			.filter(guest => !props.isFiltered || guest.isConfirmed)
			.map((guest, index) =>
				<Guest 
					key={index}
					name={guest.name}
					isConfirmed={guest.isConfirmed}
					isEditing={guest.isEditing}
					handleConfirmation={() => props.toggleConfirmationAt(index)}
					handleEditing={() => props.toggleEditingAt(index)}
					setName={text => props.setNameAt(text, index)}
					handleRemove={() => props.removeGuestAt(index) }
				/>
			)
		}
	</ul>

// Set the GuestList Prop Types
GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
};

// Export the GuestList
export default GuestList;
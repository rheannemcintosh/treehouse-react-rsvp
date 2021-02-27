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
					handleConfirmation={() => props.toggleConfirmation(guest.id)}
					handleEditing={() => props.toggleEditing(guest.id)}
					setName={text => props.setName(text, guest.id)}
					handleRemove={() => props.removeGuest(guest.id) }
				/>
			)
		}
	</ul>

// Set the GuestList Prop Types
GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    removeGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
};

// Export the GuestList
export default GuestList;
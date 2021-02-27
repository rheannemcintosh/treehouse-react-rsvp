/**
 * App.js
 * 
 * @file Manages the Main Application
 * @author Rheanne McIntosh <rheanne.mcintosh@outlook.com>
 */

// Import Statements
import React, { Component } from 'react';
import Header from './Header';
import MainContent from './MainContent';

/**
 * Create the App Component
 */
class App extends Component {

	// Set the initial State
	state = {
		isFiltered: false,
		pendingGuest: "",
		guests: [],
	};

	// Set the Last Guests ID
	lastGuestId = 0;

	/**
	 * Function to get the new guests ID
	 */
	newGuestId = () => {
		const id = this.lastGuestId;
		this.lastGuestId += 1;
		return id;
	};

	/**
	 * Function to toggle properties
	 * 
	 * @param {*} property 
	 * @param {*} id 
	 */
	toggleGuestProperty = (property, id) =>
		this.setState({
			guests: this.state.guests.map(guest => {
				if (id === guest.id) {
					return {
						...guest,
						[property]: !guest[property],
					};
				}
				return guest;
			})
		});

	/**
	 * Function to toggle confirmation
	 * 
	 * @param {*} id 
	 */
	toggleConfirmation = id =>
		this.toggleGuestProperty("isConfirmed", id);

	/**
	 * Function to remove a guest
	 * 
	 * @param {*} id 
	 */
	removeGuest = id =>
		this.setState({
			guests: this.state.guests.filter(guest => id !== guest.id)
		});

	/**
	 * Function to toggle the edit feature of a guest
	 * 
	 * @param {*} id 
	 */
	toggleEditing = id =>
		this.toggleGuestProperty("isEditing", id);

	/**
	 * Function to set the name of a guest
	 * 
	 * @param {*} name 
	 * @param {*} id 
	 */
	setName = (name, id) =>
		this.setState({
			guests: this.state.guests.map(guest => {
				if (id === guest.id) {
					return {
						...guest,
						name,
					};
				}
				return guest;
			})
		});

	/**
	 * Function to filter the guests
	 */
	toggleFilter = () =>
		this.setState({ isFiltered: !this.state.isFiltered });

	/**
	 * Function to update the name of a guest
	 * 
	 * @param {*} e 
	 */
	handleNameInput = e =>
		this.setState({ pendingGuest: e.target.value });

	/**
	 * Function to add a new guest
	 * 
	 * @param {*} e 
	 */
	newGuestSubmitHandler = e => {
		e.preventDefault();
		const id = this.newGuestId();
		this.setState({
			guests: [
				{
					name: this.state.pendingGuest,
					isConfirmed: false, 
					isEditing: false,
					id,
				},
				...this.state.guests
			],
			pendingGuest: '',
		});
	}

	/**
	 * Function to get the total number of guests
	 */
	getTotalInvited = () => this.state.guests.length;

	/**
	 * Function to get the total number fo attending guests
	 */
	getAttendingGuests = () =>
		this.state.guests.reduce(
			(total, guest) => guest.isConfirmed ? total + 1 : total,
			0,
		);

	render () {
		// Set the variables for the counter
		const totalInvited      = this.getTotalInvited();
		const numberAttending   = this.getAttendingGuests();
		const numberUnconfirmed = totalInvited - numberAttending;

		return (
			// Return the Components
			<div className="App">

				{/* Display the Header Component */}
				<Header
					newGuestSubmitHandler = {this.newGuestSubmitHandler}
					pendingGuest          = {this.state.pendingGuest}
					handleNameInput       = {this.handleNameInput}
				/>

				{/* Display the Main Content Component */}
				<MainContent
					toggleFilter         = {this.toggleFilter}
					isFiltered           = {this.state.isFiltered}
					totalInvited         = {totalInvited}
					numberAttending      = {numberAttending}
					numberUnconfirmed    = {numberUnconfirmed}
					guests               = {this.state.guests}
					toggleConfirmation   = {this.toggleConfirmation}
					toggleEditing        = {this.toggleEditing}
					setName              = {this.setName}
					removeGuest          = {this.removeGuest}
					pendingGuest         = {this.state.pendingGuest}
				/>
			</div>
		);
	}
}

// Export the App Component
export default App;

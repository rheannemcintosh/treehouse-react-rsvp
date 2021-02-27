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

	/**
	 * Function to toggle properties
	 * 
	 * @param {*} property 
	 * @param {*} indexToChange 
	 */
	toggleGuestPropertyAt = (property, indexToChange) =>
		this.setState({
			guests: this.state.guests.map((guest, index) => {
				if (index === indexToChange) {
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
	 * @param {*} index 
	 */
	toggleConfirmationAt = index =>
		this.toggleGuestPropertyAt("isConfirmed", index);

	/**
	 * Function to remove a guest
	 * 
	 * @param {*} index 
	 */
	removeGuestAt = index =>
		this.setState({
			guests: [
				...this.state.guests.slice(0, index),
				...this.state.guests.slice(index + 1),
			]
		});

	/**
	 * Function to toggle the edit feature of a guest
	 * 
	 * @param {*} index 
	 */
	toggleEditingAt = index =>
		this.toggleGuestPropertyAt("isEditing", index);

	/**
	 * Function to set the name of a guest
	 * 
	 * @param {*} name 
	 * @param {*} indexToChange 
	 */
	setNameAt = (name, indexToChange) =>
		this.setState({
			guests: this.state.guests.map((guest, index) => {
				if (index === indexToChange) {
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
		this.setState({
			guests: [
				{
					name: this.state.pendingGuest,
					isConfirmed: false, 
					isEditing: false,
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
					toggleConfirmationAt = {this.toggleConfirmationAt}
					toggleEditingAt      = {this.toggleEditingAt}
					setNameAt            = {this.setNameAt}
					removeGuestAt        = {this.removeGuestAt}
					pendingGuest         = {this.state.pendingGuest}
				/>
			</div>
		);
	}
}

// Export the App Component
export default App;

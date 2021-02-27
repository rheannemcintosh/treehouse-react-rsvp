/**
 * MainContent.js
 * 
 * @file Manages the MainContent Component
 * @author Rheanne McIntosh <rheanne.mcintosh@outlook.com>
 */

// Import Statements
import React from 'react';
import PropTypes from 'prop-types';
import ConfirmedFilter from './ConfirmedFilter';
import GuestList from './GuestList';
import Counter from './Counter';

/**
 * Create the MainContent Component
 * 
 * @param {*} props 
 */
const MainContent = props =>
    <div class="main">
        {/* Set the ConfirmedFilter Component*/}
        <ConfirmedFilter
            toggleFilter = {props.toggleFilter}
            isFiltered   = {props.isFiltered}
        />

        {/* Set the Counter Component */}
        <Counter
            totalInvited      = {props.totalInvited}
            numberAttending   = {props.numberAttending}
            numberUnconfirmed = {props.numberUnconfirmed}
        />

        {/* Set the GuestList Component */}
        <GuestList 
            guests               = {props.guests}
            toggleConfirmationAt = {props.toggleConfirmationAt}
            toggleEditingAt      = {props.toggleEditingAt}
            setNameAt            = {props.setNameAt}
            isFiltered           = {props.isFiltered}
            removeGuestAt        = {props.removeGuestAt}
            pendingGuest         = {props.pendingGuest}
        />
    </div>

// Set the MainContent Prop Types
MainContent.propTypes = {
    toggleFilter: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    totalInvited: PropTypes.number.isRequired,
    numberAttending: PropTypes.number.isRequired,
    numberUnconfirmed: PropTypes.number.isRequired,
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
}

// Export the MainContent Component
export default MainContent;
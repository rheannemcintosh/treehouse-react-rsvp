/**
 * Counter.js
 * 
 * @file Manages the Counter Component
 * @author Rheanne McIntosh <rheanne.mcintosh@outlook.com>
 */

// Import Statements
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Create the Counter Component
 * 
 * @param {*} props 
 */
const Counter = props => 
    <table class="counter">
        <tbody>
            <tr>
                <td>Attending:</td>
                <td>{props.numberAttending}</td>
            </tr>
            <tr>
                <td>Unconfirmed:</td>
                <td>{props.numberUnconfirmed}</td>
            </tr>
            <tr>
                <td>Total:</td>
                <td>{props.totalInvited}</td>
            </tr>
        </tbody>
    </table>

// Set the Counter Prop Types
Counter.propTypes = {
    numberAttending:   PropTypes.number,
    numberUnconfirmed: PropTypes.number,
    totalInvited:      PropTypes.number,
};

// Export the Counter Component
export default Counter;
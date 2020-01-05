import './PlacesGrid.css';
import React from 'react';
import Place from './Place';

class PlacesGrid extends React.Component {
    renderedSeats = seats => 
        seats.map(seat => {
            return (
                <td
                    key={'r' + seat.row + ' p' + seat.place}>
                        <Place 
                            seat={seat}
                            state={this.props.session.seatsBooked.indexOf(seat) > -1 ? 'reserved' : 'available'}
                            onPlaceSelect={this.props.onPlaceSelect}
                        />
                </td>
            );
        });

    render() {
        return (
            <div className="container">
                <div className="grid">
                    <table>
                        <tbody>
                            <tr>{this.renderedSeats(this.props.seats)}</tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default PlacesGrid;

import React from 'react';
import Place from './Place';
import './PlacesGrid.css';

class PlacesGrid extends React.Component {
    renderedSeats = seats => 
        seats.map(seat => {
            const ifReserved = () => {
                return (this.props.session.seatsBooked.some(seatBooked => {
                    return seatBooked.row === seat.row && seatBooked.place === seat.place}))
            }
            return (
                <td
                    key={'r' + seat.row + ' p' + seat.place}>
                        <Place 
                            seat={seat}
                            state={ifReserved() ? 'reserved' : 'available'}
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

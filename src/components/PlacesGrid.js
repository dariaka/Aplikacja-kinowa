import React from 'react';
import { settings } from '../db';
import Place from './Place';
import './PlacesGrid.css';

class PlacesGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seats: []
        };
        for (let row = 1; row <= settings.rows; row++) {
            for (let place = 1; place <= settings.places; place++) {
                this.state.seats.push({ row, place });
            }
        }
    }

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
                            <tr>{this.renderedSeats(this.state.seats)}</tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default PlacesGrid;

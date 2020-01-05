import './PlacesGrid.css';
import React from 'react';
import Place from './Place';

class PlacesGrid extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.session !== undefined) {
            console.log(
                'selected session is: ' +
                    JSON.stringify(this.props.session.seatsBooked)
            );
        }
    }

    onClickSeat = seat => {
        this.props.onClickData(seat);
    };

    renderedSeats = seats => 
        seats.map(seat => {
            return (
                <td
                    className={
                        //todo complete checking selectedSession and all cinema's hall places
                        this.props.reserved.indexOf(seat) > -1 ? 'reserved' : 'available'
                    }
                    key={seat}
                    onClick={() => this.onClickSeat(seat)}
                >
                    <Place num={'r:' + seat.row + ' s:' + seat.place} />
                </td>
            );
        });

    render() {
        return (
            <div className="container">
                <div className="grid">
                    <table>
                        <tbody>
                            <tr>{this.renderedSeats(this.props.seat)}</tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default PlacesGrid;

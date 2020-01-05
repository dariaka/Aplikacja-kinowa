import './PlacesGrid.css';
import React from 'react';
import Place from './Place';

class PlacesGrid extends React.Component {
    // constructor(props) {
    //     super(props);
    //     if (this.props.session !== undefined) {
    //         console.log(
    //             'selected session is: ' +
    //                 JSON.stringify(this.props.session.seatsBooked)
    //         );
    //     }
    // }

    // onClickSeat = seat => {
    //     this.props.onClickData(seat);
    // };

    renderedSeats = seats => 
        seats.map(seat => {
            return (
                <td
                    // className={this.props.session.seatsBooked.indexOf(seat) > -1 ? 'reserved' : 'available'}
                    key={'r' + seat.row + ' p' + seat.place}>
                        <Place 
                            // num={'r:' + seat.row + ' s:' + seat.place}
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

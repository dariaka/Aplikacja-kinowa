import './Modal.css';
import React from 'react';
import Button from './Button';

class Modal extends React.Component {
    state={
        panel: 'order'
    }

    randomTicket = (length) => {
            let radom13chars = function () {
                return Math.random().toString(16).substring(2, 15)
            };
            let loops = Math.ceil(length / 13);
            return new Array(loops)
                .fill(radom13chars)
                .reduce((string, func) => { return string + func()}, '')
                .substring(0, length)
    };

    confirmReservation = () => {
        this.setState({panel: 'confirmation'});
    };

    rejectReservation = () => {
        this.setState({show: !this.props.show});
    };

    render() {
        if (!this.props.show) return null;

        if (this.state.panel === 'confirmation') return (
            <div className="shader">
            <div className="modal">
                <h4>Congratulation!</h4>
                <p>Your ticket(s) has been successfully booked.</p>
                <p>Have a nice day!</p>
                <Button
                    active={true}
                    text={'Exit'}
                    color={'#999'}
                    onButtonClick={this.props.onConfirm}
                />
            </div>
        </div>
        );

        if (this.state.panel === 'order')  return (
            <div className="shader">
                <div className="modal">
                    <h4>Order confirmation</h4>
                    <p>Dear Customer, please confirm your order.</p>
                    <div>
                        <p>Booking ID: {this.randomTicket(8)}</p>
                        <p>Show Date & Time: {this.props.session.time.format('dddd, MMMM Do YYYY, HH:mm')}</p>
                        <p>Movie Name: {this.props.movie.title}</p>
                    </div>
                    <div>
                        <p>2 Tickets:</p>
                        <p>Row 3, Seat 5</p>
                        <p>Row 3, Seat 5</p>
                    </div>
                    <Button
                        active={true}
                        text={'Back to repertoire'}
                        color={'#999'}
                        onButtonClick={this.props.onReject}
                    />
                    <Button
                        active={true}
                        text={'Exit'}
                        color={'#999'}
                        onButtonClick={this.props.onExit}
                    />
                    <Button
                        active={true}
                        text={'Confirm'}
                        onButtonClick={this.confirmReservation}
                    />
                </div>
            </div>
        );
    }
}

export default Modal;

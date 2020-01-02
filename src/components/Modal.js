import './Modal.css';
import React from 'react';
import Button from './Button';

class Modal extends React.Component {
    confirmReservation = () => {
        console.log('Confirm reservation');
        this.props.onModalClose();
    };

    rejectReservation = () => {
        console.log('Reject reservation');
        this.props.onModalClose();
    };

    render() {
        if (!this.props.show) return null;

        return (
            <div className="modal">
                Modal
                <Button
                    text={'Confirm'}
                    onButtonClick={this.confirmReservation}
                />
                <Button
                    text={'Reject'}
                    onButtonClick={this.rejectReservation}
                />
            </div>
        );
    }
}

export default Modal;

import React from 'react';
import Header from './Header';
import Repertoire from './Repertoire';
import OrderPanel from './OrderPanel';
import Modal from './Modal';

const moment = require('moment');

class App extends React.Component {
    state = {
        panel: 'repertoire', // TODO: when app is finished change that to  'repertoire'
        showModal: false,
        selectedDay: moment(),
        selectedMovie: null,
        selectedSession: null,
        selectedSeats: []
    };

    onOrderSubmit = seats => {
        this.setState({
            selectedSeats: seats,
            showModal: !this.state.showModal
        });
    }

    onSessionClick = (movie, session) => {
        this.setState({
            panel: 'order',
            selectedMovie: movie,
            selectedSession: session
        });
    }

    render() {
        if (this.state.panel === 'repertoire') {
            return (
                <div className="ui container">
                    <Header />
                    <Repertoire  
                        onSessionClick={this.onSessionClick}
                    />
                </div>
            );
        }
        if (this.state.panel === 'order') {
            return (
                <div className="ui container">
                    <Header />
                    <OrderPanel 
                        movie={this.state.selectedMovie}
                        session={this.state.selectedSession}
                        onOrderSubmit={this.onOrderSubmit} 
                    />
                    <Modal 
                        show={this.state.showModal}
                        movie={this.state.selectedMovie}
                        session={this.state.selectedSession}
                        seats={this.state.selectedSeats}
                        onConfirm={this.onModalConfirm}
                        onReject={this.onModalReject}
                    />
                </div>
            );
        }
        if (this.state.panel === 'dev-mode') {
            // TODO: when app is finished remove this "if" statement
            return (
                <div className="ui container">
                    <Header />
                    <Repertoire  
                        onSessionClick={this.onSessionClick} 
                    />
                    <OrderPanel 
                        movie={this.state.selectedMovie}
                        session={this.state.selectedSession}
                        onOrderSubmit={this.onOrderSubmit} 
                    />
                    <Modal 
                        onModalClose={this.onOrderSubmit} 
                        show={this.state.showModal} 
                    />
                </div>
            );
        }
    }
}

export default App;

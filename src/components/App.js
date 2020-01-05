import React from 'react';
import Header from './Header';
import Repertoire from './Repertoire';
import OrderPanel from './OrderPanel';
import Modal from './Modal';

const moment = require('moment');

class App extends React.Component {
    state = {
        panel: 'dev-mode', // TODO: when app is finished change that to  'repertoire'
        showModal: false,
        selectedDay: moment(),
        selectedMovie: null,
        selectedSession: null,
    };

    onOrderSubmit = () => {
        this.setState({showModal: !this.state.showModal});
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
                        onMoviesFetched={this.onMoviesFetched}
                    />
                </div>
            );
        }
        if (this.state.panel === 'order') {
            return (
                <div className="ui container">
                    <Header />
                    <OrderPanel onOrderSubmit={this.onOrderSubmit} />
                    <Modal onModalClose={this.onOrderSubmit} show={this.state.showModal} />
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
                        onMoviesFetched={this.onMoviesFetched}
                    />
                    <OrderPanel onOrderSubmit={this.onOrderSubmit} />
                    <Modal onModalClose={this.onOrderSubmit} show={this.state.showModal} />
                </div>
            );
        }
    }
}

export default App;

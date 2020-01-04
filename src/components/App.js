import React from 'react';
import Header from './Header';
import Repertoire from './Repertoire';
import OrderPanel from './OrderPanel';
import Modal from './Modal';
import { movies, sessions } from '../db';

const moment = require('moment');

class App extends React.Component {
    state = {
        panel: 'dev-mode', // TODO: when app is finished change that to  'repertoire'
        showModal: false,
        selectedDay: moment(),
        movies: [],
        // movies: [{
        //         id: "<id>", 
        //         image: "<url>", 
        //         title: "<title>", 
        //         summary: "<sum>", 
        //         sessions: [{
        //                             id: "<id>", 
        //                             time: <momentObj>, 
        //                             seatsBooked: [{row: <num>, place: <num>}, {}]}, 
        //                         {}]
        //     }, 
        //     {}]
        selectedMovie: null,
        selectedSession: null,
    };

    componentDidMount() {
        this.onDaySelection(this.state.selectedDay);
    }

    onDaySelection = (time) => {
        // time is an moment object with the date of the selected day from Repertoire component
        const allSessionsForSelectedDay = sessions.filter(session => {
            return session.time.format('DD-MM-YYYY') === time.format('DD-MM-YYYY');
        });
        const allSessionsIds = allSessionsForSelectedDay.map(({...session}) => session.id);

        const renderedMovies = movies
        .filter(movie => movie.sessions.some(session => allSessionsIds.indexOf(session) > -1))
        .map(({...movie}) => {
            const matchingSessions = allSessionsForSelectedDay.filter(session => movie.sessions.indexOf(session.id) > -1);
            movie.sessions = matchingSessions;
            return movie;            
        });

        this.setState({selectedDay: time, movies: renderedMovies});
    }

    showModal = () => {
        this.setState({showModal: !this.state.showModal});
    }

    goToReservationPanel = () => {
        this.setState({panel: 'order'});
    }

    render() {
        if (this.state.panel === 'repertoire') {
            return (
                <div className="ui container">
                    <Header />
                    <Repertoire  movies={this.state.movies} onSessionClick={this.goToReservationPanel} onDaySelection={this.onDaySelection} />
                </div>
            );
        }
        if (this.state.panel === 'order') {
            return (
                <div className="ui container">
                    <Header />
                    <OrderPanel onSubmit={this.showModal} />
                    <Modal onModalClose={this.showModal} show={this.state.showModal} />
                </div>
            );
        }
        if (this.state.panel === 'dev-mode') {
            // TODO: when app is finished remove this "if" statement
            return (
                <div className="ui container">
                    <Header />
                    <Repertoire  movies={this.state.movies} onSessionClick={this.goToReservationPanel}/>
                    <OrderPanel onSubmit={this.showModal} />
                    <Modal onModalClose={this.showModal} show={this.state.showModal} />
                </div>
            );
        }
    }
}

export default App;

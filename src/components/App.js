import React from 'react';
import Header from './Header';
import Repertoire from './Repertoire';
import OrderPanel from './OrderPanel';
import Modal from './Modal';
import { movies, sessions } from '../db';

const moment = require('moment');

class App extends React.Component {
    state = {
        panel: 'dev-mode', // when app is finished change that to  'repertoire'
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
        //     {}] ??
        selectedMovie: null,
        selectedSession: null,
    };

    componentDidMount() {
        // const today = moment();
        this.onDaySelection(this.state.selectedDay);
    }

    onDaySelection = (time) => {
        // time must be a string ("Thursday, January 2nd 2020, 22:00") ??
        // .format('dddd, MMMM Do YYYY, HH:mm')
        console.log("in  onDaySelection method")
        const allSessionsForSelectedDay = sessions.filter(session => {
            return session.time === time;
        });

        console.log(time); // ok
        console.log(sessions); // ok
        console.log(allSessionsForSelectedDay); // !ERR: empty array

        const allMoviesForSelectedDay = movies.filter(movie => {
            return movie.sessions.some(session => allSessionsForSelectedDay.indexOf(session) > -1);
        });
        const renderedMovies = allMoviesForSelectedDay.map(movie => {
            const matchingSessions = allSessionsForSelectedDay.filter(session => movie.sessions.indexOf(session.id) > -1);
            movie.sessions = matchingSessions;
            return movie;            
        });

        this.setState({movies: renderedMovies});
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
                    <Repertoire  movies={this.state.movies} onSessionClick={this.goToReservationPanel}/>
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
            // when app is finished remove this "if" statement
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

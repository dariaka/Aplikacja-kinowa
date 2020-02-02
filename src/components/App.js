import React from "react";
import moment from "moment";
import { movies, sessions } from "../db";
import Header from "./Header";
import Repertoire from "./Repertoire";
import OrderPanel from "./OrderPanel";
import Modal from "./Modal";

class App extends React.Component {
    state = {
        panel: 'repertoire',
        showModal: false,
        allMovies: [],
        allSessions: [],
        selectedDay: moment(),
        selectedMovie: null,
        selectedSession: null,
        selectedSeats: [],
    };

    onSessionClick = (movie, session) => {
        this.setState({
            panel: 'order',
            selectedMovie: movie,
            selectedSession: session
        });
    }

    onOrderSubmit = seats => {
        this.setState({
            selectedSeats: seats,
            showModal: !this.state.showModal
        });
    }

    onModalExit = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    onModalReject = () => {
        this.setState({
            panel: 'repertoire',
            showModal: !this.state.showModal,
            selectedSeats: [],
        });
    }

    onModalConfirm = () => {
        const updatedSessions=this.state.allSessions.map(({...session}) => {
            if (session.id !== this.state.selectedSession.id) return session;
            session.seatsBooked = session.seatsBooked.concat(this.state.selectedSeats);
            return session
        }); 
        this.setState({
            panel: 'repertoire',
            showModal: !this.state.showModal,
            allSessions: updatedSessions,
            selectedSeats: [],
        });
    }

    onBackButtonClick = () => {
        this.setState({
            panel: 'repertoire',
            selectedSeats: [],
        });
    }

    onPlaceSelect = seat => {
        let newList = this.props.seats;
        // TO-DO
        // re-wright this using HOF
        if (this.state.selectedSeats.some(reservedSeat => {
            return reservedSeat.row === seat.row && reservedSeat.place === seat.place})) {
                newList = this.state.selectedSeats.filter(reservedSeat => {
                    return !(reservedSeat.row === seat.row && reservedSeat.place === seat.place)});
        } else {
            newList = this.state.selectedSeats.concat(seat);
        }
        this.setState({
            selectedSeats: newList,
        });
    };

    componentDidMount() {
        this.setState({
            allMovies: movies,
            allSessions: sessions,
        });
    }

    render() {
        if (this.state.panel === 'repertoire') {
            return (
                <div className="ui container">
                    <Header />
                    <Repertoire  
                        allMovies={this.state.allMovies}
                        allSessions={this.state.allSessions}
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
                        seats={this.state.selectedSeats}
                        onBackButtonClick={this.onBackButtonClick} 
                        onOrderSubmit={this.onOrderSubmit} 
                        onPlaceSelect={this.onPlaceSelect}
                    />
                    <Modal 
                        show={this.state.showModal}
                        movie={this.state.selectedMovie}
                        session={this.state.selectedSession}
                        seats={this.state.selectedSeats}
                        onExit={this.onModalExit}
                        onReject={this.onModalReject}
                        onConfirm={this.onModalConfirm}
                    />
                </div>
            );
        }     
    }
}

export default App;

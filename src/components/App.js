import React from "react";
import Header from "./Header";
import Repertoire from "./Repertoire";
import OrderPanel from "./OrderPanel";
import Modal from "./Modal";

const moment = require("moment");

class App extends React.Component {
    state = {
        panel: 'repertoire',
        showModal: false,
        selectedDay: moment(),
        selectedMovie: null,
        selectedSession: null,
        selectedSeats: []
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
        // TODO: save info somewhere?
        this.setState({
            panel: 'repertoire',
            showModal: !this.state.showModal,
            selectedSeats: [],
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
                        seats={this.state.selectedSeats}
                        onOrderSubmit={this.onOrderSubmit} 
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

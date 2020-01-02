import React from 'react';
import Header from './Header';
import Repertoire from './Repertoire';
import OrderPanel from './OrderPanel';
import Modal from './Modal';

class App extends React.Component {
    state = {
        panel: 'dev-mode',
        showModal: false,
        selectedDay: null,
        movies: [],
        // movies: [{movie: {fetch data from movie database}, sessions: [fetch data from session database]}, {}, ..., {}] ??
        selectedMovie: null,
        selectedSession: null,
    };

    componentDidMount() {}

    showModal = () => {
        this.setState({showModal: !this.state.showModal});
    }

    render() {
        if (this.state.panel === 'repertoire') {
            return (
                <div className="ui container">
                    <Header />
                    <Repertoire />
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
            return (
                <div className="ui container">
                    <Header />
                    <Repertoire />
                    <OrderPanel onSubmit={this.showModal} />
                    <Modal onModalClose={this.showModal} show={this.state.showModal} />
                </div>
            );
        }
    }
}

export default App;

import React from 'react';
import moment from 'moment';
import MoviesList from './MoviesList';
import './Repertoire.css';

class Repertoire extends React.Component {
    state = {
        activeDayId: 0,
        movies: [],
        sessions: []
    };

    days = [
        moment(),
        moment().add(1, "days"),
        moment().add(2, "days"),
        moment().add(3, "days"),
        moment().add(4, "days"),
        moment().add(5, "days"),
        moment().add(6, "days")
    ];

    updateState = (activeDayId) => {
        // TO-DO
        // re-wright this using HOF
        const sessionsForActiveDay = this.props.allSessions.filter(session => {
            return session.time.format('DD-MM-YYYY') === this.days[activeDayId].format('DD-MM-YYYY');
        });
        const sessionsForActiveDayIds = sessionsForActiveDay.map(({...session}) => session.id);
        const moviesForActiveDay = this.props.allMovies.filter(movie =>
            movie.sessions.some(sessionId => 
                sessionsForActiveDayIds.includes(sessionId)
            )
        );

        this.setState({
            activeDayId, 
            movies: moviesForActiveDay, 
            sessions: sessionsForActiveDay
        });
    }

    onDayClicked = (e) => {
        document.getElementById(`day${this.state.activeDayId}`).classList.remove('active');
        e.currentTarget.classList.add('active');
        const activeDayId = Number(e.currentTarget.id.replace("day", ""));
        this.updateState(activeDayId);   
    }

    componentDidMount() {
        this.updateState(this.state.activeDayId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.allMovies !== prevProps.allMovies && this.props.allSessions !== prevProps.allSessions) {
            this.updateState(this.state.activeDayId);
        }
    }

    renderedList = this.days.map((day, id) => {
        return (
            <div key={id}
                onClick={this.onDayClicked}
                id={"day" + id}
                className={id === this.state.activeDayId ? "active item" : "item"}
                style={{ cursor: "pointer", paddingLeft: "20px" }} >
                {id === 0 ? day.format("[Today]") : day.format("dddd")}
            </div>
        );
    })
    
    render() {
        return (
            <div className="ui container">
              <div className="ui grid">
                <div className="eight column centered row">
                  <div className="ui text menu" style={{ padding: "40px 0" }}>
                    <div className="header item" style={{ fontSize: "1.25em" }}>
                      Repertoire
                    </div>
                    <div className="ui orange text right menu">
                      {this.renderedList}
                    </div>
                  </div>
                </div>
              </div>
        
              <div>
                <MoviesList 
                    movies={this.state.movies} 
                    sessions={this.state.sessions}
                    onSessionClick={this.props.onSessionClick}
                />
              </div>
            </div>
          );
    }
    
};

export default Repertoire;
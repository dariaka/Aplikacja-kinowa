import './Repertoire.css';
import React from 'react';
import MoviesList from './MoviesList';
import { movies, sessions } from "../db";

const moment = require('moment');

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
        moment().add(6, "days")];

    updateStates = (activeDayId) => {
            // get data from sessions database
        const sessionsForActiveDay = sessions.filter(session => {
            return session.time.format('DD-MM-YYYY') === this.days[activeDayId].format('DD-MM-YYYY');
        });
        // get data from movies database
        const sessionsForActiveDayIds = sessionsForActiveDay.map(({...session}) => session.id);
        const moviesForActiveDay = movies.filter(movie =>
            movie.sessions.some(sessionId => sessionsForActiveDayIds.includes(sessionId)));
        // change the state
        this.setState({
            activeDayId, 
            movies: moviesForActiveDay, 
            sessions: sessionsForActiveDay
        });
    }

    onDayClicked = (e) => {
        // move class "active" to clicked element
        document.getElementById(`day${this.state.activeDayId}`).classList.remove('active');
        e.currentTarget.classList.toggle('active');
        // get active day id
        const activeDayId = Number(e.currentTarget.id.replace("day", ""));
        // get data from database and update the state
        this.updateStates(activeDayId);   
    }

    componentDidMount() {
        this.updateStates(this.state.activeDayId);
      }

    renderedList = this.days.map((day, id) => {
        return (
            <a key={id}
                onClick={this.onDayClicked}
                id={"day" + id}
                className={id === this.state.activeDayId ? "active item" : "item"}
                style={{ paddingLeft: "20px" }} >
                {id === 0 ? day.format("[Today]") : day.format("dddd")}
            </a>
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
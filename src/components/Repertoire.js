import './Repertoire.css';
import React from 'react';
import MoviesList from './MoviesList';

const moment = require('moment');

class Repertoire extends React.Component {
    state = {activeDayId: 0};

    days = [
        moment(),
        moment().add(1, "days"),
        moment().add(2, "days"),
        moment().add(3, "days"),
        moment().add(4, "days"),
        moment().add(5, "days"),
        moment().add(6, "days")];

    changeDay = (e) => {
        document.getElementById(`day${this.state.activeDayId}`).classList.remove('active');
        e.currentTarget.classList.toggle('active');
        this.setState({activeDayId: Number(e.currentTarget.id.replace("day", ""))});
        this.props.onDaySelect(this.days[Number(e.currentTarget.id.replace("day", ""))]);
    }

    renderedList = this.days.map((day, id) => {
        return (
            <a key={id}
                onClick={this.changeDay}
                id={"day"+id}
                className={id===this.state.activeDayId?"active item":"item"}
                style={{ paddingLeft: "20px" }} >
                {id===0?day.format("[Today]"):day.format("dddd")}
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
                    movies={this.props.movies} 
                    onSessionClick={this.props.onSessionClick}
                />
              </div>
            </div>
          );
    }
    
};

export default Repertoire;
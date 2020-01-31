import React from 'react';
import { settings } from '../db';
import PlacesGrid from './PlacesGrid';
import './PlacesSelectionPanel.css';

class PlacesSelectionPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seats: []
        };

        for (let rowIndex = 1; rowIndex <= settings.rows; rowIndex++) {
            for (let placeIndex = 1; placeIndex <= settings.places; placeIndex++) {
                this.state.seats.push({ row: rowIndex, place: placeIndex });
            }
        }
    }


    render() {
        return (
            <div className="ui container">
                <div className="ui centered grid">
                    <div className="row">
                        <div className="center aligned ten wide column">
                            Screen
                        </div>
                    </div>
                </div>
                <div>
                    <PlacesGrid
                        seats={this.state.seats}
                        session={this.props.session}
                        onPlaceSelect={this.props.onPlaceSelect}
                    />
                </div>
            </div>
        );
    }
}

export default PlacesSelectionPanel;
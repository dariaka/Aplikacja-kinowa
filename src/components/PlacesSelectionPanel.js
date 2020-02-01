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
        for (let row = 1; row <= settings.rows; row++) {
            for (let place = 1; place <= settings.places; place++) {
                this.state.seats.push({ row, place });
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
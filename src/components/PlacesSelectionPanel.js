import './PlacesSelectionPanel.css';
import React from 'react';
import PlacesGrid from './PlacesGrid';
import { settings } from '../db';

class PlacesSelectionPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seats: []
        };

        for (let rowIndex = 1; rowIndex <= settings.rows; rowIndex++) {
            for (
                let placeIndex = 1;
                placeIndex <= settings.places;
                placeIndex++
            ) {
                this.state.seats.push({ row: rowIndex, place: placeIndex });
            }
        }
    }


    render() {
        return (
            <div className="ui container">
                <div className="ui centered grid">
                    <div className="row">
                        <div
                            className="center aligned ten wide column"
                            style={{
                                backgroundColor: '#C4C4C4',
                                textTransform: 'uppercase',
                                fontSize: '1em',
                                padding: '4px 0',
                                marginTop: '40px',
                            }}>
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

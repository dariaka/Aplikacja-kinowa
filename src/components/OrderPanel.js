import React from 'react';
import InfoPanel from './InfoPanel';
import PlacesSelectionPanel from './PlacesSelectionPanel';
import './OrderPanel.css';

class OrderPanel extends React.Component {
    render() {
        return (
            <div className="ui container">
                <div className="ui text menu" style={{ padding: '40px 0' }}>
                    <div className="header item" style={{ fontSize: '1.25em' }}>
                        Booking
                    </div>
                </div>
                <div className="ui grid">
                    <div className="six wide column">
                        <div className="five wide column">
                            <InfoPanel
                                movie={this.props.movie}
                                session={this.props.session}
                                seats={this.props.seats}
                                onOrderSubmit={this.props.onOrderSubmit}
                                onBackButtonClick={this.props.onBackButtonClick} 
                            />
                        </div>
                    </div>

                    <div className="ten wide column">
                        <div className="column">
                            <h3 className="red">Select seats</h3>
                            <div className="ui divider"></div>
                        </div>

                        <div className="ui four column grid">
                            <div className="row">
                                <div className="column">
                                    <i className="square full green icon"></i>
                                    Available
                                </div>
                                <div className="column">
                                    <i className="square full grey icon"></i>
                                    Unavailable
                                </div>
                                <div className="column">
                                    <i className="square full orange icon"></i>
                                    Your choice
                                </div>
                            </div>
                        </div>
                        <div>
                            <PlacesSelectionPanel
                                session={this.props.session}
                                onPlaceSelect={this.props.onPlaceSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderPanel;

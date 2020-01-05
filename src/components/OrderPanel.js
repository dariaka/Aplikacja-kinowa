import './OrderPanel.css';
import React from 'react';
import InfoPanel from './InfoPanel';
import PlacesSelectionPanel from './PlacesSelectionPanel';

function OrderPanel(props) {
    return (
        <div className="wrapper">
            OrderPanel
            <InfoPanel onSubmit={props.onOrderSubmit} />
            <PlacesSelectionPanel />
        </div>
    );
}

export default OrderPanel;
import './OrderPanel.css';
import React from 'react';
import InfoPanel from './InfoPanel';
import PlacesSelectionPanel from './PlacesSelectionPanel';

function OrderPanel() {
    return (
        <div className="wrapper">
            OrderPanel
            <InfoPanel />
            <PlacesSelectionPanel />
        </div>
    );
}

export default OrderPanel;
import './Place.css';
import React from 'react';

class Place extends React.Component {
    state = {
        selected: false
    }

    onSelect = () => {
        this.setState({selected: !this.state.selected});
        this.props.onPlaceSelect(this.props.seat);
    }

    getStyle = () => {
        if (this.props.state==='reserved')  return "{background: '#999', cursor: 'default'}";
        if (this.props.state==='available' && this.state.selected) return {background: '#EB7D18', cursor: 'pointer'};
        return {background: 'green', cursor: 'pointer'};
    }

    render() {
        return (
            <button 
                className="small ui green button" 
                onClick={this.props.state==='available' ? this.onSelect : null}
                style = {this.getStyle()}>
                    {`${this.props.seat.row}/${this.props.seat.place}`}
            </button>
        );
    }

}

export default Place;

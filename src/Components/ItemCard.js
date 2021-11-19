import React from 'react';

export default class ItemCard extends React.Component {
    render() {
        return (
            //TODO STYLE KORT
            <div className="itemCardContainer">
                {/* PICTURE legge til src*/}
                <img src={this.props.image} className="itemCardImage" alt="itemCardImage"></img>
                {/* HEADER */}
                <div className="itemCardName">{this.props.name}</div>
                {/* PRICE */}
                <div className="ItemCardPrice">{this.props.price}</div>
            </div>
        )
    }
}
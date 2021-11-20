import React from 'react';

export default class ItemCard extends React.Component {

    constructor(props){
        super(props);
    }

    addItem = (name, price) => {
        alert(name + ' ' + price)
    }

    render() {
        return (
            //TODO STYLE KORT
            <div className="itemCardContent">
                {/* PICTURE legge til src*/}
                <img className="itemCardImage" src={this.props.image} alt="itemCardImage"></img>
                {/* HEADER */}
                <div className="itemCardName">{this.props.name}</div>
                {/* PRICE */}
                <div className="itemCardPrice">{this.props.price}</div>
                <button className="itemCardButton" onClick={() => this.addItem(this.props.name, this.props.price)}>Add pizza</button>
            </div>
        )
    }
}
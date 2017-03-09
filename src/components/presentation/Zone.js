import React, { Component } from 'react';
import styles from './styles';

class Zone extends Component {

    onSelectTitle(event) {
        event.preventDefault()
        console.log('onslect title: ' + this.props.index)
        this.props.select(this.props.index)
    }
    
    render() {
        const style = styles.zone
        const zipCode = this.props.currentZone.zipCodes[0]
        const title = (this.props.isSelected) ? <a style={style.title} href="#">{this.props.currentZone.name}</a> : <a href="#">{this.props.currentZone.name}</a>
       
        return (
                <div style={style.container} className="card hoverable">
                    <h4 onClick={this.onSelectTitle.bind(this)} style={style.header}>
                        {title}
                    </h4>
                    <span>{zipCode}</span><br/>
                    <span>{this.props.currentZone.numComments}</span>
                </div>
                       
          
        );
    }
}

export default Zone;
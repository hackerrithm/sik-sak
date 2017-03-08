import React, { Component } from 'react';
import Zone from '../presentation/Zone';

class Zones extends Component {

    // Notes : never change state

    constructor(){
        super()

        this.state = {
            zone: {
                name: '',
                zipCode: ''
            },
            list: []
        }
    }

    updateZone(event) {
        console.log('zone updated: ' + event.target.id + ' == ' + event.target.value)

        let updatedZone = Object.assign({}, this.state.zone)
        updatedZone[event.target.id] = event.target.value

        this.setState({
            zone: updatedZone
        })
    }

    addZone() {
        console.log('Zone added: ' + JSON.stringify(this.state.zone))

        let updatedList = Object.assign([], this.state.list)
        updatedList.push(this.state.zone)

        this.setState({
            list: updatedList
        })
    }
    render() {

        const listItems = this.state.list.map((zone, i) => {
            return (
                <li key={i}>
                    <Zone currentZone={zone} />                        
                </li>
            )
        })
       
        return (
            
                <div>
                    <ol>
                        {listItems}
                    </ol>
                <br/>
                <input id="name" onChange={this.updateZone.bind(this)} type="text" placeholder="Name" />
                <input id="zipCode" onChange={this.updateZone.bind(this)} type="text" placeholder="Zip Code" />
               
                <div className="center">
                    <button onClick={this.addZone.bind(this)} className="btn red darken-2 waves-ripple">Submit</button>
                </div>
                </div>
          
        );
    }
}

export default Zones;
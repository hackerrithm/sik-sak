import React, { Component } from 'react';
import Zone from '../presentation/Zone';

class Zones extends Component {

    constructor(){
        super()

        this.state = {
            list: [
                {name: 'Zone 1', zipCode: '10012', numComments:10},
                {name: 'Zone 2', zipCode: '10013', numComments:20}, 
                {name: 'Zone 3', zipCode: '10014', numComments:30},
                {name: 'Zone 4', zipCode: '10015', numComments:40},
                {name: 'Zone 5', zipCode: '10016', numComments:50}   
            ]
        }
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
                </div>
          
        );
    }
}

export default Zones;
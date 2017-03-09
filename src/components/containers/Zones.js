import React, { Component } from 'react';
import Zone from '../presentation/Zone';
import CreateZone from '../presentation/CreateZone';
import superagent from 'superagent';
import { APIManager } from '../../utils';
class Zones extends Component {

    // Notes : never change state

    constructor(){
        super()

        this.state = {
            /*zone: {
                name: '',
                zipCode: ''
            },*/
            selected: 0,
            list: []
        }
    }

    componentDidMount() {
        console.log("componentDidMount")

        APIManager.get('/api/zone', null, (err, response) => {

             if (err) {
                    alert('ERROR: '+ err.message)
                    return
            } 

            console.log('Results: ' + JSON.stringify(response.results))
            this.setState({
                list: response.results
            })
        })        

    }

    updateZone(event) {
        console.log('zone updated: ' + event.target.id + ' == ' + event.target.value)

        let updatedZone = Object.assign({}, this.state.zone)
        updatedZone[event.target.id] = event.target.value

        this.setState({
            zone: updatedZone
        })
    }

    addZone(zone) {
        
        
        let updatedZone = Object.assign({}, zone)
        /*updatedZone['zipCodes'] = updatedZone.zipCode.split(',')
        console.log('Zone added: ' + JSON.stringify(updatedZone))
        */

        APIManager.post('/api/zone', updatedZone, (err, response) => {
            if (err) {
               alert('ERROR: ' + err.message)
               return     
            } 

            console.log('Zone created: ' + JSON.stringify(response))

            let updatedList = Object.assign([], this.state.list)
            updatedList.push(response.result)
            this.setState({
                list: updatedList
            })
        })

        /*let updatedList = Object.assign([], this.state.list)
        updatedList.push(this.state.zone)

        this.setState({
            list: updatedList
        })*/
    }

    submitZone(zone) {
        console.log('Submit content' + JSON.stringify(zone));

        let updatedZone = Object.assign({}, zone)
        APIManager.post('/api/zone', updatedZone, (err, response) => {
            if (err) {
               alert('ERROR: ' + err.message)
               return     
            } 

            console.log('Zone created: ' + JSON.stringify(response))

            let updatedList = Object.assign([], this.state.list)
            updatedList.push(response.result)
            this.setState({
                list: updatedList
            })
            
        })
    }

    selectZone(index) {
        console.log('zone selected:: ' + index)
        this.setState({
            selected: index
        })
    }
    render() {

        const listItems = this.state.list.map((zone, i) => {
            let selected = (i == this.state.selected)
            return (
                <li key={i}>
                    <Zone index={i} select={this.selectZone.bind(this)}  isSelected={selected} currentZone={zone} />                        
                </li>
            )
        })
       
        return (
            
                <div>
                    <ol>
                        {listItems}
                    </ol>
                <br/>
                <hr />
                <CreateZone onCreate={this.submitZone.bind(this)} />
                </div>
          
        );
    }
}

export default Zones;
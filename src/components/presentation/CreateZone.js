import React,{Component} from 'react';

export default class CreateZone extends Component {

    constructor(){
        super();
        this.state = {
             zone: {
                name: '',
                zipCode: ''
            }
        };
    }

    updateZone(event) {
        console.log('zone updated: ' + event.target.id + ' == ' + event.target.value)

        let updatedZone = Object.assign({}, this.state.zone)
        updatedZone[event.target.id] = event.target.value

        this.setState({
            zone: updatedZone
        })
    }

    submitZone(event) {
        console.log('submited' + JSON.stringify(this.state.zone))
        let updated = Object.assign({}, this.state.zone)
        updated['zipCodes'] = updated.zipCode.split(',')
        this.props.onCreate(this.state.zone)
    }

    render() {
        return (
            <div className="class-name">
                <input id="name" onChange={this.updateZone.bind(this)} type="text" placeholder="Name" />
                <input id="zipCodes" onChange={this.updateZone.bind(this)} type="text" placeholder="Zip Code" />
               
                <div className="center">
                    <button onClick={this.submitZone.bind(this)} className="btn red darken-2 waves-ripple">Submit</button>
                </div>
            </div>
        );
    }
}
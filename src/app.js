import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Zones from './components/Zones'
class App extends Component {
    render() {
       
        return (
            <div className = "App">
                <div className="container">
                    <div className="row">
                        <h2>Kemzi</h2>
                        <p>Bad paople</p>
                        <Zones />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Zones from './components/containers/Zones'
import Home from './components/layout/Home'
class App extends Component {
    render() {
       
        return (
            <div className = "App">                

                        <nav className="nav-extended blue darken-2">
                            <div className="nav-wrapper">
                            <a href="#" className="brand-logo">Sik-Sak</a>
                            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="#">Login</a></li>
                            </ul>
                            <ul className="side-nav" id="mobile-demo">
                                <li><a href="#">Login</a></li>
                            </ul>
                            </div>
                            <div className="nav-content">
                            <ul className="tabs tabs-transparent">
                                <li className="tab"><a className="active" href="#test1">Page 1</a></li>
                                <li className="tab"><a href="#test2">Page 2</a></li>
                            </ul>
                                <a className="btn-floating btn-large halfway-fab waves-effect waves-light blue lighten-2">
                                        <i className="material-icons">add</i>
                                </a>
                            </div>
                        </nav>
                        <div id="test1" className="col s12">
                            <Home />
                        </div>
                        <div id="test2" className="col s12">
                            Test 2
                        </div>

            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
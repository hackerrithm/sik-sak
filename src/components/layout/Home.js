import React,{Component} from 'react';
import Zones from '../containers/Zones';
import Comments from '../containers/Comments';


export default class Home extends Component {

    render() {
        return (
        
                <div className="row">                    
                    <div className="col m4 grey lighten-5">
                        <Zones />
                    </div>
                    <div className="col m8">
                        <Comments />
                    </div>
                </div>              
          
        );
    }
}
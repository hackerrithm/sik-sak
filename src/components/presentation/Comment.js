import React, {Component} from 'react';

export default class Comment extends Component {
    render(){
        return(
            <div style={{marginBottom:15}}>
                {this.props.currentComment.body}
                    <br/>
                {this.props.currentComment.username}
                    <br/>
                {this.props.currentComment.timestamp}

            </div>
        );
    }
}
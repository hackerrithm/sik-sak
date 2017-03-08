import React,{Component} from 'react';
import Comment from './Comment';

export default class Comments extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: [
                    {body: 'Comment 1', username: 'KemoG', timestamp:'2:31'},
                    {body: 'Comment 2', username: 'KemoH', timestamp:'2:34'},
                    {body: 'Comment 3', username: 'KemoJ', timestamp:'2:45'}
                
            ]
        };
    }

    render() {

        const commentList = this.state.list.map((comment, i) => {
            return (
                <li><Comment currentComment={comment} /></li>
            )
        })

        return (
            <div className="card hoverable z-depth-2">
                Comments
                <ul>
                    {commentList}
                </ul>
            </div>
        );
    }
}
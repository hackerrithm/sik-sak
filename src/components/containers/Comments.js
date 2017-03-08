import React,{Component} from 'react';
import Comment from '../presentation/Comment';

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

    submitComment() {
        console.log('Submit content');
    }

    render() {

        const commentList = this.state.list.map((comment, i) => {
            return (
                <li key={i}>
                    <Comment currentComment={comment} />
                </li>
            )
        })

        return (
            <div className="card hoverable z-depth-2">
                Comments
                <ul>
                    {commentList}
                </ul>
                <br/>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Comment" />
                <div className="center">
                    <button onClick={this.submitComment.bind(this)} className="btn btn-flat blue lighten-2 waves-ripple">Post</button>
                </div>
            </div>
          

           
        );
    }
}
import React,{Component} from 'react';
import Comment from '../presentation/Comment';

export default class Comments extends Component {

    // Notes : never change state

    constructor(props){
        super(props);
        this.state = {
            comment: {
                username: '',
                body: ''
        
            },
            list: []
        };
    }

    submitComment() {
        console.log('Submit content' + JSON.stringify(this.state.comment));

        let updatedList = Object.assign([], this.state.list)
        updatedList.push(this.state.comment)

        this.setState({
            list: updatedList
        })
    }

    updateUsername(event) {
        console.log('Update username:' + event.target.value)

        let updatedComment = Object.assign({}, this.state.comment)
        updatedComment['username'] = event.target.value

        this.setState({
            comment: updatedComment
        })
    }

    updateComment(event) {
        console.log('Update comment:' + event.target.value);

        let updatedComment = Object.assign({}, this.state.comment)
        updatedComment['body'] = event.target.value

        this.setState({
            comment: updatedComment
        })
    }

    updateTimeStamp(event) {
        console.log('Update timeStamp' + event.target.value);

        let updatedComment = Object.assign({}, this.state.comment)
        updatedComment['timestamp'] = event.target.value

        this.setState({
            comment: updatedComment
        })    
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
                <input onChange={this.updateUsername.bind(this)} type="text" placeholder="Username" />
                <input onChange={this.updateComment.bind(this)} type="text" placeholder="Comment" />
                <input onChange={this.updateTimeStamp.bind(this)} type="text" placeholder="Time Stamp" />
                <div className="center">
                    <button onClick={this.submitComment.bind(this)} className="btn btn-flat blue lighten-2 waves-ripple">Post</button>
                </div>
            </div>
          

           
        );
    }
}
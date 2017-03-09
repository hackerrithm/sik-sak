import React,{Component} from 'react';
import Comment from '../presentation/Comment';
import CreateComment from '../presentation/CreateComment';
import superagent from 'superagent';
import { APIManager } from '../../utils';

export default class Comments extends Component {

    // Notes : never change state

    constructor(props){
        super(props);
        this.state = {
            /*comment: {
                username: '',
                body: ''
        
            },*/
            list: []
        };
    }

    componentDidMount() {
        APIManager.get('/api/comment', null, (err, response) => {

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

   
    submitComment(comment) {
        console.log('Submit content' + JSON.stringify(comment));

        let updatedComment = Object.assign({}, comment)
        APIManager.post('/api/comment', updatedComment, (err, response) => {
            if (err) {
               alert('ERROR: ' + err.message)
               return     
            } 

            console.log('Comment created: ' + JSON.stringify(response))

            let updatedList = Object.assign([], this.state.list)
            updatedList.push(response.result)
            this.setState({
                list: updatedList
            })
            
        })
          
    }
  
/*
    updateUsername(event) {
        console.log('Update username:' + event.target.value)

        let updatedComment = Object.assign({}, this.state.comment)
        updatedComment['Username'] = event.target.value

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

*/
    render() {

        const commentList = this.state.list.map((comment, i) => {
            return (
                <li key={i}>
                    <Comment currentComment={comment} />
                </li>
            )
        })

        return (
            <div className="card">
                 <CreateComment onCreate={this.submitComment.bind(this)} />
                <div className="card">
                    <h4 className="center">Comments</h4>
                
                
                    <hr />
                    <ul>
                        {commentList}
                    </ul>
                    <br/>
                    <hr />
                </div>
            </div>

           
        );
    }
}
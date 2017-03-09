import React,{Component} from 'react';

class CreateComponent extends Component {

    constructor() {
        super();
        this.state = {
            comment: {
                body: '',
                Username: ''
            }
        }
    }

    updateComment(event) {
        console.log('updated comment:' + event.target.id + ' == ' + event.target.value)

        let updatedComment = Object.assign({}, this.state.comment)
        updatedComment[event.target.id] = event.target.value

        this.setState({
            comment: updatedComment
        })
    }

    submitComment(event) {
        console.log('submited' + JSON.stringify(this.state.comment))
        this.props.onCreate(this.state.comment)
    }

    render() {
        return (

                <div className="card">
                    <div className="container center">
                        <input id="username" onChange={this.updateComment.bind(this)}  type="text" placeholder="Username" />
                        <input id="body" onChange={this.updateComment.bind(this)} type="text" placeholder="Comment" />
                        <div className="center">
                            <button onClick={this.submitComment.bind(this)} className="btn btn-flat blue lighten-2 white-text waves-ripple">Post</button>
                        </div>                        
                    </div>
                        
                </div>
        );
    }
}

export default CreateComponent;
import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core';
import { PropTypes} from 'prop-types';
import { createPost } from '../actions/postActions';
import { connect } from 'react-redux';

class PostForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };
       //call action
       this.props.createPost(post);
    }
    
    render() {
        return (
            <div>
                <h1>Add Post</h1>

                
                
                <form onSubmit={this.onSubmit}>
                    <div>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Title:"
                            multiline
                            rowsMax="4"
                            type="text" name="title" 
                            onChange={this.onChange} 
                            value={this.state.title}
                        />
          
                                  

                        {/* <label>Title: </label> 
                        <br />
                        <input type="text" name="title" onChange={this.onChange} 
                        value={this.state.title}/> */}
                    </div>                    
                    <div>                        
                        <br />
                        <TextField
                    id="outlined-multiline-static"
                    name="body" 
                    onChange={this.onChange} 
                    value={this.state.body}
                    label="Body:"
                    multiline
                    rows="4"                    
                    variant="outlined"
                    />
                        {/* <textarea  /> */}
                        <div>
                            <br />
                            <Button variant="contained" color="secondary" type="submit">Submit</Button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
  };
  
  export default connect(null, { createPost })(PostForm);

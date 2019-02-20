import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getPosts} from '../actions/index';
import Loading from './Loading';

class Posts extends Component {
    async componentDidMount(){
        const postss = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.props.getPosts(postss.data);
    }

    render(){
        if(this.props.posts.length>0) {
            return (
                <table className="ui selectable inverted table">
                    <thead>
                        <tr>
                            <th>Post Title</th>
                            <th>Post Body</th>
                        </tr>
                    </thead>
                    <tbody>                       
                        {
                            this.props.posts.map(post =>{
                                return(
                                    <tr key={post.id}>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>   
            );
        }
        return <div><Loading message="Loading ..."/></div>
    }
}

const mapStateToProps = state =>{
    return {posts: state.posts};
}
export default connect(mapStateToProps,{getPosts})(Posts);
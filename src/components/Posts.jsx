import React, {Component} from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';

class Posts extends Component {
    state={
        posts:[]
    }
    componentDidMount(){
        this.props.posts.then(res=> this.setState({posts:res}));
    }
    render(){
        if(this.state.posts.length>0)
            {return (
                <table className="ui selectable inverted table">
                    <thead>
                        <tr>
                            <th>Post Title</th>
                            <th>Post Body</th>
                        </tr>
                    </thead>
                    <tbody>                       
                        {this.state.posts.map(post =>{
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

const mapStateToProps = states =>{
    return {posts: states.posts};
}
export default connect(mapStateToProps)(Posts);
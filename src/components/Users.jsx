import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getUsers } from '../actions/index'
import Loading from './Loading';

class Users extends Component {
    async componentDidMount(){
        const userss = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.props.getUsers(userss.data);
    }
    render(){
        if(this.props.users.length>0){
            return (
            <table className="ui selectable inverted table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User name</th>
                        <th className="right aligned">Email</th>
                    </tr>
                </thead>
                <tbody>                       
                    {this.props.users.map(user =>{
                        return(
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td className="right aligned">{user.email}</td>
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
    return {users: state.users};
}
export default connect(mapStateToProps,{getUsers})(Users);
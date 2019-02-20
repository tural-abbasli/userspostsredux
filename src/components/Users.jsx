import React, {Component} from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';

class Users extends Component {
    state={
        users:[]
    }
    componentDidMount(){
        this.props.users.then(res=> this.setState({users:res}));
    }
    render(){
        if(this.state.users.length>0){
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
                    {this.state.users.map(user =>{
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

const mapStateToProps = states =>{
    return {users: states.users};
}
export default connect(mapStateToProps)(Users);
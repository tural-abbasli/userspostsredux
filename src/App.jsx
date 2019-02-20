import React from 'react';
import Users from './components/Users';
import Posts from './components/Posts'
const App = () =>{
    return(
        <div className="ui container">
            <Users/>
            <Posts/>
        </div>
    );
}

export default App;
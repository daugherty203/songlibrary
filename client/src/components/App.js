import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import SongForm from './SongForm';
import SongList from './SongList';


class App extends Component {


  state = { songs: [] }

  componentDidMount() {
    //SONG make a call to our rails server to get Items
  }

  addItem = (name) => {
    //SONG make api call to rails server to add item
    //SONG update state
  }

  updateSONG = (id) => {
    //SONG make api call to update song
    //SONG update state
  }

  deleteSONG = (id) => {
    //SONG make api call to delete song
    //SONG remove it from state
  }


  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <ProtectedRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <SongForm addSong={this.addSong} />
        <SongList
          songs={this.state.songs}
          updatesong={this.updatesong}
          deletesong={this.deletesong} />
      </div>
    );
  }
}

export default App;

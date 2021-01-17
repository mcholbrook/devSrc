import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from '../Users/Users'
import "./App.css";
import ChatRoom from '../Chat/Chat'
import AddResource from '../AddResource/AddResource'
import * as resourceAPI from '../../services/resourceApi'
import useChat from '../../useChat'
import Home from '../Home/Home'




class App extends Component {
  state = {
    user: authService.getUser(),
    resources: [],
    myResources: []

  };

  async componentDidMount() {
    // const resources = await resourceAPI.getAll()
    const myResources = await resourceAPI.getMyResources(this.state.user)
    this.setState({myResources: myResources.savedItems})                
  };

  handleLogout = () => {
    authService.logout();                               
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  handleAddResource = async (newResourceData) => {
    const newResource = await resourceAPI.create(newResourceData)
    this.setState (
      (state) => ({
        resources: [...state.resources, newResource],
      }),
      () => this.props.history.push('/myNotebook')
    )
  }

 



  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Welcome. This is an authorization template.</h1>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() =>
            user ? <Users /> : <Redirect to="/login" />
          }
        />
        {/* <Route 
          exact path="/chat"
          render={() => (
            <Chat />
          )}
        /> */}
         <Route 
          exact path="/myNotebook"
          render={() => (
            <AddResource
            handleAddResource = {this.handleAddResource}
            myResources={this.state.myResources}
            user={this.state.user}/>
          )}
        />
        {/* <Route 
          exact path='/myNotebook'
          render={() => 
          <ResourceList
            resources={this.state.resources}
            user={this.state.user}
          />
          }
        /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/:roomId" component={ChatRoom} />
      </>
    );
  }
}

export default App;

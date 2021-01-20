import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from "../Users/Users";
import "./App.css";
import Chat from "../Chat/Chat";
import AddResource from "../AddResource/AddResource";
import * as resourceAPI from "../../services/resourceApi";
import ShowResource from "../ShowResource/ShowResource";
import * as flashCardAPI from "../../services/flashCardApi";
import FlashCardList from "../FlashCardList/FlashCardList";
import AddNewNote from "../../components/AddNote/AddNote";
import SearchResource from '../Search/Search'
import * as noteAPI from '../../services/noteApi'

class App extends Component {
  state = {
    user: authService.getUser(),
    resources: [],
    flashCards: [],
    myResources: [],
    savedItems: [],
    notes: [],
  };

  async componentDidMount() {
    // const resources = await resourceAPI.getAll()
    if (this.state.user) {
      const myResources = await resourceAPI.getMyResources(this.state.user);
      this.setState({ myResources: myResources.savedItems });
    }
  }

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  handleAddResource = async (newResourceData) => {
    const newResource = await resourceAPI.create(newResourceData);
    this.setState(
      (state) => ({
        myResources: [...state.myResources, newResource],
      }),
      () => this.props.history.push("/myNotebook")
    );
  };

  // handleAddNote = async (newNoteData) => {
  //   const newNote = await noteAPI.addNote(newNoteData);
  //   this.setState(
  //     (state) => ({
  //       notes: [...state.notes, newNote]
  //     }),
  //     () => this.props.history.push("/myNotebook")
  //   );
  // };

  // addToSaved = id => {
  //   const newResource = this.state.resource.find(r => r._id === id);
  // this.setState(
  //   (state) => ({
  //     savedItems: [...state.resources, newResource]
  //   }),
  //   () => this.props.history.push("/myNotebook")
  // )
  // }

  handleAddFlashCard = async (newFlashCardData) => {
    const newFlashCard = await flashCardAPI.create(newFlashCardData);
    this.setState(
      () => ({
        flashCards: [newFlashCard.flashCards],
      }),
      () => this.props.history.push("/studyBuddy")
    );
  };

  render() {
    const { user } = this.state;
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <div id="intro">
              <h1>Welcome to devSrc,</h1>
              <h4>a resource sharing app for Software Engineers.</h4>
              </div>
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
          render={() => (user ? <Users /> : <Redirect to="/login" />)}
        />
        <Route
          exact
          path="/chat"
          render={() =>
            authService.getUser() ? <Chat /> : <Redirect to="/login" />
          }
        />
        {/* <Route exact path="/chat" component={Chat} /> */}
        <Route
          exact
          path="/myNotebook"
          render={() =>
            authService.getUser() ? (
              <AddResource
                handleAddResource={this.handleAddResource}
                myResources={this.state.myResources}
                user={this.state.user}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/details"
          render={({ location }) => (
            <ShowResource
              location={location}
              //handleAddNote={this.handleAddNote}
              user={this.state.user}
            />
          )}
        />
        <Route
          exact
          path="/studyBuddy"
          render={() =>
            authService.getUser() ? (
              <FlashCardList
                flashCards={this.state.flashCards}
                handleAddFlashCard={this.handleAddFlashCard}
                user={this.state.user}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        
         <Route
          exact
          path="/search"
          render={() => (
            <SearchResource
              user={this.state.user}
            />
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
      </>
    );
  }
}

export default App;

// User fills out SignupForm
// Hits route with a post request
// Into controllers where we have a function that will store the users token.
// Must communicate with the authService function in the frontend

// Now that the user has been authenticated

// User is able to view information such as:
// name, email, password that was entered in the signupForm
// Alias?, Bio?

// In App.jsx we must import
// import Login from "../Login/Login";
// import Signup from "../Signup/Signup";
// import authService from "../../services/authService";
//and return a Route

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import UserInfo from "../UserInfo/UserInfo";
import * as userAPI from "../../services/userService";

class UserProfile extends Component {
  state = {
    user: this.props.user,
  };

  async componentDidMount() {
    const user = await userAPI.getUser(this.props.user._id);
    this.setState({ user: user });
  }

  render() {
    return (
      <>
        <h2>User Profile</h2>
        <div id="userProfile" className="row">
          <div id="avatarImg">
            <img src="http://theoldreader.com/kittens/240/240/" alt="" />
          </div>
          <div className="col s12">
            <div className="row">
              <p>Name: {this.state.user.name}</p>
              <p>Github: {this.state.user.github}</p>
              <p>LinkedIn: {this.state.user.linkedIn}</p>
              <p>Website: {this.state.user.website}</p>
              <div className="buttons">
                <div className="btn-div">
                  <button className="btn grey lighten-1">
                    <Link
                      to={{
                        pathname: "/UpdateProfile",
                        state: this.state.user,
                      }}
                    >
                      Update
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserProfile;

// const ResourceCard = ({ resource, handleDeleteResource }) => {
//   return (
//     <>
//       <div className="card">
//         {/* <div className="card-image waves-effect waves-block waves-light">
//           <img className="activator" src="images/office.jpg" />
//         </div> */}
//         <div className="card-content">
//           <span className="card-title activator grey-text text-darken-4">
//             <a href={resource.url}>{resource.title}</a>
//             {/* <i className="material-icons right">more_vert</i> */}
//           </span>
//           <p> Description: {resource.description}</p>
//         </div>
//         <div className="buttons">
//           <div className="btn-div">
//             <button className="btn grey lighten-1">
//               <Link
//                 to={{
//                   pathname: "/details",
//                   state: { resource },
//                 }}
//               >
//                 Details
//               </Link>
//             </button>
//           </div>
//           <div className="btn-div">
//             <button
//               className="btn red lighten-2"
//               type="submit"
//               onClick={() => handleDeleteResource(resource._id)}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//         {/* <div className="card-reveal">
//             <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
//                 <p>Here is some more information about this product that is only revealed once clicked on.</p>
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default ResourceCard;

// const UserProfile = ({ user }) => {
//   return (
//     <>
//       <h1>User Profile</h1>
//       <div id="avatar-img">
//       <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
//       </div>
//       <h2>{user.email}</h2>
//       <p>
//         <Link
//           to={{
//             pathname: "/UpdateProfile",
//             state: { user },
//           }}
//         >
//           Update Profile
//         </Link>
//       </p>
//     </>
//   );
// };

// export default UserProfile;

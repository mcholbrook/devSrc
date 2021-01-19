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


import React from "react";
import { Link } from "react-router-dom";

const UserProfile = ({ user }) => {
    return (
      <>
        <h1>User Profile</h1>
        <p>
            <Link
              to={{
                pathname: "/UpdateProfile",
                state: { user },
              }}
            >
              Update Profile
            </Link>
          </p>
      </>
    );
}

export default UserProfile;



// import React from "react";
// import { Link } from "react-router-dom";


// const ResourceCard = ({ resource, handleDeleteResource }) => {
//     return (
//         <>
//           <h3>{resource.title}</h3>
//           <a href={resource.url}>Go to Resource</a>
//           <p>
//             <Link
//               to={{
//                 pathname: "/details",
//                 state: { resource },
//                 // function: handleAddNote()
//               }}
//             >
//               Details
//             </Link>
//           </p>
//           <button
//             type="submit"
//             onClick={(resource) => handleDeleteResource(resource)}
//           >
//             Delete
//           </button>
//         </>
//       );
//     };

// export default ResourceCard;
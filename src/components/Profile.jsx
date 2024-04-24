import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img
        src={user.picture}
        alt={user.name}
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          marginBottom: "20px",
          margin: "auto", // Center the image horizontally
          display: "block"
        }}
      />

      <br/>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>First name : {user.given_name}</p>
      <p>Last Name : {user.family_name}</p>
      {user.email_verified && <p>Email is verified✅ </p>}
      
    </div>
  );
};

export default Profile;

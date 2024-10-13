import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <button
        style={{
          float: "right",
          backgroundColor: "#007bff",
          padding: "5px 10px",
          border: "1px solid black",
          borderRadius: "8px",
          color: "#fff",
        }}
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </div>
  );
};

export default LogoutButton;

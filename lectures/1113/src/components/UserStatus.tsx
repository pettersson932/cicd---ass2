import { useAuth } from "../context/AuthContext";

function UserStatus() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <p>{isAuthenticated ? "You are logged in" : "You are logged out"}</p>
      <button onClick={isAuthenticated ? logout : login}>
        {isAuthenticated ? "Log out" : "Log in"}
      </button>
    </div>
  );
}

export default UserStatus;

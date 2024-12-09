import { useContext } from "react";
import { UserContext } from "../App";

function DisplayUsername() {
  const username = useContext(UserContext);

  return (
    <section>
      <h2>Användarnamn: {username}</h2>
    </section>
  );
}

export default DisplayUsername;

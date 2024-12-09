import { useContext } from "react";
import { UpdateUserContext } from "../App";

function ChangeUsername() {
  const updateUsername = useContext(UpdateUserContext);

  return (
    <section>
      <input
        type="text"
        onChange={(event) => updateUsername(event.target.value)}
      />
    </section>
  );
}

export default ChangeUsername;

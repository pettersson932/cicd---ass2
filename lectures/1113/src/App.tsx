import { useState, createContext } from "react";
import "./App.css";

const UserContext = createContext<string | undefined>(undefined);
const UpdateUserContext = createContext<
  React.Dispatch<React.SetStateAction<string>>
>(() => {});

import DisplayUsername from "./components/DisplayUsername";
import ChangeUsername from "./components/ChangeUsername";

function App() {
  const [username, setUsername] = useState("");

  return (
    <main>
      <UserContext.Provider value={username}>
        <UpdateUserContext.Provider value={setUsername}>
          <DisplayUsername />
          <ChangeUsername />
        </UpdateUserContext.Provider>
      </UserContext.Provider>
    </main>
  );
}

export { UserContext, UpdateUserContext };

export default App;

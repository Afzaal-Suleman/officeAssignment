import Main from "./pages/Main";
import Grocery from "./components/Grocery";
import "./App.css";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? <Grocery /> : <Main />}
      <button onClick={() => setShow((pre) => !pre)}>Show Form and Game</button>
    </>
  );
}

export default App;

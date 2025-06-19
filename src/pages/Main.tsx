import { useEffect, useState } from "react";
import NameForm from "../components/NameForm";
import AddressForm from "../components/AddressForm";
import User from "../components/User";
// import Game from "./components/Game";
import Wordle from "../components/Wordle";
import { useAppSelector } from "../store/hooks";
function Main() {
  const isSet = useAppSelector((state) => state.nameEmail.isSet);
  const isShow = useAppSelector((state) => state.address.show);

  const [handleShowForms, setHandleShowForms] = useState(true);
  const [game, setGame] = useState(false);
  useEffect(() => {
    setHandleShowForms(isSet);
  }, [isSet]);
  return (
    <div className="flex flex-col justify-center gap-5 items-center w-full h-screen">
      {game ? (
        <div>
          {/* <Game /> */}
          <Wordle />
        </div>
      ) : (
        <div>
          {isShow ? (
            <div>
              <User />
            </div>
          ) : (
            <div>
              {handleShowForms ? (
                <div className="">
                  <NameForm />
                </div>
              ) : (
                <div className="">
                  <AddressForm />
                </div>
              )}
            </div>
          )}
        </div>
      )}
      {/* <button onClick={() => setHandleShowForms((pre) => !pre)}>
        {game ? "Show name Form" : "Show address Form"}
      </button> */}
      <button onClick={() => setGame((pre) => !pre)}>
        {game ? "Show Form" : "Show Game"}
      </button>
    </div>
  );
}
export default Main;

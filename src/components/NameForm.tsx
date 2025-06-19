// import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import { setNamesEmail, setTrue } from "../slice/nameSlice.ts";
const NameForm = () => {
  const dispatch = useAppDispatch();
  const d = useAppSelector((state) => state.nameEmail);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const handleClick = (e: any) => {
    e.preventDefault();
    if (d.name === "" || d.email === "") {
      alert("Please fill in all fields");
      return;
    }
    dispatch(setTrue());
  };
  return (
    <>
      <form
        action=""
        // onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-96"
      >
        <div>
          <input
            type="text"
            value={d.name}
            // onChange={(e) => setName(e.target.value)}
            onChange={(e) =>
              dispatch(setNamesEmail({ name: e.target.value, email: d.email }))
            }
            placeholder="Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <input
            type="text"
            value={d.email}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={(e) =>
              dispatch(setNamesEmail({ name: d.name, email: e.target.value }))
            }
            placeholder="Email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <input
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleClick}
          />
        </div>
      </form>
    </>
  );
};

export default NameForm;

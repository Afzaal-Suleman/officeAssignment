import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { setAddress } from "../slice/addressSlice";
const AddressForm = () => {
  const dispatch = useAppDispatch();
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(setAddress({ city, street }));
  };
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-96"
      >
        <div>
          <input
            type="text"
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Street Address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <input
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          />
        </div>
      </form>
    </>
  );
};

export default AddressForm;

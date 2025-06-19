import { useState } from "react";

const Grocery = () => {
  const [items, setItems] = useState("");
  const [list, setList] = useState<any[]>([]);

  const handleSubmit = () => {
    const newItem = {
      id: list.length + 1,
      name: items,
      bought: false,
    };
    const l = list?.some((i) => i.name === items);
    console.log(l);
    if (l) {
      alert("item is already in cart");
      return;
    }

    setList((prev) => [...prev, newItem]);
    setItems("");
  };

  return (
    <div className="w-full  flex justify-center items-center flex-col">
      <div className="w-full  flex justify-center items-center">
        <input
          type="text"
          placeholder="Enter Items"
          value={items}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setItems(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 border border-blue-300 py-2 "
        >
          Add Item
        </button>
      </div>

      <ul className="mt-4 ">
        {list.map((item) => (
          <li key={item.id} className="mb-2 flex gap-6">
            {item.id}. {item.name}
            <select
              className=""
              value={item.bought ? "bought" : "notbought"}
              onChange={(e) => {
                const value = e.target.value === "bought";
                setList((prev) =>
                  prev.map((el) =>
                    el.id === item.id ? { ...el, bought: value } : el
                  )
                );
              }}
            >
              <option value="bought">Bought</option>
              <option value="notbought">Not Bought</option>
            </select>
            <button
              onClick={() =>
                setList((prev) => prev.filter((el) => el.id !== item.id))
              }
              className="ml-2 text-red-500 font-bold"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grocery;

import { useState } from "react";

const SearchBar = () => {
    const [input,setInput] = useState("")
    const handleAddTask = () => {
      
    }
  return (
    <div className="text-white font-semibold-mono  border-2 flex justify-between my-5 mx-60 rounded-xl px-10 py-5">
      <input
        className="bg-emerald-800 rounded-lg w-3/4 p-3 placeholder-slate-200"
        type="text"
        placeholder="Add new Task here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTask} className="w-1/4 bg-emerald-800 rounded-lg mx-3">Add Task</button>
    </div>
  );
};

export default SearchBar;

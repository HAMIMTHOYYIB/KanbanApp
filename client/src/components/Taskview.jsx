import { useSelector } from "react-redux";

const Taskview = () => {
  const {todo,inProgress,done} = useSelector((store) => store.tasks)
  return (
    <div className="flex mx-auto text-center w-3/4 justify-between border-2 rounded-md hover:border-0 duration-200">
      <div className="w-1/3 border-emerald-600 hover:border-4 m-2 p-1 rounded-xl duration-100">
        <h3 className="border-2 bg-emerald-700 text-white py-2 rounded-lg mx-1">
          ToDo
        </h3>
        <ul>
          {todo.map((task, i) => (
            <li key={i} className="px-2 h-20 bg-green-300 my-2 mx-4 flex justify-center items-center rounded">
              {task.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/3 border-emerald-600 hover:border-4 m-2 p-1 rounded-xl duration-100">
        <h3 className="border-2 bg-emerald-700 text-white py-2 rounded-lg mx-1">
          In Progress
        </h3>
        <ul>
          {inProgress.map((task, i) => (
            <li key={i} className="px-2 h-20 bg-green-300 my-2 mx-4 flex justify-center items-center rounded">
              {task.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/3 border-emerald-600 hover:border-4 m-2 p-1 rounded-xl duration-100">
        <h3 className="border-2 bg-emerald-700 text-white py-2 rounded-lg mx-1">
          Completed
        </h3>
        <ul>
          {done.map((task, i) => (
            <li key={i} className="px-2 h-20 bg-green-300 my-2 mx-4 flex justify-center items-center rounded">
              {task.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Taskview;

import { useDispatch, useSelector } from "react-redux";
import { moveTask } from "../redux/slices/taskSlice";

const Taskview = () => {
  const dispatch = useDispatch();

  const { todo, inProgress, done } = useSelector(state => state.tasks.tasks);

  const changeStatus = (source, destination,task) => {
    dispatch(moveTask({
      source,
      destination,
      task,
    }))
  }
  // const onDragEnd = (result) => {
  //   console.log(result);
    // };
  return (
    <div className="flex mx-auto text-center w-3/4 justify-between border-2 border-slate-200 rounded-xl hover:border-0 duration-100">
      {/* <DragDropContext onDragEnd={onDragEnd}> */}
        <div className="w-1/3 border-emerald-600 hover:border-4 m-2 p-1 rounded-xl duration-100">
          <h3 className="border-2 bg-emerald-700 text-white py-2 rounded-lg mx-1">
            ToDo
          </h3>
          <ul>
            {todo && todo.map((task, i) => (
              <div key={i} >
                <li className="px-2 h-20 bg-green-300 my-2 mx-4 flex justify-center items-center rounded scale-95 hover:scale-100 duration-100 cursor-pointer">
                  <p>{task.value}</p>
                </li>
                <button className="border-2" onClick={() => changeStatus("todo","inProgress",task)}>move to progress</button>
              </div>
            ))}
          </ul>
        </div>
        <div className="w-1/3 border-emerald-600 hover:border-4 m-2 p-1 rounded-xl duration-100">
          <h3 className="border-2 bg-emerald-700 text-white py-2 rounded-lg mx-1">
            In Progress
          </h3>
          <ul>
            {inProgress && inProgress.map((task, i) => (
              <li key={i} className="px-2 h-20 bg-green-300 my-2 mx-4 flex justify-center items-center rounded  scale-95 hover:scale-100 duration-100 cursor-pointer">
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
            {done && done.map((task, i) => (
              <li key={i} className="px-2 h-20 bg-green-300 my-2 mx-4 flex justify-center items-center rounded scale-95 hover:scale-100 duration-100 cursor-pointer">
                {task.value}
              </li>
            ))}
          </ul>
        </div>
      {/* </DragDropContext> */}
    </div>
  );
};

export default Taskview;

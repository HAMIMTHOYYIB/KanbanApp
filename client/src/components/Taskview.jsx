import { useDispatch, useSelector } from "react-redux";
import { deleteTask, moveTask } from "../redux/slices/taskSlice";
import { useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import Task from './Task';
import { ItemTypes } from '../utils/constants';

const Taskview = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const allTasks = ["todo", "inProgress", "done"];

  const changeStatus = (source, destination, task) => {
    const obj = { source, destination, taskId: task.id };
    dispatch(moveTask(obj));
  };

  const handleDeleteTask = (source, task) => {
    const data = { source, taskId: task.id };
    dispatch(deleteTask(data));
  };

  const Column = ({ col, tasks }) => {
    const [, drop] = useDrop({
      accept: ItemTypes.TASK,
      drop: (item, monitor) => {
        const { task, source } = item;
        if (source !== col) {
          changeStatus(source, col, task);
        }
      },
    });

    return (
      <div
        ref={drop}
        className="w-full sm:w-4/12 border-emerald-600 hover:border-4 rounded-xl duration-100"
      >
        <h3 className="border-2 bg-emerald-700 text-white py-2 rounded-lg mx-1">
          {col}
        </h3>
        <ul>
          {tasks[col] &&
            tasks[col].map((task, index) => (
              <Task
                key={task.id}
                task={task}
                index={index}
                source={col}
                changeStatus={changeStatus}
                handleDeleteTask={handleDeleteTask}
              />
            ))}
        </ul>
      </div>
    );
  };

  return (
    <DndProvider backend={window.innerWidth < 768 ? TouchBackend : HTML5Backend}>
      <div className="flex flex-wrap mx-auto text-center w-full sm:w-3/4 justify-between border-2 border-slate-200 rounded-xl hover:border-0 duration-100">
        {allTasks.map((col) => (
          <Column key={col} col={col} tasks={tasks} />
        ))}
      </div>
    </DndProvider>
  );
};

export default Taskview;

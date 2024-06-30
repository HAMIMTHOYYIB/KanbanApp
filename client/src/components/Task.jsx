import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/constants';

const Task = ({ task, index, source, changeStatus, handleDeleteTask, allTasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TASK,
    item: { task, index, source },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <li
      ref={drag}
      className="px-2 h-20 bg-green-300 my-2 mx-4 flex justify-center items-center rounded scale-95 hover:scale-100 duration-100 cursor-grab"
      style={{ opacity: isDragging ? 0.3 : 1, cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <p>{task.value}</p>
      {source !== "done" ? (
        <button
          className="border-2"
          onClick={() =>
            changeStatus(source, allTasks[allTasks.indexOf(source) + 1], task)
          }
        >
          Move
        </button>
      ) : (
        <button
          className="rounded-lg hover:bg-emerald-700 hover:scale-100 scale-90 duration-100 p-1 bg-emerald-600"
          onClick={() => handleDeleteTask(source, task)}
        >
          Delete
        </button>
      )}
    </li>
  );
};

export default Task;

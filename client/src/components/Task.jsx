import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { ItemTypes } from '../utils/constants';
import { useState } from 'react';
import { editTask } from '../redux/slices/taskSlice';

const Task = ({ task, index, source, changeStatus, handleDeleteTask }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editVal, setEditVal] = useState(task.value);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TASK,
    item: { task, index, source },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleEditTask = () => {
    if (isEdit) {
      dispatch(editTask({ source, taskId: task.id, taskvalue: editVal }));
    }
    setIsEdit(!isEdit);
  };

  return (
    <li
      ref={drag}
      className="px-2 py-1 min-h-20 bg-green-300 my-2 mx-2 flex justify-between items-center rounded scale-95 hover:scale-100 duration-100 cursor-grab font-sans"
      style={{ opacity: isDragging ? 0.3 : 1, cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {isEdit ? (
        <input
          type="text"
          onChange={(e) => setEditVal(e.target.value)}
          value={editVal}
          className="flex-grow text-center bg-emerald-500 p-2 rounded-2xl"
        />
      ) : (
        <p className="flex-grow">{task.value}</p>
      )}
      <button onClick={handleEditTask} className='me-3 hover:scale-105 scale-90 duration-100 bg-emerald-500 p-2 rounded-xl'>
        {isEdit ? <i className="fa-solid fa-check hover:scale-100 scale-90 duration-100 bg-emerald-500 p-1 rounded-xl"></i> : <i className="fa-regular fa-pen-to-square"></i>}
      </button>
      <button
        className="hover:scale-110 scale-90 duration-100 bg-emerald-500 rounded-xl p-2"
        onClick={() => handleDeleteTask(source, task)}
      >
        <i className="fa-solid fa-trash hover:scale-100"></i>
      </button>
    </li>
  );
};

export default Task;

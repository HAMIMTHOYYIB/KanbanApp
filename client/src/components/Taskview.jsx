import { useDispatch, useSelector } from "react-redux";
import { deleteTask, moveTask } from "../redux/slices/taskSlice";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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

  const handleDragEnd = (result) => {
    console.log("Drag End Result:", result);
    if (!result.destination) return;
    const { source, destination } = result;
    changeStatus(source.droppableId, destination.droppableId, tasks[source.droppableId][source.index]);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex mx-auto text-center w-3/4 justify-between border-2 border-slate-200 rounded-xl hover:border-0 duration-100">
        {allTasks.map((col) => (
          <Droppable droppableId={col} key={col}>
            {(provided) => (
              <div
                className="w-1/3 border-emerald-600 hover:border-4 m-2 p-1 rounded-xl duration-100"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h3 className="border-2 bg-emerald-700 text-white py-2 rounded-lg mx-1">
                  {col}
                </h3>  
                <ul>
                  {tasks[col] && tasks[col].map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                      {(provided) => (
                        <li
                          className="px-2 h-20 bg-green-300 my-2 mx-4 flex justify-center items-center rounded scale-95 hover:scale-100 duration-100"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <p>{task.value}</p>
                          {col !== "done" ? (
                            <button
                              className="border-2"
                              onClick={() => changeStatus(col, allTasks[allTasks.indexOf(col) + 1], task)}
                            >
                              Move
                            </button>
                          ) : (
                            <button
                              className="rounded-lg hover:bg-emerald-700 hover:scale-100 scale-90 duration-100 p-1 bg-emerald-600"
                              onClick={() => handleDeleteTask(col, task)}
                            >
                              Delete
                            </button>
                          )}
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Taskview;

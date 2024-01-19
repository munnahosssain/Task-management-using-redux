import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus, userTasks } from "../../redux/features/tasks/tasksSlice";

const MyTasks = () => {
  const { tasks, userSpecificTasks } = useSelector((state) => state.taskSlice);
  const { name: userName } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userTasks(userName));
  }, [userName, dispatch, tasks]);

  return (
    <div>
      <h1 className="text-xl my-3">Delivered</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpecificTasks.map((task) => (
          <div
            key={task.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{task.title}</h1>
            <div className="flex gap-3">
              <button className="grid place-content-center" title="Details">
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button
                title="Done"
                onClick={() =>
                  dispatch(updateStatus({ id: task.id, status: "done" }))
                }
                className="grid place-content-center"
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
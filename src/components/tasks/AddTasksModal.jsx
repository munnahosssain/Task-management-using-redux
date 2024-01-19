import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTasksModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="ilisher bari">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            {...register("title")}
            className="w-full rounded-md mt-2"
          />
        </div>
        <div className="my-5">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            {...register("description")}
            className="w-full rounded-md mt-2"
          />
        </div>
        <div>
          <label htmlFor="date">Dateline</label>
          <input
            id="date"
            type="date"
            {...register("date")}
            className="w-full rounded-md mt-2"
          />
        </div>
        <div className="my-5">
          <label htmlFor="assignedTo">Assign to</label>
          <select
            id="assignedTo"
            {...register("assignedTo")}
            className="w-full rounded-md mt-2"
          >
            <option defaultValue value="Mayinuddin Munna">
              Mayinyddin Munna
            </option>
            <option value="Habibul Bashar">Habibul Bashar</option>
            <option value="Abu Doha">Abu Doha</option>
            <option value="Asif Mahmud">Asif Mahmud</option>
          </select>
        </div>
        <div>
          <label htmlFor="Priority">Assign Priority</label>
          <select
            id="priority"
            {...register("Priority")}
            className="w-full rounded-md mt-2"
          >
            <option defaultValue value="High">
              High
            </option>
            <option value="medium">medium</option>
            <option value="low">low</option>
          </select>
        </div>
        <div className="flex gap-4 justify-end mt-5">
          <button
            onClick={() => onCancel()}
            type="button"
            className="btn btn-danger"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTasksModal;

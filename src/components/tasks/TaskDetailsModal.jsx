import { useSelector } from "react-redux";
import Modal from "../ui/Modal";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
  const { tasks } = useSelector((state) => state.taskSlice);
console.log(tasks);
  const task = tasks.find((item) => item.id === id);
//   console.log(task);

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
        {task?.description}
      </Modal>
    </>
  );
};

export default TaskDetailsModal;

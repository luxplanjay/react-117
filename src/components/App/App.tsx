import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import TaskList from "../TaskList/TaskList";
import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import { getTasks } from "../../services/taskService";
import css from "./App.module.css";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  return (
    <div className={css.container}>
      <header className={css.header}>
        <button className={css.createButton} onClick={openModal}>
          Create task
        </button>
      </header>
      {isLoading && <strong className={css.loading}>Loading tasks...</strong>}
      {data && !isLoading && <TaskList tasks={data} />}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm onSuccess={closeModal} />
        </Modal>
      )}
    </div>
  );
}

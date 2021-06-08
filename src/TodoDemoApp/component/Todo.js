import { useState } from "react";
import Backdrop from "./Backdrop";
import DeleteModal from "./DeleteModal";

const Todo = ({ title = "My Default Todo" }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onDelete = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const onCancel = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const onConfirm = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="card">
      <h2 className="singleLine">{title}</h2>
      <div className="actions">
        <button onClick={onDelete} className="btn">
          Delete
        </button>
      </div>
      {modalIsOpen && <DeleteModal cancel={onCancel} confirm={onConfirm} />}
      {modalIsOpen && <Backdrop cancel={onCancel} />}
    </div>
  );
};

export default Todo;

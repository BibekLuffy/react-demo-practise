const DeleteModal = ({ cancel, confirm }) => {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button onClick={cancel} className="btn btn--alt">
        Cancel
      </button>
      <button onClick={confirm} className="btn">
        Confirm
      </button>
    </div>
  );
};

export default DeleteModal;

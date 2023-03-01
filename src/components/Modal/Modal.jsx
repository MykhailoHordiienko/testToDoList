import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusToDo } from 'redux/toDoSlice';

export const Modal = ({ id, toggleModal }) => {
  const dispatch = useDispatch();
  const toDoListState = useSelector(state => state.toDosList);

  const { title, description, status } = toDoListState.find(
    toDo => toDo.id === id
  );

  return (
    <div className="overlay">
      <div className="modal">
        <button
          className="closebtn"
          onClick={e => toggleModal(e)}
          type="button"
        >
          Close
        </button>
        <h1>{title}</h1>
        <h2>Description:</h2>
        <p>{description}</p>
        <h2>Status:</h2>
        <input
          className="status-input"
          type="checkbox"
          checked={status}
          onChange={() => dispatch(toggleStatusToDo(id))}
        ></input>
      </div>
    </div>
  );
};

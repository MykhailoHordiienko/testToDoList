import { useDispatch } from 'react-redux';
import { toggleStatusToDo } from 'redux/toDoSlice';

export const ToDoTableItem = ({
  id,
  title,
  description,
  status,
  toggleModal,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <tr onClick={event => toggleModal(event, id)}>
        <td>
          <p style={{ textAlign: 'center' }}>{id}</p>
        </td>
        <td>
          <p className="table-item-text">{title}</p>
        </td>
        <td>
          <p className="table-item-text">{description}</p>
        </td>
        <td style={{ textAlign: 'center' }}>
          <input
            className="status-input"
            type="checkbox"
            checked={status}
            onChange={() => dispatch(toggleStatusToDo(id))}
          ></input>
        </td>
      </tr>
    </>
  );
};

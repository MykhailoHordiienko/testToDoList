import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from 'redux/toDoSlice';

export const ToDoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [invalidTitle, setInvalidTitle] = useState(false);
  const [invalidDescription, setInvalidDescription] = useState(false);
  const toDoListState = useSelector(state => state.toDosList);
  const dispatch = useDispatch();

  const validateTitle = event => {
    if (title) {
      setInvalidTitle(false);
      event.target.elements.title.style.borderColor = '';
    } else {
      setInvalidTitle(true);
      event.target.elements.title.style.borderColor = 'red';
    }
  };
  const validateDescription = () => {
    if (description) {
      setInvalidDescription(false);
    } else {
      setInvalidDescription(true);
    }
  };
  // колір зробив 2-ма варіантами 🤷‍♂️

  const handleSubmit = event => {
    event.preventDefault();
    validateTitle(event);
    validateDescription();
    if (!title || !description) {
      return;
    }
    const id = toDoListState.length + 1;
    //   не затягував nanoid

    dispatch(addToDo({ id, title, description, status: false }));
    setDescription('');
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-input-wrapper">
          <label>
            Title
            <input
              placeholder="Enter title"
              type="text"
              name="title"
              value={title}
              onChange={e => setTitle(e.currentTarget.value)}
            />
          </label>
          {invalidTitle && <p style={{ color: 'red' }}>This field is empty</p>}
        </div>
        <div className="form-input-wrapper">
          <label style={{ marginLeft: 20 }}>
            Description
            <input
              style={{ borderColor: invalidDescription ? 'red' : '' }}
              placeholder="Enter description"
              type="text"
              name="description"
              value={description}
              onChange={e => setDescription(e.currentTarget.value)}
            />
          </label>
          {invalidDescription && (
            <p style={{ marginLeft: 20, color: 'red' }}>This field is empty</p>
          )}
        </div>

        <button style={{ marginLeft: 20, fontSize: 20 }} type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

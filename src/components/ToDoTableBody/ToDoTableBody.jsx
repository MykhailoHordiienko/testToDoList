import { ToDoTableItem } from 'components/ToDoTableItem/ToDoTableItem';
import { useSelector } from 'react-redux';

export const ToDoTableBody = ({ toggleModal }) => {
  const toDoListState = useSelector(state => state.toDosList);

  return (
    <>
      <tbody style={{ backgroundColor: 'teal' }}>
        {toDoListState.map(toDo => (
          <ToDoTableItem
            toggleModal={toggleModal}
            key={toDo.id}
            id={toDo.id}
            title={toDo.title}
            description={toDo.description}
            status={toDo.status}
          />
        ))}
      </tbody>
    </>
  );
};

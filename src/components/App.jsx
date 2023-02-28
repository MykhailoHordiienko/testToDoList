import { ToDoForm } from './ToDoForm/ToDoForm';
import { ToDoTable } from './ToDoTable/ToDoTable';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        padding: 20,
        fontSize: 20,
        color: '#010101',
      }}
    >
      <ToDoForm />
      <ToDoTable />
    </div>
  );
};

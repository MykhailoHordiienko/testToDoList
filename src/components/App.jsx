import { ToDoForm } from './ToDoForm/ToDoForm';
import { ToDoTable } from './ToDoTable/ToDoTable';

export const App = () => {
  return (
    <div className="app">
      <ToDoForm />
      <ToDoTable />
    </div>
  );
};

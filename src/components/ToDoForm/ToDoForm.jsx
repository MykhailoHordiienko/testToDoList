import { FormButton } from 'components/FormButton/FormButton';
import React from 'react';

export const ToDoForm = () => {
  return (
    <div>
      <form>
        <label>
          Title
          <input type="text" name="title" />
        </label>
        <label style={{ marginLeft: 20 }}>
          Description
          <input type="text" name="description" />
        </label>
        <FormButton />
      </form>
    </div>
  );
};

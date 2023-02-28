import { ToDoTableBody } from 'components/ToDoTableBody/ToDoTableBody';
import React from 'react';

export const ToDoTable = () => {
  const tableTh = ['ID', 'TITLE', 'DESCRIPTION', 'STATUS'];
  return (
    <table style={{ marginTop: 50, borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          {tableTh.map((th, index) => (
            <th key={index} style={{ width: 200, backgroundColor: 'grey' }}>
              {/* index use because we weal not delete elements */}
              {th}
            </th>
          ))}
        </tr>
      </thead>
      <ToDoTableBody />
    </table>
  );
};

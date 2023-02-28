import React from 'react';

export const ToDoTableBody = () => {
  return (
    <tbody style={{ backgroundColor: 'teal' }}>
      <tr style={{ border: '1px dashed black' }}>
        <td>
          <p style={{ textAlign: 'center' }}>1</p>
        </td>
        <td>
          <p
            style={{
              display: 'block',
              width: 200,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            lorem20sefhsoifhsifhosihfoishoidfhosidhfoishdoifhosidhfoishdoifh
          </p>
        </td>
        <td>
          <p
            style={{
              display: 'block',
              width: 200,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            lorem20sefhsoifhsifhosihfoishoidfhosidhfoishdoifhosidhfoishdoifh
          </p>
        </td>
        <td style={{ textAlign: 'center' }}>
          <input type="checkbox"></input>
        </td>
      </tr>
    </tbody>
  );
};

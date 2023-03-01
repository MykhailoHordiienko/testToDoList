import { ToDoTableBody } from 'components/ToDoTableBody/ToDoTableBody';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export const ToDoTable = () => {
  const tableTh = ['ID', 'TITLE', 'DESCRIPTION', 'STATUS'];
  const [modal, setModal] = useState(false);
  const [modalToDoId, setModalToDoId] = useState(null);
  // модалку зробив тут щоб не було вкладенності в таблицю, якщо робив би списком була би в айтемі

  const toggleModal = (event, id) => {
    if (event.target.tagName === 'INPUT') {
      return;
    }
    setModal(prev => !prev);
    setModalToDoId(id);
  };
  return (
    <>
      <table style={{ marginTop: 50, borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {tableTh.map((th, index) => (
              <th key={index} style={{ width: 200, backgroundColor: 'grey' }}>
                {/* в key дав індекс тільки тому що масив статичний(знаю що не можна) */}
                {th}
              </th>
            ))}
          </tr>
        </thead>
        <ToDoTableBody toggleModal={toggleModal} />
      </table>
      {modal && <Modal id={modalToDoId} toggleModal={toggleModal} />}
    </>
  );
};

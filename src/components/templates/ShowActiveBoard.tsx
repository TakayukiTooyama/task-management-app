/** @format */

import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { Board } from '../../reducks/boards/types';
import TodoCard from '../Todo/TodoCard';

const ShowActiveBoard = () => {
  const boardId = window.location.pathname.split('/boards/')[1];
  const [boards, setBoards] = useState<Board[]>([]);
  const selectBoards = boards.filter((board) => board.boardId === boardId);
  console.log(boards);

  useEffect(() => {
    const unSub = db.collection('boards').onSnapshot((snapshot) => {
      setBoards(
        snapshot.docs.map((doc) => ({
          boardId: doc.id as string,
          boardTitle: doc.data().boardTitle as string,
        }))
      );
    });
    return () => unSub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="c-section-wrapin">
      <div className="module-spacer--medium"></div>
      <h2 className="u-text__headline u-text-center">
        {selectBoards.length > 0 && selectBoards[0].boardTitle}
      </h2>
      <div className="module-spacer--medium"></div>
      {selectBoards.map((board) => (
        <TodoCard
          key={board.boardId}
          boardId={board.boardId}
          boardTitle={board.boardTitle}
        />
      ))}
    </div>
  );
};

export default ShowActiveBoard;

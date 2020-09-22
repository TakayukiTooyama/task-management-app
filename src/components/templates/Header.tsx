/** @format */

import React, { useEffect, useState } from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { BoardList } from '../Board';
import { db } from '../../firebase';
import { Board } from '../../reducks/boards/types';

const useStyles = makeStyles({
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1024,
    margin: '0 auto',
  },
});

const Header = () => {
  const classes = useStyles();
  const [boards, setBoards] = useState<Board[]>([]);

  useEffect(() => {
    const unSub = db
      .collection('boards')
      .orderBy('created_at', 'asc')
      .onSnapshot((snapshot) => {
        setBoards(
          snapshot.docs.map((doc) => ({
            boardId: doc.id,
            boardTitle: doc.data().boardTitle,
          }))
        );
        return () => unSub();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolBar}>
          <h1>Task管理アプリ</h1>
          {boards.length > 0 ? <BoardList boards={boards} /> : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

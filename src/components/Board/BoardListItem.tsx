/** @format */

import React from 'react';
import { Divider, IconButton, makeStyles, MenuItem } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../reducks/boards/operations';
import { push } from 'connected-react-router';

const useStyles = makeStyles({
  menuItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

type Props = {
  boardId: string;
  boardTitle: string;
  handleClose: () => void;
};

const BoardListItem = ({ boardId, boardTitle, handleClose }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const goToSelectBoardItem = (boardId: string) => {
    dispatch(push(`/boards/${boardId}`));
    handleClose();
  };

  return (
    <>
      <MenuItem
        className={classes.menuItem}
        onClick={() => goToSelectBoardItem(boardId)}
      >
        {boardTitle}
        <IconButton onClick={() => dispatch(deleteBoard(boardId))}>
          <DeleteIcon />
        </IconButton>
      </MenuItem>
      <Divider />
    </>
  );
};

export default BoardListItem;

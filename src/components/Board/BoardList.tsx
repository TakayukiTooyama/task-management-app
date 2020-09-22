/** @format */

import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Menu, MenuItem, MenuList } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';

import { Button, TextInput } from '../Uikit';
import { addBoard } from '../../reducks/boards/operations';
import { Board } from '../../reducks/boards/types';
import BoardListItem from './BoardListItem';

type Props = {
  boards: Board[];
};

const BoardList = ({ boards }: Props) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null),
    [title, setTitle] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    setTitle('');
  }, []);

  const InputBoardTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addBoard(title));
    setTitle('');
    handleClose();
  };

  return (
    <>
      <Button
        label="ボードリスト"
        startIcon={<DashboardIcon />}
        onClick={handleClick}
      />
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuList>
          {boards.map((board: Board) => (
            <BoardListItem
              key={board.boardId}
              boardId={board.boardId}
              boardTitle={board.boardTitle}
              handleClose={handleClose}
            />
          ))}
          <MenuItem>
            <form onSubmit={(e) => onSubmit(e)}>
              <TextInput
                label="＋ New Board"
                fullWidth={true}
                multiline={false}
                required={false}
                rows={1}
                type="text"
                value={title}
                onChange={InputBoardTitle}
              />
            </form>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default BoardList;

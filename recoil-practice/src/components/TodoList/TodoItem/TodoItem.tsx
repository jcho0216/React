import React, { useCallback, useState } from "react";
import { ITodoTypes } from '../../recoil/todo';
import { FaPen } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { SetterOrUpdater } from "recoil";

interface PropTypes {
    id: number;
    contents: string;

    onComplete: (id: number) => void;
    onDelete: (id: number) => void;
    
    todos: ITodoTypes[];
    setTodos: SetterOrUpdater<ITodoTypes[]>;
}
import { atom } from 'recoil';

export interface ITodoTypes {
    id: number,
    contents: string,
    isCompleted: boolean
}

export const inputState = atom<string>({
    key: 'inputState',

    default: '',
})

export const todoState =  atom<ITodoTypes[]>({
    key: 'todos',
    default: [
        {
            id: 1,
            contents:'Todo List를 ',
            isCompleted: false
        },
        {
            id: 2,
            contents: '자유롭게',
            isCompleted: false
        }, 
        {
            id: 3,
            contents: '추가하세요!',
            isCompleted: false
        }
    ]
});
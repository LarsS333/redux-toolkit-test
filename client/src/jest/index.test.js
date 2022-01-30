import expect from 'expect';
import { render } from '@testing-library/react';
// import createMockStore from '../../test-utils';
// import fakeFetch from './fakeFetch';

import {
    getTasks,
    addTask,
    updateTasks,
    updateTask,
    updateCheck,
    deleteTask,
    deleteTaskAll
} from "../../src/services/taskServices";

import todoReducer, { 
    taskLoad, 
    initialState,
    todoSlice, 
    inputDelete, 
    updateText, 
    updateChecker, 
    completedAll,
    deleteAll, 
    updateFilter, 
    createTask, 
    increment,
    decrement
} from '../store/todoSlice'


describe('extraReducers', () => {

    it('returns initial state', () => {
        const nextState = todoReducer(undefined, {});
        expect(nextState).toBe(initialState);
    });

    it('filter', () => {
        const nextState = todoReducer(initialState, updateFilter('compleated'));
        expect(nextState.filter).toBe('compleated');
    });

    // it('createTask', () => {
    //     console.log(createTask.payload)
    //     const nextState = todoReducer(initialState, createTask({_id: '86dasaiud8732ngf78t', done: false, text: 'bla-bla'}));
    //     expect(nextState.todos).toStrictEqual([{_id: '86dasaiud8732ngf78t', done: false, text: 'bla-bla'}]);
    // });
 
    test('getTasks', async () => {
        const res = await getTasks()
        const data = await res.data;
        expect(true).toEqual(data.length > 0)
    })

    test('deleteTask', async () => {
        const _id = "61f6ab244ad6820d94474232";
        await deleteTask(_id); 
        const res = await getTasks()
        expect(await res.data.filter(todo => todo._id === _id)).toEqual([])
    })


});
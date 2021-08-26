import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeatures.propTypes = {
    
};

function TodoFeatures(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'code',
            status: 'new',
        }
    ]
    
    const [todoList, setTodoList] = useState(initTodoList)
    const [filterStatus, setFilterStatus] = useState('all')

    const onTodoClick = (todo, index) => {
        const newTodoList = [...todoList];
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status == 'new' ? 'completed' : 'new'
        }
        setTodoList(newTodoList);
    }

    const removeClick = (todo, index) => {
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilterStatus('all')
    }
    const handleShowNewClick = () => {
        setFilterStatus('new')
    }
    const handleShowCompletedClick = () => {
        setFilterStatus('completed')
    }

    const setId = (todoList) => {
        let id = todoList.length;
        for(var i = 0; i < todoList.length; i++){
            if(id === todoList[i].id){
                id = id + 1;
                i = 0;
            }
        }
        return id;
    }
    const addItem = () => {
        const value = document.querySelector('.input-item').value;
        if(value === '') return;
        const newTodo = {
            id: setId(todoList),
            title: value,
            status: 'new',
        }
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
        console.log(todoList);
        document.querySelector('.input-item').value = '';
    }

    const renderedTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status)


    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={onTodoClick} removeClick={removeClick}/>
            <input style={{display: 'block'}} className="input-item" type="text" placeholder="Add Item"></input>
            <button style={{display: 'block', cursor: "pointer"}} onClick={addItem}>Add</button>
            <button onClick={handleShowAllClick}>Show All</button>
            <button onClick={handleShowNewClick}>Show New</button>
            <button onClick={handleShowCompletedClick}>Show Completed</button>
        </div>
    );
}

export default TodoFeatures;
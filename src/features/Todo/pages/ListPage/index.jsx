import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import './styles.scss';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import queryString, { stringify } from "query-string"

ListPage.propTypes = {
    
};

function ListPage(props) {
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

    const history = useHistory();
    console.log(history)
    
    const locatio = useLocation();
    console.log(locatio)
    
    const params = useParams();
    console.log(params)

    const rou = useRouteMatch();
    console.log(rou)
    
    const location = useLocation();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodoList)
    const [filterStatus, setFilterStatus] = useState(() => {
        return queryString.parse(location.search).status || 'all'
    })

    useEffect(() => {
        setFilterStatus(queryString.parse(location.search).status || 'all')
    }, [location.search])

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
        // setFilterStatus('all')
        const queryParams = {status: 'all'}
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }
    const handleShowNewClick = () => {
        // setFilterStatus('new')
        const queryParams = {status: 'new'}
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }
    const handleShowCompletedClick = () => {
        // setFilterStatus('completed')
        const queryParams = {status: 'completed'}
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
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
        const value = document.querySelector('.todo__input').value;
        if(value === '') return;
        const newTodo = {
            id: setId(todoList),
            title: value,
            status: 'new',
        }
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
        console.log(todoList);
        document.querySelector('.todo__input').value = '';
    }

    const renderedTodoList = useMemo(() => {
        return todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status)
    }, [todoList, filterStatus]) 


    return (
        <div className="todo">
            <h3 className="todo__title">Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={onTodoClick} removeClick={removeClick}/>
            <input style={{display: 'block'}} className="todo__input" type="text" placeholder="Add Item"></input>
            <button style={{display: 'block', cursor: "pointer"}} onClick={addItem} className="todo__btn-add">Add</button>
            <div>
                <button className="todo__btn-show" onClick={handleShowAllClick}>Show All</button>
                <button className="todo__btn-show" onClick={handleShowNewClick}>Show New</button>
                <button className="todo__btn-show" onClick={handleShowCompletedClick}>Show Completed</button>
            </div>
        </div>
    );
}

export default ListPage;
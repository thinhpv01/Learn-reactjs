import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
};

TodoList.defaultProps = {
    todoList: [],
}

function TodoList({todoList}) {
    return (
        <ul>
            {todoList.map(i=> (
                <li key={i.id}>{i.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;
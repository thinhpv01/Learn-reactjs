import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import classnames from 'classnames';

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func,
  removeClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
  removeClick: null,
};

function TodoList({ todoList, onTodoClick, removeClick }) {
  const handleTodoClick = (todo, index) => {
    if (!onTodoClick) return;
    onTodoClick(todo, index);
  };
  const handleTodoRemove = (todo, index) => {
    if (!removeClick) return;
    removeClick(todo, index);
  };
  return (
    <ul className="todo__list">
      {todoList.map((i, index) => (
        <div className="todo__box" key={i.id}>
          <li
            className={classnames({
              'todo-item': true,
              completed: i.status === 'completed',
            })}
            onClick={() => handleTodoClick(i, index)}
          >
            {i.title}
          </li>
          <button onClick={() => handleTodoRemove(i, index)}>Remove</button>
        </div>
      ))}
    </ul>
  );
}

export default TodoList;

import React from 'react';

const Todo = ({item, handleDelete, handleEdit}) => {
    return (
        <li className="list-group-item text-capitalize">
            <h6>{item}</h6>
        </li>
    )
}

export default Todo

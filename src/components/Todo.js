import React from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const Todo = ({item, handleDelete, handleEdit}) => {
    return (
        <li className="list-group-item text-capitalize d-flex justify-content-between">
            <h6>{item}</h6>
            <div className="actions">
                <FaPencilAlt className="text-success icon" onClick={handleEdit} />
                <FaTrash className="text-danger ml-3 icon" onClick={handleDelete} />
            </div>
        </li>
    )
}

export default Todo

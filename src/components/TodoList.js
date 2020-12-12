import React from 'react';
import Todo from './Todo';

const TodoList = ({items, clearItems, handleDelete, handleEdit}) => {
    return (
        <ul className="list-group my-5">
            <h3 className="text-capitalize textcenter">Todo Items</h3>

            {items.length > 0 && items.map(item => <Todo 
                key={item.id} 
                item={item.title} 
                handleDelete={() => handleDelete(item.id)} 
                handleEdit={() => handleEdit(item.id)} 
            />)}

            <button type="button" className="btn btn-danger text-uppercase mt-5 btn-block" onClick={clearItems}>Clear Lists</button>
        </ul>
    )
}

export default TodoList;

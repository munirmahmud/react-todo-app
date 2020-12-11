import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
    const [items, setItems] = useState({
        todoItems: [{id: 1, title: 'New item'}, {id: 2, title: 'Another Item'}],
        id: uuidv4(),
        todoItem: "",
        editItem: false,
    });

    const handleChange = (e) => {
        
    };
    const handleEdit = (e) => {
        
    };
    const handleSubmit = (e) => {
        
    };
    const editItem = id => {
        
    };

    const clearItems = () => {
        
    };

    const handleDelete = id => {
        
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-3">
                    <h3 className="text-center text-uppercase">Todo App</h3>
                    
                    <TodoInput
                        item={items.todoItem}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        editItem={editItem}
                    />

                    <TodoList 
                    items={items} 
                    clearItems={clearItems} 
                    handleDelete={handleDelete} 
                    handleEdit={handleEdit} />
                </div>
            </div>
        </div>
    )
}

export default App

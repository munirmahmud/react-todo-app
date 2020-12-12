import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
    state = {
        items: [],
        id: uuidv4(),
        item: "",
        editItem: false,
    };

    handleChange = (e) => {
        this.setState({
            item: e.target.value
        });
    };

    handleEdit = (e) => {
        
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: this.state.id,
            title: this.state.item,
        };

        const updatedItems = [...this.state.items, newItem];
        
        this.setState({
            items: updatedItems,
            item: '',
            id: uuidv4(),
            editItem: false
        });
    };
    
    editItem = (id) => {
        
    };

    clearItems() {
        
    };

    handleDelete = (id) => {
        
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <h3 className="text-center text-uppercase">Todo App</h3>
                        
                        <TodoInput
                            item={this.state.item}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            editItem={this.editItem}
                        />
    
                        <TodoList 
                        items={this.state.items} 
                        clearItems={this.clearItems} 
                        handleDelete={this.handleDelete} 
                        handleEdit={this.handleEdit} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

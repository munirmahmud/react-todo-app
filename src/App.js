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

    handleSubmit = (e) => {
        e.preventDefault();

        if(this.state.item === '') return;

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
    
    handleEdit = (id) => {
        const filteredItem = this.state.items.filter(item => item.id !== id);
        const selectedItem = this.state.items.find(item => item.id === id);

        this.setState({
            items: filteredItem,
            item: selectedItem.title,
            id: id,
            editItem: true,
        });
    };

    clearItems = () => {
        this.setState({
            items: []
        });
    };

    handleDelete = (id) => {
        const filteredItem = this.state.items.filter(item => item.id !== id);

        this.setState({
            items: filteredItem
        });
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
                            editItem={this.state.editItem}
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

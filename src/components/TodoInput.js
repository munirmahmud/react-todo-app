import React from 'react';
import { FaBook } from 'react-icons/fa';

const TodoInput = (props) => {
    const {item, handleChange, handleSubmit, editItem} = props;
    
    return (
        <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <FaBook />
                        </div>
                    </div>

                    <input 
                        type="text" 
                        className="form-control text-capitalize" 
                        placeholder="Add to Do"
                        value={item}
                        onChange={handleChange}
                    />
                </div>

                <button className="btn btn-block btn-primary mt-3">Add Item</button>
            </form>
        </div>
    )
}

export default TodoInput

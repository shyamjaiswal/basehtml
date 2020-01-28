import React from 'react';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    render() {
        return (
            <div>
                <TodoForm onSubmit={this.addTodo} />
            </div>
        )
    }
}

export default TodoList;


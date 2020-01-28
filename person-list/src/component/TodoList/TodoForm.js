import React from 'react';

class TodoForm extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         todo: '',
    //         todos: [],
    //     }
    // }

    state = {
        todo: '',
        todos: [],
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        let { todo, todos } = this.state;
        this.setState({
            todos: [todo, ...todos],
            todo: ''
        });
        localStorage.setItem('List', [todo, ...todos])
        console.log(todo, todos)
    }


    editList = (e) => {
        console.log(e.target);
    }

    deleteList = (e) => {
        console.log(e.target);
    }

    render() {
        let { todos } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input name='todo' placeholder='Todo...' type='text' value={this.state.todo} onChange={this.inputHandler} />
                    <input type='submit' value='Add' />
                </form>
                <div>
                    {todos.map(value => {
                        return (
                            <div>
                                <p>{value}</p>
                                <button onClick={this.editList}>Edit</button>
                                <button onClick={this.deleteList}>Delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>

        )
    }
}
export default TodoForm;
import React, {Component} from 'react';
import Todos from "./components/todos";
import AddToDo from "./components/AddToDo";


class App extends Component {
    state = {
        todos: [
            {id:1, content: "take out the trash"},
            {id:2, content: "take out more trash"},
            {id:3, content: "And more"}
        ]
    }

    addToDo =(todo)=>{
    todo.id = Math.random();
    let newTodo = [...this.state.todos, todo]
        this.setState({
            todos: newTodo
        })
    }

    deleteTodo =(id) => {
       const deletedTodos = this.state.todos.filter(deletedTodo => {
           return deletedTodo.id !== id;
       })
        this.setState({
            todos:deletedTodos
        })
    }
 render() {
   return (
       <div className="App container">
        <h3 className="center blue-text">TO DOS</h3>
           <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <AddToDo addTodo={this.addToDo}/>
       </div>
   )
 }
}

export default App;

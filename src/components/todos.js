import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    const toDoList = todos.length ? (
        todos.map(todo=>{
           return (
               <div className="collection-item" key={todo.id}>
                    <span onClick={()=>{deleteTodo(todo.id)}}>
                        {todo.content}
                    </span>
               </div>
           )
        })
    ) : (<p className="center">No todos mate</p>)


    return (
        <div className="todos collection">
            {toDoList}
        </div>
    )
}

export  default Todos;

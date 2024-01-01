import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sample-task", id:uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        // setTodos([...todos, {task: newTodo, id:uuidv4()}]);
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id : uuidv4()}];

        });
        setNewTodo("")
    };
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        // console.log("task is processing for delete");
        // console.log(id);

        //    let todoCopy= todos.filter((todo) => todo.id != id);
        // console.log(todoCopy);

       setTodos( (prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let upperCaseAll =() => {
        setNewTodo(newTodo.toUpperCase());
        todos=todos.map((item)=> {return {...item , task: item.task.toUpperCase()}})
        setTodos([...todos])

    }
    
    return (
        <div>
          <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue} /> 
          <br /><br />
          <button onClick={addNewTask}>Add Task</button>
          <br /><br /><br /><br />

          <hr /><hr />
          <h4>
            Tasks Todo
          </h4>
          <ul>
            {todos.map((todo) =>(
            <li key={todo.id}> 
            <span> {todo.task} </span>
            &nbsp; &nbsp;
            <button onClick={ () => deleteTodo(todo.id)}> Delete</button>
            </li>
            ))}
          </ul>

          <button onClick={upperCaseAll}> upperCase All</button>
        </div>
    );    
}
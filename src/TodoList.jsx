import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sample-task", id:uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        // setTodos([...todos, {task: newTodo, id:uuidv4()}]);
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id : uuidv4(), isDone:false}];

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

    let markAsAllDone =() => {
        // setNewTodo(newTodo.toUpperCase());
        // todos=todos.map((item)=> {return {...item , task: item.task.toUpperCase()}})
        // setTodos([...todos])

        setTodos( (prevTodos) => 
            prevTodos.map((todo) => {
                // todo.task = todo.task.toUpperCase();
                return {
                    ...todo,
                    // task: todo.task.toUpperCase(),
                    isDone: true,
                };
            })
        )

    }

    let markAsDone = (selectedId) => {
        // if(!newTodo){
        //     alert('Please enter a word to make it Uppercase')
        //     }else{
        //         let singleWord = newTodo.split(" ");
        //         setNewTodo(singleWord[0].toUpperCase() +" "+ singleWord.slice(1).join(" "))
        //         }

        // setNewTodo(newTodo.toUpperCase());
        // todos=todos.map((item)=> {return {...item , task: item.task.toUpperCase()}})
        // setTodos([...todos])


        setTodos( (prevTodos) => 
            prevTodos.map((todo) => {
                // todo.task = todo.task.toUpperCase();
                if (todo.id === selectedId ) {
                return {
                    ...todo,
                    // task: todo.task.toUpperCase(),
                    isDone:true,
                };
            } else {
                return todo;
            }
            })
        )

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
            <span style={todo.isDone ? {textDecorationLine: "line-through"}: {} }> {todo.task} </span>
            &nbsp; &nbsp;
            <button onClick={ () => deleteTodo(todo.id)}> Delete</button>
            <button onClick={ () => markAsDone(todo.id)}> mark As Done</button>
            </li>
            ))}
          </ul>

          <button onClick={markAsAllDone}> mark All as Done</button>
        </div>
    );    
}
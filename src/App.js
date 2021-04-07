import './App.css';
import TextField from '@material-ui/core/TextField';
import { useState, useEffect } from "react";
import { Button } from '@material-ui/core';
import firebase from 'firebase';
import { db } from "./firebase_config";
import TodoListItem from "./Todo";





function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []); // Blank to run only on first run

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();

    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");
  }

  return ( 
  <>
    <div className="App">
      <div className="Heading">
          <h1> Varshit Modi Todo's App </h1>
      </div>
      <form>
        <TextField 
        className="TextField"
        id="outlined-basic" 
        label="Write a Todo" 
        variant="outlined"
        value={todoInput}
        onChange={
          (e) => setTodoInput(e.target.value)
        }
        />
        <Button 
        className="Button"
        type="submit" 
        variant="contained" 
        color="primary" 
        onClick={addTodo}
        >
        Primary
        </Button>
      </form>
      <div style={{ width: "90vw", maxWidth: "500px", marginTop: "24px" }}>
          {todos.map((todo) => (
            <TodoListItem
              todo={todo.todo}
              inprogress={todo.inprogress}
              id={todo.id}
            />
          ))}
        </div>
    </div>
  
  
  
  </>
  );
}

export default App;

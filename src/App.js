import React, {useState, useCallback} from 'react';

const App = () => {

  const [newTodo, setNewTodo] = useState(''); //to keep track of what the user is inputting
  
  const [todos, setTodos] = useState([]);  //to keep track of inputted todo's

  const onNewTodoChange = useCallback((event) => {
    setNewTodo(event.target.value);
  }, []); //empty because there are no dependencies

  const addTodo = (todo, index) => (event) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1, {
      ...todo,
      done: !todo.done
    });
    setTodos(newTodos);
  };

  const removeTodo = (todo) => (event) => {
  setTodos(todos.filter(otherTodo => otherTodo != todo))
  }

  const formSubmitted = useCallback((event) => {  //to prevent the page from refreshing 

    event.preventDefault();

    if(newTodo === '') {  //do not do anything if the user's input is an empty string
    alert("Your input is empty!")
    return;
    }
    let randomNum = Math.floor((Math.random() * 1000000) + 1);
    setTodos([
      {
        content:newTodo,
        done: false,
        id: randomNum
      },
      ...todos, 
    ]);
  }, [newTodo, todos]);

  return (
  <div>
    <form onSubmit={formSubmitted}>
      <label htmlFor="newTodo">Enter your Todo</label>
      <br></br><br></br>
      <input
        onChange={onNewTodoChange} 
      />
      <br></br><br></br>
      <button>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li id="initial" key={todo.id} className={todo.done ? 'done' : ''}>
            {todo.content}
            <input
            checked={todo.done} 
            type="checkbox"
            onChange={addTodo(todo,index)}/>
            <br></br><br></br>
            <button onClick={removeTodo(todo)}>Delete Todo</button>
          </li>
        ))}
      </ul>
  </div>
  );
};

export default App;

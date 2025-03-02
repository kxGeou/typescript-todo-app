import { useEffect, useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState<string[]>(
    [
      "Przykładowy Todo",
    ]
  )
  const [todoValue, setTodoValue] = useState<string>("");
  
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodos(newTodo:any) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  
  function handleDeleteTodo(index: number) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index 
    })
    setTodos(newTodoList)
  }

  function handleEditTodo(index: number) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (typeof localStorage === "undefined") {
        return;
    }

    try {
        const storedTodos = localStorage.getItem('todos');
        
        if (!storedTodos) {
            return;
        }

        const parsedTodos = JSON.parse(storedTodos)?.todos;
        
        if (parsedTodos) {
            setTodos(parsedTodos);
        }
    } catch (error) {
        console.error("Błąd parsowania localStorage:", error);
    }
}, []);

  return (
    <main className='bg-[#1a1936] min-h-screen flex flex-col justify-start items-center p-8'>
      <h2 className='text-[1.25rem] font-semibold text-white/50 mb-4'>Todo App</h2>
        <TodoInput addTodo={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue}></TodoInput>
        <TodoList todos={todos} handleDelete={handleDeleteTodo} handleEditTodo={handleEditTodo}></TodoList>
    </main>
  )
}

export default App

import TodoCard from "./TodoCard"

type TtodoList = {
  todos : string[];
  handleDelete: any;
  handleEditTodo: any;
}
export default function TodoList({todos, handleDelete, handleEditTodo} : TtodoList) {

  return (
    <ul className="w-full flex flex-col items-center ">
      {todos.map((item, itemIndex) => (
        <TodoCard todo={item} key={itemIndex} index={itemIndex} handleDelete={handleDelete} handleEdit={handleEditTodo}></TodoCard>
      ))}
    </ul>
  )
}

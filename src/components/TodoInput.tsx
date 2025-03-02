
type TtodoInput = {
  addTodo: any;
  todoValue: string;
  setTodoValue: any;
};

export default function TodoInput({addTodo, todoValue, setTodoValue }: TtodoInput) {

  return (
    <header className="flex justify-center items-center w-full gap-5 mb-8">
      <input
        placeholder="Enter todo..."
        className="placeholder:text-white/30 text-white/50 border border-white/50 p-3 rounded w-[50%]"
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      ></input>
      <button
        className="min-w-[5rem] max-w-[5rem] p-3 rounded text-white/50 border border-white/50 cursor-pointer"
        onClick={() => {
          addTodo(todoValue);
          setTodoValue("")
        }}
      >
        Add
      </button>
    </header>
  );
}

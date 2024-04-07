export default function TodoInput ({todoText, setTodoText, doAddTodo }) {


  return (
    <div className="my-8">
        <input
          value={todoText}
          onInput={(e) => setTodoText(e.target.value)}
          placeholder="输入你的代办事项"
          className="border-slate-300 border-2 border-spacing-1 rounded h-10 outline-none"
        />
        <button
          className="bg-blue-400 text-white w-24 h-10 rounded shadow hover:bg-blue-600 ml-4"
          onClick={doAddTodo}
        >
          add todo
        </button>
      </div>
  )
}
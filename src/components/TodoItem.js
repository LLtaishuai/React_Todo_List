export default function TodoItem({ item, doDelTodo, doCheckChange }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => doCheckChange(item.id)}
      ></input>
      <span className={item.checked ? "line-through mx-4" : "mx-4"}>
        {item.text}
      </span>
      <span
        onClick={() => doDelTodo(item.id)}
        className="text-blue-500 text-lg cursor-pointer"
      >
        ×
      </span>
    </div>
  );
}

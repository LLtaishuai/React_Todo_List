export default function TodoItem({ item, doDelTodo }) {
  return (
    <div className="todo-item">
      <input type="checkbox"></input>
      <span>{item.text}</span>
      <span
        onClick={() => doDelTodo(item.id)}
        className="text-blue-500 text-lg ml-4 cursor-pointer"
      >
        ×
      </span>
    </div>
  );
}

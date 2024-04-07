import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
function App() {
  const [todoText, setTodoText] = useState("");

  const doAddTodo = () => {
    const id = `${list.length + 1}-${Math.random().toString().slice(-5)}`; // 生成一个随机的 id
    setList([...list, { id, text: todoText, checked: false }]);
    setTodoText("");
  };

  const doDelTodo = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const [list, setList] = useState([
    {
      id: 0,
      text: "学习React",
      checked: false,
    },
    {
      id: 1,
      text: "学习Vue",
      checked: false,
    },
    {
      id: 2,
      text: "学习数据结构与算法",
      checked: false,
    },
  ]);

  return (
    <div className="w-[600px] h-[100vh] mx-auto flex flex-col justify-center items-center">
      <h1 className="text-[#333] text-[48px] font-bold">你的待办列表</h1>
      <TodoInput
        todoText={todoText}
        setTodoText={setTodoText}
        doAddTodo={doAddTodo}
      ></TodoInput>
      <div>
        {list.map((item) => (
          <TodoItem item={item} doDelTodo={doDelTodo} key={item.id}></TodoItem>
        ))}
      </div>
    </div>
  );
}

export default App;

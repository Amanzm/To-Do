import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import Footer from "./components/Footer";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [fin, setFin] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    } else {
      localStorage.setItem("todos", JSON.stringify([]));
    }
  }, []);

  const saveToS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleAdd = (e) => {
    setTodos([
      ...todos,
      { id: uuidv4(), todo: todo.trim(), isCompleted: false },
    ]);
    setTodo("");
    saveToS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const toggleFin = (e) => {
    setFin(!fin);
  };

  const handleCB = (e, id) => {
    let newTodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(newTodos);
    saveToS();
  };
  const handleEdit = (e, id) => {
    let val = todos.filter((x) => x.id === id);

    setTodo(val[0].todo);
    let newTodos = todos.filter((x) => x.id !== id);
    setTodos(newTodos);
    saveToS();
  };
  const handleDel = (e, id) => {
    let newTodos = todos.filter((x) => x.id !== id);
    setTodos(newTodos);
    saveToS();
  };

  return (
    <>
      <Navbar />
      <div className="md:container font-mono  md:mx-auto my-5 rounded-xl p-5 bg-violet-300 min-h-[90vh] md:w-3/4 w-full">
        <h1 className="text-3xl text-center font-mono">
          Azmy Todo : Manage your todos ...
        </h1>
        <div className="addTodo my-3 flex flex-col gap-5">
          <h2 className="text-lg "> Add a Todo ...</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-full  text-center p-3 rounded "
            placeholder=" Go to gym ..."
          />
          <button
            onClick={handleAdd}
            disabled={todo.length < 5}
            className="  disabled:bg-violet-900 rounded-md bg-violet-700 hover:bg-violet-800 p-2 py-1 text-white"
          >
            ㅤAddㅤ
          </button>
        </div>
        <input
          type="checkbox"
          className="my-4"
          checked={fin}
          onChange={toggleFin}
          id="show"
        />
        <label htmlFor="show">Show Finished Tasks</label>
        <div className="h-[2px] bg-white my-4"></div>
        <h1 className="text-2xl  text-pretty">Your Todos</h1>
        <div className="todos">
          {todos.length === 0 && (
            <div className="text-center">No Todos to display ...</div>
          )}
          {todos.map((item) => {
            return (
              (fin || !item.isCompleted) && (
                <div
                  key={item.id}
                  className="todo flex  md:w-10/12 justify-between my-3"
                >
                  <div className="gap-5 flex">
                    <input
                      onChange={(e) => handleCB(e, item.id)}
                      type="checkbox"
                      checked={item.isCompleted}
                      name={item.id}
                      id=""
                    />
                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>

                  <div className="buttons flex h-full">
                    <button
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                      className=" mx-3 rounded-md  bg-violet-700 hover:bg-violet-800 p-2 py-1 text-white"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={(e) => {
                        handleDel(e, item.id);
                      }}
                      className=" mx-3 rounded-md bg-violet-700 hover:bg-violet-800 p-2 py-1 text-white"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

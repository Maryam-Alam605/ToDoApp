import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]); //ye hai tasks ki list yani task ka array

  useEffect(() => {
    let tasksString = localStorage.getItem("tasks");
    if (tasksString) {
      setTasks(JSON.parse(tasksString));
    }
  }, []);

  const saveToLC = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const hanldeChange = (e) => {
    setTask(e.target.value); //ye kar ke hamne ye code kya ke jo bhi input field me type karega wo task state me store ho jayega
  };

  const handleChecked = (e) => {
    let id = e.target.name;
    let index = tasks.findIndex((item) => {
      return item.id === id;
    });
    let newTasks = tasks;
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks([...newTasks]); //ye kar ke hamne task ko update kiya
    saveToLC();
  };

  //ye hai add task ka function
  const handleAdd = () => {
    if (task.trim() === "") return; // prevent adding empty tasks
    setTasks([...tasks, { id: uuidv4(), task, isCompleted: false }]);
    setTask("");
    saveToLC();
  };

  //ye hai edit aur delete ka function
  //ye hai edit ka function

  const handleEdit = (e, id) => {
    let t = tasks.filter((i) => i.id === id);
    setTask(t[0].task);
    let newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
    saveToLC();
  };

  const handleDelete = (id) => {
    let newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
    saveToLC();
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/tasks"
            element={
              <div className="max-w-[90%] bg-yellow-100 rounded-xl mx-auto p-5 my-5 text-center min-h-[70vh]">
                <div className="flex gap-4 my-4">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-lg p-2 w-3/4 mt-2"
                    placeholder="Enter your task here..."
                    onChange={hanldeChange}
                    value={task}
                  />
                  <button
                    onClick={handleAdd}
                    className="bg-yellow-500 text-black py-1 px-2 rounded-lg cursor-pointer hover:bg-yellow-600 transition duration-300"
                  >
                    Add Task
                  </button>
                </div>
                <h1 className="text-3xl text-left text-gray-800 tracking-wide uppercase p-1 my-3">
                  To Do
                </h1>

                <div className="task-list space-y-2">
                  {tasks.length === 0 && (
                    <div className="text-left text-gray-400">No tasks yet</div>
                  )}
                  {tasks.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-white rounded-lg p-2 shadow-sm"
                    >
                      <div className="flex justify-evenly gap-4">
                        <input
                          type="checkbox"
                          className="cursor-pointer"
                          checked={item.isCompleted}
                          name={item.id}
                          onChange={handleChecked}
                        />
                        <p className={item.isCompleted ? "line-through" : ""}>
                          {item.task}
                        </p>

                        <button
                          onClick={(e) => {
                            handleEdit(e, item.id);
                          }}
                          className="bg-yellow-500 text-white px-2 py-2 rounded-lg text-sm cursor-pointer"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-red-400 text-white px-2 py-2 rounded-lg text-sm cursor-pointer "
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

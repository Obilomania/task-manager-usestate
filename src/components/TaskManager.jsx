import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Task from "./Task";
import useLocalStorage from "use-local-storage";

const TaskManager = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  // const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const [taskID, setTaskID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const nameInputRef = useRef(null);
  useEffect(() => {
    nameInputRef.current.focus();
  });
  //Function to Create tasks
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((!name && !date) || !name || !date) {
      alert("please enter Task name and Date");
    } else if (name && date && isEditing) {
      setTasks(
        tasks.map((task) => {
          if (task.id === taskID) {
            return { ...task, name, date, complete: false };
          }
          return task;
        })
      );
      setName("");
      setDate("");
      setIsEditing(false);
      setTaskID(null);
    } else {
      const newTask = {
        id: Date.now(),
        name,
        date,
        complete: false,
      };
      setTasks([...tasks, newTask]);
      setName("");
      setDate("");
    }
  };
  //Function to Edit tasks
  const editTask = (id) => {
    const thisTask = tasks.find((task) => task.id === id);
    setIsEditing(true);
    setTaskID(id);
    setName(thisTask.name);
    setDate(thisTask.date);
  };
  //Function to Delete tasks
  const deleteTask = (id) => {
    if (window.confirm("Delete Task?") === true) {
      const newTasks = tasks.filter((task) => task.id !== id);
      setTasks(newTasks);
    }
  };
  //Function to click and show the task is completed
  const completeTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, complete: true };
        }
        return task;
      })
    );
  };

  return (
    <TaskManage>
      <h1>Task Manager</h1> <br />
      <div className="formContainer">
        <div className="formCard">
          <form className="form" onSubmit={handleSubmit}>
            <div className="taskDiv">
              <label htmlFor="name">Task :</label>
              <input
                ref={nameInputRef}
                type="text"
                placeholder="Task Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="taskDiv">
              <label htmlFor="date">Date :</label>
              <input
                type="date"
                placeholder="Task Name"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <button>{isEditing ? "Edit Task" : "Save Task"}</button>
          </form>
        </div>
        <br />
        <div className="taskList">
          <h1>Task List</h1>
        </div>
        <div className="task">
          {tasks.length === 0 ? (
            <p className="task_P">No task added yet...</p>
          ) : (
            <div>
              {tasks.map((task) => {
                return (
                  <Task
                    {...task}
                    editTask={editTask}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </TaskManage>
  );
};

const TaskManage = styled.div`
  width: 100%;
  height: 100vh;
  background: #121212;
  color: red;
  padding: 1rem 0;
  h1 {
    text-align: center;
  }
  .formContainer {
    width: 100%;
  }
  .formCard {
    width: 50%;
    height: fit-content;
    margin: auto;
    background: white;
    padding: 2rem 0;
    border-radius: 0.3rem;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
  input {
    width: 50%;
    padding: 0.5rem;
    border-radius: 0.3rem;
  }
  .taskDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: auto;
    gap: 2rem;
  }
  .formCard button {
    width: 59%;
    padding: 0.5rem 0;
    background: green;
    color: white;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
  }
  .taskList {
    padding: 1rem;
    border-bottom: 1px solid red;
    width: 50%;
    margin: auto;
  }
  .task_P {
    text-align: center;
    color: white;
    margin-top: 1.5rem;
    font-size: 1rem;
  }
  @media screen and (max-width: 940px) {
    width: 100%;
    min-height: 100vh;
    max-height: fit-content;
    background: #121212;
    color: red;
    padding: 1rem 1rem;
    h1 {
      text-align: center;
    }
    .formContainer {
      width: 100%;
    }
    .formCard {
      width: 100%;
      height: fit-content;
      margin: auto;
      background: white;
      padding: 2rem 0;
      border-radius: 0.3rem;
    }
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
    }
    input {
      width: 70%;
      padding: 0.5rem;
      border-radius: 0.3rem;
    }
    .taskDiv {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: auto;
      gap: 2rem;
    }
    .formCard button {
      width: 89%;
      padding: 0.5rem 0;
      background: green;
      color: white;
      border: none;
      border-radius: 0.3rem;
      cursor: pointer;
    }
    .taskList {
      padding: 1rem;
      border-bottom: 1px solid red;
      width: 50%;
      margin: auto;
    }
    .task_P {
      text-align: center;
      color: white;
      margin-top: 1.5rem;
      font-size: 1rem;
    }
  }
`;
export default TaskManager;

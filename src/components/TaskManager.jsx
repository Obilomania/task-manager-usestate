import React, { useState } from "react";
import styled from "styled-components";
import Task from "./Task";

const TaskManager = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(date);
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
            <button>Save Task</button>
          </form>
        </div>
        <br />
        <div className="taskList">
          <h1>Task List</h1>
        </div>
        <div className="task">
          <Task />
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
`;
export default TaskManager;

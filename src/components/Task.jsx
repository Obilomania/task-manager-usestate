import React from "react";
import styled from "styled-components";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsCheck2All } from "react-icons/bs";

const Task = ({
  id,
  name,
  date,
  complete,
  editTask,
  deleteTask,
  completeTask,
}) => {
  return (
    <TaskPage>
      <div className={complete ? "taskCard complete" : "taskCard"} key={id}>
        <div className="task">
          <div className="taskContent">
            <div className="mainTask">
              <p>
                <b>Task : </b>
                <span>{name}</span>
              </p>
              <div className="taskIcons">
                <button onClick={() => editTask(id)}>
                  <BiEdit size={20} color="green" />
                </button>
                <button onClick={() => deleteTask(id)}>
                  <RiDeleteBin6Fill size={20} color="red" />
                </button>
                <button>
                  <BsCheck2All
                    size={20}
                    color="black"
                    onClick={() => completeTask(id)}
                  />
                </button>
              </div>
            </div>
            <div className="date">
              <p>
                <b>Date : </b>
                <span>{date}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </TaskPage>
  );
};

const TaskPage = styled.div`
  width: 100%;
  height: fit-content;
  background: #121212;
  color: red;
  padding: 1rem 0;
  .taskCard {
    width: 50%;
    height: fit-content;
    margin: auto;
    background: white;
    padding: 1rem 2rem;
    border-radius: 0.3rem;
  }
  .complete {
    position: relative;
    background: white;
    border-left: 0.5rem solid red;
    border-right: 0.5rem solid red;
    &::after {
      content: "Completed";
      position: absolute;
      right: 1.7rem;
      bottom: 0.2rem;
      background: red;
      color: white;
      padding: 0.2rem 1rem;
      border-radius: 0.4rem;
    }
  }
  .mainTask {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .taskIcons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  span {
    color: #121212;
  }
  button {
    background: none;
    border: none;
    padding: 0.2rem;
    border-radius: 0.3rem;
    cursor: pointer;
  }
  @media screen and (max-width: 940px) {
    width: 100%;
    height: fit-content;
    background: #121212;
    color: red;
    padding: 1rem 1rem;
    .taskCard {
      width: 100%;
      height: fit-content;
      margin: auto;
      background: white;
      padding: 1rem 0.5rem;
      border-radius: 0.3rem;
      font-size: 0.7rem;
    }
    .complete {
      position: relative;
      background: white;
      border-left: 0.5rem solid red;
      border-right: 0.5rem solid red;
      &::after {
        content: "Completed";
        position: absolute;
        right: 1.7rem;
        bottom: 0.2rem;
        background: red;
        color: white;
        padding: 0.2rem 1rem;
        border-radius: 0.4rem;
      }
    }
    .mainTask {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .taskIcons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.1rem;
    }
    span {
      color: #121212;
    }
    button {
      background: none;
      border: none;
      padding: 0.2rem;
      border-radius: 0.3rem;
      cursor: pointer;
    }
  }
`;
export default Task;

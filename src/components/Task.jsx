import React from "react";
import styled from "styled-components";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsCheck2All } from "react-icons/bs";

const Task = () => {
  return (
    <TaskPage>
      <div className="taskCard">
        <div className="task">
          <div className="taskContent">
            <div className="mainTask">
              <p>
                <b>Task : </b>
                <span>Obilomania</span>
              </p>
              <div className="taskIcons">
                <button>
                  <BiEdit size={20} color="green"/>
                </button>
                <button>
                  <RiDeleteBin6Fill size={20} color="red"/>
                </button>
                <button>
                  <BsCheck2All size={20} color="black"/>
                </button>
              </div>
            </div>
            <div className="date">
              <p>
                <b>Date : </b>
                <span>07-20-1990</span>
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
  }
`;
export default Task;

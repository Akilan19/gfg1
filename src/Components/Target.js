import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";

export default function Transfers() {
  const [target, setTarget] = useState(0);
  const [targetInput, setTargetInput] = useState("");
  const [targetCompleted, setTargetCompleted] = useState(0);
  const [targetInputCompleted, setTargetInputCompleted] = useState("");
  const targetHandler = () => {
    setTarget((val) => {
      return parseInt(val) + parseInt(targetInput);
    });
    setTargetInput("");
  };
  const targetHandler1 = () => {
    setTargetCompleted((val) => {
      return parseInt(val) - parseInt(targetCompleted);
    });
    setTargetInputCompleted("");
  };
  useEffect(() => {
    setTargetCompleted((val) => parseInt(target) + parseInt(val));
  }, [target]);
  return (
    <Section>
      <div className="title">
        <div className="target">
          <div>
            <h2>Your target</h2>
            <h1>{target}</h1>
          </div>
          <div>
            <input
              className="target-input"
              value={targetInput}
              onChange={(e) => setTargetInput(e.target.value)}
            />
            <button onClick={targetHandler} className="target-button">
              Add
            </button>
          </div>

          <h2>Yet To complete</h2>
          <h1>{targetCompleted}</h1>
          <h2>Completed</h2>
          <div>
            <input
              value={targetInputCompleted}
              className="target-input"
              onChange={(e) => setTargetInputCompleted(e.target.value)}
            />
            <button onClick={targetHandler1} className="target-button">
              Add
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: "Open Sans", sans-serif;
  .title {
    h2 {
      color: #ffc107;
      letter-spacing: 0.3rem;
    }
    h1 {
      font-size: 2rem;
    }
    .target {
      display: flex;
      align-items: center;
      flex-direction: column;
      .target-input {
        margin-right: 1rem;
        outline: none;
        border: none;
        padding: 0.5rem;
      }
      .target-button {
        background-color: #ffc107;
        outline: none;
        border: none;
        font-size: 1rem;
        padding: 0.5rem 2rem;
        border-radius: 0.5rem;
        cursor: pointer;
      }
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &__title {
        display: flex;
        gap: 1rem;
        &__image {
          img {
            height: 2.5rem;
            border-radius: 3rem;
          }
        }
        &__details {
        }
      }
      &__amount {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
          span {
            color: black;
          }
        }
        span {
          color: #ffc107;
        }
      }
    }
  }
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #ffc107;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;

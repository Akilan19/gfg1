import React from "react";
import styled from "styled-components";
export default function Navbar() {
  const todayCount = 200;
  return (
    <Nav>
      <div className="title">
        <h1>Today's Count</h1>
        <span>{todayCount}</span>
      </div>
      <div className="search">
        <input type="text" placeholder="Calorie" />
        <button>Add Calorie</button>
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  .title {
    display: flex;
    align-items: center;
    h1 {
      color: #ffc107;
      font-size: 2rem;
      span {
        margin-left: 0.5rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.2rem;
      }
    }
    span {
      background-color: rgb(33, 33, 33);
      margin-top: 0.3rem;
      font-size: 1.5rem;
      margin-left: 0.5rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
    }
  }
  .search {
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 1rem;
    height: 50px;
    svg {
      color: #ffc107;
    }
    input {
      background-color: #212121;
      border: none;
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      padding: 0.5rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
    button {
      background-color: #ffc107;
      outline: none;
      border: none;
      padding: 0.5rem;
      font-size: 1rem;
      font-weight: 600;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;

          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;

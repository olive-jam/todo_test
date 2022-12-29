import React, { useState } from "react";
import "./App.css";

function User(props) {
  return <div className="square-cards">{props.user.text}</div>;
}
const App = () => {
  const [users, setUsers] = useState([
    { id: 1, text: "todo list 만들기" },
    { id: 2, text: "JS 공부중" },
    { id: 3, text: "test" },
  ]);
  const [text, setText] = useState(""); // <-- 유저의 입력값을 담을 상태
  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      text: text,
    };
    setUsers([...users, newUser]);
  };
  return (
    <div className="main-style">
      <div className="inputbar">
        <input
          value={text}
          placeholder="text를 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addUserHandler}>등록</button>
      </div>
      <br />
      <span>Todo List</span>
      <div className="app-card">
        {users.map((user) => {
          return <User user={user} key={user.id}></User>;
        })}
      </div>
    </div>
  );
};

export default App;

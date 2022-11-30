import axios from "axios";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const url = "https://63878fced9b24b1be3f4431c.mockapi.io/todos";

const Home = () => {
  const [todos, setTodos] = useState([]);

  interface TodoType {
    id: string | number;
    task: string;
    isDone: boolean;
  }

  return (
    <div className="main">
      <InputForm />
      <TodoList />
    </div>
  );
};

export default Home;

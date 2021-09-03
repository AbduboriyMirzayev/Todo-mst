import React from "react";
import Todo from "./Todo";
const App: React.FC = () => {
    return (
        <div className="wrapper">
            <h1 className="title">Welcome to the to-do list!</h1>
            <Todo />
        </div>
    );
};

export default App;

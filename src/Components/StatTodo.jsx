import React from "react";
import { useSelector } from "react-redux";
export default function StatTodo() {
  const Liste = useSelector((state) => state.tasks);
  return (
    <div>
      <p>Number of all tasks : {Liste.length}</p>
      <p>Number of tasks non completed : {Liste.filter(t=>t.completed===false).length}</p>

      <p>Number of tasks completed : {Liste.filter(t=>t.completed===true).length}</p>
    </div>
  );
}

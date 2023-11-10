import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddTache() {
  const [newtask, setnewtask] = useState("");
  const list = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  function addtask(e) {
    e.preventDefault();
    dispatch({ type: "add-tache", payload: newtask });
    setnewtask("");
  }
  return (
    <form onSubmit={addtask}>
      <input
        type="text"
        value={newtask}
        onChange={(e) => setnewtask(e.target.value)}
        placeholder="Donner une description "
      />
      <button>➕</button>
    </form>
  );
}

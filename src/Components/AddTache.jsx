import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddTache() {
  const [newtask, setnewtask] = useState("");
  const list = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  function addtask(e) {
    e.preventDefault();
    if (newtask.trim() !== "") {
      dispatch({ type: "add-tache", payload: newtask });
      setnewtask("");
      document.getElementById("input").focus();
    } else {
      alert("fill the champ then click the button to add task");
      document.getElementById("input").focus();
    }
  }
  return (
    <form onSubmit={addtask}>
      <input
        type="text"
        value={newtask}
        onChange={(e) => setnewtask(e.target.value)}
        placeholder="Donner une description "
        id="input"
      />
      <button>➕</button>
    </form>
  );
}

import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Task({ tache, deletelement, modifyelement }) {
  const [displaybtn, setdisplay] = useState(false);
  const dispatch = useDispatch();
  const [modifiedtask, setmodified] = useState("");
  function handlediting() {
    setdisplay(!displaybtn);
  }
 function  handlemodif (id){
  dispatch({ type: "modify-text", payload1: id , payload2: modifiedtask});
  setdisplay(!displaybtn);
}

  return (
    <div>
      <div className="task">
        {tache.completed ? (
          <div className="completed">
            {tache.task} <button onClick={() => modifyelement()}>✅</button>
            <button onClick={() => deletelement()}>❌</button>
            <button onClick={handlediting}>edit text </button>{" "}
            {displaybtn && (
              <div>
                {" "}
                <input
                  type="text"
                  value={modifiedtask}
                  placeholder={tache.task}
                  onChange={(e) => setmodified(e.target.value)}
                />
                <button onClick={()=>handlemodif(tache.id)}>edit</button>
              </div>
            )}
          </div>
        ) : (
          <div className="">
            {tache.task} <button onClick={() => modifyelement()}>✅</button>
            <button onClick={() => deletelement()}>❌</button>
            <button onClick={handlediting}>edit text </button>{" "}
            {displaybtn && (
              <div>
                {" "}
                <input
                  type="text"
                  value={modifiedtask}
                  placeholder={tache.task}
                  onChange={(e) => setmodified(e.target.value)}
                />
                <button onClick={()=>handlemodif(tache.id)}>edit</button>
              </div>
            )}{" "}
          </div>
        )}
      </div>
    </div>
  );
}

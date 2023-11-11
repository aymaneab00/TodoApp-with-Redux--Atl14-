import React from "react";

export default function Task({ tache, deletelement, modifyelement }) {
  return (
    <div>
      <div>
        {tache.completed ? (
          <div className="completed">
            {tache.task}{" "}
            
              <button onClick={() => modifyelement()}>✅</button>
              <button onClick={() => deletelement()}>❌</button>
            {" "}
          </div>
        ) : (
          <div className="">
            {tache.task}{" "}
            
              <button onClick={() => modifyelement()}>✅</button>
              <button onClick={() => deletelement()}>❌</button>
          {" "}
          </div>
        )}
      </div>
    </div>
  );
}

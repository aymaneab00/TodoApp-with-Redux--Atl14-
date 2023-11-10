import React from "react";

export default function Task({ tache }) {
  return (
    <div>
      <div>
      
          {tache.completed ? <div className="completed">
          {tache.task} ✅ </div>:<div className="">
          {tache.task} ❌ </div> }
        
      </div>
    </div>
  );
}

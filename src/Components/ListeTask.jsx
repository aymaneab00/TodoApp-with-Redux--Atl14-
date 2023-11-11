import React from "react";
import { useSelector,useDispatch } from "react-redux";
import Task from "./Task";

export default function ListeTask() {
  const Liste = useSelector((state) => state.tasks);
  console.log('printing the list after getting it',ListeTask)
  const dispatch = useDispatch();
  function deletelement (id){
  
dispatch({type:"delete-element",payload:id})
  }
  function modifyelement (id){
    // e.preventDefault();
    dispatch({type:"modify-element",payload:id})
      }
  return (
    <div>
      {
        Liste.map((t,i) => {
          // console.log('current task')
          return <Task tache={t} key={i} deletelement={()=>deletelement(i)} modifyelement={()=>modifyelement(i)} />;
        })
        //  i found that the error for the list not showing is
        //  because the prop name doesent match on the child component
      }
    </div>
  );
}

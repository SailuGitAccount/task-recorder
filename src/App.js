import React,{useState} from 'react';
import Header from './components/Header';
import Tasks from "./components/Tasks";
import { AddTask } from './components/AddTask';

function App() {
 
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState([{ id:1,
    text:'Doctors Appt',
    day:'Feb 2nd 2021',
    reminder:true,

},
{ id:2,
    text:'Meeting At School',
    day:'March 4th 2021',
    reminder:true,

},
{ id:3,
    text:'Food shopping',
    day:'Dec 2nd 2021',
    reminder:false,

}]);

const addTask=(task)=>{
  
  const id=Math.floor(Math.random()*10000)+1
  console.log(11,task)
  const newTask={id,...task};
  setTasks([...tasks,newTask]);
}
const deleteTask=(id)=>{
  console.log('delete',id)
  setTasks(tasks.filter((task)=>task.id !== id))
}

 const  toggleReminder=(id)=>{
  console.log(id);
  setTasks(tasks.map((task)=>task.id === id?{...task,reminder:!task.reminder}:task))
 }
 return (
    <div className="container">
      <Header title="hghgh" onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask} />}
 {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:"No tasks at this time" }
    </div>
  );
}


export default App;

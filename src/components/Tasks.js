
import Task from './Task';
/*const tasks=[{ id:1,
    text:'Doctors Appt',
    day:'Feb 2nd 2021',
    reminder:true,

},
{ id:2,
    text:'Meeting At School',
    day:'March 4th 2021',
    reminder:true,

},
{ id:1,
    text:'Food shopping',
    day:'Dec 2nd 2021',
    reminder:false,

}]*/
const Tasks=({tasks,onDelete,onToggle})=>{
    
    return(
        <>
        {tasks.map((task,idx)=>{
           return(<Task key={task.id} task={task} onDelete={onDelete}  onToggle={onToggle} />)
        })}
        </>
    );
}
export default Tasks;